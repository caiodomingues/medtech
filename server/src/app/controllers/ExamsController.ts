import { getRepository } from "typeorm";
import { addDays, format } from "date-fns";

import Exams from "../models/Exams";
import ExamType from "../models/ExamType";

interface Request {
  employee_id: string;
  razaoExame_id: string;
  examType_id: string;
  date: Date;
  shelf_life: Date;
}

class ExamsController {
  public async store({
    employee_id,
    razaoExame_id,
    examType_id,
    date,
    shelf_life,
  }: Request): Promise<Exams> {
    // const pastDate = startOfHour(parseISO(data));
    const examRepo = getRepository(Exams);
    // const findSameScheduleDate = await scheduleRepo.findOne(
    //     { where: { data: pastDate } }
    // );
    // if (findSameScheduleDate) {
    //     throw new Error("Agendamento já cadastrado para este horário");
    // }
    const typeRepo = getRepository(ExamType);

    const examType = await typeRepo.findOne({
      where: { id: examType_id },
    });

    if (!examType) {
      throw new Error("Tipo de exame não encontrado ou inexistente");
    }
    console.log(examType);
    console.log(date);

    // const result = new Date(data);
    // const shelf_life = addDays(data, examType.validade);
    // console.log(shelf_life);

    const exams = examRepo.create({
      employee_id,
      razaoExame_id,
      examType_id,
      date,
      shelf_life,
    });

    await examRepo.save(exams);

    return exams;
  }
}

export default ExamsController;
