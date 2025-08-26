// Tournary operators
{
    let age = 10;
    let result = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
    console.log(result); //The result is You are not eligible to vote
};

{
    let a = 1;
    let result = a != 1 ? "Heads" : "Tails";
    console.log(result);
}

// Loops and Strings
//for loop
//Print  I Am Learning Javascript upto 5times
{
    for (let i = 1; i <= 5; i++) {
        console.log("I Am Learning Javascript"); //It's Execute 5 times
    }
    console.log("Loop has Ended ")
}

// Calculate sum of first 1 to 5 numbers
{
    let sum = 0;
    for (a = 1; a <= 5; a++) {
        sum = sum + a;

    }
    console.log("sum = ", sum);
    console.log("Loop has Ended");
}

//Calculate sum of 1 to n numbers 
{
    let sum = 0;
    let n = 100;
    for (a = 1; a <= n; a++) {
        sum = sum + a;
    }
    console.log("sum = ", sum);
    console.log("Loop has Ended");
}

// Declaring the variable outsite the code block
let i; {
    for (i = 1; i <= 5; i++) {
        console.log("i =", i);
    }
    console.log("Loop has Ended");
}
console.log("Final i =", i);

//Infinite loops :its never ends

//while loops
{
    let i=11;
    while(i<=15){
    console.log("i=",i);
    ++i;
}
}

{
    let num =289;
    while(num===25){
        console.log("The given number is same ",num);
    }if(num !=25){
        console.log("The given number is not same",num)        
    }
}

//do-while loop

{
  let i=1;
    do {
        console.log("i=",i);
        i++;
    }while (i<=5);
}

//for of loop (string,arrays) 
{
    let str ="HEY";
    for(let a of str){   //iterator -> character
        console.log("a =",a)
    }
}
{
    let str ="HELLO";

    let size =0;
    for(let a of str){   //iterator -> character
        console.log("a =",a);
        size++;
    }
    console.log("string size =",size);
}
         
//for in loop (objects,arrays we will use) in for in loops it will return key value

let student ={
    name :"Rahul Kumar",
    age : 20,
    cgpa :7.5,
    isPass: true
};
for(let key in student){
    console.log("key =",key , " &&  value =",student[key]);
}