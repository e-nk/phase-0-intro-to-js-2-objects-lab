// Write your solution in this file!
var employee={
    key:'employees',   
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    employee ={...employee}
    employee['streetAddress'] = '11 Broadway'; 
    return employee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name='Sam';
    employee.streetAddress= "12 Broadway";
    return employee;
}   
function deleteFromEmployeeByKey(employee, key){
    const newEmployee={...employee};
    delete newEmployee[key]
    return newEmployee;
   
} 
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee['name'];
    delete employee['streetAddress'];
    return employee;
}
