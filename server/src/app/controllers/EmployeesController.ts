import { getRepository } from "typeorm";
import Employees from "../models/Employees";

interface Request {
  name: string;
  cpf: string;
  efunction: string;
  cellphone: string;
  email: string;
  photo: string;
}

class EmployeesController {
  public async store({
    name,
    cpf,
    efunction,
    cellphone,
    email,
    photo,
  }: Request): Promise<Employees> {
    const employeesRepo = getRepository(Employees);

    const employee = employeesRepo.create({
      name,
      cpf,
      efunction,
      cellphone,
      email,
      photo,
    });

    await employeesRepo.save(employee);

    return employee;
  }
}

export default EmployeesController;
