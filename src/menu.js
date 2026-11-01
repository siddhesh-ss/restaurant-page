import menuImg from "./asset/resto-menu.jpg";
import food1 from "./asset/dosa.jpg";
import food2 from "./asset/fishfry.jpg";
import food3 from "./asset/biryani.jpg";
import food4 from "./asset/misal-pav.jpg";
import food5 from "./asset/sabudana-wada.jpg";

const foods = [food1, food2, food3, food4, food5];
export default function (content) {
    document.body.style.backgroundImage = `url(${menuImg})`;
    const menuContainer = document.createElement("div");
    function cardGenerator(pic, name, rate) {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const title = document.createElement("h5");
        const prize = document.createElement("p");
        title.textContent = name;
        image.src = pic;
        prize.textContent = rate;
        card.append(image, title, prize);
        card.classList.add("card");
        menuContainer.appendChild(card);
    }
    cardGenerator(foods[0], "Dosa", "60/-");
    cardGenerator(foods[1], "Fish Fry", "220/-");
    cardGenerator(foods[2], "Biryani", "90/-");
    cardGenerator(foods[3], "Misal Pav", "110/-");
    cardGenerator(foods[4], "Sabudana Wada", "40/-");
    menuContainer.classList.add("menuCont");
    content.appendChild(menuContainer);
}