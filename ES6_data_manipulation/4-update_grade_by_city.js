export default function updateStudentGradeByCity(students, city, newGrades) {
  // First, filter students by the given city
  return students
    .filter(student => student.location === city)
    .map(student => {
      // Find the grade object for this student from newGrades array
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      
      // Return a new object with the existing student properties and the new grade
      return {
        ...student, // Spread operator to copy all existing properties
        grade: gradeObj ? gradeObj.grade : 'N/A' // If grade exists, use it; otherwise 'N/A'
      };
    });
}
