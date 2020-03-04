const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );


function newEmployeeObject( employees ){
  console.log( 'in NewEmployeeObject', employees );
  let newEmployeeObject = {
    name: employees.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  }
  if ( employees.reviewRating<= 2){
    newEmployeeObject.bonusPercentage === 0;
  } else if ( employees.reviewRating === 3) {
    newEmployeeObject.bonusPercentage = .04;
  } else if ( employees.reviewRating === 4) {
    newEmployeeObject.bonusPercentage = .06
  } else if ( employees.reviewRating === 5) {
    newEmployeeObject.bonusPercentage = .1
  }
  if (employees.employeeNumber.length < 10000) {
    newEmployeeObject.bonusPercentage += .05
  } 
  if (Number(employees.annualSalary) > 65000) {
    newEmployeeObject.bonusPercentage -= .01
  }
  if (newEmployeeObject.bonusPercentage > .13){
    newEmployeeObject.bonusPercentage = .13
  }

  newEmployeeObject.totalBonus = Number(employees.annualSalary)*newEmployeeObject.bonusPercentage;
  newEmployeeObject.totalCompensation = newEmployeeObject.totalBonus + (Number(employees.annualSalary));
 
  console.log( newEmployeeObject );
}

for( let i in employees){
  console.log( 'in for loop');
  newEmployeeObject(employees[i]);
}

//newEmployeeObject ( employees[0] );
//newEmployeeObject ( employees[1] );
//newEmployeeObject ( employees[2] );
//newEmployeeObject ( employees[3] );
//newEmployeeObject ( employees[4] );
