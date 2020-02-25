import {MigrationInterface, QueryRunner} from "typeorm";

export class RecieptMigration1582598659479 implements MigrationInterface {
    name = 'RecieptMigration1582598659479'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "creationDate" TIMESTAMP, CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "recipe"`, undefined);
    }

}
