import express from "express";
const router = express.Router();
import {
    createEmail,
    getEmail,
    getUserEmails,
    deleteEmail,
    updateEmail,
} from "../controllers/mailController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createEmail).get(protect, getUserEmails);

router.route("/:id").get(protect, getEmail).delete(protect, deleteEmail).patch(protect, updateEmail);

export default router;
