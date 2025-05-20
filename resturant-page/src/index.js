import './style.css';
import { load_homepage } from "./home.js";
const content = document.getElementById("content");
const buttons = document.querySelectorAll("nav button")
// console.log(buttons)
buttons[0].classList.add("active");
load_homepage(content);