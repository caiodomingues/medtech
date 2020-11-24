import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from "../../config/auth";
import User from "../models/User";

interface Request {
  enrollment: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class SessionsUsersController {
  public async store({ enrollment, password }: Request): Promise<Response> {
    const user = await getRepository("Users").findOne({
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
