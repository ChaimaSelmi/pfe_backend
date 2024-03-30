import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { AnnonceModule } from './annonce/annonce.module';
import { AdministrateurModule } from './administrateur/administrateur.module';
import { ClientModule } from './client/client.module';
import { CategorieModule } from './categorie/categorie.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { FavorisModule } from './favoris/favoris.module';
import { NormalModule } from './normal/normal.module';
import { BigdealModule } from './bigdeal/bigdeal.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { VendeurModule } from './vendeur/vendeur.module';
import { MyWebSocketGateway } from './mywebsocket.gateway';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27017",{dbName:"pfe"}), 
    UtilisateurModule, AnnonceModule, AdministrateurModule, ClientModule, CategorieModule, 
    CommentaireModule, FavorisModule, NormalModule, BigdealModule, AuthModule, 
    ConfigModule.forRoot({isGlobal:true}), VendeurModule, ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService, MyWebSocketGateway],
})
export class AppModule {}
