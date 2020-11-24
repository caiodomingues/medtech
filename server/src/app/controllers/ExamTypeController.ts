import { getRepository } from "typeorm";
import ExamType from "../models/ExamType";

interface Request {
  name: string;
}

class ExamTypeController {
  public async store({ name }: Request): Promise<ExamType> {
    const examTypeRepo = getRepository("ExamType");

    const type = examTypeRepo.create({
      name,
    });

    await examTypeRepo.save(type);

    return type;
  }
}

export default ExamTypeController;
