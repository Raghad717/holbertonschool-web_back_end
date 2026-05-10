export default function getStudentsByLocation(students, city) {
  // Use filter to return only students whose location matches the city
  return students.filter(student => student.location === city);
}
