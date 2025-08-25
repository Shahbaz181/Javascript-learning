/* Comparision  operators */
 // ==  ,  == ,  != 

 {
 let n =15;
 let m = 15;
 console.log("15 == 15", n==m);  // The result is true
};

{
 let a =10;
 let b = 5;
 console.log("10 == 5", a==b);  // The result is false
};


{
 a = 3;
 b = 5
 console.log("a != b", a!=b);   // The result is true
};

{
 const a=4;
 const b=4;
 console.log("a != b", a!=b);   // The result is false
};


{
 let a =44;                     //->number
 let b ="7";                    // -> string ->(converted to number ) number 
 console.log("44 == 7", a==b);  // The result is false
};

//  === , !==  

{
 let a = 20;
 let b =27;
 console.log("20 !== 27" , a !== b);         // The result is true
};

{
 let a = 32;
 let b = 58;
 console.log("32 === 58" , a===b);       // The result is false
};


{
 let a = 3;
 let b = 5
 console.log("The value ",a,"is >",b , a>b);   // The result is false
};

{
 let a = 6;
 let b = 6;
 console.log("The value ",a,"is >=",b , a>=b);   // The result is true
};


// Logical Operators  ( And && , OR || , Not !)

{
 let a = 6;
 let b = 12;

 let cond1 = a<b ;      // The result is true
 let cond2 = a!==b;     // The result is true

 console.log("condition 1 && condition 2  =",cond1 && cond2);       // The result is true
};

{
    let a = 50;
    let b = 30;

    console.log("a<b || a==b", a<b || a==b);        // The result is false
    console.log("!(a==b)",!(a==b));                 // The result is true
    console.log("a>b !(a==b)", !(a==b));            // The result is true
}


/* Conditional Statements
 1) if statement */
{
 let age = 17 ;

 if (age >=18){
     console.log("You are eligible to Vote");
 };                                                          // The result is You are not eligible to Vote
 if (age<=18){
     console.log("You are not eligible to Vote");
 };
}

{
 let mode ="light";
 let screen;

 if(mode ==="dark"){
     screen = "Black";
 }                                                           // The result is  White

 if (mode ==="light"){
     screen= "White";
 }
 console.log(screen);
}

//  2) if-else statement 

{
 let mode ="dark";
 let screen;

 if(mode ==="dark"){
     screen = "Black";
 }
 else{
     screen = "White"
}                                                                 // The result is Black
 console.log(screen);
}


{
let age =20 

if(age>=18){
     console.log("You are eligible to Vote");
}else{                                                                // The result is You are eligible to Vote
     console.log("You are not eligible to Vote");
}
}

// Even or odd prodlem 
{
let num = 7;
if (num % 2 === 0) {
    console.log(num ,"is Even");                                    //The ersult is 7 'is odd'
} else {
    console.log(num ," is Odd");
}
}
//Divisible by 5 and 11
{
let num = 55;
if (num % 5 === 0 && num % 11 === 0) {
    console.log("Divisible by both 5 and 11");              // The result is Divisible by both 5 and 11
} else {
    console.log("Not divisible by both");
}
}

 // 3) else-if statement

{              
     // Q) Student is in which year of College
     let year = 3;
     let Student;

     if(year=== 1){
          console.log("Student is in 1st year");
     }
     else if(year===2){
          console.log("Student is in 2nd year");
     }
     else if(year===3){
          console.log("Student is in 3rd year");
     }
     else{
          console.log("Student is in 4th year");
     }
}


     // Q) Traffic Light System

let signal ="Green";
let traffic;

     if(signal ==="Red"){
          traffic="STOP 🔴";
     }else if(signal ==="Yellow"){
          traffic ="PLEASE WAIT 🟡 ";
     }else{
          traffic="GO 🟢";
     }
     console.log(traffic)


