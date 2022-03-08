import {MigrationInterface, QueryRunner} from "typeorm";

export class PMMigration1646736392774 implements MigrationInterface {
    name = 'PMMigration1646736392774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`project_management\` (\`id\` int NOT NULL AUTO_INCREMENT, \`customer_name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`project_lead_id\` int NOT NULL, \`project_name\` varchar(255) NOT NULL, \`project_lead\` varchar(255) NOT NULL, \`create_at\` varchar(255) NULL, \`hcc_project_code\` varchar(255) NOT NULL, \`total_member\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`report_template\` (\`id\` int NOT NULL AUTO_INCREMENT, \`field\` varchar(255) NOT NULL, \`report_name\` varchar(255) NOT NULL, \`create_at\` varchar(255) NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`report\` (\`id\` int NOT NULL AUTO_INCREMENT, \`project_id\` int NOT NULL, \`report_template_id\` int NOT NULL, \`report_data\` json NULL, \`user_id\` int NOT NULL, \`create_at\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`fullname\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`is_admin\` varchar(255) NOT NULL, \`create_at\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`project_management\` ADD CONSTRAINT \`FK_90c4e51b3b7170c96047ee5c437\` FOREIGN KEY (\`project_lead_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`report\` ADD CONSTRAINT \`FK_cfc0726a4fc592b32b12af66ce5\` FOREIGN KEY (\`project_id\`) REFERENCES \`project_management\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`report\` ADD CONSTRAINT \`FK_c6686efa4cd49fa9a429f01bac8\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`report\` ADD CONSTRAINT \`FK_f2e191fa8986702d0c1fa7c641f\` FOREIGN KEY (\`report_template_id\`) REFERENCES \`report_template\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`report\` DROP FOREIGN KEY \`FK_f2e191fa8986702d0c1fa7c641f\``);
        await queryRunner.query(`ALTER TABLE \`report\` DROP FOREIGN KEY \`FK_c6686efa4cd49fa9a429f01bac8\``);
        await queryRunner.query(`ALTER TABLE \`report\` DROP FOREIGN KEY \`FK_cfc0726a4fc592b32b12af66ce5\``);
        await queryRunner.query(`ALTER TABLE \`project_management\` DROP FOREIGN KEY \`FK_90c4e51b3b7170c96047ee5c437\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`report\``);
        await queryRunner.query(`DROP TABLE \`report_template\``);
        await queryRunner.query(`DROP TABLE \`project_management\``);
    }

}
