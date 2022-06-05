import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePokemonDto } from '../dto/create_pokemon.dto';
import { InputPokemon } from '../input/pokemon.input';
import { Pokemon } from './pokemon.entity';
import { PokemonService } from './pokemon.service';

@Resolver('Pokemon')
export class PokemonResolver {
  constructor(private pokemonService: PokemonService) {}

  @Mutation(() => CreatePokemonDto)
  async createPokemon(@Args('data') data: InputPokemon) {
    return await this.pokemonService.createPokemon(data);
  }

  @Query(() => [CreatePokemonDto])
  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonService.getPokemons();
  }

  @Query(() => CreatePokemonDto, { nullable: true })
  async find(@Args('id', { type: () => String }) id: string) {
    return await this.pokemonService.find(id);
  }
}
