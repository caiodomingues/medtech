import { getRepository } from "typeorm";
import { addDays, format } from "date-fns";

import Exams from "../models/Exams";
import TypeExam from "../models/ExamType";

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
    // const dataPassada = startOfHour(parseISO(data));
    const examRepo = getRepository(Exams);
    // const encontrarAgendamentoMesmaData = await agendamentosRespository.findOne(
    //     { where: { data: dataPassada } }
    // );
    // if (encontrarAgendamentoMesmaData) {
    //     throw new Error("Agendamento já cadastrado para este horário");
    // }
    const typeRepo = getRepository(TypeExam);

    const tipoExame = await typeRepo.findOne({
      where: { id: examType_id },
    });

    if (!tipoExame) {
      throw new Error("Não existe este tipo de exame");
    }
    console.log(tipoExame);
    console.log(date);

    // const result = new Date(data);
    // const shelf_life = addDays(data, tipoExame.validade);
    // console.log(shelf_life);

    const exames = examRepo.create({
      employee_id,
      razaoExame_id,
      examType_id,
      date,
      shelf_life,
    });

    await examRepo.save(exames);

    return exames;
  }
}

export default ExamsController;
