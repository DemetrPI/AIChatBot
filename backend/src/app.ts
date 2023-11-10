// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
import morgan from "morgan";
import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { COOKIE_NAME } from "./utils/constants.js";
import cookieSession from "cookie-session"
config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();

// middlewares
// Handle other routes and serve index.html for all unmatched routes
// Serve static files from the "client" directory
// app.use(express.static(path.join(__dirname, "../public")));

// // Handle other routes and serve index.html only if the route doesn't match a static file
// app.get("*", (req, res) => {
//   const indexHtmlPath = path.join(__dirname, "../public", "index.html");
//   res.sendFile(indexHtmlPath);
// });


//remove it in production
app.use(morgan("dev"));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ai-chat-1mwy.onrender.com"
    ],
    credentials: true,

  })
);
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cookieSession({
  name: COOKIE_NAME,
  keys: process.env.COOKIE_SECRET,
  maxAge: 24 * 60 * 60 * 1000*7 // 24 hours
}))
app.use("/api/v1", appRouter);
export default app;
