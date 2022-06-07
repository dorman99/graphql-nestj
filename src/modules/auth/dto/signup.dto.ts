import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import { ErrorDto } from 'src/common/dto';

@ObjectType()
export class SignUpDto {
  constructor(username: string, id?: string) {
    this.id = id;
    this.username = username;
  }
  @Field()
  id?: string;
  @Field()
  username: string;
}

export const SignupResult = createUnionType({
  name: 'SignupResult',
  types: () => [SignUpDto, ErrorDto] as const,
});
