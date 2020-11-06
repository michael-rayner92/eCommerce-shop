import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  authUser,
  getUsers,
  getUserProfile,
  registerUser,
  updateUserProfile
} from "../controllers/userController.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
