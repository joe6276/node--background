"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ejs_1 = __importDefault(require("ejs"));
const Email_1 = __importDefault(require("../helper/Email"));
const emailService = async () => {
    ejs_1.default.renderFile('./templates/registration.ejs', { name: 'Benjamin' }, async (error, data) => {
        const mailoptions = {
            from: process.env.EMAIL,
            to: 'joendambuki16@gmail.com',
            subject: 'Test Email',
            text: 'Hello we testing Nodemailer...',
            html: data
        };
        try {
            await (0, Email_1.default)(mailoptions);
            console.log("Success");
        }
        catch (error) {
            console.log(error);
        }
    });
};
exports.default = emailService;
