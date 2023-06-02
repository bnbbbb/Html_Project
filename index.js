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
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

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
// 리펙토링이 필요함.
function makeCard() {
    const createCard = document.querySelector(".card");
    const basic = document.createElement("div");
    const cardHeader = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardBtn = document.createElement("button");
    const cardFooter = document.createElement("div");
    basic.classList.add("card-main");
    cardHeader.classList.add("card-header");
    cardBody.classList.add("card-body");
    cardFooter.classList.add("card-body-footer");
    cardBtn.classList.add("popupBtn");
    cardHeader.append(cardBtn);
    cardBody.append(cardFooter);
    cardBtn.innerText = "답변";
    cardFooter.innerText = userInputData;

    basic.append(cardHeader, cardBody);
    if (userInputData.includes("고양이")) {
        const images = ["cat1.jpg", "cat2.jpg", "cat3.jpg"];
        const chosenImage = images[Math.floor(Math.random() * images.length)];
        const bgImages = document.createElement("img");
        bgImages.src = `./img/${chosenImage}`;
        bgImages.classList.add("card-img");
        cardHeader.append(bgImages);
    }
    if (userInputData.includes("강아지")) {
        const images = ["dog1.jpg", "dog2.jpg", "dog3.jpg"];
        const chosenImage = images[Math.floor(Math.random() * images.length)];
        const bgImages = document.createElement("img");
        bgImages.src = `./img/${chosenImage}`;
        bgImages.classList.add("card-img");
        cardHeader.append(bgImages);
    }

    createCard.append(basic);
}

// 답변을 클릭시 모달을 만들어주는 함수
// 리펙토링이 필요함.
function modal(res) {
    const body = document.querySelector("body");
    const modalWrap = document.createElement("div");
    modalWrap.classList.add("modalWrap");
    const modalBody = document.createElement("div");
    modalBody.classList.add("modalBody");
    modalBody.innerHTML = `<span class="closeBtn"> &times;</span>`;
    const gptAnswer = document.createElement("h4");
    gptAnswer.classList.add("gptAnswer");
    modalWrap.appendChild(modalBody);
    modalBody.appendChild(gptAnswer);
    body.appendChild(modalWrap);

    const btns = document.querySelectorAll(".popupBtn");

    btns.forEach((btn, index) => {
        btn.addEventListener("click", () => openModal(index));
    });

    // 모달을 열어주는 함수.
    function openModal(index) {
        const modalWrap = document.querySelectorAll(".modalWrap")[index];
        const modalBody = modalWrap.querySelector(".modalBody");

        console.log("answerList = " + answerList);
        const h4 = modalBody.querySelector("h4");
        const value = getValueForModal(index);
        h4.innerText = value;

        modalWrap.style.display = "block";

        const closeBtn = modalBody.querySelector(".closeBtn");
        closeBtn.addEventListener("click", () => closeModal(modalWrap));
    }

    // 모달을 닫아주는 함수.
    function closeModal(modalWrap) {
        modalWrap.style.display = "none";
    }
    // chatgpt의 대답을 리스트로 만들어서 각 modul
    function getValueForModal(index) {
        let content = res.choices[0].message.content.toString();

        answerList.push(content);
        res.choices[0].message.content = "";
        return answerList[index];
    }
}

let answerList = [];

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
            makeCard();
            modal(res);
            console.log(res.choices[0].message);

            console.log(userInputData);
            // console.log(res.choices[0].message.content);
        });
}
