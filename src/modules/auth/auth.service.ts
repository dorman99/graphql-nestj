import { Injectable } from '@nestjs/common';
import { TrainserService } from '../trainer/trainer.service';

@Injectable()
export class AuthService {
  constructor(private trainerService: TrainserService) {}
  async login(username: string) {
    return await this.trainerService.findByUsername(username);
  }

  async signUp(username: string) {
    const trainer = await this.trainerService.findByUsername(username);
    if (trainer) {
      return trainer
    }
    return await this.trainerService.create(username);
  }
}
