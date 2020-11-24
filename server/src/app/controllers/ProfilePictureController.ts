import { getRepository } from "typeorm";
import path from "path";
import fs from "fs";
import Users from "../models/User";

import uploadConfig from "../../config/upload";

interface Request {
  user_id: string;
  photo: string;
}

class ProfilePictureController {
  public async update({ user_id, photo }: Request): Promise<Users> {
    const usersRepository = getRepository(Users);

    const user = await usersRepository.findOne(user_id);
    if (!user) {
      throw new Error("Não autenticado");
    }
    if (user.photo) {
      const photo = path.join(uploadConfig.directory, user.photo);
      const verifyPhoto = await fs.promises.stat(photo);
      if (verifyPhoto) {
        await fs.promises.unlink(photo);
      }
    }

    user.photo = photo;
    await usersRepository.save(user);
    return user;
  }
}

export default ProfilePictureController;
