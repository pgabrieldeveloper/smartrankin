import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import {jogador} from './interfaces/jogador.interface';
import {v4 as uuidv4} from 'uuid';
@Injectable()
export class JogadoresService {

    private jogadores: jogador[] = [];

    private readonly logger = new Logger(JogadoresService.name);

    async criarAtualizar(jogadorDto: CriarJogadorDto): Promise<jogador> {
        this.logger.log(`criaJogadorDto: ${jogadorDto}`);
        const jogador = this.criar(jogadorDto);
        return jogador;
    }

    private criar(criaJogadorDto: CriarJogadorDto) : jogador {
        const {nome,numberPhone,email} = criaJogadorDto;
        const jogador: jogador = {
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

}
