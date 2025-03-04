import express from "express";
const router = express.Router();
import {
    createEmail,
    getEmail,
    getUserEmails,
    deleteEmail,
} from "../controllers/mailController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createEmail).get(protect, getUserEmails);

router.route("/:id").get(protect, getEmail).delete(protect, deleteEmail);

export default router;
