import express from "express";
import { config } from "dotenv";
// import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config();

const app = express();

//middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// app.use(express.static('./public'))
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../public", "index.html"))
// })

// // //logs for dev only
// app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;
