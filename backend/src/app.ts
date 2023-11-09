import morgan from "morgan";
import express from "express";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();

// middlewares
// Handle other routes and serve index.html for all unmatched routes
// Serve static files from the "client" directory
// app.use(express.static(path.join(__dirname, "client")));

// // Handle other routes and serve index.html only if the route doesn't match a static file
// app.get("*", (req, res) => {
//   const indexHtmlPath = path.join(__dirname, "client", "index.html");
//   res.sendFile(indexHtmlPath);
// });


//remove it in production
app.use(morgan("dev"));

app.use(
  cors({
    origin: [
      "https://green-field-04240d803.4.azurestaticapps.net",
      "http://localhost:5173",
      "http://localhost:5000",
      "http://localhost:7000",
      "https://mern-chat.azurewebsites.net:5000",
      "https://mern-chat.azurewebsites.net:7000",
      "https://ai-chat-bot-delta.vercel.app",
      "https://ai-chat-bot-backend.vercel.app"

    ],
    credentials: true,

  })
);
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/api/v1", appRouter);
export default app;
