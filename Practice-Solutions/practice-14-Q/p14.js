let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + "from Apna college channel";
console.log(h2.innerText);

let divs = document.querySelectorAll(".box");
// divs[0].innerText = " new unique value 1";
// divs[1].innerText = " new unique value 2";
// divs[2].innerText = " new unique value 3";
i = 1;
for(div of divs) {
    div.innerText =` new unique value ${i}`;
    i++;
}
console.dir(divs)