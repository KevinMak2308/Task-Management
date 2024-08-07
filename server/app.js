import express from "express";
const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors({ origin: 'http://localhost:3000' }));

// Routes
import taskRoutes from "./routes/taskRoutes.js"
app.use('/api/tasks', taskRoutes);

// Start serveren
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`);
});
