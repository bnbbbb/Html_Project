// 로딩 창 표시
export function openLoading() {
    const mask = document.createElement("div");
    mask.id = "loading";
    const spinner = document.createElement("div");
    spinner.id = "loading-spinner";
    mask.append(spinner);
    document.querySelector("body").append(mask);
}

// 로딩 창 삭제
export function hideLoading() {
    const removeloading = document.getElementById("loading");
    removeloading.remove();
}
