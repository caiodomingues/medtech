import { Router } from "express";
import { getRepository } from "typeorm";

import AppointmentController from "../app/controllers/AppointmentController";
import { Appointment } from "../app/models/Appointment";

const appointmentRouter = Router();

appointmentRouter.post("/", async (req, res) => {
  try {
    const { dateHour, patientId, doctorId } = req.body;
    const appointmentController = new AppointmentController();
    const appointment = await appointmentController.store({
      dateHour,
      patientId,
      doctorId,
    });

    return res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

appointmentRouter.get("/", async (req, res) => {
  const patientRepo = getRepository("Appointment");
  const appointment = await patientRepo.find({
    relations: ["patient", "doctor"],
  });

  return res.status(200).json(appointment);
});

appointmentRouter.get("/:id", async (req, res) => {
  const patientRepo = getRepository("Appointment");
  const { id } = req.params;
  const appointment = await patientRepo.find({
    relations: ["patient", "doctor"],
    where: {
      id: id,
    },
  });

  return res.status(200).json(appointment);
});

appointmentRouter.put("/:id", async (req, res) => {
  const { dateHour, patientId, doctorId } = req.body;
  const appointmentRepo = getRepository(Appointment);
  const { id } = req.params;
  const patientFind = await appointmentRepo.findOne(id);

  const appointment = appointmentRepo.create({
    dateHour,
    patientId,
    doctorId,
  });
  const respo = await appointmentRepo.save({ ...patientFind, ...appointment });

  return res.status(200).json(respo);
});

appointmentRouter.delete("/:id", async (req, res) => {
  const patientRepo = getRepository(Appointment);
  const { id } = req.params;
  await patientRepo.delete(id);
  return res.status(200).send();
});

export default appointmentRouter;
