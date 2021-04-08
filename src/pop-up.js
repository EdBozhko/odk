// find pop up activate and close buttons
const popUpCallbackLink = document.querySelector(".service-panel__item--callback");
const popUpCallback = document.querySelector(".pop-up--callback");
const closePopUpCallback = document.querySelector(".pop-up__close--callback")

const popUpCalculationLink = document.querySelector(".service-panel__item--calculation");
const popUpCalculation = document.querySelector(".pop-up--calculation");
const closePopUpCalculation = document.querySelector(".pop-up__close--calculation")

const popUpDownloadLink = document.querySelector(".service-panel__item--download-catalog");
const popUpDownload = document.querySelector(".pop-up--download");
const closePopUpDownload = document.querySelector(".pop-up__close--download")

const popUpOverlay = document.querySelector(".pop-up__overlay");

// add event listeners on pop up activate and close buttons, add and remove class pop-up-show
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


// function uncheck checkbox for mobile version hamberger
function uncheck() {
    document.getElementById("hamburger").checked = false;
}

// assigns url to input value tracking utm links
const link = window.location.href

document.getElementById('link--callback').value = link
document.getElementById('link--calculation').value = link
document.getElementById('link--download').value = link