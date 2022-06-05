import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Pokemon } from "src/modules/pokemon.entity";

@Injectable()
export class MySQLConfigService {
  public type: any;
  public host: string;
  public username: string;
  public password: string;
  public port: number;
  public database: string;
  public logging: boolean;

  public entities = [
      Pokemon
  ];

  public synchronize = false;
  public migrationsTableName = 'migrations';
  // public migrations = ['src/migrations/**/*.ts'];
  public cli = {
    migrationsDir: 'src/migrations',
  };

  constructor(private configService: ConfigService) {
    this.type = this.configService.get<string>('mysql.type');
    this.host = this.configService.get<string>('mysql.host');
    this.username = this.configService.get<string>('mysql.username');
    this.password = this.configService.get<string>('mysql.password');
    this.port = this.configService.get<number>('mysql.port');
    this.database = this.configService.get<string>('mysql.database');
    this.logging = this.configService.get<boolean>('mysql.logging');
  }

  get config(): TypeOrmModuleOptions {
    return {
      type: this.type,
      host: this.host,
      username: this.username,
      password: this.password,
      port: this.port,
      database: this.database,
      entities: this.entities,
      logging: this.logging,
      synchronize: this.synchronize,
      migrationsTableName: this.migrationsTableName,
      // migrations: this.migrations,
    };
  }
}
