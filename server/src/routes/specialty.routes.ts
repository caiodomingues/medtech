// import { Router } from "express";
// import { getRepository } from "typeorm";

// import SpecialtyController from "../app/controllers/SpecialtyController";
// import { Doctor } from "../app/models/Doctor";
// import { Specialty } from "../app/models/Specialty";

// const specialtyRouter = Router();

// specialtyRouter.post("/", async (req, res) => {
//   try {
//     const { name } = req.body;
//     const specialtyController = new SpecialtyController();
//     const patient = await specialtyController.store({
//       name,
//     });

//     return res.status(200).json(patient);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// specialtyRouter.get("/", async (req, res) => {
//   const patientRepo = getRepository("Specialty");
//   const patient = await patientRepo.find();

//   return res.status(200).json(patient);
// });

// specialtyRouter.get("/:id", async (req, res) => {
//   const patientRepo = getRepository(Specialty);
//   const { id } = req.params;
//   const patient = await patientRepo.findOne(id);
//   return res.status(200).json(patient);
// });

// specialtyRouter.put("/:id", async (req, res) => {
//   const { name } = req.body;
//   const employeeRepo = getRepository(Specialty);
//   const { id } = req.params;
//   const patientFind = await employeeRepo.findOne(id);

//   const patient = employeeRepo.create({
//     name,
//   });
//   const respo = await employeeRepo.save({ ...patientFind, ...patient });

//   return res.status(200).json(respo);
// });

// specialtyRouter.delete("/:id", async (req, res) => {
//   const patientRepo = getRepository(Specialty);
//   const { id } = req.params;
//   await patientRepo.delete(id);
//   return res.status(200).send();
// });

// export default specialtyRouter;
