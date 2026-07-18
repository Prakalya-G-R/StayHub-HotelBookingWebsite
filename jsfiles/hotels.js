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


const slider=document.getElementById("priceRange");
const price=document.getElementById("priceValue");

slider.addEventListener("input", ()=>{
    priceValue.textContent=slider.value;
});

const sortcontainer = document.getElementById("sort-container");
const sortbtn = document.getElementById("sortbtn");

sortbtn.addEventListener("click", (e)=>{;
    sortcontainer.classList.add("active");
    e.stopPropagation();
    sortbtn.style.display="none";
});

window.addEventListener("click",(e)=>{
    if(sortcontainer.classList.contains("active") && !sortcontainer.contains(e.target) && !sortbtn.contains(e.target)){
    sortcontainer.classList.remove("active");
    sortbtn.style.display="block";
}
});


const sortcontent=document.querySelectorAll('input[name="sort"]');
sortcontent.forEach(radio =>{
    radio.addEventListener("change", ()=>{
        sortcontainer.classList.remove("active");
        sortbtn.style.display="block";
    });
});

const filter=document.querySelector(".filter-toggle");
const filtermenu=document.querySelector(".filters-container");

filter.addEventListener("click", ()=>{
    filtermenu.classList.add("active");
});

const closefilter=document.getElementById("closemenu");

closefilter.addEventListener("click", ()=>{
    filtermenu.classList.remove("active");
})


//Hotel Objects

export const hotels = [
    
    //chennai
{
    id: "the-leela-palace-chennai",
    name: "The Leela Palace Chennai",
    recommended: 10,
    city: "chennai",
    type: "hotel",
    rating: 4.8,
    reviews: 4200,
    price: 16500,
    amenities: {
        wifi: true,
        pool: true,
        spa: true,
        gym: true,
        restaurant: true,
        parking: true
    },
    images: {
        cover: "hotel-images/TheLeelaPalaceChennai/cover.avif",
        room: "hotel-images/TheLeelaPalaceChennai/1.webp",
        pool: "hotel-images/TheLeelaPalaceChennai/2.webp",
        restaurant: "hotel-images/TheLeelaPalaceChennai/3.avif"
    },
    description: "Luxury five-star seafront hotel overlooking the Bay of Bengal, featuring elegant rooms, award-winning restaurants, a full-service spa, an outdoor infinity pool, and premium hospitality."
},

{
    id: "itc-grand-chola",
    recommended: 12,
    name: "ITC Grand Chola",
    city: "chennai",
    type: "hotel",
    rating: 4.8,
    reviews: 8283,
    price: 18000,
    amenities: {
        wifi: true,
        pool: true,
        spa: true,
        gym: true,
        restaurant: true,
        parking: true
    },
    images: {
        cover: "hotel-images/ITCchola/cover.jfif",
        room: "hotel-images/ITCchola/1.jfif",
        pool: "hotel-images/ITCCchola/2.jfif",
        restaurant: "hotel-images/ITCCchola/3.jpg"
    },
    description: "A luxury five-star hotel inspired by the grandeur of the Chola dynasty, featuring award-winning restaurants, a lavish spa, expansive swimming pools, elegant rooms, and one of the largest convention spaces in India."
},

{
    id: "taj-coromandel",
    recommended: 19,
    name: "Taj Coromandel",
    city: "chennai",
    type: "hotel",
    rating: 4.8,
    reviews: 5230,
    price: 15500,
    amenities:{
        wifi: true,
        pool: true,
        spa: true,
        gym: true,
        restaurant: true,
        parking: true
    },
    images: {
        cover: "hotel-images/TajCoromandel/cover.jfif",
        room: "hotel-images/TajCoromandel/1.jpg",
        pool: "hotel-images/TajCoromandel/2.jfif",
        restaurant: "hotel-images/TajCoromandel/3.jpg"
    },
    description: "An iconic five-star luxury hotel in Chennai's Nungambakkam district, renowned for its elegant rooms, award-winning restaurants, J Wellness Circle spa, outdoor swimming pool, and exceptional Taj hospitality."
},

    {
    id: "park-hyatt-chennai",

    recommended: 24,

    name: "Park Hyatt Chennai",
    city: "Chennai",

    type: "Hotel",

    rating: 4.7,
    reviews: 3280,

    price: 14500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/ParkHyatt/cover.jfif",
        room: "hotel-images/ParkHyatt/1.jfif",
        pool: "hotel-images/ParkHyatt/2.jpg",
        restaurant: "hotel-images/ParkHyatt/3.jpg"
    },

    description: "A contemporary five-star luxury hotel overlooking Guindy National Park, featuring spacious rooms, the award-winning Flying Elephant restaurant, a rooftop infinity pool, Antahpura Spa, and exceptional personalized service."
    },
    
    //Hyderabad
    
    {
    id: "taj-falaknuma-palace",

    recommended: 5,

    name: "Taj Falaknuma Palace",
    city: "Hyderabad",

    type: "Hotel",

    rating: 4.8,
    reviews: 2712,

    price: 32000,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/TajFalaknuma/cover.jpg",
        room: "hotel-images/TajFalaknuma/1.png",
        pool: "hotel-images/TajFalaknuma/2.jpg",
        restaurant: "hotel-images/TajFalaknuma/3.avif"
    },

    description: "A restored Nizam palace offering royal suites, fine dining, luxury spa experiences, and panoramic views of Hyderabad."
},

