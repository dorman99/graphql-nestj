import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trainer } from './trainer.entity';
import { TrainserService } from './trainer.service';

@Module({
    imports: [TypeOrmModule.forFeature([Trainer])],
    providers: [TrainserService],
    exports: [TrainserService]
})
export class TrainerModule {}
