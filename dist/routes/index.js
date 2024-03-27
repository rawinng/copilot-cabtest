"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloRoute = exports.testRoute = void 0;
const test_route_1 = __importDefault(require("./test.route"));
exports.testRoute = test_route_1.default;
const hello_route_1 = __importDefault(require("./hello.route"));
exports.helloRoute = hello_route_1.default;
