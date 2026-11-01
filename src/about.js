import aboutImg from "./asset/aboutresto.jpg";
export default function (content) {
    document.body.style.backgroundImage = `url(${aboutImg})`;
    const para = document.createElement("p");
    para.textContent = "Aaand that's it...\n☎️ : 8421083261\n📍: BokadDaraa";
    para.style.whiteSpace = "pre-line";
    para.style.textAlign = "center";
    content.appendChild(para);
}