import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Timestamp,
} from "typeorm";
import { Patient } from "./Patient";
import { Doctor } from "./Doctor";

@Entity("Appointment")
export class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  dateHour: string;

  @ManyToOne(() => Patient)
  @JoinColumn({ name: "patientId" })
  patient: Patient;

  @Column()
  patientId: string;

  @ManyToOne(() => Doctor)
  @JoinColumn({ name: "doctorId" })
  doctor: Doctor;

  @Column()
  doctorId: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
