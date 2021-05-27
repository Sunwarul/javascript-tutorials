const employees = ['Mr John', 'Mr Nazmul', 'Mr. Hossain'];

// const employeesUppercase = employees.map(employee => {
//     return employee.toUpperCase();
// });

const employeesUppercase = employees.map(function (employee) {
    return employee.toUpperCase();
});

console.log(employeesUppercase.join(' | '));