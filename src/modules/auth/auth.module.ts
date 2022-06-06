import { Module } from '@nestjs/common';
import { JWTModule } from 'src/common/auth/jwt/jwt.module';
import { TrainerModule } from '../trainer/trainer.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    TrainerModule,
    JWTModule
  ],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
