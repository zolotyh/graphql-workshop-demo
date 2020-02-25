"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Default1582602958504 {
    constructor() {
        this.name = 'Default1582602958504';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "authorId" integer, CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "nickname" character varying, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "rate" ("id" SERIAL NOT NULL, "value" integer NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "recipeId" integer, CONSTRAINT "PK_2618d0d38af322d152ccc328f33" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "recipe" ADD CONSTRAINT "FK_1370c876f9d4a525a45a9b50d81" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "rate" ADD CONSTRAINT "FK_7440b44c5acbec8b2ebfc3af7d2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "rate" ADD CONSTRAINT "FK_0c65a42c4aff459af96c1020531" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "rate" DROP CONSTRAINT "FK_0c65a42c4aff459af96c1020531"`, undefined);
        await queryRunner.query(`ALTER TABLE "rate" DROP CONSTRAINT "FK_7440b44c5acbec8b2ebfc3af7d2"`, undefined);
        await queryRunner.query(`ALTER TABLE "recipe" DROP CONSTRAINT "FK_1370c876f9d4a525a45a9b50d81"`, undefined);
        await queryRunner.query(`DROP TABLE "rate"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "recipe"`, undefined);
    }
}
exports.Default1582602958504 = Default1582602958504;
//# sourceMappingURL=1582602958504-Default.js.map