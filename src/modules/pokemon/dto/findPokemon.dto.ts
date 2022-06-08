import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import { ErrorDto } from 'src/common/dto';
import { Pokemon } from '../pokemon.entity';
import { CreatePokemonDto } from './createPokemon.dto';

@ObjectType()
export class FindPokemonsDto {
  @Field(() => [CreatePokemonDto])
  pokemons: Pokemon[];
}

export const FindPokemonsResult = createUnionType({
  name: 'FindPokemons',
  types: () => [FindPokemonsDto, ErrorDto] as const,
});
