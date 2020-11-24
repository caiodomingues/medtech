import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateExams1605711972381 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Exams",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "employee_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "razaoExame_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "examType_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "date",
            type: "timestamp with time zone",
          },
          {
            name: "shelf-Life",
            type: "timestamp with time zone",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "Exams",
      new TableForeignKey({
        columnNames: ["employee_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "Employees",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "Exams",
      new TableForeignKey({
        columnNames: ["razaoExame_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "RazaoExame",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "Exams",
      new TableForeignKey({
        columnNames: ["examType_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "ExamType",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Exams");
  }
}
