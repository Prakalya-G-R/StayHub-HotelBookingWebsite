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


const sortedHotels = [...hotels];
sortedHotels.sort((a,b)=>a.recommended-b.recommended);

function ListHotels(sortedHotels){
    const hotelList=document.getElementById("hotel-list");
    hotelList.innerHTML="";

    sortedHotels.forEach(hotel=>{
    const priority = [
        "wifi",
        "pool",
        "spa",
        "gym",
        "parking",
        "restaurant"
    ];
    const amenityNames = {
        wifi: "WiFi",
        pool: "Pool",
        parking: "Parking",
        restaurant: "Restaurant",
        spa: "Spa",
        gym: "Gym",
    };

    const amenities = priority
        .filter(key => hotel.amenities[key])
        .slice(0, 3)                     
        .map(key => `
        <span class="amenity" id="${key}">
            ${amenityNames[key]}
        </span>
    `)
        .join("");
        hotelList.innerHTML+=`
        <div class="hotel-card" data-id="${hotel.id}">
        <img id="hotel-image" src="${hotel.images.cover}" alt="${hotel.name}">
        <div class="hotel-content">
        <p class="hotel-name">${hotel.name}</p>
        <p class="hotel-city"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>${hotel.city}</p>
        <p class="hotel-rating"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
        ${hotel.rating}</p>
        <div class="hotel-amenities">
        ${amenities}</div>
        <p class="hotel-price"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee-icon lucide-indian-rupee"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>
            ${hotel.room[0].price.toLocaleString()}<span class="per-night">/night</span></p>
        </div></div>`
    });
}

const checkindate = document.getElementById("checkin");
const checkoutdate = document.getElementById("checkout");
const today = new Date().toISOString().split("T")[0];

    checkindate.min = today;
    checkoutdate.min = today;

    checkindate.addEventListener("change", () => {
    checkoutdate.min = checkindate.value;

    if (checkoutdate.value && checkoutdate.value < checkindate.value) {
        checkoutdate.value = "";
    }
});

const form=document.querySelector(".searchcontent");

form .addEventListener("submit", (e) =>{
    e.preventDefault();

    const destination=document.getElementById("destsearch").value.trim();
    const checkin=document.getElementById("checkin").value;
    const checkout=document.getElementById("checkout").value;
    const guests=document.getElementById("guests").value;
    const rooms=document.getElementById("rooms").value;

    const params=new URLSearchParams({
        city: destination,
        checkin, checkout, guests, rooms 
    });
    window.location.href=`hotels.html?${params.toString()}`;
});

const params = new URLSearchParams(window.location.search);
const city = params.get("city");
const checkin = params.get("checkin");
const checkout = params.get("checkout");
const guests = Number(params.get("guests"));
const rooms = Number(params.get("rooms"));

let hotelsToDisplay = sortedHotels;

if (city) {
    hotelsToDisplay = sortedHotels.filter(hotel => hotel.city.toLocaleLowerCase() === city.toLocaleLowerCase());
}


function fillSearchBar() {
    const params = new URLSearchParams(window.location.search);

    document.getElementById("destsearch").value = params.get("city") || "";
    document.getElementById("checkin").value = params.get("checkin") || "";
    document.getElementById("checkout").value = params.get("checkout") || "";
    document.getElementById("guests").value = params.get("guests") || "";
    document.getElementById("rooms").value = params.get("rooms") || "";
}

fillSearchBar();

ListHotels(hotelsToDisplay);

document.querySelectorAll(".hotel-card").forEach(card=>{
    card.addEventListener("click" , (e)=>{
        e.preventDefault();

    const destination=card.querySelector(".hotel-name").textContent.trim();
    const checkin=document.getElementById("checkin").value;
    const checkout=document.getElementById("checkout").value;
    const guests=document.getElementById("guests").value;
    const rooms=document.getElementById("rooms").value;
    const id = card.dataset.id;

        

    const params=new URLSearchParams({
        city: destination,
        id,
        checkin, checkout, guests, rooms 
    });
    window.location.href=`hotel_details.html?${params.toString()}`;
        
    });
});
