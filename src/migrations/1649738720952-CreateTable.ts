import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTable1649738720952 implements MigrationInterface {
    name = 'CreateTable1649738720952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` int NOT NULL AUTO_INCREMENT, \`task_name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`createAt\` varchar(255) NOT NULL, \`estimate_time\` varchar(255) NULL, \`user_id\` int NOT NULL, \`project_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_6ea2c1c13f01b7a383ebbeaebb0\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_1f53e7ffe94530f9e0221224d29\` FOREIGN KEY (\`project_id\`) REFERENCES \`project_management\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_1f53e7ffe94530f9e0221224d29\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_6ea2c1c13f01b7a383ebbeaebb0\``);
        await queryRunner.query(`DROP TABLE \`task\``);
    }

}
