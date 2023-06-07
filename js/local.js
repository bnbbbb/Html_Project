import { userInputData } from "./main.js";
import { catImgMake, dogImgMake } from "./petimgapi.js";
import { answerList } from "./modal.js";
import { modal } from "./modal.js";
import { createModalContent } from "./modal.js";
import { makeCard } from "./card.js";
let allCard = JSON.parse(localStorage.getItem("allCard"));
allCard = allCard ?? [];
console.log(allCard);

/*i
mgUrl을 받고, userInputData, answerList를 받아 
allCard에 저장해주는 함수
*/

export function saveCard(imgUrl) {
    const title = userInputData;
    const petImg = imgUrl;
    const answer = answerList;
    console.log(answerList.length);
    console.log(answerList);
    // console.log(answer.length);
    console.log("Save card with imgUrl:", petImg);
    // console.log("Save card with userInputdata:", userInputData);
    // console.log("Save card with answerList:", answerList[0]);
    // console.log("Save card with answerList:", answerList[1]);
    allCard.push({ title, petImg, answer });
    // allCard.pop();
    console.log(allCard);
    console.log("localcard:", allCard);
    localStorage.setItem("allCard", JSON.stringify(allCard));
    render();
}
/*
render를 통해서 로컬스토리지 생성해야 됨. 
*/

function render() {
    for (const item of allCard) {
        makeCard(item.title);
        modal();
        createModalContent();
        console.log(item);
    }
}
