export default function getListStudentIds(arr) {
  // If the input is not an array, return an empty array
  if (!Array.isArray(arr)) {
    return [];
  }
  
  // Use map to extract the id from each object
  return arr.map(student => student.id);
}
