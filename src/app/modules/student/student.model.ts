import { Schema, model } from 'mongoose'
import { Guardian, LocalGuardian, Student, UserName } from './student.interface'

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
})
const guardianNameSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
})
const localGuardianNameSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
})
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, require: true },
  contactNumber: { type: String, require: true },
  emergencyConNo: { type: String },
  bloodGroup: ['A', 'B', 'AB', 'O'],
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: guardianNameSchema,
  localGuardian: localGuardianNameSchema,
  profileImage: { type: String },
  isActive: ['active', 'inActive'],
})
export const StudentModel = model<Student>('Student', studentSchema)
