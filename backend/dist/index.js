import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//connections and listeners
const PORT = process.env.PORT || 8080;
// Function to log a message periodically
const logStatus = () => {
    console.log("Everything is fine");
};
// connections and listeners
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => {
        console.log("Server running, connected to DB");
        // Log "Everything is fine" every 30 seconds
        setInterval(logStatus, 15000);
    });
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map