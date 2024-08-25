// slider
const imageSlider = Array.from(document.querySelectorAll(".room-list div"));
const slideToLeftElement = document.querySelector(".slider .left");
const slideToRightElement = document.querySelector(".slider .right");

slideToLeftElement.addEventListener("click", () => {
    imageSlider.map(image => {
        image.classList.remove("slide-to-right")
    })
})

slideToRightElement.addEventListener("click", () => {
    imageSlider.map(image => {
        image.classList.add("slide-to-right")
    })
})