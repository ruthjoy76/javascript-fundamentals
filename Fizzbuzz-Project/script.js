//Solving Fizz Buzz
/* Write a program that takes a user's input and prints the numbers 
from one to the number the user entered. However, for multiples of three print 
Fizz instead of the number and for the multiples of five print Buzz. For numbers 
which are multiples of both three and five print fizzbuzz. 
*/

/* Plan 
allowing users to enter number
prompt
list of numbers 1 top the number that we enter
3 = fizz
5 = buzz
15 = fizzbuzz */

/* pseudo code
1. When a user inputs a number
2. loop from 1 to the entered number
3. If the current number is divisible by 3 then print fizz
4. If the current number is divisible by 5 then print buzz
5. If the current number is divisible by both 3 and 5 then print fizzbuzz
6. If the current number is not divisible by any means. Just print the number.
*/

let input = Number(prompt("Please enter the number you would like to FizzBuzz"));

for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i)
    }
    
}


    

