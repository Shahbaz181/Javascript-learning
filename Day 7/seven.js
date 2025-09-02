// Functions

function newfunct(){
    console.log("Welcome to my Profile");
    console.log("I am a Front-end Developer ");
}
newfunct();



function myname(msg){  //input -> parameter
   console.log(msg)   
}
myname("I am Syed Shahbaz");  //argument

//Creating a function which can sum of 2 numbers
function mysum(a,b){
    let sum = a+b ;
    console.log(`The sum of ${a} + ${b} is ${sum}`)
}
mysum(10,11);

// another method for sum of 2 numbers
function sumof(m,n){
    s = m + n;
    return s ;
}
let res = sumof(m = 4,n = 5);
console.log(`The sum of ${m} + ${n} is : ${res}`);

//Creating a function which can multiply of 2 numbers by using arrow funnction 

const Arrowmulti = (x, y)=>{
    console.log(x*y);
};

const printhello = () =>{
    console.log("Hello World");
};
//single line of code for Arrow function
const print=()=> console.log("Arrow function for single line of code ");

// For each loops 

let array =  [1,2,3,4,5,6];

array.forEach (function printval(val) {       //val is value at each index
    console.log(val);
});

let arr =[1,2,3,4,5,6];

arr.forEach((number) => {
    console.log(number);
});

let city = ["hyderabad","delhi","mumbai"];

city.forEach((city)=>{
    console.log(city.toUpperCase());
});

let hero = ["Spiderman","Ironman","Thor"];

hero.forEach((hero,i,arr)=>{
    console.log(hero.toUpperCase(),i,arr);
});

// Some more imp array methods 

// 1) Map

let nums = [1,3,6,9];               //how to use map 
nums.map((numbers)=>{
    console.log(numbers**3)
});

// making new array by using map
let int = [10,20,30,40];

let newArray = int.map((val)=>{
    return val**2;
});

console.log(newArray);

// 2) Filter 

// example of even number
let anum = [1,2,3,4,5,6,7,8,9,10,12,15,16,17,18,20,23];

let newary =anum.filter( (val) =>{
    return val %2 ==0;
});
console.log(newary);

//example for arry number is > 3
let  arry= [1,2,3,4,5,6,7,8,9,10,12,15,16,17,18,20,23];

let greater =arry.filter( (val) =>{
    return val > 3 ;
});
console.log(greater);

// 3) Reduce

// example of sum of integer 
let integer = [1,2,3,4,5,6,7,8,9,10];

const sum = integer.reduce((res ,cur)=>{
    return res  + cur ;
});
console.log(sum);

// example of lesser integer

let newarry = [102,10,100,15];

const less = newarry.reduce((res,cur)=>{
    return res < cur ? res : cur;                         //  res is previous integer  , cur is current if res numbers is less than current then it stores the res if not it stores current 
});
console.log(less);