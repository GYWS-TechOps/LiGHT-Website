import express from "express";
import cors from "cors";
import membersRouter from "./routes/membersRoutes.js";

const app = express();
app.use(cors());
app.use("/api/members", membersRouter);

app.listen(3000, () => console.log("✅ Backend running on port 3000"));
