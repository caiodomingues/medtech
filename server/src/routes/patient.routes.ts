import { Router } from "express";
import { getRepository } from "typeorm";

import PatientController from "../app/controllers/PatientController";
import { Patient } from "../app/models/Patient";

const patientRouter = Router();

patientRouter.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const patientController = new PatientController();
    const patient = await patientController.store({
      name,
    });

    return res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

patientRouter.get("/", async (req, res) => {
  const patientRepo = getRepository("Patient");
  const patient = await patientRepo.find();

  return res.status(200).json(patient);
});

patientRouter.get("/:id", async (req, res) => {
  const patientRepo = getRepository("Patient");
  const { id } = req.params;
  const patient = await patientRepo.findOne(id);
  return res.status(200).json(patient);
});

patientRouter.put("/:id", async (req, res) => {
  const { name } = req.body;
  const employeeRepo = getRepository("Patient");
  const { id } = req.params;
  const patientFind = await employeeRepo.findOne(id);

  const patient = employeeRepo.create({
    name,
  });
  const respo = await employeeRepo.save({ ...patientFind, ...patient });

  return res.status(200).json(respo);
});

patientRouter.delete("/:id", async (req, res) => {
  const patientRepo = getRepository("Patient");
  const { id } = req.params;
  await patientRepo.delete(id);
  return res.status(200).send();
});

export default patientRouter;
