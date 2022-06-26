import express from "express";

const router = express.Router();

router.get("/", getItems);

router.post("/", postItem);

export default router;