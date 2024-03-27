import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/test", (req: Request, res: Response) => {
  res.send("This is a test route");
});

export default router;
