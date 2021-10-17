import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import {MongooseModule} from "@nestjs/mongoose"

@Module({
  imports: [
      MongooseModule.forRoot('mongodb+srv://admin:oXp9SFsqNBheD3OD@cluster0.xygwf.mongodb.net/smartTraking?retryWrites=true&w=majority',
      {

      }),
      JogadoresModule],
  providers: [],
})
export class AppModule {}
