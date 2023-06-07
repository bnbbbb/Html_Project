/*
고양이 사진 랜덤 api 생성.
*/
export function catImgMake() {
    return fetch("https://cataas.com/api/cats?tags=cute")
        .then((response) => response.json())
        .then((response) => {
            const imgnum = Math.floor(Math.random() * 10 + 1);
            const catImgUrl = `https://cataas.com/cat/${response[imgnum]._id}`;
            return catImgUrl;
        });
}
/*
강아지 사진 랜덤 api 생성.
*/
export function dogImgMake() {
    return fetch("https://api.thedogapi.com/v1/images/search")
        .then((response) => response.json())
        .then((response) => {
            const dogImgUrl = response[0].url;
            console.log(dogImgUrl);
            return dogImgUrl;
        });
}