{
    id: "itc-kohenur",

    recommended: 23,

    name: "ITC Kohenur",
    city: "Hyderabad",

    type: "Hotel",

    rating: 4.7,
    reviews: 3860,

    price: 13500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/ITCkohenur/cover.avif",
        room: "hotel-images/ITCkohenur/1.png",
        pool: "hotel-images/ITCkohenur/2.jpg",
        restaurant: "hotel-images/ITCkohenur/3.jfif"
    },

    description: "A contemporary luxury hotel in HITEC City featuring elegant rooms, multiple restaurants, a wellness spa, and premium business facilities."
},

{
    id: "park-hyatt-hyderabad",

    recommended: 32,

    name: "Park Hyatt Hyderabad",
    city: "Hyderabad",

    type: "Hotel",

    rating: 4.7,
    reviews: 3340,

    price: 14500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/ParkHyattHyderabad/cover.jpg",
        room: "hotel-images/ParkHyattHyderabad/1.webp",
        pool: "hotel-images/ParkHyattHyderabad/2.jpg",
        restaurant: "hotel-images/ParkHyattHyderabad/3.jfif"
    },

    description: "A luxury five-star hotel in Banjara Hills offering spacious rooms, award-winning dining, a serene spa, and an outdoor infinity pool."
},

{
    id: "the-westin-hyderabad-mindspace",

    recommended: 8,

    name: "The Westin Hyderabad Mindspace",
    city: "Hyderabad",

    type: "Hotel",

    rating: 4.6,
    reviews: 3200,

    price: 12500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/TheWestin/cover.jpg",
        room: "hotel-images/TheWestin/1.jpg",
        pool: "hotel-images/TheWestin/2.jpg",
        restaurant: "hotel-images/TheWestin/3.jfif"
    },

    description: "A premium business hotel in HITEC City known for its modern rooms, excellent dining, wellness facilities, and outdoor swimming pool."
},

//Mumbai

{
    id: "the-taj-mahal-palace",

    recommended: 3,

    name: "The Taj Mahal Palace",
    city: "Mumbai",

    type: "Hotel",

    rating: 4.8,
    reviews: 10250,

    price: 24500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/TajMahalPalace/cover.jfif",
        room: "hotel-images/TajMahalPalace/1.jfif",
        pool: "hotel-images/TajMahalPalace/2.jpg",
        restaurant: "hotel-images/TajMahalPalace/3.jfif"
    },

    description: "An iconic luxury hotel overlooking the Gateway of India, renowned for its heritage architecture, exceptional hospitality, world-class dining, and elegant accommodations."
},

{
    id: "the-oberoi-mumbai",

    recommended: 17,

    name: "The Oberoi Mumbai",
    city: "Mumbai",

    type: "Hotel",

    rating: 4.8,
    reviews: 5840,

    price: 21000,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/TheOberoiMumbai/cover.jfif",
        room: "hotel-images/TheOberoiMumbai/1.webp",
        pool: "hotel-images/TheOberoiMumbai/2.jpg",
        restaurant: "hotel-images/TheOberoiMumbai/3.jfif"
    },

    description: "A luxurious seafront hotel on Marine Drive offering spacious rooms, fine dining restaurants, a full-service spa, and breathtaking views of the Arabian Sea."
},

