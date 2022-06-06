import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JWTService {
  constructor(private jwt: JwtService) {}

  async verify(token) {
    return this.jwt.verify(token);
  }

  async sign(payload: string) {
    return this.jwt.sign(payload);
  }
}
