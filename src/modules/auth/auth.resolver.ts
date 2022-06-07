import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ErrorDto } from 'src/common/dto';
import { AuthService } from './auth.service';
import { LoginDto, LoginResult } from './dto/login.dto';
import { SignUpDto, SignupResult } from './dto/signup.dto';
import { LoginInput } from './input/login.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResult)
  async login(@Args('data') data: LoginInput): Promise<LoginDto | ErrorDto> {
    return await this.authService.login(data.username);
  }

  @Mutation(() => SignupResult)
  async register(@Args('username', { type: () => String }) username: string): Promise<SignUpDto | ErrorDto> {
    return await this.authService.signUp(username);
  }
}
