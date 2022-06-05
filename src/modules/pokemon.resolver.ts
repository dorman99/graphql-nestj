import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreatePokemonDto } from "./dto/create_pokemon.dto";
import { InputPokemon } from "./input/pokemon.input";
import { Pokemon } from "./pokemon.entity";
import { PokemonService } from "./pokemon.service";

@Resolver((of) => Pokemon)
export class PokemonResolver {
    constructor(private pokemonService: PokemonService) {}

    @Mutation(() => CreatePokemonDto)
    async createPokemon(@Args('data') data: InputPokemon) {
        return this.pokemonService.createPokemon(data);
    }

    @Query(() => String)
    helloPokemon(): string {
        return "HELLO POKEMON"
    }
}