/*
고양이 사진 api
*/

export function catImgMake() {
    fetch("https://cataas.com/api/cats?tags=cute")
        .then((response) => response.json())
        .then((response) => {
            const imgnum = Math.floor(Math.random() * 10 + 1);
            const catImgUrl = `https://cataas.com/cat/${response[imgnum]._id}`;
            console.log(catImgUrl);
            return catImgUrl;
        });
}

export function dogImgMake() {
    fetch("https://api.thedogapi.com/v1/images/search")
        .then((response) => response.json())
        .then((response) => {
            const dogImgUrl = response[0].url;
            console.log(dogImgMake);
            return dogImgUrl;
        });
}
