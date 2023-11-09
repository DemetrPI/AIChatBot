import app from "./app.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";
import { connectToDatabase } from "./db/connection.js";

const frontendApp = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//connections and listeners
const PORT = process.env.PORT || 5000;


const frontendPort = process.env.FRONTEND_PORT || 7000; // Port for serving the frontend
const backendPort = process.env.BACKEND_PORT || 5000; // Port for your Express.js backend


//middlewares
// Handle other routes and serve index.html for all unmatched routes
// Serve static files from the "client" directory
frontendApp.use(express.static(path.join(__dirname, "client")));

// // Handle other routes and serve index.html only if the route doesn't match a static file
frontendApp.get("*", (req, res) => {
  const indexHtmlPath = path.join(__dirname, "client", "index.html");
  res.sendFile(indexHtmlPath);
});

frontendApp.listen(frontendPort, () => {
  console.log(`Frontend is running on port ${frontendPort}`);
});

//connections and listeners for the backend
connectToDatabase()
  .then(() => {
    app.listen(backendPort, () => {
      console.log(`Server running on port ${backendPort}, connected to DB`);
    });
  })
  .catch((err) => console.log(err));