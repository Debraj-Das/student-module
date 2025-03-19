import express from "express";
import {
  createStudent,
  getAllStudents,
  getStudentByRegNo,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", createStudent);
router.get("/", getAllStudents);
router.get("/:regNo", getStudentByRegNo);
router.put("/:regNo", updateStudent);
router.delete("/:regNo", deleteStudent);

export default router;
