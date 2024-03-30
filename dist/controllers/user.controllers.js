"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpController = void 0;
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
const signUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const response = yield client.user.create({
            data: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            }
        });
        res.status(201).json({
            data: response
        });
    }
    catch (err) {
        if ((_a = err === null || err === void 0 ? void 0 : err.meta) === null || _a === void 0 ? void 0 : _a.target.includes("email")) {
            res.status(400).json({
                error: {
                    email: "email is already in use."
                }
            });
            return;
        }
        res.status(400).json({
            error: "Bad Request"
        });
        console.log((_b = err === null || err === void 0 ? void 0 : err.meta) === null || _b === void 0 ? void 0 : _b.target.includes("email"));
    }
});
exports.signUpController = signUpController;
