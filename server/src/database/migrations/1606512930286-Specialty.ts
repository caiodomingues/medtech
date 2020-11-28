// import {
//   MigrationInterface,
//   QueryRunner,
//   Table,
//   TableForeignKey,
// } from "typeorm";

// export class Specialty1606512930286 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.createTable(
//       new Table({
//         name: "Specialty",
//         columns: [
//           {
//             name: "id",
//             type: "uuid",
//             isPrimary: true,
//             generationStrategy: "uuid",
//             default: "uuid_generate_v4()",
//           },
//           {
//             name: "name",a
//             type: "varchar",
//           },
//           {
//             name: "created_at",
//             type: "timestamp",
//             default: "now()",
//           },
//           {
//             name: "updated_at",
//             type: "timestamp",
//             default: "now()",
//           },
//         ],
//       })
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.dropTable("Specialty");
//   }
// }
