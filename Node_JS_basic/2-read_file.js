const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    // Remove the header line
    const students = lines.slice(1);
    
    // Log total number of students
    console.log(`Number of students: ${students.length}`);
    
    // Create an object to store students by field
    const fields = {};
    
    // Process each student
    for (const student of students) {
      const [firstname, lastname, age, field] = student.split(',');
      
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
    
    // Log the number of students in each field
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // If file cannot be read, throw an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
