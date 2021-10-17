import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class JogadoresService {
  private jogadores: Jogador[] = [];

  constructor(
    @InjectModel('Jogador') private readonly jogadorModel: Model<Jogador>,
  ) {}

  async criarAtualizar(jogadorDto: CriarJogadorDto): Promise<Jogador> {
    console.log(jogadorDto);
    const { email } = jogadorDto;
    const jogardorExistente = await this.jogadorModel.findOne({ email }).exec();
    if (jogardorExistente) {
      return this.atualizar(jogadorDto);
    }
    return await this.criar(jogadorDto);
  }

  async consultarJogadores(): Promise<Jogador[]> {
    return await this.jogadorModel.find().exec();
  }

  async consultarPeloEmail(email: string): Promise<Jogador> {
    const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec();
    if (!jogadorEncontrado) {
      throw new NotFoundException(
        `Jogador com o email: ${email} nao foi encontrado!"`,
      );
    }
    return jogadorEncontrado;
  }

  async deletarJogador(email: string): Promise<void> {
    const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec();
    if (!jogadorEncontrado) {
    }
    await this.jogadorModel.findOneAndDelete({ email }).exec();
  }

  async criar(criaJogadorDto: CriarJogadorDto): Promise<Jogador> {
    const jogadorCriado = new this.jogadorModel(criaJogadorDto);
    await jogadorCriado.save();
    return jogadorCriado;
  }

  async atualizar(jogadorDto: CriarJogadorDto): Promise<Jogador> {
    const jogadorAtualizado = await this.jogadorModel
      .findOneAndUpdate({ email: jogadorDto.email }, { $set: jogadorDto })
      .exec();
    return jogadorAtualizado;
  }
}
