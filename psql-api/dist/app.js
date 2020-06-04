"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const app = express_1.default();
app.get('/', (req, res) => {
    res.send('Welcome to my server');
});
let router = express_1.default.Router();
router.use('/users', userRouter_1.default);
app.use('/', router);
app.listen(5000, () => console.log('psql-api server is running'));
