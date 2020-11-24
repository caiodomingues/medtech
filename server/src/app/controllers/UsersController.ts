import { getRepository } from "typeorm";
import { hash } from "bcryptjs";

import Users from "../models/User";

interface Request {
  name: string;
  enrollment: string;
  password: string;
}

class UsersController {
  public async store({ name, enrollment, password }: Request): Promise<Users> {
    const usersRepository = getRepository("Users");

    const verificaUsuarioExiste = await usersRepository.findOne({
      where: { enrollment },
    });

    if (verificaUsuarioExiste) {
      throw new Error("Essa matricula ja foi registrada!");
    }
    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      enrollment,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default UsersController;
