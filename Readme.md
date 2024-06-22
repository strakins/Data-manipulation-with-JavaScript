# Student Grades Analysis

This JavaScript program analyzes a dataset of students' grades and provides the following functionalities:
1. Calculate the average grades for each student.
2. Find the student with the highest average grade.
3. Sort students by their average grades in descending order.

## Files

- `cashier.js`: Contains the implementation of the required functions.
- `README.md`: Instructions on how to run the program.

## Functions

### calculateAverageGrades(students)
- **Description**: Calculates the average grades for each student.
- **Parameters**: `students` - an array of student objects, where each object has `id`, `name`, and `grades` properties.
- **Returns**: A new array of objects, each containing `id`, `name`, and `averageGrade` properties.

### findTopStudent(students)
- **Description**: Finds the student with the highest average grade.
- **Parameters**: `students` - an array of student objects.
- **Returns**: An object representing the student with the highest average grade.

### sortStudentsByGrade(students)
- **Description**: Sorts students by their average grades in descending order.
- **Parameters**: `students` - an array of student objects.
- **Returns**: A new array of student objects sorted by average grade in descending order.

## How to Run

1. Ensure you have Node.js installed on your system.
2. Clone the repository or download the files.
3. Navigate to the directory containing `cashier.js` and `README.md`.
4. Run the following command in the terminal:

```sh
node cashier.js
