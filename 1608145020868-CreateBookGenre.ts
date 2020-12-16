import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBookGenre1608145020868 implements MigrationInterface {

    private genreBookTable = new Table({
        name: 'books_genres',
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
                name: 'book_id',
                type: 'INTEGER',
                isNullable: true,
            },
            {
                name: 'genre_id',
                type: 'INTEGER',
                isNullable: true,
            }],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.genreBookTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.genreBookTable);
    }

}
