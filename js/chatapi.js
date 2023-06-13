import { data } from "./data.js";
import { userInputData } from "./main.js";
import { Peturl } from "./card.js";
import { modal } from "./modal.js";
import { getValueForModal } from "./modal.js";
import { openLoading, hideLoading } from "./loading.js";
import { moveCardDown } from "./scroll.js";

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
            // console.log(res.choices[0].message);

            // console.log(userInputData);
            hideLoading();
            moveCardDown();
            // console.log(res.choices[0].message.content);
        });
    openLoading();
    // performAsyncTask();
    // alert("아래 카드가 만들어 질때까지 기다려주세요.");
}
