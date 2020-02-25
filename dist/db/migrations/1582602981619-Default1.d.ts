import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Default11582602981619 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
