import { Router } from "express";
import { checkUser,createProfile,getUser,getUserContacts } from "../controllers/AuthController.js";

const router = Router();

router.post("/check-user",checkUser);
router.post("/create-profile",createProfile);
router.post("/get-user",getUser);
router.post("/get-user-contacts",getUserContacts)

export default router;