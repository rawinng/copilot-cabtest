"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const port = 3000;
// add test-routes to the app
app.use(routes_1.testRoute);
app.use(routes_1.helloRoute);
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
