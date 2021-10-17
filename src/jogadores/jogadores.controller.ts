import {Body, Controller, Delete, Get, Post, Query} from '@nestjs/common';
import {CriarJogadorDto} from './dtos/criar-jogador.dto'
import {JogadoresService} from './jogadores.service';
import { Jogador} from './interfaces/jogador.interface'
@Controller('api/vi/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService:JogadoresService){}

    @Post()
    async criarAtualizarJogador (@Body() criarJogadorDTO: CriarJogadorDto) : Promise<Jogador>  {
        const jogador = await this.jogadoresService.criarAtualizar(criarJogadorDTO);
       return (jogador);
    }
    @Get()
    async getJodarores(
        @Query('email') email: string
    ) :Promise<Jogador[] | Jogador>{
        if(email){
            return await  this.jogadoresService.consultarPeloEmail(email);
        }
        return await  this.jogadoresService.consultarJogadores();
    }

    @Delete()
    async deletarJogador(
        @Query('email') email: string
    ) : Promise<void> {
        this.jogadoresService.deletarJogador(email);
    }

}
