// 3-read_file_async.js
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the data into lines
      const lines = data.split('\n');
      
      // Filter out empty lines and get rid of the header
      const students = lines.filter(line => line.trim() !== '').slice(1);
      
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
      
      resolve();
    });
  });
}

module.exports = countStudents;
