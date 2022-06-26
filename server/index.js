import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";

import listRoutes from "./routes/list.js";

const app = express();
config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use("/list", listRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_CNN)
  .then(() => app.listen(PORT, console.log(`Server is running at port: ${PORT}`)))
  .catch(error => console.log(error.message));