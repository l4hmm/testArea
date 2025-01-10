import "./styles.css";

console.log("Hello, World!");

const content = document.querySelector("#content");

const heading = document.createElement("h1");
heading.textContent = "The Pierogi House";
heading.classList.add("content-heading");

const para = document.createElement("p");
para.textContent = "Our Menu";

const menuImage1 = document.createElement("img");
menuImage1.src = require("./menuImage1.jpg");
menuImage1.alt = "Plate of food";
menuImage1.width = 500;
menuImage1.height = 300;

const menuImage2 = document.createElement("img");
menuImage2.src = require("./menuImage2.jpg");
menuImage2.alt = "Plate of food";
menuImage2.width = 500;
menuImage2.height = 300;

const menuImage3 = document.createElement("img");
menuImage3.src = require("./menuImage3.jpg");
menuImage3.alt = "Plate of food";
menuImage3.width = 500;
menuImage3.height = 300;

content.appendChild(heading);
content.appendChild(para);
content.appendChild(menuImage1);
content.appendChild(menuImage2);
content.appendChild(menuImage3);

