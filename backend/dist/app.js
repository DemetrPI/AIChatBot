// import morgan from "morgan";
import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
config();
const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
//middlewares
// Handle other routes and serve index.html for all unmatched routes
// app.use(express.static("client"));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname,  "client", 'index.html'));
// });
//remove it in production
// app.use(morgan("dev"));
app.use(cors({
    origin: [
        "https://green-field-04240d803.4.azurestaticapps.net",
        "http://localhost:5173",
        "http://localhost:5000",
        "http://localhost:8080",
        "https://mern-chat.azurewebsites.net",
        "https://ai-chat-bot-delta.vercel.app"
    ],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map