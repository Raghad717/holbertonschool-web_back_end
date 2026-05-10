export default function getStudentIdsSum(students) {
  // Use reduce to sum up all student ids
  return students.reduce((sum, student) => sum + student.id, 0);
}
