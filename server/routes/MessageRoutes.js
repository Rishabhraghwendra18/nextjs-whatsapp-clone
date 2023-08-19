import { Router } from "express";
import {sendMessage,getMessage} from "../controllers/MessageController.js";

const router = Router();
router.post('/sendMessage',sendMessage);
router.post('/getMessage',getMessage);

export default router;