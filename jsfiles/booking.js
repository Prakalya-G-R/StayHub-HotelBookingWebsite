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
const room = params.get("room");
const nights=Number(params.get("nights"));


const hotel=hotels.find(h => h.id==id);

const checkInDate = new Date(checkin);
const checkOutDate = new Date(checkout);

const options = {
    day: "numeric",
    month: "short",
    year: "numeric"
};

const formattedCheckIn = checkInDate.toLocaleDateString("en-GB", options);
const formattedCheckOut = checkOutDate.toLocaleDateString("en-GB", options);


if(hotel){
    const selectedRoom = hotel.room.find(r => r.name==room);
    const bookingSummary=document.querySelector(".booking-summary");
    const total = rooms*selectedRoom.price*nights;

    const tax=Math.round(total * 0.12);
    const fee=299;
    const taxfee= tax+fee;
    const discount = Math.round(total * 0.05);
    const finalPrice = total + taxfee - discount;

bookingSummary.innerHTML = `
    <div class="selected-room-content">
        <div class="booking-head">
            <p class="booking-title">Booking Summary</p>
            <a href="hotel_details.html?id=${id}#hotel-desc" class="edit-booking">Edit Booking ></a>
        </div>

        <span class="divider"></span>

        <div class="selected-room-info">
            <img class="selectedHotelImg" src="${hotel.images.cover}" alt="${room}">
            <div class="selected-room-names">
                <p class="hotel-name">${hotel.name}</p>
                <p class="room-name">${room}<span id="city"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin preview-icon"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>${hotel.city}</span></p>
                <p class="hotel-rating"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star preview-icon"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>${hotel.rating}</p>
            </div>
        </div>

        <span class="divider"></span>

        <div class="stay-details">
            <div class="checkin-out">
                <p class="selected-checkin-out"><span id="checkin-head"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-arrow-up preview-icon"><path d="m14 17 4-4 4 4"/><path d="M16 2v3"/><path d="M18 21v-8"/><path d="M21 10.343V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h9"/><path d="M3 9h18"/><path d="M8 2v3"/></svg>Check-In: </span>${formattedCheckIn}</p>
                <p class="selected-checkin-out"><span id="checkout-head"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-arrow-down preview-icon"><path d="m14 17 4 4 4-4"/><path d="M16 2v3"/><path d="M18 13v8"/><path d="M21 10.354V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.343"/><path d="M3 9h18"/><path d="M8 2v3"/></svg>Check-Out: </span>${formattedCheckOut}</p>
            </div>
            <div class="other-stay-det">
                <p class="no-of-nights"><span id="snights"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon preview-icon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>Duration: </span>${nights} Nights</p>
                <p class="selected-guests"><span id="sguests"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users preview-icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>Guests: </span>${guests}</p>
                <p class="selected-rooms"><span id="srooms"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bed preview-icon"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>Room: </span>${rooms} ${room}</p>
            </div>
        </div>

        <span class="divider"></span>

        <div class="price-breakdown">
            <p class="price-breakdown-head">Price Breakdown</p>
            <p class="room-price"><span id="room-price">Room Price: </span>
                <span id="roomtot" class="room-tot-rup"><svg id="rup" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>${total.toLocaleString()}</span>
            </p>
            <p class="discount"><span id="dis"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tag preview-icon"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>Cove Discount:</span>
                <span id="roomdis" class="room-tot-rup">-<svg id="rup" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>${discount.toLocaleString()}</span>
            </p>
            <p class="taxes-and-fee"><span id="taxes-fees">Taxes & Fees: </span>
                <span id="roomtaxfee" class="room-tot-rup"><svg id="rup" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>${taxfee.toLocaleString()}</span>
            </p>
        </div>

        <span class="divider"></span>

        
        <div class="stay-total">
            <div class="total">
                <p class="total-head">Total: </p>
                <p class="selected-total">
                    <svg id="rup" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>${finalPrice.toLocaleString("en-IN")}
                </p>
            </div>
        </div>
    </div>
`;
}

const contents=document.querySelectorAll(".step-content");
const steps=document.querySelectorAll(".step");
const line=document.querySelectorAll(".line");

let current=0;

function nextStep(){
    
    if(current >= contents.length-1) return;

    contents[current].classList.remove("active");

    steps[current].classList.remove("active");
    steps[current].classList.add("completed");
    steps[current].querySelector("span").innerHTML = "✓";

    if(current < line.length){
        line[current].classList.add("completed");
    }

    current++;

    contents[current].classList.add("active");
    steps[current].classList.add("active");
}

function prevStep(){
    if(current===0) return;

    contents[current].classList.remove("active");
    steps[current].classList.remove("active");

    current--;

    steps[current].classList.remove("completed");
    steps[current].classList.add("active");

    if(current < line.length){
        line[current].classList.remove("completed");
    }

    contents[current].classList.add("active");
}

document.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener("click", () => {

        if(current === 0){
            const form = document.querySelector(".guest-form");

            if(!form.reportValidity()) return;
        }

        if(current === 1){
            const card = document.getElementById("card");
            const upi = document.getElementById("upi");
            const netbanking=document.getElementById("netbanking");

            if(!card.reportValidity() && !upi.reportValidity() && !netbanking.reportValidity()) return;
        }

        nextStep();
    });
});

document.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("click", prevStep);
});

const methods = document.querySelectorAll(".method");
const panels = document.querySelectorAll(".payment-panel");

methods.forEach(method =>{
    method.addEventListener("click", ()=>{
        methods.forEach(btn => btn.classList.remove("active"));
        panels.forEach(panel => panel.classList.remove("active"));

        method.classList.add("active");

        document.getElementById(method.dataset.target).classList.add("active");
    });
});
