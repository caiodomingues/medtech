import { Router } from "express";
import { getRepository } from "typeorm";

import ExamsController from "../app/controllers/ExamsController";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import Exams from "../app/models/Exams";

const examsRouter = Router();

examsRouter.post("/", async (req, res) => {
  try {
    const { employee_id, examType_id, date, shelf_life } = req.body;
    const examsController = new ExamsController();
    const exame = await examsController.store({
      employee_id,
      examType_id,
      date,
      shelf_life,
    });
    return res.status(200).json(exame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

examsRouter.get("/", ensureAuthenticated, async (req, res) => {
  const examRepo = getRepository("Exams");
  const exam = await examRepo.find();
  console.log(exam);

  return res.status(200).json(exam);
});

examsRouter.get("/:id", ensureAuthenticated, async (req, res) => {
  const usuariosRepositorio = getRepository("Exams");
  const { id } = req.params;
  const user = await usuariosRepositorio.findOne(id);
  return res.status(200).json(user);
});

examsRouter.put("/:id", ensureAuthenticated, async (req, res) => {
  const { employee_id, examType_id, date, shelf_life } = req.body;
  const examRepo = getRepository("Exams");
  const { id } = req.params;
  const ex = await examRepo.findOne(id);

  const exam = examRepo.create({
    employee_id,
    examType_id,
    date,
    shelf_life,
  });
  const respo = await examRepo.save({ ...ex, ...exam });

  return res.status(200).json(respo);
});

examsRouter.delete("/:id", ensureAuthenticated, async (req, res) => {
  const examRepo = getRepository("Exams");
  const { id } = req.params;
  await examRepo.delete(id);
  return res.status(200).send();
});

export default examsRouter;
