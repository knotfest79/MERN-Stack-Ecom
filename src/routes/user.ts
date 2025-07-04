import express from "express";
import { RequestHandler } from "express";
import { getAllUsers, newUser } from "../controllers/user.js";

const app = express.Router();

//route - /api.v1/user/new

app.post("/new", newUser as RequestHandler);

//Route = /api/v1/user/all
app.get("/all", getAllUsers as RequestHandler);

export default app;
