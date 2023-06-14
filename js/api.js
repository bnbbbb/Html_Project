import { data } from "./data.js";
import { Peturl } from "./card.js";
import { modal } from "./modal.js";
import { getValueForModal } from "./modal.js";
import { openLoading, hideLoading } from "./loading.js";
import { moveCardDown } from "./scroll.js";
import { saveCard } from "./local.js";

/* imgUrl을 localstoage에 저장하기 위해서 imgUrl을 export함 */
export let imgUrl;

/* chatgpt 비동기 통신.  */
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;
export function chatGptApi() {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            Peturl();
            modal();
            getValueForModal(res);

            hideLoading();
            moveCardDown();
        });
    openLoading();
}
/*
고양이 사진 랜덤 api 생성.
*/
export function catImgMake() {
    return fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((response) => {
            imgUrl = response[0].url;
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
            saveCard(imgUrl);
            return imgUrl;
        });
}
