// variable - Most Basic Building Block
// variables - Store, Access, Modify === Value
// Declare, Assignment Operator, Assign Value
// assign value later, modify existing

// let name = 'John';
// let address, zip, state;
// address = '123 Main St';
// zip = '12345';
// state = 'CA';
// console.log(address, zip, state);
// console.log(name);

// can contain digits, letters, underscore, $
// must start with letter, $ or _
// no keyword
// cannot start with number

// case sensitive - fullname vs fullname
// let random123_$ = 'random';
// console.log(random123_$);

// const mention = 'John\'s courses are the best';
// console.log(mention);

// numbers
// loosely Typed = don't declare type

// const number = 34;
// let pants = 2.466;
// pants = 'are great';
// console.log(number);
// console.log(pants);
// const number2 = 2.456;
// console.log(number2);

// Modulus (%) operator returns the remainder after integer division
// let number = 40;
// number += 5;
// console.log(number);
// number -= 5;
// console.log(number);
// number *= 5;
// console.log(number);
// number /= 5;
// console.log(number);

// const number2 = 10 % 3;
// console.log(number2);

// Implicit Type Conversion
// const name = 'John';
// const lastName = 'Jordan';
// const fullName = name + ' ' + lastName;
// console.log(fullName);


// const number = 4; 
// const number2 = 5;
// const result = number + number2;
// console.log(result)


// const value = name - lastName;
// console.log(value);


// let number3 = '10'
// let number4 = '23'
// const result2 = number3 - number4;
// const result3 = number3 * number4;
// const result4 = number3 / number4;
// const result5 = number3 % number4;
// const result6 = number3 + number4;
// console.log(result2);  // -13
// console.log(result3);  // 230
// console.log(result4); // 0.43478260869565216
// console.log(result5);  // 10 
// console.log(result6);   // 1023

// data types - 7 types 
// 1. string
// const text = 'some text'
// console.log(typeof text)
// // 2. number
// const number = 10
// console.log(typeof number)
// // 3. boolean
// let value1 = true
// let value2 = false
// console.log(typeof value1)
// console.log(typeof value2)

// // 4. null
// const value3 = null
// console.log(typeof value3)

// // 5. undefined
// let value4 = undefined
// console.log(typeof value4)

// // 6. symbol
// const value5 = Symbol('some value') 
// console.log(typeof value5)

// // 7. object
// const value6 = { name: 'John' }
// console.log(typeof value6)

// Arrays - [], 0 based index
// const friends = ['John', 'Paul', 'George', 'Ringo', 45, undefined, null];
// let bestFriend = friends[0];
// console.log(bestFriend);
// friends[4] = 'Yoko';
// console.log(friends[0]); // John
// console.log(friends[5])
// console.log(friends[4])

// Functions - declare, invoke
// declare
// function greet(name){
//     console.log(`Hello there ${name}`);
// }

// // invoke
// greet('Anna');
// greet('Susy');
// greet('Caroline');

// return fuction

function calculate(value){
    return `The value in cm is ${value * 2}`;
}

const width = calculate(10);
const height = calculate(20);
const dimensions = [width, height];
console.log(dimensions);