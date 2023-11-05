import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();
//middlewares
// app.use(cors({ origin: "https://green-field-04240d803.4.azurestaticapps.net/", credentials: true }));
app.use(cors({
    origin: "https://green-field-04240d803.4.azurestaticapps.net",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map