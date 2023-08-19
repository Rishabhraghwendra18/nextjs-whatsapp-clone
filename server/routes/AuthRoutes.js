import { Router } from "express";
import { checkUser,createProfile,getUser } from "../controllers/AuthController.js";

const router = Router();

router.post("/check-user",checkUser);
router.post("/create-profile",createProfile);
router.post("/get-user",getUser)

export default router;