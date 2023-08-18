import { Router } from "express";
import { checkUser,createProfile } from "../controllers/AuthController.js";

const router = Router();

router.post("/check-user",checkUser);
router.post("/create-profile",createProfile);

export default router;