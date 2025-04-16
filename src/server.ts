import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectDb } from './models/index';
import cors from 'cors';
import { authRouter } from './routes/auth/auth';
import cookieParser from 'cookie-parser';
import { sequelize } from './config/db';
import { storeRouter } from './routes/store/store_route';
import { chatRouter } from './routes/chat/chat';
import { categoryRouter } from './routes/category/category';
import { verifyTokenRouter } from './routes/token/verify_token';
import { refreshTokenRouter } from './routes/token/refreshtoken';
import { userRouter } from './routes/user/user';




const app = express();
dotenv.config();


app.use(cors({
    origin: ['http://localhost:3000', 'http://192.168.0.186:5000', 'http://192.168.137.1:5000', "*"],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));


app.use(bodyParser.json());
app.use(cookieParser());


(async () => {
    try {
        await connectDb();  // Connect to the database
        // Sync the User model with the database (create the table)
        await sequelize.sync().then(() => {
            console.log('User model created or already exist and synced successfully!');
        });
    } catch (error) {
        console.error('Error syncing the database:', error);
    }
})();


app.get("/", (req: Request, res: Response) => {
    res.send("Hello Segs!");
});


// Authentication and User routes
app.use("/auth", authRouter);
app.use("/user", userRouter);


// api for other categories routes
app.use("/api/store", storeRouter);
app.use("/api/chat", chatRouter);
app.use("/api/category", categoryRouter);


// Token routes
app.use("/token", [refreshTokenRouter,  verifyTokenRouter]);


// Error handling middleware
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});


// Set up server to listen on a specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
