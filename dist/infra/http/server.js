"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const celebrate_1 = require("celebrate");
const AppError_1 = __importDefault(require("../../shared/errors/AppError"));
const routes_1 = __importDefault(require("./routes"));
const PORT = process.env.PORT || 3333;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((0, celebrate_1.errors)());
app.use((error, _request, response, _next) => {
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }
    console.error(error);
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
//# sourceMappingURL=server.js.map