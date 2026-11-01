import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import "./styles.css";
import homeImg from "./asset/resto-home.jpg";

const content = document.getElementById("content");
const btns = document.getElementById("btns");

home(content);
// document.body.style.backgroundImage = `url(${homeImg})`;

btns.addEventListener("click", (e) => {
    if(e.target.id === "btns") return;

    content.textContent = "";
    if(e.target.id === "home-btn") home(content);
    else if(e.target.id === "menu-btn") menu(content);
    else if(e.target.id === "abou-btn") about(content);
});