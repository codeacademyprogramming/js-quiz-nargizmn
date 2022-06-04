/*
    1. Write an expression which selects every <p> element in the document (write in all ways you know)
*/

const pElements = document.querySelectorAll('p');
const pElements1 = document.getElementsByTagName('p');
const pElements2 = document.getElementsByName('p');

/*
    2. Write an expression which selects every element with the wrapper class in the document (write in all ways you know)
*/

const elements = document.querySelectorAll('.wrapper');
const elements1 = document.getElementsByClassName('wrapper');

/*
    3. You are given an array [1,2,3,4,5,6,7,8,9,10], create a new array based on this one which only contains numbers can divide by two (with built in array methods)
*/

const givenArray = [1,2,3,4,5,6,7,8,9,10];
const filteredNumbers = givenArray.filter(isEven);
console.log(filteredNumbers);

function isEven(number) {
    if(number%2==0){
        return true;
    }
    return false;
}

/*
    4. You are given an array [1,2,3,4,5,6,7,8,9,10], create a new array based on this one which is multiplied versions of every element in the array(with built in array methods)
*/

const givenArray1 = [1,2,3,4,5,6,7,8,9,10];
const multipleNumbers = givenArray1.map(multipleNumbersFunc);
console.log(multipleNumbers);

function multipleNumbersFunc (number){
    return number *= 2;
}

/*
    5. Write a custom method which accepts an array and returns an array with all the values duplicated
    input: [1,2,3,4,5]
    expected output: [1,2,3,4,5,1,2,3,4,5]
*/
const myArray = [1,2,3,4,5];

function duplicate (array){
    return array.concat(array)
}

console.log(duplicate(myArray));

/*
    6. Write a custom method with name 'multiply' which can be invoked like the example below:
    multiply(2)(3)(5)
    expected output: 30
*/



function multiply(number){
    return function(x) { 
        return number*x; 
};
}

console.log(multiply(2)(3));

// i couldn't finish this task, because i hate you



/*
    7. [1,2,3,4,5,6,7,8,9,10], check with an array method if the array only contains numbers greater than 5
*/
const givenArray2 = [1,2,3,4,5,6,7,8,9,10];
const result = givenArray2.every(isGreater);
console.log(result);

function isGreater (number){
    if(number>5) return true;
    return false;
}



/*
    8. [1,2,3,4,5,6,7,8,9,10], check with an array method if the array at least contains one element which divides by 2
*/

const givenArray3 = [1,2,3,4,5,6,7,8,9,10];
const someResult = givenArray3.some(ifContains);
console.log(someResult);

function ifContains(number){
    if(number%2 !== 0) return false;
    return true;
}

/*
    9.  What will be the output of the following code?
        var Employee = {
            company: 'xyz'
        }
        var emp1 = Object.create(Employee);
        delete emp1.company
        console.log(emp1.company);
*/

    //Output will be 'xyz';



/*
    10. I wrote a function, how can i know how many arguments provided to my function
*/

function argCount (num){
    return arguments.length;
}


/*
    11. You are given an array like [1,2,3,4], how can you empty array? (write in )
    input: [1, 2, 3, 4]
    output: []
*/

const givenArray5 = [1,2,3,4];

const length = givenArray5.length;

for(let i =0; i<length; i++){
    givenArray5.pop();
}

console.log(givenArray5);