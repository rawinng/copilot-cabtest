import express, { Request, Response } from "express";
import { helloRoute, testRoute } from "./routes";

const app = express();
const port = 3000;

// add test-routes to the app
app.use(testRoute);
app.use(helloRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
