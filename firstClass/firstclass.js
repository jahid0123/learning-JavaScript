// create object in JS
const student = {

    fullName: 'Jahid Ahmed',
    age: 29, 
    subject: 'Mathematics',
    cgpa: 3.07,
    isPass: true
};

console.log(student.fullName);
console.log(student.age);

console.log(student["fullName"]);
console.log(student["age"]);

//changing object keys values..
student.fullName = 'Mahim Ahmed';
student['age'] = 27;

console.log(student);