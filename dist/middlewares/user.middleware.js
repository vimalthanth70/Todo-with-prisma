"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpMiddleware = void 0;
const utils_1 = require("../utils");
const signUpMiddleware = (req, res, next) => {
    console.log("Running middleware");
    try {
        utils_1.signUpSchema.parse(req.body);
        next();
    }
    catch (err) {
        const errors = {};
        err.issues.map((ele) => {
            errors[ele.path[0]] = ele.message;
        });
        console.log(errors);
        res.status(400).json({
            errors: errors
        });
    }
};
exports.signUpMiddleware = signUpMiddleware;
