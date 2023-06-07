export let answerList = [];
let count = 0;
/* @param {object} res chatGpt의 답변을 받음. */
export function modal() {
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

    /* btn의 개수별로 각 index 생성하여 카드 index와 button index 맞춤. */
    btns.forEach((btn, index) => {
        btn.addEventListener("click", () => openModal(index));
    });

    function openModal(index) {
        const modalWrap = document.querySelectorAll(".modalWrap")[index];
        const modalBody = modalWrap.querySelector(".modalBody");

        console.log("answerList = " + answerList);
        console.log("answerList.lenght = " + answerList.length);

        modalWrap.style.display = "block";

        const closeBtn = modalBody.querySelector(".closeBtn");
        closeBtn.addEventListener("click", () => closeModal(modalWrap));
    }

    /* modal 닫는 함수. */
    function closeModal(modalWrap) {
        modalWrap.style.display = "none";
    }
}
/* getValueForModal 함수로 chatgpt 답변을 answerList로 저장. */
export function getValueForModal(res) {
    let content = res.choices[0].message.content.toString();
    console.log("count: ", count);
    answerList.push(content);
    // const h4 = document.querySelectorAll("h4");
    // const value = answerList[count];
    // h4[count].innerText = value;
    // count++;
    console.log("count: ", count);
    console.log("answerList = " + answerList);
    console.log("answerList.lenght = " + answerList.length);
    // res.choices[0].message.content = "";
    return answerList;
}
export function createModalContent() {
    const h4 = document.querySelectorAll("h4");
    const value = answerList[count];
    h4[count].innerText = value;
    count++;
}
