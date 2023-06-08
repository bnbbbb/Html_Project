import { saveCard } from "./local.js";

/* imgUrl을 localstoage에 저장하기 위해서 imgUrl을 export함 */
export let imgUrl;
/*
고양이 사진 랜덤 api 생성.
*/
export function catImgMake() {
    return fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((response) => {
            imgUrl = response[0].url;
            console.log(imgUrl);
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
            imgUrl = response[0].url;
            console.log(imgUrl);
            saveCard(imgUrl);
            return imgUrl;
        });
}
