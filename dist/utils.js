"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpSchema = void 0;
const zod_1 = require("zod");
const email = zod_1.z.string().email();
const stringField = (required, max) => {
    if (required && !Boolean(max)) {
        return zod_1.z.string().min(1, "Required");
    }
    else if (required && max) {
        return zod_1.z.string().min(1, "Required").max(max);
    }
    else {
        return zod_1.z.string();
    }
};
const signUpSchema = zod_1.z.object({
    firstName: stringField(true),
    lastName: stringField(true),
    email: email,
    password: stringField(true, 15)
});
exports.signUpSchema = signUpSchema;
