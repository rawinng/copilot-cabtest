import express, { Request, Response } from "express";

const helloRouter = express.Router();

helloRouter.get("/api/hello", (req: Request, res: Response) => {
  res.send("This is a hello route");
});

export default helloRouter;
