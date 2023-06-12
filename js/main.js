import { chatGptApi } from "./chatapi.js";
// import { saveCard } from "./localcard.js";
import { modal } from "./modal.js";
import { saveCard } from "./local.js";
import { data } from "./data.js";
// 메인 코드 작성
const $petSpecies = document.querySelector("h2");
const text = $petSpecies.textContent;
const $button = document.getElementById("btn");
const $input = document.querySelector("#question");
export let userInputData;
// 검색 했을 때 이벤트리스너로 호출.
$button.addEventListener("click", (e) => {
    e.preventDefault();
    let nonKeyword = [
        "여행",
        "일정",
        "점심",
        "도마뱀",
        "거북이",
        "동물원",
        "파도",
    ];
    if (text.includes("고양이")) {
        if ($input.value === "") {
            alert("질문을 입력해주세요.");
        } else {
            userInputData = "고양이 질문입니다." + "\n" + $input.value;
            let noAnswer = nonKeyword.some((word) =>
                userInputData.includes(word)
            );

            $input.value = "";

            if (noAnswer) {
                alert(nonKeyword + "\n검색할 수 없는 키워드 입니다. ");
            } else {
                data.push({
                    role: "user",
                    content: userInputData,
                });
                chatGptApi();
            }
        }
    }
    if (text.includes("강아지")) {
        if ($input.value === "") {
            alert("질문을 입력해주세요.");
        } else {
            userInputData = "강아지 질문입니다." + $input.value;
            let noAnswer = nonKeyword.some((word) =>
                userInputData.includes(word)
            );

            $petSpecies.selectedIndex = 0;
            $input.value = "";

            if (noAnswer) {
                alert(nonKeyword + "\n검색할 수 없는 키워드 입니다. ");
            } else {
                data.push({
                    role: "user",
                    content: userInputData,
                });
                chatGptApi();
            }
        }
    }
});
