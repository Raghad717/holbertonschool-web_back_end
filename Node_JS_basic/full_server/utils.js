const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n');
      const students = lines.filter(line => line.trim() !== '').slice(1);
      
      const fields = {};
      
      for (const student of students) {
        const [firstname, , , field] = student.split(',');
        
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
      
      resolve(fields);
    });
  });
}

module.exports = readDatabase;
