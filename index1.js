import chatGptApi from "./api.js";
import modal from "./modal.js";
import makeCard from "./card.js";

let $petSpecies = document.querySelector("select");
let $button = document.getElementById("btn");
let $input1 = document.querySelector("#question1");
let $input2 = document.querySelector("#question2");
let userInputData;
let data = [
    {
        role: "system",
        content: "assistant는 고양이, 강아지 백과사전입니다.",
    },
    {
        role: "assistant",
        content: "나이 : 입력한 나이적고 개행해서 질문내용 작성해줘. ",
    },
];

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

    // 검색창에 고양이 강아지 이외의 동물들은 검색 못하게 만
    if ($petSpecies.value !== "고양이" && $petSpecies.value !== "강아지") {
        alert("고양이 강아지 선택해주세요. ");
    } else if (isNaN($input1.value)) {
        alert("나이는 숫자를 입력해주세요.");
    } else if ($input1.value === "") {
        alert("나이를 입력해주세요. ");
    } else if ($input2.value === "") {
        alert("질문을 입력해주세요. ");
    } else {
        userInputData =
            $petSpecies.value +
            "질문 입니다.\n" +
            "나이는 " +
            $input1.value +
            "이고 " +
            $input2.value;
        let noAnswer = nonKeyword.some((word) => userInputData.includes(word));

        $petSpecies.selectedIndex = 0;
        $input1.value = "";
        $input2.value = "";

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
});

// 검색하고나서 질문에 대한 카드 만드는 함수.