{
    id: "trident-nariman-point",

    recommended: 27,

    name: "Trident Nariman Point",
    city: "Mumbai",

    type: "Hotel",

    rating: 4.7,
    reviews: 4920,

    price: 14500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/TridentNariman/cover.jpg",
        room: "hotel-images/TridentNariman/1.webp",
        pool: "hotel-images/TridentNariman/2.jpg",
        restaurant: "hotel-images/TridentNariman/3.jfif"
    },

    description: "A premium five-star hotel at Nariman Point featuring modern rooms, award-winning restaurants, an outdoor pool, and panoramic views of Marine Drive."
},

{
    id: "st-regis-mumbai",

    recommended: 28,

    name: "St. Regis Mumbai",
    city: "Mumbai",

    type: "Hotel",

    rating: 4.7,
    reviews: 4380,

    price: 19000,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/StRegis/cover.jpg",
        room: "hotel-images/StRegis/1.jpg",
        pool: "hotel-images/StRegis/2.jpg",
        restaurant: "hotel-images/StRegis/3.jpg"
    },

    description: "An elegant luxury hotel in Lower Parel featuring sophisticated rooms, signature restaurants, the Iridium Spa, and stunning skyline views."
},

{
    id: "jw-marriott-mumbai-juhu",

    recommended: 41,

    name: "JW Marriott Mumbai Juhu",
    city: "Mumbai",

    type: "Hotel",

    rating: 4.7,
    reviews: 7560,

    price: 17500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/JWmarriott/cover.jpg",
        room: "hotel-images/JWmarriott/1.webp",
        pool: "hotel-images/JWmarriott/2.jpg",
        restaurant: "hotel-images/JWmarriott/3.jfif"
    },

    description: "A luxury beachfront hotel on Juhu Beach offering stylish accommodations, multiple dining venues, an outdoor pool, a wellness spa, and direct beach access."
},

//Goa

{
    id: "w-goa",

    recommended: 9,

    name: "W Goa",
    city: "Goa",

    type: "Resort",

    rating: 4.7,
    reviews: 3890,

    price: 18500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/Wgoa/cover.jpg",
        room: "hotel-images/Wgoa/1.avif",
        pool: "hotel-images/Wgoa/2.jfif",
        restaurant: "hotel-images/Wgoa/3.avif"
    },

    description: "A vibrant beachfront luxury resort in Vagator offering stylish rooms, ocean views, signature dining, and world-class wellness facilities."
},

{
    id: "taj-exotica-goa",

    recommended: 22,

    name: "Taj Exotica Resort & Spa",
    city: "Goa",

    type: "Resort",

    rating: 4.8,
    reviews: 4720,

    price: 23500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/TajExoticaResort/cover.jpg",
        room: "hotel-images/TajExoticaResort/1.jpg",
        pool: "hotel-images/TajExoticaResort/2.jpg",
        restaurant: "hotel-images/TajExoticaResort/3.avif"
    },

    description: "A Mediterranean-inspired beachfront resort known for luxurious villas, fine dining, expansive gardens, and exceptional hospitality."
},

{
    id: "grand-hyatt-goa",

    recommended: 14,

    name: "Grand Hyatt Goa",
    city: "Goa",

    type: "Resort",

    rating: 4.7,
    reviews: 5980,

    price: 16500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/GrandHyattGoa/cover.jfif",
        room: "hotel-images/GrandHyattGoa/1.webp",
        pool: "hotel-images/GrandHyattGoa/2.webp",
        restaurant: "hotel-images/GrandHyattGoa/3.jfif"
    },

    description: "A luxury waterfront resort overlooking Bambolim Bay featuring spacious rooms, multiple restaurants, and extensive leisure facilities."
},

{
    id: "itc-grand-goa",

    recommended: 25,

    name: "ITC Grand Goa",
    city: "Goa",

    type: "Resort",

    rating: 4.7,
    reviews: 4360,

    price: 17000,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/ITCgrandGoa/cover.jpg",
        room: "hotel-images/ITCgrandGoa/1.jpg",
        pool: "hotel-images/ITCgrandGoa/2.png",
        restaurant: "hotel-images/ITCgrandGoa/3.jfif"
    },

    description: "An elegant beachfront retreat offering spacious accommodations, lagoon-style pools, gourmet dining, and a relaxing luxury spa."
},

