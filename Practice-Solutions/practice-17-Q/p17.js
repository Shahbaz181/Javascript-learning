let modebutton = document.querySelector("#mode");
let currentmode = "light";

modebutton.addEventListener("click", () => {
    if (currentmode === "light"){
        currentmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
    } else {
        currentmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
    }
    console.log(currentmode);
});