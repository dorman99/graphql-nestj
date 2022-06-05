import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trainer } from './trainer.entity';

export class TrainserService {
  constructor(@InjectRepository(Trainer) private repo: Repository<Trainer>) {}

  async findByUsername(username: string) {
    return this.repo.findOne({ where: { username } });
  }

  async create(username: string) {
    return await this.repo.save({ username });
  }
}
