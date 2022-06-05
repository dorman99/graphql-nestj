import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreatePokemonDto {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    type: string

    @Field()
    pokedex: number
}