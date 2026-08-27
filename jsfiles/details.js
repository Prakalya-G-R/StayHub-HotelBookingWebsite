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

import {hotels} from "./hotels.js";
import { amenityIcons } from "./hotels.js";

const params = new URLSearchParams(window.location.search);
const hotelId= params.get("id");

const hotel=hotels.find(h=> h.id==hotelId);
if(hotel){
    const hotelTitle=document.querySelector(".hotel-title");
    const mainImg=document.querySelector(".main-img");
    const otherImg=document.querySelector(".other-images");
    const priceval=document.getElementById("price-val");
    const checkin=document.getElementById("checkin");
    const checkout=document.getElementById("checkout");
    const guests = document.getElementById("guestCount");
    const priceper=document.getElementById("price-per-night");
    const amenities=document.querySelector(".amenities-list");
    
    hotelTitle.innerHTML=`
    <h1>${hotel.name}</h1>
    <div class="subtitle">
    <div class="hotel-city"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
    <p>${hotel.city}</p></div>
    <div class="rating-title"><p>${hotel.rating}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
    </div></div>`;


    mainImg.innerHTML=`
    <img src="${hotel.images.cover}" alt="${hotel.name}">`;

    otherImg.innerHTML=`
    <!--<img src="${hotel.images.room}" alt="room">-->
    <img src="${hotel.images.pool}" alt="pool">
    <img src="${hotel.images.restaurant}" alt="restaurant">`;

    // Display amenities
    amenities.innerHTML = "";

    Object.entries(hotel.amenities).forEach(([key, value]) => {
        if (value) {
            amenities.innerHTML += `
                <div class="amenity">
                    ${amenityIcons[key]}
                    <span>${key}</span>
                </div>
            `;
        }
    });

    priceper.textContent=`${hotel.price.toLocaleString("en-IN")}`;

    priceval.textContent=`${hotel.price.toLocaleString("en-IN")}`;

    guests.innerHTML=`${hotel.room.guests}`;

    const roomCapacity = hotel.room.guests;
    const totalPrice=hotel.price;

    const roomsInput = document.getElementById("rooms");
    const guestCount = document.getElementById("guestCount");
    const finalPrice = document.getElementById("price-val");
    const rupee = document.getElementById("rupee");

    function updateGuests() {
        const total = roomCapacity * Number(roomsInput.value);
        guestCount.textContent = `${total} Guests`;
    }
    function getNights(){
        if(!checkin.value || !checkout.value) return 0;
        const inDate = new Date(checkin.value);
        const outDate = new Date(checkout.value);
        const nights=(outDate-inDate)/(1000 * 60 * 60 * 24);
        return nights>0?nights:0;
    }
    function updateTotal(){
        const nights=getNights();
        if (nights === 0) {
        finalPrice.textContent = "Select dates";
        finalPrice.style.color="rgb(153, 153, 251)"
        rupee.style.display="none";
        return;
        }
        rupee.style.display="block";
        finalPrice.style.color="blue";
        const total = totalPrice * nights * Number(roomsInput.value);
        finalPrice.textContent=`${total.toLocaleString()}`;
    }

updateGuests();
updateTotal();
const today = new Date().toISOString().split("T")[0];
checkin.min = today;
checkout.min = today;
checkin.addEventListener("change", ()=>{
    checkout.min=checkin.value;
    if (checkout.value && checkout.value < checkin.value) {
        checkout.value = "";
    }
    updateTotal();
});
checkout.addEventListener("change",updateTotal);
roomsInput.addEventListener("change", () =>{
    updateGuests();
    updateTotal();
});

}