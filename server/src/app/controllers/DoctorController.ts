import { getRepository } from "typeorm";
import { Doctor } from "../models/Doctor";
import { connection } from "../../database/";

interface Request {
  name: string;
  specialty: string;
}

class DoctorController {
  public async store({ name, specialty }: Request): Promise<Doctor> {
    const doctorRepo = getRepository("Doctor");
    const doctor = doctorRepo.create({
      name,
      specialty,
    });

    await doctorRepo.save(doctor);

    return doctor;
  }
}

export default DoctorController;
