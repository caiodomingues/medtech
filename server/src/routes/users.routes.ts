import { Router } from "express";
import { getRepository } from "typeorm";
import multer from "multer";

import UsersController from "../app/controllers/UsersController";
import Users from "../app/models/User";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import uploadConfig from "../config/upload";
import ProfilePictureController from "../app/controllers/ProfilePictureController";

const usersRouter = Router();

const upload = multer(uploadConfig);

usersRouter.post("/", async (req, res) => {
  try {
    const { name, enrollment, password } = req.body;

    const usersController = new UsersController();

    const user = await usersController.store({
      name,
      enrollment,
      password,
    });

    user.password = "";

    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

usersRouter.get("/", ensureAuthenticated, async (req, res) => {
  const usersRepo = getRepository("Users");
  const user = await usersRepo.find();
  console.log(req.user);

  return res.status(200).json(user);
});

usersRouter.get("/:id", ensureAuthenticated, async (req, res) => {
  const usersRepo = getRepository("Users");
  const { id } = req.params;
  const user = await usersRepo.findOne(id);
  return res.status(200).json(user);
});

usersRouter.delete("/:id", ensureAuthenticated, async (req, res) => {
  const usersRepo = getRepository("Users");
  const { id } = req.params;
  await usersRepo.delete(id);
  return res.status(200).send();
});

usersRouter.patch(
  "/photo",
  ensureAuthenticated,
  upload.single("photo"),
  async (req, res) => {
    try {
      const profilePictureController = new ProfilePictureController();

      const user = await profilePictureController.update({
        user_id: req.user.id,
        photo: req.file.filename,
      });

      // console.log(req.file);

      user.password = "";
      return res.json(user);
    } catch (error) {
      res.json({ error: error.message });
    }
  }
);

export default usersRouter;
