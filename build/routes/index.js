"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcv_1 = __importDefault(require("./bcv"));
const dolarToday_1 = __importDefault(require("./dolarToday"));
const router = express_1.default.Router();
router.use('/bcv', bcv_1.default);
router.use('/dolarToday', dolarToday_1.default);
exports.default = router;
