import { getRepository } from "typeorm";
import ExamType from "../models/ExamType";

interface Request {
  name: string;
  shelf_life: number;
}

class ExamTypeController {
  public async store({ name, shelf_life }: Request): Promise<ExamType> {
    const examTypeRepo = getRepository(ExamType);

    const type = examTypeRepo.create({
      name,
      shelf_life,
    });

    await examTypeRepo.save(type);

    return type;
  }
}

export default ExamTypeController;
