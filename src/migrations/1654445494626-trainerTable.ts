import {MigrationInterface, QueryRunner} from "typeorm";

export class trainerTable1654445494626 implements MigrationInterface {
    name = 'trainerTable1654445494626'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`trainers\` (\`id\` varchar(36) NOT NULL, \`username\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`trainers\``);
    }

}
