interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 17,
  location: 'Bwari',
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Bull',
  age: 17,
  location: 'Gwagwa',
};

const studentsList = [student1, student2];

console.log(studentsList);
