import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import router from './routes/authRoutes.js';
import sopRouter from './routes/sopRoutes.js';
import { contactRoute } from './routes/contactRoute.js';

dotenv.config();
const app = express();

const corsOptions = {
    origin: [
        "http://localhost:5173",
        process.env.CLIENT_URL
    ],
    credentials: true
};

async function startServer() {
    await connectDB();

    app.use(cors(corsOptions));      // ← cors first
   
    app.use(express.json());         // ← json after cors

    app.use("/api/auth", router);
    app.use("/api/sops", sopRouter);
    app.post("/api/contact", contactRoute);

    app.get('/', (req, res) => {
        res.json({ message: 'SOP API running' });
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
}

startServer();