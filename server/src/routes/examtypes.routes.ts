import { Router } from "express";
import { getRepository } from "typeorm";

import ExamTypeController from "../app/controllers/ExamTypeController";
import ExamType from "../app/models/ExamType";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const typeRouter = Router();

typeRouter.post("/", ensureAuthenticated, async (req, res) => {
  try {
    const { name, shelf_life } = req.body;
    const typeController = new ExamTypeController();
    const Type = await typeController.store({
      name,
      shelf_life,
    });

    return res.status(200).json(Type);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

typeRouter.get("/", ensureAuthenticated, async (req, res) => {
  const typeRepo = getRepository(ExamType);
  const Type = await typeRepo.find();
  console.log(req.user);

  return res.status(200).json(Type);
});

typeRouter.put("/:id", ensureAuthenticated, async (req, res) => {
  const { name, shelf_life } = req.body;
  const typeRepo = getRepository(ExamType);
  const { id } = req.params;
  const _type = await typeRepo.findOne(id);

  const Type = typeRepo.create({
    name,
    shelf_life,
  });
  const respo = await typeRepo.save({ ..._type, ...Type });

  return res.status(200).json(respo);
});

typeRouter.delete("/:id", ensureAuthenticated, async (req, res) => {
  const typeRepo = getRepository(ExamType);
  const { id } = req.params;
  await typeRepo.delete(id);
  return res.status(200).send();
});

export default typeRouter;