{
    id: "st-regis-goa-resort",

    recommended: 36,

    name: "St. Regis Goa Resort",
    city: "Goa",

    type: "Resort",

    rating: 4.8,
    reviews: 3510,

    price: 25000,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/StRegisGoaResort/cover.jfif",
        room: "hotel-images/StRegisGoaResort/1.jpg",
        pool: "hotel-images/StRegisGoaResort/2.jfif",
        restaurant: "hotel-images/StRegisGoaResort/3.jpg"
    },

    description: "An ultra-luxury beachfront resort in South Goa featuring elegant suites, championship golf access, fine dining, and personalized butler service."
},

//Pondicherry

{
    id: "palais-de-mahe",

    recommended: 29,

    name: "Palais de Mahe",
    city: "Pondicherry",

    type: "Hotel",

    rating: 4.7,
    reviews: 1820,

    price: 10500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: false,
        spa: false
    },

    images: {
        cover: "hotel-images/PalaisDeMahe/cover.jpg",
        room: "hotel-images/PalaisDeMahe/1.jfif",
        pool: "hotel-images/PalaisDeMahe/2.jfif",
        restaurant: "hotel-images/PalaisDeMahe/3.avif"
    },

    description: "A charming French colonial boutique hotel offering elegant rooms, a courtyard pool, and authentic heritage hospitality."
},

{
    id: "le-pondy",

    recommended: 37,

    name: "Le Pondy",
    city: "Pondicherry",

    type: "Resort",

    rating: 4.5,
    reviews: 2970,

    price: 9800,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/LePondy/cover.avif",
        room: "hotel-images/LePondy/1.jpg",
        pool: "hotel-images/LePondy/2.jpg",
        restaurant: "hotel-images/LePondy/3.avif"
    },

    description: "A peaceful beachside resort offering spacious rooms, lagoon views, wellness experiences, and family-friendly amenities."
},

{
    id: "accord-puducherry",

    recommended: 43,

    name: "Accord Puducherry",
    city: "Pondicherry",

    type: "Hotel",

    rating: 4.4,
    reviews: 2840,

    price: 7200,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/AccordPuducherry/cover.webp",
        room: "hotel-images/AccordPuducherry/1.jpg",
        pool: "hotel-images/AccordPuducherry/2.jpg",
        restaurant: "hotel-images/AccordPuducherry/3.avif"
    },

    description: "A modern four-star hotel featuring comfortable rooms, international dining, wellness facilities, and excellent value for travelers."
},

{
    id: "the-promenade",

    recommended: 42,

    name: "The Promenade",
    city: "Pondicherry",

    type: "Hotel",

    rating: 4.5,
    reviews: 2450,

    price: 8900,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: false,
        spa: false
    },

    images: {
        cover: "hotel-images/ThePromenade/cover.jpg",
        room: "hotel-images/ThePromenade/1.jfif",
        pool: "hotel-images/ThePromenade/2.jpg",
        restaurant: "hotel-images/ThePromenade/3.avif"
    },

    description: "A stylish seafront boutique hotel on the Promenade offering ocean views, rooftop dining, and contemporary accommodations."
},


//Jaipur

{
    id: "rambagh-palace",

    recommended: 4,

    name: "Rambagh Palace",
    city: "Jaipur",

    type: "Hotel",

    rating: 4.9,
    reviews: 3260,

    price: 35500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/RambaghPalace/cover.jpg",
        room: "hotel-images/RambaghPalace/1.avif",
        pool: "hotel-images/RambaghPalace/2.jpg",
        restaurant: "hotel-images/RambaghPalace/3.jpg"
    },

    description: "A magnificent former royal residence transformed into a luxury palace hotel featuring regal suites, heritage dining, and world-class hospitality."
},

{
    id: "fairmont-jaipur",

    recommended: 18,

    name: "Fairmont Jaipur",
    city: "Jaipur",

    type: "Hotel",

    rating: 4.8,
    reviews: 4380,

    price: 17500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/Fairmont/cover.cms",
        room: "hotel-images/Fairmont/1.webp",
        pool: "hotel-images/Fairmont/2.jpg",
        restaurant: "hotel-images/Fairmont/3.jpg"
    },

    description: "A grand luxury hotel inspired by Rajput architecture offering lavish rooms, fine dining, wellness facilities, and scenic Aravalli views."
},

