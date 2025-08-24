// # Day -- 2
 
//  Non Primitive - Datatypes 
//    1 - Objects

let  Student = {
    age : 23,
    name : "Shahbaz",
    cgpa : 8.50,
    isPass : true,
};

console.log(Student.isPass);

console.log(Student["cgpa"]);

Student ["age"] = Student ["age"] +2;
console.log(Student["age"]);

Student ["name"] = "Syed Shahbaz";
console.log(Student["name"]);

// Operators & conditional Statements
/*Arithmetic operator + - * /  */

let n = 5;
let m = 6;

console.log("n = ", n, " m = ",m);
console.log("n + m = ", n + m); 
console.log("n - m = ", n - m); 
console.log("n * m = ", n * m); 
console.log("n / m = ", n / m); 

/* Modulus 
    rule to remember
    If n < m, then n % m = n.
    If n = m, then n % m = 0.
    If n > m, you keep subtracting m from n until what’s left is less than m → that’s the remainder.*/

console.log("n % m = ", n % m); 
{
  let n = 5 ;
  let m = 2;
  console.log("n % m = ", n % m);
  console.log("n ** m = ", n ** m);   
};

//Exponentiation
console.log("n ** m = ", n ** m); 

/* Unary Operators
   1) -> Increment   symbol "++" 
   2) -> Decrement   symbol "--" */

{
    let a = 2;
    let b = 5;
    console.log("a = ", a,"b =",b);
    a++;
    console.log("a = ", a,"b =",b);
};

// post increment
{
    let a = 4;
    let b = 3;
    console.log("a = ", a,"b =",b);
    console.log("a++ = ",++a,"b++ =",++b);
};

//pre increment
{
    let a= 2; 
    let b= 3;
    console.log("a = ", a,"b =",b);
    console.log("a++ = ", a++,"b++ =",b++);
    console.log("a = ", a,"b =",b);
    console.log("a++ = ", a++,"b++ =",b++);
    console.log("a = ", a,"b =",b);
    console.log("a++ = ", a++,"b++ =",b++);
    console.log("a = ", a,"b =",b);
};

    // post decrement
{
    let x = 1;
    let y = 2;
    console.log("x = ",x, "y = ",y);
    console.log("x--",x--,"y--",y--);
    console.log("x = ",x, "y = ",y);
    console.log("x--",x--,"y--",y--);
     console.log("x = ",x, "y = ",y);
};

    // pre decrement
{
    let x = 1;
    let y = 2;
    console.log("x = ",x, "y = ",y);
    console.log("--x",--x,"--y",--y);
    console.log("--x",--x,"--y",--y);
};

/* Assignment operators */
 // =  ,  += ,  -= , *= ,   %= ,  **= 

{
    a = 6;
    a+=4;
    console.log("a = ", a);
}

{
    a = 6;
    a-=4;
    console.log("a = ", a);
}

{
    a = 6;
    a*=5;
    console.log("a = ", a);
}

{
    a = 6;
    a/=5;
    console.log("a = ", a);
}

{
    a = 6;
    a **= 2;
    console.log("a = ", a);
}