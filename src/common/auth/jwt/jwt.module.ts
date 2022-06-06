import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JWT } from 'src/common/constant';
import { JWTService } from './jwt.service';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT.secret,
    }),
  ],
  providers: [JWTService],
  exports: [JWTService],
})
export class JWTModule {}
