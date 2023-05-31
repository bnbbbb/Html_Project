let $petSpecies = document.querySelector("select");
// let $button = document.querySelector("button");
let $button = document.getElementById("btn");
let $input1 = document.querySelector("#question1");
let $input2 = document.querySelector("#question2");
let userInputData;
// let createCard;
let data = [
    {
        role: "system",
        content: "assistant는 고양이, 강아지 백과사전입니다.",
    },
];
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

$button.addEventListener("click", (e) => {
    e.preventDefault();
    // 이상한 키워드가 나오게 되면 검색 거절 하는
    let nonKeyword = [
        "여행",
        "일정",
        "점심",
        "도마뱀",
        "거북이",
        "동물원",
        "파도",
    ];

    // 고양이 강아지 선택 안하면 alert으로 선택하게 만듦.
    if ($petSpecies.value !== "고양이" && $petSpecies.value !== "강아지") {
        alert("고양이 강아지 선택해주세요. ");
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
        // console.log($input1.value);
        // console.log($input2.value);
        console.log(userInputData);
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

function chatGptApi() {
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
            const createCard1 = document.querySelector(".card");
            const basic = document.createElement("div");
            const createCard2 = document.createElement("div");
            const createCard3 = document.createElement("div");
            const createCard4 = document.createElement("button");
            const createCard5 = document.createElement("div");
            // createCard.append(document.createElement(".card-header"));
            basic.classList.add("card-main");
            createCard2.classList.add("card-header");
            createCard3.classList.add("card-body");
            createCard4.classList.add("card-header-is_closed");
            createCard5.classList.add("card-body-footer");
            createCard4.id = "popupBtn";
            createCard2.append(createCard4);
            createCard3.append(createCard5);
            createCard5.innerText = userInputData;

            basic.append(createCard2, createCard3);
            createCard1.append(basic);
            // console.log(createCard5);
            // document;
            // document.querySelector(".card").innerText =
            //     res.choices[0].message.content;
        });
}
