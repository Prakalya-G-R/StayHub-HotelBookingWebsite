const toggle=document.querySelector(".nav-toggle");
const menu=document.querySelector(".nav-menu");
const close=document.querySelector(".menu-close");

toggle.addEventListener("click", ()=>{
    menu.classList.add("active");
    toggle.style.display="none";
});

close.addEventListener("click", ()=>{
    menu.classList.remove("active");
    toggle.style.display="flex";
});


import { hotels } from "./hotels.js";


const params = new URLSearchParams(window.location.search);
const city = params.get("city");
const checkin = params.get("checkin");
const checkout = params.get("checkout");
const guests = params.get("guests");
const rooms = params.get("rooms");
const id = params.get("id");
const total = params.get("total");
const room = params.get("room");


const hotel=hotels.find(h => h.id==id);

const checkInDate = new Date(checkin);
const checkOutDate = new Date(checkout);

const options = {
    day: "numeric",
    month: "short"
};

const formattedCheckIn = checkInDate.toLocaleDateString("en-GB", options);
const formattedCheckOut = checkOutDate.toLocaleDateString("en-GB", options);


if(hotel){
    const selectedRoom = hotel.room.find(r => r.name==room);
    const selected=document.querySelector(".selected-room");

    selected.innerHTML=`
        <div class="selected-room-content">
            <img class="selectedRoomImg" src="${selectedRoom.image}" alt="${room}">
            <div class="selected-room-info">
                <div class="selected-room-names">
                    <p class="room-name">${room}</p>
                    <p class="hotel-name">${hotel.name}, <span>${hotel.city}</span></p>
                </div>
                <div class="selected-room-details">
                    <p class="selected-checkin-out">${formattedCheckIn}<span id="line">-</span>${formattedCheckOut}</p>
                    <p class="selected-guests">${guests}</p>
                </div>
            </div>
            <div class="total"><p class="selected-total"><svg id="rup"xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee-icon lucide-indian-rupee"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>${total.toLocaleString("en-IN")}</p></div>
        </div>
    `;
}

const contents=document.querySelectorAll(".step-content");
const steps=document.querySelectorAll(".step");
const line=document.querySelectorAll(".line");
let current=0;
function nextStep(){
    contents[current].classList.remove("active");
    if(current<line.length) line[current].classList.add("active");
    current++;
    if(current<steps.length){
        contents[current].classList.add("active");
        steps[current].classList.add("active");
    }
}
document.querySelector(".next-btn").addEventListener("click", nextStep);