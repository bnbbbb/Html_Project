let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;
import { data } from "./data.js";
import { userInputData } from "./main.js";
import { makeCard } from "./card.js";
import { modal } from "./modal.js";

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
            makeCard();
            modal(res);
            console.log(res.choices[0].message);

            console.log(userInputData);
            // console.log(res.choices[0].message.content);
        });
    alert("아래 카드가 만들어 질때까지 기다려주세요.");
}
