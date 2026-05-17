import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];

    readDatabase(filePath)
      .then((fields) => {
        const lines = ['This is the list of our students'];

        const sortedFields = Object.keys(fields)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        for (const field of sortedFields) {
          const list = fields[field].join(', ');
          const count = fields[field].length;
          lines.push(`Number of students in ${field}: ${count}. List: ${list}`);
        }

        res.status(200).send(lines.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const filePath = process.argv[2];

    readDatabase(filePath)
      .then((fields) => {
        const students = fields[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
