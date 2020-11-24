import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Employees from "./Employees";
import RazaoExames from "./RazaoExame";
import ExamType from "./ExamType";

@Entity("Exams")
class Exams {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Employees)
  @JoinColumn({ name: "employee_id" })
  employee: Employees;

  @Column()
  employee_id: string;

  @ManyToOne(() => RazaoExames)
  @JoinColumn({ name: "razaoExame_id" })
  RazaoExame_deste_exame: RazaoExames;

  @Column()
  razaoExame_id: string;

  @ManyToOne(() => ExamType)
  @JoinColumn({ name: "examType_id" })
  examType: ExamType;

  @Column()
  examType_id: string;

  @Column("time with time zone")
  date: Date;

  @Column("time with time zone")
  shelf_life: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Exams;
