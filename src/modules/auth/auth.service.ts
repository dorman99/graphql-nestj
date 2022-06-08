import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { JWTService } from 'src/common/auth/jwt/jwt.service';
import { TrainserService } from '../trainer/trainer.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private trainerService: TrainserService,
    private jwtService: JWTService,
  ) {}

  async login(username: string): Promise<LoginDto> {
    const trainer = await this.trainerService.findByUsername(username);
    if (!trainer) {
      throw new BadRequestException("Not Valid Username");
    }
    const token = await this.jwtService.sign(JSON.stringify(trainer));
    return new LoginDto(token);
  }

  async signUp(username: string): Promise<SignUpDto> {
    if (username.length < 5) {
      throw new BadRequestException("Username Too Short");
    }
    const trainer = await this.trainerService.findByUsername(username);
    if (trainer) {
      return new SignUpDto(trainer.username, trainer.id);
    }
    const create = await this.trainerService.create(username);
    return new SignUpDto(create.username, create.id);
  }
}
