import { chatGptApi } from "./chatapi.js";
import { data } from "./data.js";
const $petSpecies = document.querySelector("h2");
const $button = document.getElementById("btn");
const $input = document.querySelector("#question");
export let text = $petSpecies.textContent;
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
    // html main 부분에 "고양이"라는 단어가 포함되어 있는지 확인합니다
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
    // html main 부분에 "강아지"라는 단어가 포함되어 있는지 확인합니다
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
