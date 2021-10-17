import {Injectable, Logger, NotFoundException} from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import {Jogador} from './interfaces/jogador.interface';
import {v4 as uuidv4} from 'uuid';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class JogadoresService {

    private jogadores: Jogador[] = [];

    constructor(@InjectModel("Jogador") private  readonly  jogadorModel:Model<Jogador>) {
    }

    async criarAtualizar(jogadorDto: CriarJogadorDto): Promise<Jogador> {
        console.log(jogadorDto);
        const {email} = jogadorDto;
        const jogardorExistente = this.jogadores.find(jogador => jogador.email === email);
        if(jogardorExistente){
            return await this.atualizar(jogardorExistente, jogadorDto);
        }

        return await  this.criar(jogadorDto);
    }

    async consultarJogadores() : Promise<Jogador[]>{
        return this.jogadores;
    }

    async consultarPeloEmail(email: string) : Promise<Jogador> {
        const jogadorEncontrado =  this.jogadores.find(jogador => jogador.email === email);
        if(!jogadorEncontrado) {
            throw  new NotFoundException(`Jogador com o email: ${email} nao foi encontrado!"`);
        }
        return jogadorEncontrado;
    }

    async deletarJogador(email: string) : Promise<void> {
        const jogadorDelatado = this.jogadores.find(jogador => jogador.email === email)
        this.jogadores = this.jogadores.filter(jogador => jogador.email !== jogadorDelatado.email)
    }

     criar(criaJogadorDto: CriarJogadorDto) : Jogador {
        const {nome,numberPhone,email} = criaJogadorDto;
        const jogador: Jogador = {
            _id: uuidv4(),
            nome,
            numberPhone,
            email,
            rankin:"A",
            posicaoRankin: 1,
            urlFotoJogador: 'www.google.com.br/foto123.jpg'
        }
        this.jogadores.push(jogador);
        return jogador;
    }
    atualizar(jogadorExistente : Jogador, jogadorDto: CriarJogadorDto) : Jogador {
        jogadorExistente.nome = jogadorDto.nome;
        return jogadorExistente
    }

}
