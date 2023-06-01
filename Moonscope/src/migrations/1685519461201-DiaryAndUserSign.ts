import { MigrationInterface, QueryRunner, TableColumn, Table, TableForeignKey } from 'typeorm';

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

    // Create the 'Diary' table if it doesn't exist
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

    // Add the foreign key constraint
    await queryRunner.createForeignKey(
      'Diary',
      new TableForeignKey({
        columnNames: ['id_user'],
        referencedTableName: 'User',
        referencedColumnNames: ['id_utenti'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the foreign key constraint
    await queryRunner.dropForeignKey('Diary', 'FK_UserIdUser');

    // Drop the 'Diary' table
    await queryRunner.dropTable('Diary');

    // Remove the 'sign' column from the 'User' table
    await queryRunner.dropColumn('User', 'sign');
  }
}
