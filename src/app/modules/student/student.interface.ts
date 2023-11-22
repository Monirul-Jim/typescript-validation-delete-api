export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}
export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}
export type LocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}
export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth?: string
  contactNumber: string
  emergencyConNo: string
  bloodGroup?: 'A' | 'B' | 'AB' | 'O'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
  localGuardian: LocalGuardian
  profileImage?: string
  isActive: 'active' | 'inActive'
  email: string
}
