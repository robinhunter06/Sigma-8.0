// let para1 = document.createElement('p');
// para1.innerText = "hey I am red!";
// document.querySelector("body").append(para1);

// para1.classList.add("red");

// let h3 = document.createElement('h3');
// h3.innerText = "hey I am blue!";
// document.querySelector("body").append(h3);

// h3.classList.add("blue");

// let div = document.createElement("div");
// document.querySelector("body").append(div);

// div.classList.add("black");

// let h1 = document.createElement('h1');
// h1.innerText = "I'm in div";
// document.querySelector("div").append(h1);

// h1.classList.add("blue");

// let p = document.createElement('p');
// p.innerText = "Me too";
// document.querySelector("div").append(p);

// p.classList.add("red");



//Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”

let btn = document.createElement("button");
let inp = document.createElement("input");
btn.innerText = "Click me";

document.querySelector("body").append(btn);
document.querySelector("body").append(inp);

inp.setAttribute("placeholder", "Username");
btn.setAttribute("id", "btn");

btn.querySelector("#btn");
btn.classList.add("black");
