


// JAVASCRIPT ARRAY SLICE, SPLICE & SPLIT - Example Methods (2020)


/*Splice ( )
- Used for adding/removing elements from array
-Returns an array of removed elements
-Changes the array
-For adding elements: array.splice (index, number of elements, element)
-For removing elements: array.splice (index, number of elements)
-Can only be used for arrays
index parmater, number of objects to delete or remove, numbers elements to add
#YOU MUST CALL ARRAY AFTER RUNING CODE TOSEE THE CHANGES
 */

// #1
// let numbers = [1,2,3];
// numbers.splice(2,1,5);

// #2
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.splice(2, 1, "Lemon", "Kiwi");
// fruits.splice(1, 1, "Lemon", "Kiwi");

//#3
// Returns array from index to end of index range
// let array = [1, 2, 3, "hello world", 4.12, true];
// array.splice(0,4);

// #4
// removes index value 2 and 3 while adding 4,5,6 after the value 1
// let numbers = [1,2,3];
// numbers.splice(1,2,4,5,6);
// numbers 
// prints [ 1, 4, 5, 6 ]


// #5 
// run loop to delete index position and range 1 valie at a time:
// recursion
// let numbers = [1,2,3];
// numbers.splice(1,2,4,5,6);
// numbers 
// numbers.splice(2,1);
// numbers 
// numbers.splice(2,1);
// numbers 
// numbers.splice(2,1);
// numbers 
/***************************************************************************** */
/*Slice ( )
-Copies elements from an array
-Returns them as a new array
-Doesn’t change the original array
-Starts slicing from … until given index: array.slice (from, until)
-Slice doesn’t include “until” index parameter
-Can be used both for arrays and strings
-The slice( ) method copies a given part of an array and returns that copied part as a new  array. It doesn’t change the original array. */

//#1
// for strings
// let word =  "hello world";
// word.slice(0,5);
// shows hello

//#2
//STRINGS
// let word =  "hello world";
// word.slice(0,5,5,);


// //#3
// const str = ' Learn to program with ShaunP';
// console.log(str.slice(31));
// console.log(str.slice(4, 19));
// console.log(str.slice(-4));
// console.log(str.slice(-9, -5));


//#4
//ARRAYS
// must declare one lement vlaue above the number or array element I am trying to splice()
//A
// let num = [1,2,3];
// num.slice(0,1);
// returns [1]
//B
// let num1 = [1,2,3];
// num1.slice(0,2);
// returns [1,2]
// console.log("num="+num + " " +"num1=" + num1)
//C
// let num1 = [1,2,3];
// num1.slice(0,3);
// returns [1,2,3]

//D
// Show scope and pointer array
// let num = [1,2,3];
// num.slice(0,2);

// let newNum = num.slice(0,2);

// console.log("Original array = "+ num + " ",
// "New array in memmory = " + newNum)
// returns [1,2]



/***************************************************************************** */
/*Split ( ) ONLY FOR STRING
Divides a string into substrings
Returns them in an array
Takes 2 parameters, both are optional: string.split(separator, limit)
Doesn’t change the original string
Can only be used for strings
Slice( ) and splice( ) methods are for arrays. The split( ) method is used for strings. It divides a string into substrings and returns them as an array. It takes 2 parameters, and both are optional.
string.split(separator, limit);*/

//1
// first param is a seperator, 2nd is the limit or range per word
//  let x =  "hello world shaun p says hi";
// x.split(" ", 1)

// //#2
//  let y =  "hello, my, name, is slim, shaun";
//  y.split(" ", 3)

//#3
// Adds comme delimter
// let x =  "hello world shaun p says hi";
// x.split(" ", 4)
// returns [ 'hello', 'world', 'shaun', 'p' ]

//#4
// x.split("", 3)
// y.split("", 3)
// console.log( x + " " + y);


/***************************************************************************** */
// INDEX OF
// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// const searchTerm = 'shaun';
// const indexOfFirst = paragraph.indexOf(searchTerm);
// // use templating to add new word
// console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);


/***************************************************************************** */


/*Substring



*/

//#1
let text = 'programming is awesomse'
console.log(text.substring(0, 7) + " " + text.substring(7, 11))

//#2
// let str = 'Shaun P'
// let newStr = str.substring(str.length - 4)
// console.log(newStr);
// // returns un P


//#3
// Replaces oldS with newS in the string fullS
// function replaceString(oldS, newS, fullS) {
//   for (let i = 0; i < fullS.length; ++i) {
//     if (fullS.substring(i, i + oldS.length) == oldS) {
//       fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length)
//     }
//   }
//   return fullS
// }

// replaceString('World', 'Web', 'Brave New World')

//#5
//better method for replacing strings is as follows
// function replaceString(oldS, newS, fullS) {
//   return fullS.split(oldS).join(newS)
// }