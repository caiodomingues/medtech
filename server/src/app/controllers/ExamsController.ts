import { getRepository } from "typeorm";
import { addDays, format } from "date-fns";

import Exams from "../models/Exams";
import ExamType from "../models/ExamType";

interface Request {
  employee_id: string;
  examType_id: string;
  date: Date;
  shelf_life: number;
}

class ExamsController {
  public async store({
    employee_id,
    examType_id,
    date,
    shelf_life,
  }: Request): Promise<Exams> {
    const examRepo = getRepository("Exams");
    // const typeRepo = getRepository("ExamType");

    // const examType = await typeRepo.findOne({
    //   where: { id: examType_id },
    // });

    // if (!examType) {
    //   throw new Error("Tipo de exame não encontrado ou inexistente");
    // }

    const exams = examRepo.create({
      employee_id,
      examType_id,
      date,
      shelf_life,
    });

    console.log(exams);

    await examRepo.save(exams);

    return exams;
  }
}

export default ExamsController;
