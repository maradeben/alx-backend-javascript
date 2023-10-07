/**
 * student interface
 */

interface Student {
  firstName: string;
  lastName: string;
  location: string;
}

class StudentClass {
  firstName: string;
  lastName: string;
  location: string;

  constructor (first: string, last: string, loc: string) {
    this.firstName = first;
    this.lastName = last;
    this.location = loc;
  }
}

const student1: Student = new StudentClass("Jane", "Doe", "Kwali");
const student2: Student = new StudentClass("John", "Bull", "Anagada");

const studentsList = [student1, student2];

console.log(studentsList);
