import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtStrategy } from "src/common/auth/strategy/jwt.strategy";
import { Pokemon } from "./pokemon.entity";
import { PokemonResolver } from "./pokemon.resolver";
import { PokemonService } from "./pokemon.service";

@Module({
    imports: [TypeOrmModule.forFeature([Pokemon])], 
    providers: [PokemonService, PokemonResolver, JwtStrategy], 
    exports: [PokemonService], 
    
})
export class PokemonModule {}