import express from "express";
import { getItems, addItem } from "../controller/list.js";

const router = express.Router();

router.get("/", getItems);

router.post("/", addItem);

export default router;