/*
고양이 사진 랜덤 api 생성.
*/
import { saveCard } from "./local.js";
// 로컬스토리지
// let allCard = JSON.parse(localStorage.getItem("allCard"));
// allCard = allCard ?? [];

export function catImgMake() {
    return fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((response) => {
            const imgUrl = response[0].url;
            console.log(imgUrl);
            // const url = imgUrl;
            // allCard.push(url);
            // console.log(allCard);
            saveCard(imgUrl);
            return imgUrl;
        });
}
/*
강아지 사진 랜덤 api 생성.
*/
export function dogImgMake() {
    return fetch("https://api.thedogapi.com/v1/images/search")
        .then((response) => response.json())
        .then((response) => {
            const imgUrl = response[0].url;
            console.log(imgUrl);
            saveCard(imgUrl);

            return imgUrl;
        });
}
