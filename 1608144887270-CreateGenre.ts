import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGenre1608144887270 implements MigrationInterface {

    private genreTable = new Table({
        name: 'genres',
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
                name: 'type',
                type: 'varchar',
                length: '255',
                isNullable: false,
            }
        ]
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.genreTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.genreTable);
    }

}
