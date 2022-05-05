"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const email_1 = __importDefault(require("./emailService/email"));
const run = async () => {
    await (0, email_1.default)();
};
run();
app.listen(6050, () => {
    console.log('Listening to server');
});
