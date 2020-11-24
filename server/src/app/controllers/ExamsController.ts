import { getRepository } from "typeorm";
import { addDays, format } from "date-fns";

import Exams from "../models/Exams";
import ExamType from "../models/ExamType";

interface Request {
  name: string;
  shelf_life: string;
}

class ExamsController {
  public async store({ name, shelf_life }: Request): Promise<Exams> {
    const examRepo = getRepository("Exams");
    const exams = examRepo.create({
      name,
      shelf_life,
    });

    console.log(exams);

    await examRepo.save(exams);

    return exams;
  }
}

export default ExamsController;
