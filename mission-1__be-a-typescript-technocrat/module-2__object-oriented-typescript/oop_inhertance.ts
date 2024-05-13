{
  // oop - inheritance;
  enum SchoolPeopleType {
    teacher = "Teacher",
    student = "Student",
    notRegistered = "Not Registered",
  }

  class SchoolPeople {
    type: SchoolPeopleType = SchoolPeopleType.notRegistered;

    constructor(public name: string, public age: number, public address: string) {}

    getSleep(sleepTime: number) {
      console.log(`${this.name} Sleep for ${sleepTime} hour.`);
    }

    getType() {
      console.log(`Hey, ${this.name} is a ${this.type}`);
    }
  }

  // Student Class with Extended functionality for Student;
  // it is inheriting functionality from School people;
  class Student extends SchoolPeople {
    type: SchoolPeopleType = SchoolPeopleType.student;

    doStudy() {
      console.log("hey, I am student " + this.name + " And I am studying");
    }
  }

  const student = new Student("Nazmul", 21, "Richi");
  student.getSleep(20);
  student.doStudy();

  // Teacher Class with Extended functionality for Student;
  // it is inheriting functionality from School people;
  class Teacher extends SchoolPeople {
    type: SchoolPeopleType = SchoolPeopleType.teacher;

    teachThem() {
      console.log("hey, I am Teacher " + this.name + " And I am studying");
    }
  }

  const teacher = new Teacher("Mr. Persian", 25, "Barishal");
  teacher.teachThem();
}
