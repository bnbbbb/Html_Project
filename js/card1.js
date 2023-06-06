import { userInputData } from "./main.js";

export function makeCard() {
    const createCard = document.querySelector(".card");
    const basic = document.createElement("div");
    const cardHeader = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardBtn = document.createElement("button");
    const cardFooter = document.createElement("div");
    basic.classList.add("card-main");
    cardHeader.classList.add("card-header");
    cardBody.classList.add("card-body");
    cardFooter.classList.add("card-body-footer");
    cardBtn.classList.add("popupBtn");
    cardHeader.append(cardBtn);
    cardBody.append(cardFooter);
    cardBtn.innerText = "답변";
    cardFooter.innerText = userInputData;

    basic.append(cardHeader, cardBody);
    if (userInputData.includes("고양이")) {
        const images = ["cat1.jpg", "cat2.jpg", "cat3.jpg"];
        const chosenImage = images[Math.floor(Math.random() * images.length)];
        const bgImages = document.createElement("img");
        bgImages.src = `./img/${chosenImage}`;
        bgImages.classList.add("card-img");
        cardHeader.append(bgImages);
    }
    if (userInputData.includes("강아지")) {
        const images = ["dog1.jpg", "dog2.jpg", "dog3.jpg"];
        const chosenImage = images[Math.floor(Math.random() * images.length)];
        const bgImages = document.createElement("img");
        bgImages.src = `./img/${chosenImage}`;
        bgImages.classList.add("card-img");
        cardHeader.append(bgImages);
    }

    createCard.append(basic);
}
