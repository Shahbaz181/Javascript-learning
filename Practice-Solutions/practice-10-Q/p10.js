// Solution 

let companies = ["Bloomberg","Microsoft","Uber","Google"," IBM","Netflix"];
//1.
companies.shift()
console.log(companies);
//2.
companies.splice(1,1,"Ola");
console.log(companies);
//3.
companies.push("Amazon");
console.log(companies);