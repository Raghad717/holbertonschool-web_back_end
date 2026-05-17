const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const databasePath = process.argv[2];
    
    readDatabase(databasePath)
      .then((fields) => {
        let output = 'This is the list of our students\n';
        
        // Sort fields alphabetically (case insensitive)
        const sortedFields = Object.keys(fields).sort((a, b) => 
          a.localeCompare(b, undefined, { sensitivity: 'base' })
        );
        
        for (const field of sortedFields) {
          output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
        
        response.status(200).send(output.trim());
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }
  
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databasePath = process.argv[2];
    
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    readDatabase(databasePath)
      .then((fields) => {
        if (!fields[major]) {
          response.status(500).send('Major parameter must be CS or SWE');
          return;
        }
        
        response.status(200).send(`List: ${fields[major].join(', ')}`);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }
}

module.exports = StudentsController;
