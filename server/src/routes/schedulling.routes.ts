// import { Router } from "express";

// import SchedulingController from "../app/controllers/SchedulingController";

// const schedullingRouter = Router();

// schedullingRouter.post("/", async (req, res) => {
//   try {
//     const { prestador_servico_id, data } = req.body;
//     const schedulingController = new SchedulingController();
//     const scheduling = await schedulingController.store({
//       prestador_servico_id,
//       date,
//     });

//     return res.status(200).json(scheduling);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// export default schedullingRouter;
