const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const close = document.querySelector(".menu-close");

toggle.addEventListener("click", () => {
    menu.classList.add("active");
    toggle.style.display = "none";
});

close.addEventListener("click", () => {
    menu.classList.remove("active");
    toggle.style.display = "flex";
});

import { hotels } from "./hotels.js";
import { amenityIcons } from "./hotels.js";
import { hotelRatingDetails } from "./hotels.js";

const params = new URLSearchParams(window.location.search);
const hotelId = params.get("id");
const hotel = hotels.find(h => h.id == hotelId);

function renderHotelDetails() {
    if (!hotel) return;

    const hotelTitle = document.querySelector(".hotel-title");
    const mainImg = document.querySelector(".main-img");
    const otherImg = document.querySelector(".other-images");
    const priceval = document.getElementById("price-val");
    const checkin = document.getElementById("checkin");
    const checkout = document.getElementById("checkout");
    const guests = document.getElementById("guestCount");
    const priceper = document.getElementById("price-per-night");
    const amenities = document.querySelector(".amenities-list");
    const description = document.querySelector(".hotel-desc");
    const ratingMain = document.querySelector(".rat-rev-head");
    const ratingList = document.querySelector(".rating-list");
    const roomCards = document.querySelector(".room-cards");
    const rtypeselected = document.querySelector(".rtypeselected");
    const roomsInput = document.getElementById("rooms");
    const guestCount = document.getElementById("guestCount");
    const finalPrice = document.getElementById("price-val");
    const rupee = document.getElementById("rupee");
    const bookingDates = document.querySelector(".booking-dates");
    const datesAlerting = document.querySelector(".dates-alerting");
    const bookNowBtn = document.querySelector(".book-now");

    // --- Title / images / description ---
    hotelTitle.innerHTML = `
    <div class="main-title"><h1>${hotel.name}</h1>
    <div class="rating-title"><p>${hotel.rating}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
    </div></div>
    <div class="subtitle">
    <div class="hotel-city"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
    <p>${hotel.city}</p></div>
    </div>`;

    mainImg.innerHTML = `<img src="${hotel.images.cover}" alt="${hotel.name}">`;

    otherImg.innerHTML = `
    <img src="${hotel.images.pool}" alt="pool">
    <img src="${hotel.images.restaurant}" alt="restaurant">`;

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

    const details = hotelRatingDetails[hotel.id];
    ratingList.innerHTML = Object.entries(details)
        .map(([key, value]) => `
    <div class="rating-item">
      <span class="rat-list">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
      <div class="rat-list-container">
        <div class="rating-bar">
            <div class="rating-fill" style="width:${(value / 5) * 100}%"></div>
        </div>
        <span id="rating-val">${value}</span>
      </div>
    </div>
  `).join("");

    // --- Room selection state ---
    let selectedRoom = [...hotel.room].sort((a, b) => a.price - b.price)[0];
    let totalPrice = selectedRoom.price;

    priceper.textContent = `${selectedRoom.price.toLocaleString("en-IN")}`;
    priceval.textContent = `${selectedRoom.price.toLocaleString("en-IN")}`;
    guests.innerHTML = `${selectedRoom.guests} Guests`;
    rtypeselected.innerHTML = `<span id="mulsym">&times;</span>${selectedRoom.name}`;
    description.innerHTML = `<h2>About this hotel</h2><p>${hotel.description}</p>`;
    ratingMain.innerHTML = `<h2>Ratings</h2><div class="rat-rev"><p class="rating-head">${hotel.rating}</p>
    <p class="review">${hotel.reviews} reviews</p></div>`;

    // Reset dates/rooms FROM URL PARAMS every single time (no stale browser-restored values)
    checkin.value = params.get("checkin") || "";
    checkout.value = params.get("checkout") || "";
    roomsInput.value = params.get("rooms") || 1;

    const searchGuests = Number(params.get("guests"));

    function updateGuests() {
        if (searchGuests) {
            guestCount.textContent = `${searchGuests} Guests`;
        } else {
            const total = selectedRoom.guests * Number(roomsInput.value);
            guestCount.textContent = `${total} Guests`;
        }
    }
    let nights;

    function getNights() {
        if (!checkin.value || !checkout.value) {
            bookingDates.style.border = "1px solid rgb(191,56,56)";
            bookingDates.style.width = "100%";
            bookingDates.style.maxWidth = "250px";
            datesAlerting.style.display = window.innerWidth > 768 ? "flex" : "none";
            return 0;
        }
        bookingDates.style.border = "none";
        datesAlerting.style.display = "none";

        const inDate = new Date(checkin.value);
        const outDate = new Date(checkout.value);
        const night = (outDate - inDate) / (1000 * 60 * 60 * 24);
        nights=night;
        return night > 0 ? night : 0;
    }

    function updateTotal() {
        const nights = getNights();
        if (nights === 0) {
            finalPrice.textContent = "Select dates";
            finalPrice.style.color = "rgb(153, 153, 251)";
            rupee.style.display = "none";
            return;
        }
        rupee.style.display = "block";
        finalPrice.style.color = "blue";
        const total = totalPrice * nights * Number(roomsInput.value);
        finalPrice.textContent = `${total.toLocaleString()}`;
    }

    function checkfilled() {
        if (!checkin.value || !checkout.value || getNights() <= 0) {
            datesAlerting.style.display = "flex";
            return false;
        }
        datesAlerting.style.display = "none";
        return true;
    }

    // --- Room cards ---
    roomCards.innerHTML = `
    <h2 class="roomHead">Rooms</h2>
    <div class="room-note">
        <p class="roomnote">
            <span id="notehead">Note:</span>
            You can only select one room type at a time. To book multiple room types, please make separate bookings.
        </p>
    </div>
`;
    roomCards.innerHTML += hotel.room.map((room, index) => `
    <div class="room-card" data-index="${index}">
        <img src="${room.image}" alt="${room.name}">
        <div class="room-info">
            <h3>${room.name}</h3>
            <p id="guests"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users preview-icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg> <span>${room.guests}</span> guests</p>
            <p id="bed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bed preview-icon"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg> <span>${room.bed}</span></p>
            <p class="breakfast">
            ${room.breakfast
            ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cooking-pot preview-icon"><path d="M2 12h20"/><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="m4 8 16-4"/><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"/></svg>
                Breakfast Included`
            : `<span><svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5.5v10M6 .5V3a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 1 3V.5m-.5 13l13-13m-1 5A14.61 14.61 0 0 1 13 10H8.5m0-4.5v-5a7.41 7.41 0 0 1 2.66 2.34M8.5 13.5V9"/>
            </svg></span> No Breakfast`
        }
            </p>
            <p class="refundable">
            ${room.refundable
            ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
            Free Cancellation`
            : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-alert"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
            Non-refundable`
        }
            </p>
        </div>
        <div class="room-price">
            <p class="room-rate"><svg id="rup" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee-icon lucide-indian-rupee"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>${room.price.toLocaleString("en-IN")}</p>
            <span id="roompernight">/night</span>
            <button class="select-room-btn" data-index="${index}">Select</button>
        </div>
    </div>
`).join("");

    const firstBtn = document.querySelector(".select-room-btn");
    const firstCard = document.querySelector(".room-card");
    if (firstBtn && firstCard) {
        firstBtn.textContent = "Selected";
        firstBtn.style.background = "none";
        firstBtn.style.color = "rgb(60, 94, 186)";
        firstBtn.style.border = "1px solid blue";
        firstCard.style.border = "2px solid rgb(162, 179, 228)";
    }

    document.querySelectorAll(".select-room-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".select-room-btn").forEach(b => {
                b.textContent = "Select";
                b.style.background = "rgb(79, 110, 231)";
                b.style.color = "white";
                b.style.border = "none";
            });
            document.querySelectorAll(".room-card").forEach(card => {
                card.style.border = "1px solid #a29f9f";
            });

            btn.textContent = "Selected";
            btn.style.background = "none";
            btn.style.color = "rgb(60, 94, 186)";
            btn.style.border = "1px solid blue";

            const card = btn.closest(".room-card");
            card.style.border = "2px solid rgb(162, 179, 228)";

            const idx = Number(btn.dataset.index);
            selectedRoom = hotel.room[idx];
            totalPrice = selectedRoom.price;

            rtypeselected.innerHTML = `<span id="mulsym">&times;</span>${selectedRoom.name}`;
            priceper.textContent = selectedRoom.price.toLocaleString("en-IN");
            updateGuests();
            updateTotal();

            if (window.innerWidth > 768) {
                description.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    updateGuests();
    updateTotal();

    // --- Similar hotels ---
    const similarHotels = hotels
        .filter(h => h.city === hotel.city && h.id != hotel.id)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    const simihotelcards = document.querySelector(".simi-hotel-cards");
    simihotelcards.innerHTML = similarHotels.map(h => `
    <div class="simCards" data-id="${h.id}">
    <img src="${h.images.cover}" alt="${h.name}">
    <div class="simi-hotel-card-content">
            <h3>${h.name}</h3>
            <p id="sim-loc"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin preview-icon"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>${h.city}</p>
            <div class="sim-rating">
                <span>${h.rating}</span>
                <p>${h.reviews} reviews</p>
            </div>
            <p class="sim-price">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee preview-icon"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>${h.room[0].price.toLocaleString("en-IN")} <span>/night</span>
            </p>
        </div>
    </div>
    `).join("");

    document.querySelectorAll(".simCards").forEach(card => {
        card.addEventListener("click", () => {
            const id = card.dataset.id;
            window.location.href = `hotel_details.html?id=${id}`;
        });
    });

    // --- Booking card interactions ---
    const bookingCard = document.querySelector(".booking-card");
    const bookingToggle = document.querySelector(".toggle-booking");
    bookingToggle.addEventListener("click", () => {
        bookingCard.classList.toggle("active");
    });

    bookNowBtn.addEventListener("click", (e) => {
        e.preventDefault();
        updateTotal();
        if (checkfilled()) {
            const bookingParams = new URLSearchParams({
                id: hotel.id,
                room: selectedRoom.name,
                checkin: checkin.value,
                checkout: checkout.value,
                rooms: roomsInput.value,
                guests: guestCount.textContent,
                total: finalPrice.textContent,
                nights: nights,
            });
            window.location.href = `booking.html?${bookingParams.toString()}`;
        }
    });

    const today = new Date().toISOString().split("T")[0];
    checkin.min = today;
    checkout.min = today;

    checkin.addEventListener("change", () => {
        checkout.min = checkin.value;
        if (checkout.value && checkout.value < checkin.value) {
            checkout.value = "";
        }
        updateTotal();
    });
    checkout.addEventListener("change", updateTotal);
    roomsInput.addEventListener("change", () => {
        updateGuests();
        updateTotal();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth <= 768) {
            datesAlerting.style.display = "none";
        } else {
            datesAlerting.style.display = checkfilled() ? "none" : "flex";
        }
    });
}

renderHotelDetails();

window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        renderHotelDetails();
    }
});