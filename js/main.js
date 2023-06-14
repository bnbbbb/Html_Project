import { chatGptApi } from "./api.js";
import { data } from "./data.js";
import {
    getAgeLabel,
    ageSelectedLabel,
    getGuideLabel,
    guideSelectedLabel,
    resetRadioButtons,
} from "./radiovalue.js";

const $petSpecies = document.querySelector("h2");
const $button = document.getElementById("btn");
const $input = document.querySelector("#question");

export let text = $petSpecies.textContent;
export let userInputData;
export let userQusetionData;

// 검색 했을 때 이벤트리스너로 호출.
$button.addEventListener("click", (e) => {
    e.preventDefault();
    getAgeLabel();
    getGuideLabel();

    let nonKeyword = [
        "여행",
        "일정",
        "점심",
        "도마뱀",
        "거북이",
        "동물원",
        "파도",
    ];

    // html main 부분에 "고양이"라는 단어가 포함되어 있는지 확인합니다
    if (text.includes("고양이")) {
        if (ageSelectedLabel === undefined) {
            alert("고양이 생애주기 선택해주세요.");
        } else if (guideSelectedLabel === undefined) {
            alert("고양이 종합가이드 선택해주세요.");
        } else if ($input.value === "") {
            alert("질문을 입력해주세요.");
        } else {
            userInputData = `고양이 질문입니다.
            나이 : ${ageSelectedLabel}
            질문 가이드 : ${guideSelectedLabel}
            ${$input.value}
            `;

            let noAnswer = nonKeyword.some((word) =>
                userInputData.includes(word)
            );
            $input.value = "";
            resetRadioButtons();

            if (noAnswer) {
                alert(`${nonKeyword} 검색할 수 없는 키워드 입니다.`);
            } else {
                data.push({
                    role: "user",
                    content: userInputData,
                });
                chatGptApi();
            }
        }
    }

    // html main 부분에 "강아지"라는 단어가 포함되어 있는지 확인합니다
    if (text.includes("강아지")) {
        if (ageSelectedLabel === undefined) {
            alert("강아지 생애주기 선택해주세요.");
        } else if (guideSelectedLabel === undefined) {
            alert("강아지 종합가이드 선택해주세요.");
        } else if ($input.value === "") {
            alert("질문을 입력해주세요.");
        } else {
            userInputData = `강아지 질문입니다.
            나이 : ${ageSelectedLabel}
            질문 가이드 : ${guideSelectedLabel}
            ${$input.value}
            `;

            let noAnswer = nonKeyword.some((word) =>
                userInputData.includes(word)
            );

            // $petSpecies.selectedIndex = 0;
            $input.value = "";
            resetRadioButtons();

            if (noAnswer) {
                alert(`${nonKeyword} 검색할 수 없는 키워드 입니다.`);
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
