import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Default1582602958504 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
