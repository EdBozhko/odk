
let popUpCallbackLink = document.querySelector(".service-panel__item--callback");
let popUpCallback = document.querySelector(".pop-up--callback");
let closePopUpCallback = document.querySelector(".pop-up__close--callback")

let popUpCalculationLink = document.querySelector(".service-panel__item--calculation");
let popUpCalculation = document.querySelector(".pop-up--calculation");
let closePopUpCalculation = document.querySelector(".pop-up__close--calculation")

let popUpDownloadLink = document.querySelector(".service-panel__item--download-catalog");
let popUpDownload = document.querySelector(".pop-up--download");
let closePopUpDownload = document.querySelector(".pop-up__close--download")

let popUpOverlay = document.querySelector(".pop-up__overlay");



popUpCallbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUpCallback.classList.add("pop-up-show")
    popUpOverlay.classList.add("pop-up-show")
})

closePopUpCallback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUpCallback.classList.remove("pop-up-show")
    popUpOverlay.classList.remove("pop-up-show")
})

popUpCalculationLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUpCalculation.classList.add("pop-up-show")
    popUpOverlay.classList.add("pop-up-show")
});

closePopUpCalculation.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUpCalculation.classList.remove("pop-up-show")
    popUpOverlay.classList.remove("pop-up-show")
})

popUpDownloadLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUpDownload.classList.add("pop-up-show")
    popUpOverlay.classList.add("pop-up-show")
});

closePopUpDownload.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUpDownload.classList.remove("pop-up-show")
    popUpOverlay.classList.remove("pop-up-show")
})

popUpOverlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUpCallback.classList.remove("pop-up-show")
    popUpCalculation.classList.remove("pop-up-show")
    popUpDownload.classList.remove("pop-up-show")
    popUpOverlay.classList.remove("pop-up-show")
})