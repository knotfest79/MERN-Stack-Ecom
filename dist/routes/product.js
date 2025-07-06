import express from "express";
import { wrapHandler } from "./wrapHandler.js";
import { adminOnly } from "../middlewares/auth.js";
import { newProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();
router.post("/new", wrapHandler(adminOnly), singleUpload, wrapHandler(newProduct));
export default router;
