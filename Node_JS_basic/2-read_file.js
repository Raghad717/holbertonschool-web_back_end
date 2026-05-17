const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    
    const lines = data.split('\n');
    
    const students = lines.filter(line => line.trim() !== '').slice(1);
    
    console.log(`Number of students: ${students.length}`);
    
    const fields = {};
    
    for (const student of students) {
      const [firstname, lastname, age, field] = student.split(',');
      
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
    
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
