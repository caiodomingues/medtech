import { getRepository } from "typeorm";
import { Patient } from "../models/Patient";

interface Request {
  name: string;
}

class PatientController {
  public async store({ name }: Request): Promise<Patient> {
    const PatientRepository = getRepository("Patient");

    const patient = PatientRepository.create({
      name,
    });

    await PatientRepository.save(patient);

    return patient;
  }
}

export default PatientController;
