import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';
import { MySQLConfigService } from './mysql.config.service';

@Module({
  imports: [ConfigModule.forFeature(configuration)],
  providers: [MySQLConfigService],
  exports: [MySQLConfigService],
})
export class MySQLConfigModule {}
