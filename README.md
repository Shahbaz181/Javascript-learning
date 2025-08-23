# 🚀 JavaScript Learning – Day 1

Today, I started learning the basics of **JavaScript**. Below are the key topics I covered with examples.

---

## 📌 Topics Covered

### 1. Printing in JavaScript
Using `console.log()` to print messages.
console.log("Learning JavaScript");
console.log("Hello I'm Syed Shahbaz");

text

### 2. Variables (`var`, `let`, `const`)
- `var` → old way (function scoped)
- `let` → modern, block scoped
- `const` → constant, cannot be changed

let myname = "What are you doing";
var my = "Syed Shahbaz";
const Age = 20;
const pi = 3.14;

text

3. Data Types (Primitive)
JavaScript has 7 primitive data types:

Number

String

Boolean

Undefined

Null

BigInt

Symbol

javascript
let x = null;             // null
let y;                    // undefined
let isFollow = true;      // boolean
let n = BigInt("1234");   // bigint
let m = Symbol("Hello");  // symbol
text

### 4. Reassigning Variables
Reassigning values to already declared variables.
fullname = "Tom Holland";
age = 30;
Profession = "Actor";
console.log(fullname, age, Profession);

text

5. Block Scope
Variables inside a block ({}) are independent if declared with let or const.

{
  let age = 20;
  console.log(age); // 20
}

{
  let age = 18;
  console.log(age); // 18
}


### 6. Special Notes
Some extra things I learned:
- `typeof null` returns `"object"` (quirk in JS 🧐)
- `const` must be initialized at declaration
- Emoji and special characters work inside strings → `"hello 😊"`
![Uploading Day 1.png…]()

<img width="500" height="500" alt="Screenshot 2025-08-24 023710" src="https://github.com/user-attachments/assets/f36311da-47af-4f4e-a749-073117ed02a9" />
<img width="500" height="500" alt="Day 1" src="https://github.com/user-attachments/assets/7d633f97-7e9d-4edc-8a4b-e02653156ae4" />
<img width="500" height="500" alt="Screenshot 2025-08-23 203731" src="https://github.com/user-attachments/assets/59828aa5-86e1-4a47-9729-fccb9aa77ddf" />



## ✅ Summary (Day 1)
- Learned how to print with `console.log()`
- Understood `var`, `let`, `const`
- Practiced primitive data types
- Saw the difference between block scope variables
- Discovered quirks like `typeof null`
