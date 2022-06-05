import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SignUpDto {
    @Field()
    id?: string;
    @Field()
    username: string;
}