import { userInputData } from "./main.js";
import { catImgMake } from "./petimgapi.js";
import { dogImgMake } from "./petimgapi.js";

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
        catImgMake().then((catImgUrl) => {
            const bgImages = document.createElement("img");
            bgImages.classList.add("card-img");

            console.log(catImgUrl);
            bgImages.style.backgroundImage = `url(${catImgUrl})`;
            cardHeader.append(bgImages);
        });
    }
    if (userInputData.includes("강아지")) {
        dogImgMake().then((dogImgUrl) => {
            const bgImages = document.createElement("img");
            bgImages.classList.add("card-img");

            console.log(dogImgUrl);
            bgImages.style.backgroundImage = `url(${dogImgUrl})`;
            cardHeader.append(bgImages);
        });
    }

    createCard.append(basic);
}
