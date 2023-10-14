// Write your solution in this file!
const employee = { name : "Sam", streetAddress:"11 Broadway" }; 

function updateEmployeeWithKeyAndValue(employee, key="streetAddress", value="11 Broadway"){ 
    return { ...employee, 
        [key]:value, 
    }; 
} 
updateEmployeeWithKeyAndValue(); 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key='streetAddress',value='12 Broadway'){ 
employee[key]=value;
return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,'streetAddress','12 Broadway');

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee[key]};
    delete newEmployee[key];
    return newEmployee;
}

// deleteFromEmployeeByKey(employee,'name');

function destructivelyDeleteFromEmployeeByKey(employee, key="name"){
delete employee[key];
return employee;
}

destructivelyDeleteFromEmployeeByKey(employee,'name');