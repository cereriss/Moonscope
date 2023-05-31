import { MigrationInterface, QueryRunner, TableColumn, Table } from 'typeorm';

export class DiaryAndUserSign1685519461201 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Add the 'sign' column to the 'User' table
    await queryRunner.addColumn(
      'User',
      new TableColumn({
        name: 'sign',
        type: 'varchar',
      }),
    );

    // Create the 'Diary' table
    await queryRunner.createTable(
      new Table({
        name: 'Diary',
        columns: [
          {
            name: 'id_diary',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'content',
            type: 'varchar',
          },
          {
            name: 'id_user',
            type: 'int',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the 'Diary' table
    await queryRunner.dropTable('Diary');

    // Remove the 'sign' column from the 'User' table
    await queryRunner.dropColumn('User', 'sign');
  }
}
