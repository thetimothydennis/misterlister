import express from "express";
import cors from "cors"

import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const PORT = 5173;

app.use(cors());
// defines the static path to serve the React frontend
export const staticPath = join(__dirname, "..", "jammmming", "dist", "index.html");

// reads the file at the static path, sends it back as a response to the client
function staticServe(res) {
	return res.sendFile(staticPath);
}

// main frontend views handler
export const appRoute = (req, res) => {
	staticServe(res);
};

app.use(express.static(join(__dirname, "..", "jammmming", "dist")));

app.get("/callback", appRoute)

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})