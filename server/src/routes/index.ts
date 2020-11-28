import { Router } from "express";

import patientRouter from "./patient.routes";
import doctorRouter from "./doctor.routes";
import appointmentsRouter from "./appointment.routes";

const routes = Router();

routes.use("/patients", patientRouter);
routes.use("/doctors", doctorRouter);
routes.use("/appointments", appointmentsRouter);

export default routes;
