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
    {
        role: "assistant",
        content: "나이 : 입력한 나이적고 개행해서 질문내용 작성해줘. ",
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
    } else if ($input1.value == isNaN) {
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
        // console.log($input1.value);
        // console.log($input2.value);
        console.log(userInputData);
        // option 초기화
        $petSpecies.selectedIndex = 0;
        // 첫 번째 검색창 초기화
        $input1.value = "";
        // 두 번째 검색창 초기화
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
function makeImg() {
    // // if ($petSpecies.value === "고양이") {
    // if (userInputData.includes("고양이")) {
    //     const images = ["cat1.jpg", "cat2.jpg", "cat3.jpg"];
    //     const chosenImage = images[Math.floor(Math.random() * images.length)];
    //     const bgImages = document.createElement("img");
    //     const cardImage = document.querySelector(".card-header");
    //     bgImages.src = `./${chosenImage}`;
    //     bgImages.classList.add("card-img");
    //     cardImage.append(bgImages);
    // } else if (userInputData.includes("강아지")) {
    //     const images = ["dog1.jpg", "dog2.jpg", "dog3.jpg"];
    //     const chosenImage = images[Math.floor(Math.random() * images.length)];
    //     const bgImages = document.createElement("img");
    //     const cardImage = document.querySelector(".card-header");
    //     bgImages.src = `./${chosenImage}`;
    //     bgImages.classList.add("card-img");
    //     cardImage.append(bgImages);
    // }
}

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
    // makeImg();
    basic.append(cardHeader, cardBody);
    if (userInputData.includes("고양이")) {
        const images = ["cat1.jpg", "cat2.jpg", "cat3.jpg"];
        const chosenImage = images[Math.floor(Math.random() * images.length)];
        const bgImages = document.createElement("img");
        // const cardImage = document.querySelector(".card-header");
        bgImages.src = `./${chosenImage}`;
        bgImages.classList.add("card-img");
        cardHeader.append(bgImages);
    }
    if (userInputData.includes("강아지")) {
        const images = ["dog1.jpg", "dog2.jpg", "dog3.jpg"];
        const chosenImage = images[Math.floor(Math.random() * images.length)];
        const bgImages = document.createElement("img");
        // const cardImage = document.querySelector(".card-header");
        bgImages.src = `./${chosenImage}`;
        bgImages.classList.add("card-img");
        cardHeader.append(bgImages);
    }

    createCard.append(basic);
}
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
    const btns = document.getElementsByClassName("popupBtn");
    const modals = document.getElementsByClassName("modalWrap");
    const closeBtn = document.getElementsByClassName("closeBtn");
    console.log(btns.length);
    let funcs = [];
    function Modal(num) {
        return function () {
            // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
            btns[num].onclick = function () {
                modals[num].style.display = "block";
                console.log(num);
            };

            // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
            closeBtn[num].onclick = function () {
                modals[num].style.display = "none";
            };
        };
    }

    // 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
    for (var i = 0; i < btns.length; i++) {
        funcs[i] = Modal(i);
    }

    // 원하는 Modal 수만큼 funcs 함수를 호출합니다.
    for (var j = 0; j < btns.length; j++) {
        funcs[j]();
    }

    // Modal 영역 밖을 클릭하면 Modal을 닫습니다.
    window.onclick = function (event) {
        if (event.target.getElementById == "modal") {
            event.target.style.display = "none";
        }
    };

    for (let i in res.choices.length) {
        document.querySelector(".gptAnswer").innerText =
            res.choices[i].message.content;
    }
}
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
            console.log(userInputData);
            // 카드 만드는 함수 실행
            makeCard();
            // 모달 만드는 함수 실행
            modal(res);
            // console.log(btns.length + "asdjkhasd");
            // console.log(btns.length);
            // const answer = document.querySelector(".gptAnswer");
            // let ansfunc = [];
            // function getAnswer(n) {
            //     answer.innerText = res.choices[n].message.content;
            // }
            // for (let i = 0; i < answer.length; i++) {
            //     ansfunc[i] = getAnswer[i];
            // }
            // for (let i in res.choices.length) {
            //     document.querySelector(".gptAnswer").innerText =
            //         res.choices[i].message.content;
            // }
            console.log(
                (document.querySelector(".gptAnswer").innerText =
                    res.choices[0].message.content)
            );
            console.log(res.choices.length);
        });
}
