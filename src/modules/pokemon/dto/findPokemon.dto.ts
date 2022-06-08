import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import { ErrorDto } from 'src/common/dto';
import { Pokemon } from '../pokemon.entity';
import { CreatePokemonDto } from './createPokemon.dto';

@ObjectType()
export class FindPokemonsDto {
  constructor(pokemons: Pokemon[]) {
    this.pokemons = pokemons;
  }
  @Field(() => [CreatePokemonDto])
  pokemons: Pokemon[];
}

export const FindPokemonsResult = createUnionType({
  name: 'FindPokemonsResult',
  types: () => [FindPokemonsDto, ErrorDto] as const,
});
