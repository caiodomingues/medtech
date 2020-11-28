// import {
//   MigrationInterface,
//   QueryRunner,
//   Table,
//   TableForeignKey,
// } from "typeorm";

// export class createDoctorSpecialtiesSpecialtyTable1606583425718
//   implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.createTable(
//       new Table({
//         name: "doctor_specialties__specialty",
//         columns: [
//           {
//             name: "doctorId",
//             type: "uuid",
//             isNullable: true,
//           },
//           {
//             name: "specialtyId",
//             type: "uuid",
//             isNullable: true,
//           },
//         ],
//       })
//     );

//     await queryRunner.createForeignKey(
//       "doctor_specialties__specialty",
//       new TableForeignKey({
//         columnNames: ["doctorId"],
//         referencedColumnNames: ["id"],
//         referencedTableName: "Doctor",
//         onDelete: "SET NULL",
//         onUpdate: "CASCADE",
//       })
//     );

//     await queryRunner.createForeignKey(
//       "doctor_specialties__specialty",
//       new TableForeignKey({
//         columnNames: ["specialtyId"],
//         referencedColumnNames: ["id"],
//         referencedTableName: "Specialty",
//         onDelete: "SET NULL",
//         onUpdate: "CASCADE",
//       })
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.dropTable("doctor_specialties__specialty");
//   }
// }
