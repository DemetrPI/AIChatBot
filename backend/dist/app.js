import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//middlewares
app.use(express.static('../dist/client'));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/client", "index.html"));
});
app.use(cors({
    origin: ["https://green-field-04240d803.4.azurestaticapps.net", "http://localhost:5173", "https://mern-chat.azurewebsites.net"],
    credentials: true,
    optionsSuccessStatus: 204,
    exposedHeaders: ["set-cookie"]
}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map