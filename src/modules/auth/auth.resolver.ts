import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginInput } from './input/login.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => SignUpDto, { nullable: true })
  async login(@Args('data') data: LoginInput) {
    return await this.authService.login(data.username);
  }

  @Mutation(() => SignUpDto, { nullable: true })
  async register(@Args('username', { type: () => String }) username: string) {
    return await this.authService.signUp(username);
  }
}
