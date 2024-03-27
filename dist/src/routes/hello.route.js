"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helloRouter = express_1.default.Router();
helloRouter.get("/api/hello", (req, res) => {
    res.send("This is a hello route");
});
exports.default = helloRouter;
