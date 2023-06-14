// 모달의 답변을 저장할 배열
export let answerList = [];
export let content;

export function modal() {
    const btns = document.querySelectorAll(".popupBtn");

    /* btn의 개수별로 각 index 생성하여 카드 index와 button index 맞춤. */
    btns.forEach((btn, index) => {
        btn.addEventListener("click", () => openModal(index));
    });

    /* modal 여는 함수 */
    function openModal(index) {
        const modalWrap = document.querySelectorAll(".modalWrap")[index];
        const modalBody = modalWrap.querySelector(".modalBody");
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
/* @param {object} res chatGpt의 답변을 받음. */
export function getValueForModal(res) {
    content = res.choices[0].message.content.toString();
    return content;
}
