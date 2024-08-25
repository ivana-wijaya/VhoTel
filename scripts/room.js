// room list
const roomList = [
    {
        id: 1,
        name: "Deluxe with Jakarta City View",
        image: "./assets/room/room-1.png",
        guest: "2",
        bed: "2",
        bathroom: "1",
        icon: {
            guest: "./assets/room/guest-icon.svg",
            bed: "./assets/room/bed-icon.svg",
            bathroom: "./assets/room/bathroom-icon.svg"
        },
        price: "2.500.000"
    },
    {
        id: 2,
        name: "Deluxe with Jakarta City View",
        image: "./assets/room/room-2.png",
        guest: "2",
        bed: "2",
        bathroom: "1",
        icon: {
            guest: "./assets/room/guest-icon.svg",
            bed: "./assets/room/bed-icon.svg",
            bathroom: "./assets/room/bathroom-icon.svg"
        },
        price: "2.500.000"
    },
    {
        id: 3,
        name: "Standard with Jakarta City View",
        image: "./assets/room/room-3.png",
        guest: "2",
        bed: "2",
        bathroom: "1",
        icon: {
            guest: "./assets/room/guest-icon.svg",
            bed: "./assets/room/bed-icon.svg",
            bathroom: "./assets/room/bathroom-icon.svg"
        },
        price: "3.000.000"
    },
    {
        id: 4,
        name: "Standard with Jakarta View",
        image: "./assets/room/room-4.png",
        guest: "2",
        bed: "2",
        bathroom: "1",
        icon: {
            guest: "./assets/room/guest-icon.svg",
            bed: "./assets/room/bed-icon.svg",
            bathroom: "./assets/room/bathroom-icon.svg"
        },
        price: "3.000.000"
    },
    {
        id: 5,
        name: "Premium with Jakarta View",
        image: "./assets/room/room-5.png",
        guest: "2",
        bed: "2",
        bathroom: "1",
        icon: {
            guest: "./assets/room/guest-icon.svg",
            bed: "./assets/room/bed-icon.svg",
            bathroom: "./assets/room/bathroom-icon.svg"
        },
        price: "5.000.000"
    },
    {
        id: 6,
        name: "Family with Jakarta View",
        image: "./assets/room/room-1.png",
        guest: "2",
        bed: "2",
        bathroom: "1",
        icon: {
            guest: "./assets/room/guest-icon.svg",
            bed: "./assets/room/bed-icon.svg",
            bathroom: "./assets/room/bathroom-icon.svg"
        },
        price: "2.500.000"
    }
]

// get the container element
const roomListElement = document.querySelector(".room-list");

// variable yang akan menampung dynamic element
let htmlToAdd = "";
roomList.map(room => {
    htmlToAdd += `
    <div class="room-item">
        <img class="room-image" src="${room.image}" alt="room image">
        <div class="room-information">
            <h3>${room.name}</h3>
            <div class="room-info">
                <div>
                    <img src="${room.icon.guest}" alt="guest icon">
                    <p>${room.guest} Guest</p>
                </div>
                <div>
                    <img src="${room.icon.bed}" alt="bed icon">
                    <p>${room.bed} Bed</p>
                </div>
                <div>
                    <img src="${room.icon.bathroom}" alt="bathroom icon">
                    <p>${room.bathroom} Bathroom</p>
                </div>
            </div>
            <div class="room-price">
                <button>Learn More</button>
                <div>
                    <p>Start From</p>
                    <p>Rp. ${room.price} <span>/Night</span></p>
                </div>
            </div>
        </div>
    </div>
    `
})

// append / tambahkan element yg sudah di mapping ke HTML
roomListElement.innerHTML = htmlToAdd