{
    id: "itc-rajputana",

    recommended: 33,

    name: "ITC Rajputana",
    city: "Jaipur",

    type: "Hotel",

    rating: 4.6,
    reviews: 4820,

    price: 11200,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/ITCrajputana/cover.jpg",
        room: "hotel-images/ITCrajputana/1.avif",
        pool: "hotel-images/ITCrajputana/2.jpg",
        restaurant: "hotel-images/ITCrajputana/3.avif"
    },

    description: "A premium luxury hotel blending traditional Rajasthani architecture with modern comforts, renowned for its dining and hospitality."
},

{
    id: "jaipur-marriott-hotel",

    recommended: 50,

    name: "Jaipur Marriott Hotel",
    city: "Jaipur",

    type: "Hotel",

    rating: 4.5,
    reviews: 3960,

    price: 9800,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/JaipurMarriott/cover.webp",
        room: "hotel-images/JaipurMarriott/1.avif",
        pool: "hotel-images/JaipurMarriott/2.avif",
        restaurant: "hotel-images/JaipurMarriott/3.webp"
    },

    description: "A contemporary five-star hotel near Jaipur Airport offering spacious rooms, multiple dining options, a luxury spa, and modern business facilities."
},

//Udaipur

{
    id: "the-oberoi-udaivilas",

    recommended: 1,

    name: "The Oberoi Udaivilas",
    city: "Udaipur",

    type: "Hotel",

    rating: 4.9,
    reviews: 3250,

    price: 42000,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/TheOberoiUdaivilas/cover.webp",
        room: "hotel-images/TheOberoiUdaivilas/1.jpg",
        pool: "hotel-images/TheOberoiUdaivilas/2.jpg",
        restaurant: "hotel-images/TheOberoiUdaivilas/3.webp"
    },

    description: "An award-winning luxury hotel on the banks of Lake Pichola featuring magnificent architecture, fine dining, lavish rooms, and world-class hospitality."
},

{
    id: "taj-lake-palace",

    recommended: 2,

    name: "Taj Lake Palace",
    city: "Udaipur",

    type: "Hotel",

    rating: 4.9,
    reviews: 2980,

    price: 45000,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/TajLakePalace/cover.webp",
        room: "hotel-images/TajLakePalace/1.jpg",
        pool: "hotel-images/TajLakePalace/2.jpg",
        restaurant: "hotel-images/TajLakePalace/3.avif"
    },

    description: "An iconic white marble palace hotel floating on Lake Pichola, renowned for its royal heritage, luxury accommodations, and exceptional dining experiences."
},

{
    id: "trident-udaipur",

    recommended: 26,

    name: "Trident Udaipur",
    city: "Udaipur",

    type: "Hotel",

    rating: 4.7,
    reviews: 2860,

    price: 12000,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/TridentUdaipur/cover.jfif",
        room: "hotel-images/TridentUdaipur/1.webp",
        pool: "hotel-images/TridentUdaipur/2.webp",
        restaurant: "hotel-images/TridentUdaipur/3.jpg"
    },

    description: "A luxury lakeside hotel surrounded by landscaped gardens, offering elegant rooms, excellent dining, and modern leisure facilities."
},

{
    id: "shiv-niwas-palace",

    recommended: 16,

    name: "Shiv Niwas Palace",
    city: "Udaipur",

    type: "Hotel",

    rating: 4.7,
    reviews: 1680,

    price: 16500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: false,
        spa: false
    },

    images: {
        cover: "hotel-images/ShivNiwasPalace/cover.jpg",
        room: "hotel-images/ShivNiwasPalace/1.jpg",
        pool: "hotel-images/ShivNiwasPalace/2.avif",
        restaurant: "hotel-images/ShivNiwasPalace/3.avif"
    },

    description: "A heritage palace hotel within the City Palace Complex offering royal accommodations, lake views, and traditional Rajasthani hospitality."
},


//Manali

{
    id: "the-himalayan",

    recommended: 11,

    name: "The Himalayan",
    city: "Manali",

    type: "Resort",

    rating: 4.8,
    reviews: 1480,

    price: 16500,

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    images: {
        cover: "hotel-images/TheHimalayan/cover.jpg",
        room: "hotel-images/TheHimalayan/1.jfif",
        pool: "hotel-images/TheHimalayan/2.jpg",
        restaurant: "hotel-images/TheHimalayan/3.jfif"
    },

    description: "A luxury castle-style mountain resort surrounded by cedar forests, offering elegant suites, fine dining, and rejuvenating wellness experiences."
},

