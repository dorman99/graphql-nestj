import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { MySQLConfigModule } from './configs/mysql/mysql.config.module';
import { MySQLConfigService } from './configs/mysql/mysql.config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainerModule } from './modules/trainer/trainer.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT } from './common/constant';

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
      autoSchemaFile: 'schema.gpl',
    }),
    PokemonModule,
    TrainerModule,
    AuthModule,
  ],
})
export class AppModule {}
