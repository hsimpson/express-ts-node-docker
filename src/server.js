"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const PORT = process.env.PORT;
const app = express_1.default();
app.use(express_1.default.static('src/public'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/service1', (req, res) => {
    res.send('Service 1');
});
app.get('/service2', (req, res) => {
    res.json({
        message: 'Message from a service',
        number: 42,
        platform: `${os_1.default.platform()}`,
        arch: `${os_1.default.arch()}`,
        release: `${os_1.default.release()}`,
    });
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map