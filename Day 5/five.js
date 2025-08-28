// Strings on js 
{
 let str = "Apna-college"
 console.log(str);
 console.log(str.length);
 console.log(str[0]);
}
// Template Literals in js 
{
 let Laptop ={
    company_name : "ASUS",          // syntax : `string text ${expression} string text`
    Price:59.999,
    
 };
 let output =`The name of the a laptop is ${Laptop.company_name} price is INR:${Laptop.Price} rupees`;
 console.log(output);
 console.log(typeof output);
}
// Example
{
 let string = `This is a literal string ${1+3+4+5} `;
 console.log(string);
}
//Escape character  /n  /t
{
 let text = "Asus\n59.999";   // string length is 11    Escape character is a one string
 console.log(text);
 console.log(text.length);
}

//String Methods 
  //1) str.toUpperCase

{
    let myname =" i am syed Shahbaz";
    myname.toUpperCase();       //original string is same "myname"
    console.log(myname);
    
    let mynewname =" i am syed Shahbaz";
    let newname=mynewname.toUpperCase();            //new string is printed  "newname"
    console.log(newname);
}
   
   //2) str.tolowerCase
{
    let my ="I AM SYED SHAHBAZ";
    my.toLowerCase();       //original string is same "myname"
    console.log(my);
    
    let mynewname ="I AM SYED SHAHBAZ";
    let newname=mynewname.toLowerCase();            //new string is printed  "newname"
    console.log(newname);
}

    //3) str.trim()  "remove whitespaces"

{
    let string ="     Welcome to India from Sri lanka ";
    string =  string.trim();
    console.log(string);
}

    //4) str.slice  "return part of the string "

{
    let text = "my name is syed shahbaz";
    console.log(text.slice(0,6));    // the resuult is my nam   0 to 5 indexes
}

    //5) str.concat (concatination)
{
    let a = "i am ";
    let b = "a engineering student";
    console.log(a.concat(b));
}

    //6) str.replace 
{
    let example = " i am learning javascript";
    console.log(example.replace("learning","gaining knowlegde of "));

}

    // 7) str.charAt(idx)
{
    let  str= "I-am-a-student";
    console.log(str.charAt(4));

}