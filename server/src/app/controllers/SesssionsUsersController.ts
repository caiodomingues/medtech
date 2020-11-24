import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from "../../config/auth";
import Users from "../models/Users";

interface Request {
  enrollment: string;
  password: string;
}

interface Response {
  user: Users;
  token: string;
}

class SessionsUsersController {
  public async store({ enrollment, password }: Request): Promise<Response> {
    const usersRepository = getRepository(Users);
    const user = await usersRepository.findOne({
      where: { enrollment },
    });
    if (!user) {
      throw new Error("Matrícula/senha incorretos");
    }

    const verify = await compare(password, user.password);

    if (!verify) {
      throw new Error("Matrícula/senha incorretos");
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default SessionsUsersController;
