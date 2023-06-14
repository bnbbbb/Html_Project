/* 첫 번째 radiobutton 값 저장하는 함수 */
const optionsage = document.getElementsByName("age");
export let ageSelectedLabel;

const optionsguide = document.getElementsByName("guide");
export let guideSelectedLabel;

export function getAgeLabel() {
    for (let i = 0; i < optionsage.length; i++) {
        if (optionsage[i].checked) {
            ageSelectedLabel = optionsage[i].parentNode.innerText;
            break;
        }
    }
}

/* 두 번째 radiobutton 값 저장하는 함수 */
export function getGuideLabel() {
    for (let i = 0; i < optionsguide.length; i++) {
        if (optionsguide[i].checked) {
            guideSelectedLabel = optionsguide[i].parentNode.innerText;
            break;
        }
    }
}

/* button 누르면 radiovalue 초기화 하는 함수. */
export function resetRadioButtons() {
    for (let i = 0; i < optionsage.length; i++) {
        optionsage[i].checked = false;
    }
    for (let i = 0; i < optionsguide.length; i++) {
        optionsguide[i].checked = false;
    }
}
