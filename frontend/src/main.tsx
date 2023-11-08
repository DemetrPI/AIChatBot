import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import { Toaster } from "react-hot-toast";
import axios from "axios";


//Local environment
// axios.defaults.baseURL = "http://localhost:5000/api/v1";

// Production environment
axios.defaults.baseURL = "https://mern-chat.azurewebsites.net:8080/api/v1/";

axios.defaults.withCredentials = true;

const theme = createTheme({
  typography: {
    fontFamily: "Roboto Slab,serif",
    allVariants: { color: "white" },
  },
});

// Define and set your authToken here
const authToken = "auth_token"; // Replace with your actual authentication token
console.log('Token to send:', authToken); // Log the token before making requests


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position="top-right" />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
