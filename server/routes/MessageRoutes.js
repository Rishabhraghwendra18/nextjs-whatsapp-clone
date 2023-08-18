import { Router } from "express";
import {sendMessage} from "../controllers/MessageController.js";

const router = Router();
router.post('/sendMessage',sendMessage);

export default router;