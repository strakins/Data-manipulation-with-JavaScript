
// Function to calculate average grades for each student
function calAvrgGrades(students) {
    return students.map(student => {
      const totalGrades = student.grades.reduce((sum, grade) => sum + grade, 0);
      const averageGrade = (totalGrades / student.grades.length).toFixed(2);
      return {
        id: student.id,
        name: student.name,
        averageGrade: parseFloat(averageGrade)
      };
    });
  }
  
  // Function to find the top student
  function findTopStudent(students) {
    const studentsWithAvgGrades = calAvrgGrades(students);
    return studentsWithAvgGrades.reduce((topStudent, currentStudent) => {
      return (currentStudent.averageGrade > topStudent.averageGrade) ? currentStudent : topStudent;
    });
  }
  
  // Function to sort students by average grade in descending order
  function sortStudentsByGrade(students) {
    const studentsWithAvgGrades = calAvrgGrades(students);
    return studentsWithAvgGrades.sort((a, b) => b.averageGrade - a.averageGrade);
  }
  
  // Students dataset
  const students = [
    { id: 1, name: "Brians Gomez", grades: [85, 90, 92] },
    { id: 2, name: "Jane Smith", grades: [78, 82, 88] },
    { id: 3, name: "Emily Airly", grades: [93, 95, 92] },
    { id: 4, name: "Michael Brown", grades: [70, 75, 80] },
    { id: 5, name: "Tom Jerry", grades: [80, 65, 72] }
  ];
  
  // Data usage
  console.log("Average Grades:", calAvrgGrades(students));

  console.log("Top Student is :", findTopStudent(students));

  console.log("Sorted Students by Average Grade:", sortStudentsByGrade(students));
  