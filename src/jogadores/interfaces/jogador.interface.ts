import {Document} from 'mongoose'

export interface Jogador  extends Document{
    readonly _id: string;
    readonly numberPhone: string;
    readonly email: string;
    nome: string;
    rankin: string;
    posicaoRankin: number;
    urlFotoJogador: string
}