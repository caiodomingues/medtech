import { getRepository } from "typeorm";
import { Appointment } from "../models/Appointment";

interface Request {
  dateHour: string;
  patientId: string;
  doctorId: string;
}

class AppointmentController {
  public async store({
    dateHour,
    patientId,
    doctorId,
  }: Request): Promise<Appointment> {
    const AppointmentRepo = getRepository("Appointment");

    const type = AppointmentRepo.create({
      dateHour,
      patientId,
      doctorId,
    });

    await AppointmentRepo.save(type);

    return type;
  }
}

export default AppointmentController;
