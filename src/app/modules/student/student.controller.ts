import { Request, Response } from 'express'
import { StudentServices } from './student.services'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    const result = await StudentServices.createStudentIntoDB(studentData)
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
export const StudentController = {
  createStudent,
}
