import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1608145031829 implements MigrationInterface {

    private userTable = new Table({
        name: 'user',
        columns: [
            {
                name: 'id',
                type: 'INTEGER',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'name',
                type: 'varchar',
                length: '500',
                isNullable: false,
            }],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.userTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.userTable);
    }

}
