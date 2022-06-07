import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import { ErrorDto } from 'src/common/dto';


@ObjectType()
export class LoginDto {
  constructor(token: string) {
    this.token = token
  }
  @Field()
  token: string;
}

export const LoginResult = createUnionType({
  name: 'LoginResult',
  types: () => [LoginDto, ErrorDto] as const,
});
