/* 카드 생성되면 스크롤 제일 아래로 가서 카드가 바로 보이게 하는 함수. */
export function moveCardDown() {
    window.scrollTo(-1, document.body.scrollHeight);
}
