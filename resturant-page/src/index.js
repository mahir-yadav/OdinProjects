import './style.css';
import { load_homepage } from "./home.js";
import { load_menu } from "./menu.js";

const buttons = document.querySelectorAll("nav > button");
const content = document.getElementById("content");

buttons[0].classList.add("active");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        content.innerHTML = '';
        content.className = '';
        content.id = 'content';

        if (button.textContent === "Home") {
            load_homepage(content);
        } else if (button.textContent === "Menu") {
            load_menu(content);
        } else if (button.textContent === "About") {
        }
    });
});

load_homepage(content);
