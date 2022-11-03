import express from "express";
const router = express.Router();

import { signin } from "./../contollers/user.js";

router.post("/signin", signin);

export default router;
