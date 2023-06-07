let answerList = [];

/* @param {object} res chatGpt의 답변을 받음. */
export function modal(res) {
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

    /* btn의 개수별로 각 index 생성하여 카드 index와 button index 맞춤. */
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

    /* modal 닫는 함수. */
    function closeModal(modalWrap) {
        modalWrap.style.display = "none";
    }
    /* getValueForModal 함수로 chatgpt 답변을 answerList로 저장. */
    function getValueForModal(index) {
        let content = res.choices[0].message.content.toString();

        answerList.push(content);
        res.choices[0].message.content = "";
        return answerList[index];
    }
}
