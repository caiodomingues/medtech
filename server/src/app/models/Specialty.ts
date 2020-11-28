// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   ManyToOne,
//   JoinColumn,
//   OneToMany,
//   ManyToMany,
// } from "typeorm";
// import { Doctor } from "./Doctor";

// @Entity("Specialty")
// export class Specialty {
//   @PrimaryGeneratedColumn("uuid")
//   id: string;

//   @Column()
//   name: string;

//   @ManyToMany((type) => Doctor, (doctor) => doctor.specialties)
//   doctors: Doctor[];

//   @CreateDateColumn()
//   created_at: Date;

//   @UpdateDateColumn()
//   updated_at: Date;
// }
