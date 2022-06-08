import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/common/auth/guard/jwt.guard';
import { CreatePokemonDto } from './dto/createPokemon.dto';
import { FindPokemonsDto, FindPokemonsResult } from './dto/findPokemon.dto';
import { InputPokemon } from './input/pokemon.input';
import { Pokemon } from './pokemon.entity';
import { PokemonService } from './pokemon.service';

@Resolver('Pokemon')
export class PokemonResolver {
  constructor(private pokemonService: PokemonService) {}

  @Mutation(() => CreatePokemonDto)
  async createPokemon(@Args('data') data: InputPokemon) {
    return await this.pokemonService.createPokemon(data);
  }

  @Query(() => FindPokemonsResult)
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<FindPokemonsDto> {
    return await this.pokemonService.getPokemons();
  }

  @Query(() => CreatePokemonDto, { nullable: true })
  async find(@Args('id', { type: () => String }) id: string) {
    return await this.pokemonService.find(id);
  }
}
