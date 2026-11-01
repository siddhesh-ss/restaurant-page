import "./styles.css";
import homeImg from "./asset/resto-home.jpg"
import welcomeImg from "./asset/welcome.png"

export default function (content) {
    document.body.style.backgroundImage = `url(${homeImg})`;
    const para = document.createElement("p");
    const welcome = document.createElement("img");
    welcome.src = welcomeImg;
    welcome.style.width = "40rem";
    para.textContent = "Hey! It's my restaurant page.\nIt's really good and what to say!? I don't have any words.\nThank You for visiting my page.";
    para.style.whiteSpace = "pre-line";
    para.style.fontFamily = `"Satisfy", cursive`;
    content.appendChild(welcome);
    content.appendChild(para);
}