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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = require("./models/index");
const cors_1 = __importDefault(require("cors"));
const auth_1 = require("./routes/auth/auth");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const db_1 = require("./config/db");
const store_route_1 = require("./routes/store/store_route");
const chat_1 = require("./routes/chat/chat");
const category_1 = require("./routes/category/category");
const verify_token_1 = require("./routes/token/verify_token");
const refreshtoken_1 = require("./routes/token/refreshtoken");
const user_1 = require("./routes/user/user");
// import { verifyToken } from '../src/app/token';
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'http://localhost:5000', 'http://192.168.137.1:5000', "*"],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, index_1.connectDb)(); // Connect to the database
        // Sync the User model with the database (create the table)
        yield db_1.sequelize.sync().then(() => {
            console.log('User model created or already exist and synced successfully!');
        });
    }
    catch (error) {
        console.error('Error syncing the database:', error);
    }
}))();
app.get("/", (req, res) => {
    res.send("Hello Segs!");
});
// Authentication and User routes
app.use("/auth", auth_1.authRouter);
app.use("/user", user_1.userRouter);
// api for other categories routes
app.use("/api/store", store_route_1.storeRouter);
app.use("/api/chat", chat_1.chatRouter);
app.use("/api/category", category_1.categoryRouter);
// Token routes
app.use("/token", refreshtoken_1.refreshTokenRouter);
app.use('/token', verify_token_1.verifyTokenRouter);
// app.use('/token', (req: Request, res: Response) => {
//     req.headers = {
//         "content-type": "application/json",
//         "accept": "text/html",
//     };
//     res.send(verifyToken);
// });
// Error handling middleware
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});
// Set up server to listen on a specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