{
    id: "span-resort-spa",

    recommended: 30,

    name: "Span Resort & Spa",
    city: "Manali",

    type: "Resort",

    rating: 4.7,
    reviews: 1840,

    price: 14500,

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    images: {
        cover: "hotel-images/SpanResort/cover.jfif",
        room: "hotel-images/SpanResort/1.jfif",
        pool: "hotel-images/SpanResort/2.jpg",
        restaurant: "hotel-images/SpanResort/3.jfif"
    },

    description: "A riverside luxury resort on the banks of the Beas River featuring scenic cottages, gourmet dining, and relaxing spa treatments."
},

{
    id: "larisa-resort",

    recommended: 38,

    name: "Larisa Resort",
    city: "Manali",

    type: "Resort",

    rating: 4.6,
    reviews: 1290,

    price: 9800,

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    images: {
        cover: "hotel-images/LarisaResort/cover.jpg",
        room: "hotel-images/LarisaResort/1.jpg",
        pool: "hotel-images/LarisaResort/2.jpg",
        restaurant: "hotel-images/LarisaResort/3.jfif"
    },

    description: "A peaceful boutique mountain resort offering modern rooms, panoramic Himalayan views, and personalized hospitality."
},

{
    id: "mastiff-grand-manali",

    recommended: 46,

    name: "Mastiff Grand Manali",
    city: "Manali",

    type: "Hotel",

    rating: 4.4,
    reviews: 980,

    price: 6800,

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: true,
        spa: false
    },

    images: {
        cover: "hotel-images/MastiffGrandManali/cover.jpg",
        room: "hotel-images/MastiffGrandManali/1.jfif",
        pool: "hotel-images/MastiffGrandManali/2.jfif",
        restaurant: "hotel-images/MastiffGrandManali/3.jfif"
    },

    description: "A contemporary hotel in Manali offering comfortable accommodations, mountain views, modern amenities, and easy access to popular attractions."
},


//Delhi

{
    id: "the-leela-palace-new-delhi",

    recommended: 6,

    name: "The Leela Palace New Delhi",
    city: "Delhi",

    type: "Hotel",

    rating: 4.8,
    reviews: 4380,

    price: 26500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/TheLeelaPalaceNewDelhi/cover.jpg",
        room: "hotel-images/TheLeelaPalaceNewDelhi/1.webp",
        pool: "hotel-images/TheLeelaPalaceNewDelhi/2.jpg",
        restaurant: "hotel-images/TheLeelaPalaceNewDelhi/3.jfif"
    },

    description: "An iconic luxury hotel in Chanakyapuri offering opulent rooms, award-winning restaurants, a rooftop infinity pool, and exceptional hospitality."
},

{
    id: "itc-maurya",

    recommended: 13,

    name: "ITC Maurya",
    city: "Delhi",

    type: "Hotel",

    rating: 4.7,
    reviews: 6240,

    price: 15500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/ITCMaurya/cover.png",
        room: "hotel-images/ITCMaurya/1.jpg",
        pool: "hotel-images/ITCMaurya/2.jpg",
        restaurant: "hotel-images/ITCMaurya/3.jfif"
    },

    description: "A landmark luxury hotel famous for its award-winning dining, elegant accommodations, wellness facilities, and premium business services."
},

{
    id: "taj-palace-new-delhi",

    recommended: 34,

    name: "Taj Palace New Delhi",
    city: "Delhi",

    type: "Hotel",

    rating: 4.7,
    reviews: 5320,

    price: 15000,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/TajPalaceNewDelhi/cover.jpeg",
        room: "hotel-images/TajPalaceNewDelhi/1.jfif",
        pool: "hotel-images/TajPalaceNewDelhi/2.jfif",
        restaurant: "hotel-images/TajPalaceNewDelhi/3.jfif"
    },

    description: "A prestigious five-star hotel offering spacious rooms, lush gardens, multiple restaurants, luxury wellness facilities, and excellent conference spaces."
},

