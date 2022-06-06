import { BadRequestException, Injectable } from '@nestjs/common';
import { JWTService } from 'src/common/auth/jwt/jwt.service';
import { TrainserService } from '../trainer/trainer.service';

@Injectable()
export class AuthService {
  constructor(
    private trainerService: TrainserService,
    private jwtService: JWTService,
  ) {}
  async login(username: string): Promise<string> {
    const trainer = await this.trainerService.findByUsername(username);
    if (!trainer) {
      throw new BadRequestException('Not Valid User');
    }
    return this.jwtService.sign(JSON.stringify(trainer));
  }

  async signUp(username: string) {
    const trainer = await this.trainerService.findByUsername(username);
    if (trainer) {
      return trainer;
    }
    return await this.trainerService.create(username);
  }
}
