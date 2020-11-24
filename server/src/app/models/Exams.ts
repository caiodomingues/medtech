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
// import RazaoExames from "./RazaoExame";
import ExamType from "./ExamType";

@Entity("Exams")
class Exams {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  // @Column()
  // employee_id: string;

  // @ManyToOne(() => Employees)
  // @JoinColumn({ name: "employee_id" })
  // employee: Employees;

  // @Column()
  // examType_id: string;

  // @ManyToOne(() => ExamType)
  // @JoinColumn({ name: "examType_id" })
  // examType: ExamType;

  // @Column("time with time zone")
  // date: Date;

  @Column()
  shelf_life: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Exams;
