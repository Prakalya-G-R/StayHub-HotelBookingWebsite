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


const destinations = [
  "Chennai",
  "Hyderabad",
  "Mumbai",
  "Goa",
  "Jaipur",
  "Udaipur",
  "Manali",
  "Shimla",
  "Pondicherry",
  "Darjeeling",
  "Ooty",
  "Coorg"
];

const input=document.getElementById("destsearch");
const suggestions=document.getElementById("suggestions");

input.addEventListener("input", ()=>{
    const value=input.value.toLowerCase();
    suggestions.innerHTML="";

    if(value==="") return;

    const matches=destinations.filter(dest=>{
        return dest.toLowerCase().startsWith(value);
    });

    matches.forEach(dest=>{
        const div=document.createElement("div");
        div.classList.add("suggestion-item");
        div.textContent=dest;

        div.addEventListener("click", ()=>{
            input.value=dest;
            suggestions.innerHTML=" ";
        });
        suggestions.appendChild(div);
    });

});



const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const today = new Date().toISOString().split("T")[0];

searchroomsbtn.addEventListener("click",()=>{
    if (checkin.value && checkin.value < today) {
        alert("Check-in date cannot be in the past");
    }
    else if (checkout.value && checkout.value< checkin.value) {
        alert("Check-out date must be after check-in date");
    }
    //TODO: connect search to hotel filtering
});


//viewmoredestinations

const cards = document.querySelectorAll(".destcard");

function updateWhenResize(){
    const visibleCards = window.innerWidth <= 768 ? 4 : 6;
cards.forEach((card, index)=>{
    card.style.display = index < visibleCards ? "" : "none";

});
}

const moredestbtn = document.getElementById("moredest");

let expanded = false;

moredestbtn.addEventListener("click", () => {
    if (!expanded) {
        cards.forEach(card => {
            card.style.display = "block";
        });

        moredestbtn.textContent = "Show Less ^";
        expanded = true;
    } else {
        updateWhenResize();
        moredestbtn.textContent = "More Destinations >";
        expanded = false;
    }
});

import {hotels} from "./hotels.js";
console.log(hotels);

const featuredHotelNames=[
    "ITC Grand Chola",
    "The Himalayan",
    "W Goa",
    "The Leela Palace New Delhi",
    "The Oberoi Udaivilas",
    "Evolve Back Coorg"
];

const featuredHotels=hotels.filter(hotel=>
    featuredHotelNames.includes(hotel.name)
);

const hotelContainer=document.getElementById("hotel-container");
function displayHotels(hotelsArray){
    hotelContainer.innerHTML="";
    hotelsArray.forEach(hotel=>{
        hotelContainer.innerHTML+=`
        <div class="hotel-card">
        <div class="hotelimage"><img class="hotel-img" src="${hotel.images.cover}" alt="${hotel.name}">
        <p class="hotel-rating"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>${hotel.rating}</p>
        </div>
        <div class="hotel-details">
        <h3 class="hotel-name">${hotel.name}</h3>
        <p class="hotel-city"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>${hotel.city}</p>
        <p class="hotel-price">Starting from <span id="price-bold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee-icon lucide-indian-rupee"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>
        ${hotel.price}<span class="per-night">/night</span></span></p>
        </div></div>
        `;
    });
}

displayHotels(featuredHotels);

updateWhenResize();

window.addEventListener("resize", ()=>{
    if(!expanded) updateWhenResize()});

