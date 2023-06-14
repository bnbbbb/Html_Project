import { userInputData } from "./main.js";
import { modal } from "./modal.js";
import { imgUrl } from "./api.js";
import { content } from "./modal.js";

const createCard = document.getElementById("card");
const createModal = document.getElementById("modal");

// catCards 배열을 로컬 스토리지로 저장.
let catCards = JSON.parse(localStorage.getItem("catCards"));
catCards = catCards ?? [];
let dogCards = JSON.parse(localStorage.getItem("dogCards"));
dogCards = dogCards ?? [];
let count = 0; // 카드 및 모달 개수 추적 변수

/* 
cat.html에서는 catrender()를 통해 고양이 카드만 보여줌
dog.html에서는 dogrender()를 통해 강아지 카드만 보여줌 
*/
if (window.location.href.includes("cat.html")) {
    catrender();
} else {
    dogrender();
}

/*
imgUrl을 받고, userInputData, answerList를 받아 
catCards, dogCards에 저장해주는 함수
*/
export function saveCard() {
    if (userInputData.includes("고양이")) {
        const title = userInputData;
        const petImg = imgUrl;
        const answer = content;

        catCards.push({ title, petImg, answer });
        localStorage.setItem("catCards", JSON.stringify(catCards));

        catrender();
    } else if (userInputData.includes("강아지")) {
        const title = userInputData;
        const petImg = imgUrl;
        const answer = content;

        dogCards.push({ title, petImg, answer });
        localStorage.setItem("dogCards", JSON.stringify(dogCards));

        dogrender();
    }
}

/*
    로컬스토리지에 있는 배열을 렌더링해서 html에 전달.
*/
export function catrender() {
    createCard.innerHTML = "";
    createModal.innerHTML = "";
    for (const item of catCards) {
        card(item);
        modalContent(item);
        count++; // 카드 및 모달 개수 추적
    }
}
export function dogrender() {
    createCard.innerHTML = "";
    createModal.innerHTML = "";
    for (const item of dogCards) {
        card(item);
        modalContent(item);
        count++; // 카드 및 모달 개수 추적
    }
}

/* 
카드 및 이미지 생성 함수 
*/

function card(item) {
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

    cardBtn.innerText = "답변보기";
    cardFooter.innerText = item.title;

    cardHeader.appendChild(cardBtn);
    cardBody.appendChild(cardFooter);

    basic.append(cardHeader, cardBody);

    const bgImages = document.createElement("img");
    bgImages.classList.add("card-img");
    bgImages.style.backgroundImage = `url(${item.petImg})`;

    cardHeader.appendChild(bgImages);

    createCard.appendChild(basic);
}

/* 
모달 생성 함수
*/
function modalContent(item) {
    const modalWrap = document.createElement("div");
    modalWrap.classList.add("modalWrap");

    const modalBody = document.createElement("div");
    modalBody.classList.add("modalBody");
    modalBody.innerHTML = `<span class="closeBtn">X</span>`;

    const gptAnswer = document.createElement("h4");
    gptAnswer.classList.add("gptAnswer");

    modalWrap.appendChild(modalBody);
    modalBody.appendChild(gptAnswer);
    createModal.appendChild(modalWrap);
    modal();

    const value = item.answer;
    gptAnswer.innerText = value;
}
