import express from "express";
import { members } from "../../src/data/membersData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(members);
});

export default router;
