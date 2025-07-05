import express from "express";
import { delUser, getAllUsers, getUser, newUser } from "../controllers/user.js";
import { wrapHandler } from "./wrapHandler.js";
import { adminOnly } from "../middlewares/auth.js";
const app = express.Router();
//route - /api.v1/user/new
app.post("/new", wrapHandler(newUser));
//Route = /api/v1/user/all
app.get("/all", wrapHandler(adminOnly), wrapHandler(getAllUsers));
//Route - /api/v1/user/dynamicID
app
    .route("/:id")
    .get(wrapHandler(getUser))
    .delete(wrapHandler(adminOnly), wrapHandler(delUser));
export default app;
