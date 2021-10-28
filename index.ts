const minValue: number = 0
const MAX_SAFE_INTEGER: number = 9007199254740991
const amount: number = 100

/**
 * This function generates "length" numbers from "minValue" to "maxValue"
 * and returns an "Array<number>"
 *
 * @param minValue the lowest value of numbers acceptable when filling the output (inclusive)
 * @param maxValue the highest value of numbers acceptable when filling the output (inclusive)
 * @param length the amount of numbers to generate and fill into the output
 * @returns Array<number> filled with numbers with the minimum value of minValue and the maximum value of maxValue
 */
function makeArray(minValue: number, maxValue: number, length: number): Array<number>{
    let myNumbers: Array<number> = []
    for (let index = 0; index < length; index++){
        let randomNumber = (Math.round(Math.random() * (maxValue - minValue)) + minValue);
         myNumbers.push(randomNumber);
    }
    return myNumbers;
}

/**
 * This function sorts through an array provided in "myNumbers"
 * and determines all odd numbers which it then returns in an Array<number>
 * @param myNumbers an array of numbers to sort through
 * @returns an array of odd numbers picked from myNumbers
 */
function sortOdd(myNumbers: Array<number>): Array<number> {
    let result: Array<number> = []
    for (let item of myNumbers) {
        if (item % 2 == 1){
            result.push(item)
        }
    }
    return result;
}

/**
 * This function indicates the prime status of a passed in number
 * @param num a number to determine whether it is prime
 * @returns a boolean which indicates whether the input num is a prime
 */
function isPrime(num: number) {
    if(num < 2) return false;

    for (let k = 2; k < Math.ceil(Math.sqrt(num)); k++){
        if( num % k == 0){
            return false;
        }
    }
    return true;
}

/**
 * This function sorts through an array provided in "myNumbers"
 * and determines all prime numbers which it then returns in an Array<number>
 *
 * @param myNumbers an array of numbers to sort through
 * @returns an array of prime numbers picked from myNumbers
 */
function sortPrimes(myNumbers: Array<number>): Array<number> {
    let result: Array<number> = []
    for (let item of myNumbers) {
        if (isPrime(item)){
            result.push(item)
        }
    }
    return result;
}

/**
 * This function sorts through an array provided in "myNumbers" and determines all numbers
 * which are divisible by the "divider" and it then returns in an Array<number>
 *
 * @param myNumbers an array of numbers to sort through
 * @param divider the number by which the divisibility is checked
 * @returns an array of prime numbers picked from myNumbers
 */
function sortDivisible(myNumbers: Array<number>, divider: number): Array<number> {
    let result: Array<number> = []
    for (let item of myNumbers) {
        if (item % divider == 0){
            result.push(item)
        }
    }
    return result;
}
// Generate the core array
const myNumbers: Array<number> = makeArray(minValue, MAX_SAFE_INTEGER, amount);

// Find all subsets
const even: Array<number> = sortDivisible(myNumbers, 2);
const odd: Array<number> = sortOdd(myNumbers);
const primes: Array<number> = sortPrimes(odd);
const divisible2: Array<number> = even
const divisible4: Array<number> = sortDivisible(even, 4)
const divisible6: Array<number> = sortDivisible(even, 6)
const divisible8: Array<number> = sortDivisible(even, 8)

// Final printing of each subset
console.log("All numbers");
console.log(myNumbers);

console.log("Even numbers");
console.log(even);

console.log("Odd numbers");
console.log(odd);

console.log("Odd and prime numbers");
console.log(primes);

console.log("Even and divisible by 2");
console.log(divisible2)

console.log("Even and divisible by 4");
console.log(divisible4)

console.log("Even and divisible by 6");
console.log(divisible6)

console.log("Even and divisible by 8");
console.log(divisible8)
