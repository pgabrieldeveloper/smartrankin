import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import {MongooseModule} from "@nestjs/mongoose"

@Module({
  imports: [
      MongooseModule.forRoot('URL',
      {

      }),
      JogadoresModule],
  providers: [],
})
export class AppModule {}
