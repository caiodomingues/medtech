import { Router } from "express";
import { getRepository } from "typeorm";

import EmployeesController from "../app/controllers/EmployeesController";
import Employees from "../app/models/Employees";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const employeesRouter = Router();

employeesRouter.post("/", ensureAuthenticated, async (req, res) => {
  try {
    const { name, cpf, efunction, cellphone, email, photo } = req.body;
    const employeesController = new EmployeesController();
    const employee = await employeesController.store({
      name,
      cpf,
      efunction,
      cellphone,
      email,
      photo,
    });

    return res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

employeesRouter.get("/", ensureAuthenticated, async (req, res) => {
  const employeesRepo = getRepository("Employees");
  const employee = await employeesRepo.find();
  console.log(req.user);

  return res.status(200).json(employee);
});

employeesRouter.get("/:id", ensureAuthenticated, async (req, res) => {
  const usersRepo = getRepository("Employees");
  const { id } = req.params;
  const user = await usersRepo.findOne(id);
  return res.status(200).json(user);
});

employeesRouter.put("/:id", ensureAuthenticated, async (req, res) => {
  const { name, cpf, efunction, cellphone, email, photo } = req.body;
  const employeeRepo = getRepository("Employees");
  const { id } = req.params;
  const user = await employeeRepo.findOne(id);

  const employee = employeeRepo.create({
    name,
    cpf,
    efunction,
    cellphone,
    email,
    photo,
  });
  const respo = await employeeRepo.save({ ...user, ...employee });

  return res.status(200).json(respo);
});

employeesRouter.delete("/:id", ensureAuthenticated, async (req, res) => {
  const employeesRepo = getRepository("Employees");
  const { id } = req.params;
  await employeesRepo.delete(id);
  return res.status(200).send();
});

export default employeesRouter;
