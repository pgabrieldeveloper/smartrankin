import { Body, Controller, Post } from '@nestjs/common';
import { json } from 'express';
import {CriarJogadorDto} from './dtos/criar-jogador.dto' 
import { jogador } from './interfaces/jogador.interface';
import {JogadoresService} from './jogadores.service';

@Controller('api/vi/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService:JogadoresService){}

    @Post()
    async criarAtualizarJogador (@Body() criarJogadorDTO: CriarJogadorDto)   {
        const jogador = await this.jogadoresService.criarAtualizar(criarJogadorDTO);
       return (jogador);
    }


}
