import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

@Entity("Doctor")
export class Doctor {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  specialty: string;

  // @ManyToMany((type) => Specialty, (specialty) => specialty.doctors, {
  //   cascade: true,
  // })
  // @JoinTable()
  // specialties: Specialty[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
