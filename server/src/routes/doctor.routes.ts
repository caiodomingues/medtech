import { Router } from "express";
import { getRepository } from "typeorm";

import DoctorController from "../app/controllers/DoctorController";
import { Doctor } from "../app/models/Doctor";

const doctorRouter = Router();

doctorRouter.post("/", async (req, res) => {
  try {
    const { name, specialty } = req.body;
    const doctorController = new DoctorController();
    const doctor = await doctorController.store({
      name,
      specialty,
    });

    return res.status(200).json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

doctorRouter.get("/", async (req, res) => {
  const doctorRepo = getRepository("Doctor");
  const doctor = await doctorRepo.find();
  return res.status(200).json(doctor);
});

doctorRouter.get("/:id", async (req, res) => {
  const doctorRepo = getRepository(Doctor);
  const { id } = req.params;
  const doctor = await doctorRepo.findOne(id);
  return res.status(200).json(doctor);
});

doctorRouter.put("/:id", async (req, res) => {
  const { name } = req.body;
  const doctorRepo = getRepository(Doctor);
  const { id } = req.params;
  const doctorFind = await doctorRepo.findOne(id);

  const doctor = doctorRepo.create({
    name,
  });
  const respo = await doctorRepo.save({ ...doctorFind, ...doctor });

  return res.status(200).json(respo);
});

doctorRouter.delete("/:id", async (req, res) => {
  const doctorRepo = getRepository(Doctor);
  const { id } = req.params;
  await doctorRepo.delete(id);
  return res.status(200).send();
});

export default doctorRouter;
