import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import router from './routes/authRoutes.js';
import sopRouter from './routes/sopRoutes.js';

dotenv.config();
const app = express();


async function startServer() {

    await connectDB();

    app.use(express.json());
    app.use(cors());

    // routes
    app.use("/api/auth",router);

    app.use("/api/sops",sopRouter);



    app.get('/', (req, res) => {
        res.json({ message: 'SOP API running' });
    });


    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);

    });

}
startServer();