{
    id: "the-imperial-new-delhi",

    recommended: 35,

    name: "The Imperial New Delhi",
    city: "Delhi",

    type: "Hotel",

    rating: 4.8,
    reviews: 3890,

    price: 18500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/TheImperialNewDelhi/cover.jfif",
        room: "hotel-images/TheImperialNewDelhi/1.jfif",
        pool: "hotel-images/TheImperialNewDelhi/2.jfif",
        restaurant: "hotel-images/TheImperialNewDelhi/3.jfif"
    },

    description: "A historic luxury hotel blending colonial elegance with modern comforts, featuring fine dining, landscaped gardens, and world-class hospitality."
},


//Darjeeling

{
    id: "mayfair-darjeeling",

    recommended: 21,

    name: "Mayfair Darjeeling",
    city: "Darjeeling",

    type: "Hotel",

    rating: 4.7,
    reviews: 2140,

    price: 13800,

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/MayfairDarjeeling/cover.jfif",
        room: "hotel-images/MayfairDarjeeling/1.jfif",
        pool: "hotel-images/MayfairDarjeeling/2.jpg",
        restaurant: "hotel-images/MayfairDarjeeling/3.jfif"
    },

    description: "A heritage luxury hotel nestled in the Himalayan hills, offering elegant rooms, fine dining, a wellness spa, and scenic mountain views."
},

{
    id: "glenburn-tea-estate",

    recommended: 39,

    name: "Glenburn Tea Estate",
    city: "Darjeeling",

    type: "Resort",

    rating: 4.9,
    reviews: 690,

    price: 22500,

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: false
    },

    images: {
        cover: "hotel-images/GlenburnTeaEstate/cover.jfif",
        room: "hotel-images/GlenburnTeaEstate/1.jfif",
        pool: "hotel-images/GlenburnTeaEstate/2.jpg",
        restaurant: "hotel-images/GlenburnTeaEstate/3.jfif"
    },

    description: "An exclusive luxury tea estate retreat featuring colonial-style accommodations, gourmet dining, and breathtaking Himalayan landscapes."
},

{
    id: "summit-swiss-heritage",

    recommended: 44,

    name: "Summit Swiss Heritage",
    city: "Darjeeling",

    type: "Hotel",

    rating: 4.4,
    reviews: 1840,

    price: 6200,

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: false
    },

    images: {
        cover: "hotel-images/SummitSwissHeritage/cover.jfif",
        room: "hotel-images/SummitSwissHeritage/1.jfif",
        pool: "hotel-images/SummitSwissHeritage/2.jfif",
        restaurant: "hotel-images/SummitSwissHeritage/3.jfif"
    },

    description: "A charming heritage hotel offering comfortable accommodations, warm hospitality, and panoramic views of the surrounding hills."
},

{
    id: "sterling-darjeeling",

    recommended: 45,

    name: "Sterling Darjeeling",
    city: "Darjeeling",

    type: "Resort",

    rating: 4.4,
    reviews: 1520,

    price: 6900,

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    images: {
        cover: "hotel-images/SterlingDarjeeling/cover.jfif",
        room: "hotel-images/SterlingDarjeeling/1.jfif",
        pool: "hotel-images/SterlingDarjeeling/2.jpg",
        restaurant: "hotel-images/SterlingDarjeeling/3.jfif"
    },

    description: "A hillside resort offering cozy rooms, local cuisine, wellness facilities, and beautiful views of the Eastern Himalayas."
},


//Coorg

{
    id: "taj-madikeri-resort-spa",

    recommended: 7,

    name: "Taj Madikeri Resort & Spa",
    city: "Coorg",

    type: "Resort",

    rating: 4.8,
    reviews: 3250,

    price: 24500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/TajMadikeriResortSpa/cover.jfif",
        room: "hotel-images/TajMadikeriResortSpa/1.jfif",
        pool: "hotel-images/TajMadikeriResortSpa/2.jfif",
        restaurant: "hotel-images/TajMadikeriResortSpa/3.jfif"
    },

    description: "A luxury rainforest resort offering spacious villas, infinity pool, gourmet dining, and award-winning wellness experiences."
},

{
    id: "evolve-back-coorg",

    recommended: 15,

    name: "Evolve Back Coorg",
    city: "Coorg",

    type: "Resort",

    rating: 4.9,
    reviews: 2120,

    price: 28500,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    images: {
        cover: "hotel-images/EvolveBackCoorg/cover.jfif",
        room: "hotel-images/EvolveBackCoorg/1.jfif",
        pool: "hotel-images/EvolveBackCoorg/2.jfif",
        restaurant: "hotel-images/EvolveBackCoorg/3.jfif"
    },

    description: "An award-winning luxury plantation resort featuring private pool villas, authentic Coorg experiences, and exceptional hospitality."
},

