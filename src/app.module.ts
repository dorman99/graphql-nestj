import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PokemonModule } from './modules/pokemon.module';
import { MySQLConfigModule } from './configs/mysql/mysql.config.module';
import { MySQLConfigService } from './configs/mysql/mysql.config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

const typeOrmInit = () => {
  return TypeOrmModule.forRootAsync({
    imports: [MySQLConfigModule],
    inject: [MySQLConfigService],
    useFactory: (configService: MySQLConfigService) => configService.config,
  });
};

@Module({
  imports: [
    typeOrmInit(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gpl'
    }),
    PokemonModule
  ],
})
export class AppModule {}