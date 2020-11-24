import { Router } from "express";

import SessionsController from "../app/controllers/SesssionsUsersController";

const sessionsRouter = Router();

sessionsRouter.post("/", async (req, res) => {
  try {
    const { enrollment, password } = req.body;

    const sessionsController = new SessionsController();

    const { user, token } = await sessionsController.store({
      enrollment,
      password,
    });

    user.password = "";

    return res.json({ user, token });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
