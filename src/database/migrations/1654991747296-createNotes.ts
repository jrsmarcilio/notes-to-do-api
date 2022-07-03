import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createNotes1654991747296 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "notes",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            isGenerated: true,
            isNullable: false
          },
          {
            name: "notes",
            type: "varchar",
            length: "500",
          },
          {
            name: "name",
            type: "varchar",
            length: "50",
          },
          {
            name: "is_active",
            type: "tinyint",
            width: 1,
            default: 1,
            isNullable: false,
          },
          {
            name: "done",
            type: "tinyint",
            width: 1,
            default: 0,
            isNullable: false,
          },
          {
            name: "priority",
            type: "varchar"
          },
          {
            name: "due_date",
            type: "datetime",
            default: "now()",
          },
          {
            name: "created_at",
            type: "datetime",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "datetime",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("notes");
  }
}
