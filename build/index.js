"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleweware que se encarga de convertir la req.body en unJSON
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('prueba');
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
