import { Body, Controller, Post } from '@nestjs/common';
import {CriarJogadorDto} from './dtos/criar-jogador.dto' 


@Controller('api/vi/jogadores')
export class JogadoresController {

    @Post()
    async criarAtualizarJogador (@Body() criarJogadorDTO: CriarJogadorDto) {
        const {nome,numberPhone, email} = criarJogadorDTO; 
        return JSON.stringify(`{
            "nome":${nome},
            "numberPhone":${numberPhone},
            "email":"${email}
            
        }`)
    }


}
