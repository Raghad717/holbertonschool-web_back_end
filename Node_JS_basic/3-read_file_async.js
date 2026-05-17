const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n');
      const students = lines.filter(line => line.trim() !== '').slice(1);
      
      console.log(`Number of students: ${students.length}`);
      
      const fields = {};
      
      for (const student of students) {
        const [firstname, , , field] = student.split(',');
        
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
      
      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
      
      resolve();
    });
  });
}

module.exports = countStudents;
