average_calculation: {
  type TStudent = {
    name: string;
    age: number;
    grades: number[];
  };

  function calculateAverageGrade(student: TStudent): number {
    const gradesSum = student.grades.reduce((prev, curr) => {
      console.log(`previous ${prev} |  current ${curr}`);
      return prev + curr;
    }, 0);

    return Number((gradesSum / student.grades.length).toFixed(2));
  }

  /* TEST CASE */
  const student1: TStudent = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };

  const averageGradeForBob = calculateAverageGrade(student1);
  console.log(averageGradeForBob);
}
