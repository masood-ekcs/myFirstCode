/* var num = 157
console.log("num Input = " + num)

var lastDigit = num % 10;
console.log("lastDigit = " + lastDigit)

console.log("num 1 = " + num)
num = num / 10
console.log("num 2 = " + num)

var secondDigit = num % 10;
console.log("secondDigit = " + secondDigit)

console.log("num 3 = " + num)
num = num / 10
console.log("num 4 = " + num)

var firstDigit = num % 10
console.log("firstDigit = " + firstDigit)
console.log("num 5 = " + num)



var num = 157
var target = 159
var lastDigit = num % 10;
num = Math.floor(num / 10)
var secondDigit = num % 10;
num = Math.floor(num / 10)
var firstDigit = num % 10;
console.log(lastDigit, secondDigit, firstDigit);

var string_num = target.toString()

first_digit = parseInt(string_num[0])
second_last = parseInt(string_num[1])
last_digit = parseInt(string_num[2])
console.log(first_digit, second_last, last_digit);

if (target == Math.pow(first_digit, 3) + Math.pow(second_last, 3) + Math.pow(last_digit, 3)) {
    console.log(target + " is an armstrong number");
}
else {
    console.log(target + " is not an armstrong number");

}
 */

/* //Armstrong Number
for (var i = 1000; i <= 9999; i++) {
    var num = i
    var ft = num % 10
    num = Math.floor(num / 10)
    var snd = num % 10
    num = Math.floor(num / 10)
    var td = num % 10
    num = Math.floor(num / 10)
    var fr = num % 10

    if (i == Math.pow(ft, 4) + Math.pow(snd, 4) + Math.pow(td, 4) + Math.pow(fr, 4)) {
        console.log(i)
    }
}
 */

// Check if the number is prime 
var num = 17
var isPrime = true
for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false
    }
}
if (isPrime == true) {
    console.log("Prime")
}
else {
    console.log("Not Prime")
}



// Check if the number is prime 
var num = 8
for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        console.log("Non Prime Number")
    }
}
/* }
if (isPrime == true) {
    console.log("Prime")
}
else {
    console.log("Not Prime")
}
 */