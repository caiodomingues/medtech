import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export default class AddAvatarFieldToUsers1601327444024
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "Users",
      new TableColumn({
        name: "photo",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("Users", "photo");
  }
}
