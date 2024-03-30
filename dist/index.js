"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1/auth", user_routes_1.default);
const server = app.listen(8080, () => {
    const host = server.address();
    console.log(`server is unning on ${host === null || host === void 0 ? void 0 : host.address}:8080`);
});