{
    id: "the-tamara-coorg",

    recommended: 31,

    name: "The Tamara Coorg",
    city: "Coorg",

    type: "Resort",

    rating: 4.8,
    reviews: 1820,

    price: 19800,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    images: {
        cover: "hotel-images/TheTamaraCoorg/cover.jfif",
        room: "hotel-images/TheTamaraCoorg/1.jfif",
        pool: "hotel-images/TheTamaraCoorg/2.jfif",
        restaurant: "hotel-images/TheTamaraCoorg/3.jfif"
    },

    description: "A tranquil luxury resort surrounded by coffee plantations, offering elegant cottages, wellness experiences, and panoramic valley views."
},

{
    id: "club-mahindra-madikeri",

    recommended: 47,

    name: "Club Mahindra Madikeri",
    city: "Coorg",

    type: "Resort",

    rating: 4.5,
    reviews: 4860,

    price: 9200,

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/ClubMahindraMadikeri/cover.jfif",
        room: "hotel-images/ClubMahindraMadikeri/1.jfif",
        pool: "hotel-images/ClubMahindraMadikeri/2.jfif",
        restaurant: "hotel-images/ClubMahindraMadikeri/3.jfif"
    },

    description: "A family-friendly hill resort featuring spacious rooms, recreational activities, indoor and outdoor amenities, and scenic plantation surroundings."
},


//Ooty

{
    id: "savoy-ooty",

    recommended: 20,

    name: "Savoy Ooty",
    city: "Ooty",

    type: "Hotel",

    rating: 4.7,
    reviews: 1640,

    price: 13200,

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    images: {
        cover: "hotel-images/SavoyOoty/cover.jfif",
        room: "hotel-images/SavoyOoty/1.jfif",
        pool: "hotel-images/SavoyOoty/2.jfif",
        restaurant: "hotel-images/SavoyOoty/3.jfif"
    },

    description: "A historic heritage hotel surrounded by landscaped gardens, offering colonial-style cottages, fine dining, and peaceful hill station charm."
},

{
    id: "fortune-resort-sullivan-court",

    recommended: 40,

    name: "Fortune Resort Sullivan Court",
    city: "Ooty",

    type: "Resort",

    rating: 4.5,
    reviews: 1680,

    price: 8100,

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    images: {
        cover: "hotel-images/FortuneResort/cover.jfif",
        room: "hotel-images/FortuneResort/1.jfif",
        pool: "hotel-images/FortuneResort/2.jfif",
        restaurant: "hotel-images/FortuneResort/3.jfif"
    },

    description: "A charming hillside resort offering comfortable accommodations, wellness facilities, and picturesque views of the Nilgiri Mountains."
},

{
    id: "sterling-ooty-fern-hill",

    recommended: 48,

    name: "Sterling Ooty Fern Hill",
    city: "Ooty",

    type: "Resort",

    rating: 4.4,
    reviews: 2450,

    price: 7600,

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    images: {
        cover: "hotel-images/SterlingOotyFernHill/cover.jfif",
        room: "hotel-images/SterlingOotyFernHill/1.jfif",
        pool: "hotel-images/SterlingOotyFernHill/2.jfif",
        restaurant: "hotel-images/SterlingOotyFernHill/3.jfif"
    },

    description: "A family-friendly hill resort featuring spacious rooms, recreational activities, and scenic views overlooking Ooty."
},

{
    id: "gem-park-ooty",

    recommended: 49,

    name: "Gem Park Ooty",
    city: "Ooty",

    type: "Hotel",

    rating: 4.3,
    reviews: 1320,

    price: 7200,

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    images: {
        cover: "hotel-images/GemParkOoty/cover.jpg",
        room: "hotel-images/GemParkOoty/1.jfif",
        pool: "hotel-images/GemParkOoty/2.jfif",
        restaurant: "hotel-images/GemParkOoty/3.jfif"
    },

    description: "A comfortable hillside hotel offering panoramic valley views, modern amenities, quality dining, and convenient access to Ooty's attractions."
},

];