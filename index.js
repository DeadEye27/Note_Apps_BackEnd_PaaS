import express from "express";
import cors from "cors";
import { router as noteRoutes } from "./routes/noteRoutes.js";
import bodyParser from 'body-parser';
import {sequelize} from './config/database.js'

const app = express();
// app.use (bodyParser.json());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.send("Hello World!");
});

app.use('/notes', noteRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

sequelize.sync()
    .then(() => console.log('Database Synced successfully!'))
    .catch((err) => console.error('Database Sync Failed:', err));
