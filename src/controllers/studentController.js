import { PrismaClient } from "@prisma/client";
import { validateStudent } from "../utils/validators.js";

const prisma = new PrismaClient();

export const createStudent = async (req, res) => {
  try {
    const { error } = validateStudent(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const student = await prisma.student.create({
      data: req.body,
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getStudentByRegNo = async (req, res) => {
  try {
    const student = await prisma.student.findUnique({
      where: { registrationNo: req.params.regNo },
    });

    if (!student) return res.status(404).json({ error: "Student not found" });

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const student = await prisma.student.update({
      where: { registrationNo: req.params.regNo },
      data: req.body,
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    await prisma.student.delete({
      where: { registrationNo: req.params.regNo },
    });
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
