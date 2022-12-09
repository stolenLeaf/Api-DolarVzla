"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json()); //middleweware que se encarga de convertir la req.body en unJSON
app.use('/api', routes_1.default);
app.use('/', (_req, res) => {
    res.json({
        mensaje: 'hola mundo'
    });
});
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
exports.default = app;
