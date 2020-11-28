import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class createAppointmentsTable1606576206703
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Appointment",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "dateHour",
            type: "date",
          },
          {
            name: "patientId",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "doctorId",
            type: "uuid",
            isNullable: true,
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
      "Appointment",
      new TableForeignKey({
        columnNames: ["patientId"],
        referencedColumnNames: ["id"],
        referencedTableName: "Patient",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "Appointment",
      new TableForeignKey({
        columnNames: ["doctorId"],
        referencedColumnNames: ["id"],
        referencedTableName: "Doctor",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Appointment");
  }
}
