import { Router } from "express";

import usersRouter from "./users.routes";
import sessionsRouter from "./sessions.routes";
import employeesRouter from "./employees.routes";
// import razaoExameRouter from "./razaoexame.routes";
import examTypesRouter from "./examtypes.routes";
import examRouter from "./exams.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/employees", employeesRouter);
// routes.use("/razaoexame", razaoExameRouter);
routes.use("/types", examTypesRouter);
routes.use("/exams", examRouter);

export default routes;
