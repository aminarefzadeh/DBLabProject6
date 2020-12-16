import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBook1608144882855 implements MigrationInterface {

    private bookTable = new Table({
        name: 'books',
        columns: [
            {
                name: 'id',
                type: 'INTEGER',
                isPrimary: true,
                isUnique: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'name',
                type: 'varchar',
                length: '500',
                isNullable: false,
            },
            {
                name: 'user_id',
                type: 'INTEGER',
                isNullable: false,
            }],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.bookTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.bookTable);
    }

}
