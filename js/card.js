import { userInputData } from "./main.js";
import { catImgMake } from "./api.js";
import { dogImgMake } from "./api.js";

/* useInputData에 따라 imgurl 받는 함수.   */
export function Peturl() {
    /* option에서 고양이, 강아지 선택하였을때
     api로 고양이, 강아지 이미지 받아옴.  */
    if (userInputData.includes("고양이")) {
        catImgMake().then((imgUrl) => {});
    }
    if (userInputData.includes("강아지")) {
        dogImgMake().then((imgUrl) => {});
    }
}
