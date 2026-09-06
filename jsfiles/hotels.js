//Hotel Objects

export const hotels = [
    
    //chennai
{
    id: "the-leela-palace-chennai",
    name: "The Leela Palace Chennai",
    recommended: 10,
    city: "Chennai",
    type: "Hotel",
    rating: 4.8,
    reviews: 4200,
    amenities: {
        wifi: true,
        pool: true,
        spa: true,
        gym: true,
        restaurant: true,
        parking: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 16500,
        image: "hotel-images/TheLeelaPalaceChennai/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 21500,
        image: "hotel-images/TheLeelaPalaceChennai/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 28000,
        image: "hotel-images/TheLeelaPalaceChennai/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/TheLeelaPalaceChennai/cover.avif",
        pool: "hotel-images/TheLeelaPalaceChennai/2.jfif",
        restaurant: "hotel-images/TheLeelaPalaceChennai/3.avif"
    },
    description: "Luxury five-star seafront hotel overlooking the Bay of Bengal, featuring elegant rooms, award-winning restaurants, a full-service spa, an outdoor infinity pool, and premium hospitality."
},

{
    id: "itc-grand-chola",
    recommended: 12,
    name: "ITC Grand Chola",
    city: "Chennai",
    type: "Hotel",
    rating: 4.8,
    reviews: 8283,
    amenities: {
        wifi: true,
        pool: true,
        spa: true,
        gym: true,
        restaurant: true,
        parking: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 18000,
        image: "hotel-images/ITCchola/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 23500,
        image: "hotel-images/ITCchola/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 30500,
        image: "hotel-images/ITCchola/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],


    images: {
        cover: "hotel-images/ITCchola/cover.jfif",
        pool: "hotel-images/ITCchola/2.jfif",
        restaurant: "hotel-images/ITCchola/3.jpg"
    },
    description: "A luxury five-star hotel inspired by the grandeur of the Chola dynasty, featuring award-winning restaurants, a lavish spa, expansive swimming pools, elegant rooms, and one of the largest convention spaces in India."
},

{
    id: "taj-coromandel",
    recommended: 19,
    name: "Taj Coromandel",
    city: "Chennai",
    type: "Hotel",
    rating: 4.8,
    reviews: 5230,
    amenities:{
        wifi: true,
        pool: true,
        spa: true,
        gym: true,
        restaurant: true,
        parking: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 15500,
        image: "hotel-images/TajCoromandel/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 20000,
        image: "hotel-images/TajCoromandel/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 26500,
        image: "hotel-images/TajCoromandel/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    
    images: {
        cover: "hotel-images/TajCoromandel/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 14500,
        image: "hotel-images/ParkHyatt/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 19000,
        image: "hotel-images/ParkHyatt/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],


    images: {
        cover: "hotel-images/ParkHyatt/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 32000,
        image: "hotel-images/TajFalaknuma/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 41500,
        image: "hotel-images/TajFalaknuma/exe.png",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 54500,
        image: "hotel-images/TajFalaknuma/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/TajFalaknuma/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 13500,
        image: "hotel-images/TajFalaknuma/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 17500,
        image: "hotel-images/TajFalaknuma/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/ITCkohenur/cover.avif",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 14500,
        image: "hotel-images/ParkHyattHyderabad/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 19000,
        image: "hotel-images/ParkHyattHyderabad/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/ParkHyattHyderabad/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 12500,
        image: "hotel-images/TheWestin/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 16500,
        image: "hotel-images/TheWestin/lux.jfif",
        guests: 4,
        bed: "2 King Beds + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/TheWestin/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 24500,
        image: "hotel-images/TajMahalPalace/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 32000,
        image: "hotel-images/TajMahalPalace/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 41500,
        image: "hotel-images/TajMahalPalace/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/TajMahalPalace/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 21000,
        image: "hotel-images/TheOberoiMumbai/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 27500,
        image: "hotel-images/TheOberoiMumbai/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 35500,
        image: "hotel-images/TheOberoiMumbai/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],


    images: {
        cover: "hotel-images/TheOberoiMumbai/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 14500,
        image: "hotel-images/TridentNariman/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 19000,
        image: "hotel-images/TridentNariman/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/TridentNariman/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 19000,
        image: "hotel-images/StRegis/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 24500,
        image: "hotel-images/StRegis/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/StRegis/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 17500,
        image: "hotel-images/JWmarriott/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 22500,
        image: "hotel-images/JWmarriott/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/JWmarriott/cover.jpg", 
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 18500,
        image: "hotel-images/Wgoa/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 24000,
        image: "hotel-images/Wgoa/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 31500,
        image: "hotel-images/Wgoa/lux.jfif",
        guests: 4,
        bed: "2 King Beds + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/Wgoa/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 23500,
        image: "hotel-images/TajExoticaResort/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 30500,
        image: "hotel-images/TajExoticaResort/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 40000,
        image: "hotel-images/TajExoticaResort/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],


    images: {
        cover: "hotel-images/TajExoticaResort/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 16500,
        image: "hotel-images/GrandHyattGoa/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 21500,
        image: "hotel-images/GrandHyattGoa/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/GrandHyattGoa/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 17000,
        image: "hotel-images/ITCgrandGoa/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 22000,
        image: "hotel-images/ITCgrandGoa/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/ITCgrandGoa/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 25000,
        image: "hotel-images/StRegisGoaResort/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 32500,
        image: "hotel-images/StRegisGoaResort/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 42500,
        image: "hotel-images/StRegisGoaResort/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],


    images: {
        cover: "hotel-images/StRegisGoaResort/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: false,
        spa: false
    },

    room: [
        {
        name: "Deluxe Room",
        price: 10500,
        image: "hotel-images/PalaisDeMahe/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 13500,
        image: "hotel-images/PalaisDeMahe/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
    }
    ],

    images: {
        cover: "hotel-images/PalaisDeMahe/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 9800,
        image: "hotel-images/LePondy/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 12500,
        image: "hotel-images/LePondy/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
    }
    ],


    images: {
        cover: "hotel-images/LePondy/cover.avif",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 7200,
        image: "hotel-images/AccordPuducherry/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 9500,
        image: "hotel-images/AccordPuducherry/exe.jfif",
        guests: 3,
        bed: "2 King Beds",
        breakfast: true,
        refundable: true
    }
    ],


    images: {
        cover: "hotel-images/AccordPuducherry/cover.webp",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: false,
        spa: false
    },

    room: [
        {
        name: "Deluxe Room",
        price: 8900,
        image: "hotel-images/ThePromenade/del.jfif",
        guests: 2,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 11500,
        image: "hotel-images/ThePromenade/exe.jfif",
        guests: 3,
        bed: "2 Queen Beds",
        breakfast: true,
        refundable: true
    }
    ],


    images: {
        cover: "hotel-images/ThePromenade/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 35500,
        image: "hotel-images/RambaghPalace/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 46000,
        image: "hotel-images/RambaghPalace/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 60500,
        image: "hotel-images/RambaghPalace/lux.jfif",
        guests: 4,
        bed: "2 King Beds + Living Area",
        breakfast: true,
        refundable: true
        }
    ],


    images: {
        cover: "hotel-images/RambaghPalace/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 17500,
        image: "hotel-images/Fairmont/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 22500,
        image: "hotel-images/Fairmont/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 30000,
        image: "hotel-images/Fairmont/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/Fairmont/cover.cms",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 11200,
        image: "hotel-images/ITCrajputana/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 14500,
        image: "hotel-images/ITCrajputana/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/ITCrajputana/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 9800,
        image: "hotel-images/JaipurMarriott/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 12500,
        image: "hotel-images/JaipurMarriott/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
    }
    ],


    images: {
        cover: "hotel-images/JaipurMarriott/cover.webp",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 42000,
        image: "hotel-images/TheOberoiUdaivilas/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 54500,
        image: "hotel-images/TheOberoiUdaivilas/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 71500,
        image: "hotel-images/TheOberoiUdaivilas/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/TheOberoiUdaivilas/cover.jfif",
        pool: "hotel-images/TheOberoiUdaivilas/2.jpg",
        restaurant: "hotel-images/TheOberoiUdaivilas/3.jfif"
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 45000,
        image: "hotel-images/TajLakePalace/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 58500,
        image: "hotel-images/TajLakePalace/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 76500,
        image: "hotel-images/TajLakePalace/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/TajLakePalace/cover.webp",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 12000,
        image: "hotel-images/TridentUdaipur/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 15500,
        image: "hotel-images/TridentUdaipur/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/TridentUdaipur/cover.jfif",
        pool: "hotel-images/TridentUdaipur/2.jfif",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: false,
        spa: false
    },

    room: [
        {
        name: "Executive Room",
        price: 16500,
        image: "hotel-images/ShivNiwasPalace/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 21500,
        image: "hotel-images/ShivNiwasPalace/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/ShivNiwasPalace/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 16500,
        image: "hotel-images/TheHimalayan/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 21500,
        image: "hotel-images/TheHimalayan/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 28000,
        image: "hotel-images/TheHimalayan/lux.jfif",
        guests: 4,
        bed: "2 King Beds + Living Area",
        breakfast: true,
        refundable: true
        }
    ],
    images: {
        cover: "hotel-images/TheHimalayan/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 14500,
        image: "hotel-images/SpanResort/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 19000,
        image: "hotel-images/SpanResort/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/SpanResort/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 9800,
        image: "hotel-images/LarisaResort/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 12500,
        image: "hotel-images/LarisaResort/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
    }
    ],


    images: {
        cover: "hotel-images/LarisaResort/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: true,
        spa: false
    },

    room: [
        {
        name: "Deluxe Room",
        price: 6800,
        image: "hotel-images/MastiffGrandManali/del.jfif",
        guests: 2,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 9000,
        image: "hotel-images/MastiffGrandManali/exe.jfif",
        guests: 3,
        bed: "2 King Beds",
        breakfast: true,
        refundable: true
    }
    ],

    images: {
        cover: "hotel-images/MastiffGrandManali/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 26500,
        image: "hotel-images/TheLeelaPalaceNewDelhi/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 34500,
        image: "hotel-images/TheLeelaPalaceNewDelhi/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 45000,
        image: "hotel-images/TheLeelaPalaceNewDelhi/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/TheLeelaPalaceNewDelhi/cover.jpg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 15500,
        image: "hotel-images/ITCMaurya/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 20000,
        image: "hotel-images/ITCMaurya/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/ITCMaurya/cover.png",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 15000,
        image: "hotel-images/TajPalaceNewDelhi/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 19500,
        image: "hotel-images/TajPalaceNewDelhi/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/TajPalaceNewDelhi/cover.jpeg",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 18500,
        image: "hotel-images/TheImperialNewDelhi/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 24000,
        image: "hotel-images/TheImperialNewDelhi/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/TheImperialNewDelhi/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 13800,
        image: "hotel-images/MayfairDarjeeling/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 18000,
        image: "hotel-images/MayfairDarjeeling/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/MayfairDarjeeling/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: false
    },

    room: [
        {
        name: "Deluxe Room",
        price: 22500,
        image: "hotel-images/GlenburnTeaEstate/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 29500,
        image: "hotel-images/GlenburnTeaEstate/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 38500,
        image: "hotel-images/GlenburnTeaEstate/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/GlenburnTeaEstate/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: false
    },

    room: [
        {
        name: "Deluxe Room",
        price: 6200,
        image: "hotel-images/SummitSwissHeritage/del.jfif",
        guests: 2,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 8000,
        image: "hotel-images/SummitSwissHeritage/exe.jfif",
        guests: 3,
        bed: "2 King Beds",
        breakfast: true,
        refundable: true
    }
    ],


    images: {
        cover: "hotel-images/SummitSwissHeritage/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 6900,
        image: "hotel-images/SterlingDarjeeling/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 9000,
        image: "hotel-images/SterlingDarjeeling/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
    }
    ],


    images: {
        cover: "hotel-images/SterlingDarjeeling/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 24500,
        image: "hotel-images/TajMadikeriResortSpa/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 32000,
        image: "hotel-images/TajMadikeriResortSpa/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 41500,
        image: "hotel-images/TajMadikeriResortSpa/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/TajMadikeriResortSpa/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 28500,
        image: "hotel-images/EvolveBackCoorg/del.avif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 37000,
        image: "hotel-images/EvolveBackCoorg/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 48500,
        image: "hotel-images/EvolveBackCoorg/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/EvolveBackCoorg/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 19800,
        image: "hotel-images/TheTamaraCoorg/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 25500,
        image: "hotel-images/TheTamaraCoorg/lux.jfif",
        guests: 4,
        bed: "1 King Bed + Living Area",
        breakfast: true,
        refundable: true
        }
    ],

    images: {
        cover: "hotel-images/TheTamaraCoorg/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: true,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 9200,
        image: "hotel-images/ClubMahindraMadikeri/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 12000,
        image: "hotel-images/ClubMahindraMadikeri/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
    }
    ],


    images: {
        cover: "hotel-images/ClubMahindraMadikeri/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    room: [
        {
        name: "Executive Room",
        price: 13200,
        image: "hotel-images/SavoyOoty/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Luxury Suite",
        price: 17000,
        image: "hotel-images/SavoyOoty/lux.jfif",
        guests: 4,
        bed: "2 Queen Beds + Living Area",
        breakfast: true,
        refundable: true
        }
    ],


    images: {
        cover: "hotel-images/SavoyOoty/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: true,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 8100,
        image: "hotel-images/FortuneResort/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 10500,
        image: "hotel-images/FortuneResort/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
    }
    ],


    images: {
        cover: "hotel-images/FortuneResort/cover.jfif",
        pool: "hotel-images/FortuneResort/2.jfif",
        restaurant: "hotel-images/FortuneResort/3.jpg"
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

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 7600,
        image: "hotel-images/SterlingOotyFernHill/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 10000,
        image: "hotel-images/SterlingOotyFernHill/exe.jfif",
        guests: 3,
        bed: "1 King Bed",
        breakfast: true,
        refundable: true
    }
    ],


    images: {
        cover: "hotel-images/SterlingOotyFernHill/cover.jfif",
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

    amenities: {
        wifi: true,
        pool: false,
        parking: true,
        restaurant: true,
        gym: false,
        spa: true
    },

    room: [
        {
        name: "Deluxe Room",
        price: 7200,
        image: "hotel-images/GemParkOoty/del.jfif",
        guests: 2,
        bed: "1 Queen Bed",
        breakfast: true,
        refundable: true
        },
        {
        name: "Executive Room",
        price: 9500,
        image: "hotel-images/GemParkOoty/exe.jfif",
        guests: 3,
        bed: "2 Queen Beds",
        breakfast: true,
        refundable: true
    }
    ],


    images: {
        cover: "hotel-images/GemParkOoty/cover.jpg",
        pool: "hotel-images/GemParkOoty/2.jfif",
        restaurant: "hotel-images/GemParkOoty/3.jfif"
    },

    description: "A comfortable hillside hotel offering panoramic valley views, modern amenities, quality dining, and convenient access to Ooty's attractions."
},

];

//amenity icons

export const amenityIcons = {
  wifi: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi-icon lucide-wifi"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>`,

  pool: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-ladder-icon lucide-waves-ladder"><path d="M19 5a2 2 0 0 0-2 2v11"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M7 13h10"/><path d="M7 9h10"/><path d="M9 5a2 2 0 0 0-2 2v11"/></svg>`,

  spa: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bubbles-icon lucide-bubbles"><path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5"/><circle cx="18.5" cy="8.5" r="3.5"/><circle cx="7.5" cy="16.5" r="5.5"/><circle cx="7.5" cy="4.5" r="2.5"/></svg>`,

  gym: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dumbbell-icon lucide-dumbbell"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/></svg>`,

  restaurant: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-icon lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,

  parking: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-parking-icon lucide-square-parking"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>`
};

export const hotelRatingDetails = {
  "the-leela-palace-chennai": { cleanliness: 4.9, staff: 4.8, location: 4.9, facilities: 4.9, value: 4.7 },
  "itc-grand-chola": { cleanliness: 4.9, staff: 4.9, location: 4.8, facilities: 4.9, value: 4.8 },
  "taj-coromandel": { cleanliness: 4.9, staff: 4.8, location: 4.9, facilities: 4.8, value: 4.7 },
  "park-hyatt-chennai": { cleanliness: 4.8, staff: 4.7, location: 4.8, facilities: 4.8, value: 4.6 },
  "taj-falaknuma-palace": { cleanliness: 5.0, staff: 4.9, location: 4.9, facilities: 4.9, value: 4.8 },
  "itc-kohenur": { cleanliness: 4.8, staff: 4.7, location: 4.7, facilities: 4.8, value: 4.6 },
  "park-hyatt-hyderabad": { cleanliness: 4.8, staff: 4.8, location: 4.7, facilities: 4.7, value: 4.6 },
  "the-westin-hyderabad-mindspace": { cleanliness: 4.7, staff: 4.7, location: 4.8, facilities: 4.6, value: 4.6 },
  "the-taj-mahal-palace": { cleanliness: 5.0, staff: 4.9, location: 5.0, facilities: 4.9, value: 4.7 },
  "the-oberoi-mumbai": { cleanliness: 4.9, staff: 4.9, location: 4.9, facilities: 4.8, value: 4.7 },
  "trident-nariman-point": { cleanliness: 4.8, staff: 4.7, location: 4.9, facilities: 4.7, value: 4.6 },
  "st-regis-mumbai": { cleanliness: 4.8, staff: 4.8, location: 4.8, facilities: 4.8, value: 4.6 },
  "jw-marriott-mumbai-juhu": { cleanliness: 4.8, staff: 4.8, location: 4.9, facilities: 4.8, value: 4.7 },
  "w-goa": { cleanliness: 4.8, staff: 4.7, location: 4.9, facilities: 4.8, value: 4.6 },
  "taj-exotica-goa": { cleanliness: 4.9, staff: 4.9, location: 4.9, facilities: 4.9, value: 4.8 },
  "grand-hyatt-goa": { cleanliness: 4.8, staff: 4.8, location: 4.8, facilities: 4.8, value: 4.7 },
  "itc-grand-goa": { cleanliness: 4.8, staff: 4.7, location: 4.8, facilities: 4.8, value: 4.6 },
  "st-regis-goa-resort": { cleanliness: 4.9, staff: 4.9, location: 4.9, facilities: 5.0, value: 4.8 },
  "palais-de-mahe": { cleanliness: 4.8, staff: 4.8, location: 4.8, facilities: 4.6, value: 4.7 },
  "le-pondy": { cleanliness: 4.6, staff: 4.6, location: 4.7, facilities: 4.5, value: 4.6 },
  "accord-puducherry": { cleanliness: 4.5, staff: 4.5, location: 4.5, facilities: 4.4, value: 4.6 },
  "the-promenade": { cleanliness: 4.6, staff: 4.6, location: 4.8, facilities: 4.5, value: 4.5 },
  "rambagh-palace": { cleanliness: 5.0, staff: 5.0, location: 4.9, facilities: 5.0, value: 4.8 },
  "fairmont-jaipur": { cleanliness: 4.9, staff: 4.8, location: 4.8, facilities: 4.9, value: 4.7 },
  "itc-rajputana": { cleanliness: 4.7, staff: 4.7, location: 4.8, facilities: 4.7, value: 4.6 },
  "jaipur-marriott-hotel": { cleanliness: 4.6, staff: 4.6, location: 4.6, facilities: 4.6, value: 4.5 },
  "the-oberoi-udaivilas": { cleanliness: 5.0, staff: 5.0, location: 5.0, facilities: 5.0, value: 4.9 },
  "taj-lake-palace": { cleanliness: 5.0, staff: 4.9, location: 5.0, facilities: 5.0, value: 4.9 },
  "trident-udaipur": { cleanliness: 4.8, staff: 4.8, location: 4.8, facilities: 4.8, value: 4.7 },
  "shiv-niwas-palace": { cleanliness: 4.8, staff: 4.7, location: 4.9, facilities: 4.6, value: 4.7 },
  "the-himalayan": { cleanliness: 4.9, staff: 4.8, location: 4.9, facilities: 4.8, value: 4.7 },
  "span-resort-spa": { cleanliness: 4.8, staff: 4.7, location: 4.8, facilities: 4.7, value: 4.7 },
  "larisa-resort": { cleanliness: 4.7, staff: 4.6, location: 4.7, facilities: 4.6, value: 4.6 },
  "mastiff-grand-manali": { cleanliness: 4.5, staff: 4.4, location: 4.6, facilities: 4.4, value: 4.5 },
  "the-leela-palace-new-delhi": { cleanliness: 4.9, staff: 4.9, location: 4.9, facilities: 4.9, value: 4.8 },
  "itc-maurya": { cleanliness: 4.8, staff: 4.8, location: 4.8, facilities: 4.8, value: 4.7 },
  "taj-palace-new-delhi": { cleanliness: 4.8, staff: 4.7, location: 4.8, facilities: 4.8, value: 4.7 },
  "the-imperial-new-delhi": { cleanliness: 4.9, staff: 4.9, location: 4.8, facilities: 4.8, value: 4.8 },
  "mayfair-darjeeling": { cleanliness: 4.8, staff: 4.7, location: 4.9, facilities: 4.7, value: 4.7 },
  "glenburn-tea-estate": { cleanliness: 5.0, staff: 5.0, location: 5.0, facilities: 4.9, value: 4.8 },
  "summit-swiss-heritage": { cleanliness: 4.5, staff: 4.4, location: 4.6, facilities: 4.4, value: 4.5 },
  "sterling-darjeeling": { cleanliness: 4.5, staff: 4.5, location: 4.6, facilities: 4.5, value: 4.5 },
  "taj-madikeri-resort-spa": { cleanliness: 4.9, staff: 4.8, location: 4.9, facilities: 4.9, value: 4.8 },
  "evolve-back-coorg": { cleanliness: 5.0, staff: 5.0, location: 4.9, facilities: 5.0, value: 4.8 },
  "the-tamara-coorg": { cleanliness: 4.9, staff: 4.8, location: 4.8, facilities: 4.9, value: 4.7 },
  "club-mahindra-madikeri": { cleanliness: 4.6, staff: 4.6, location: 4.7, facilities: 4.6, value: 4.6 },
  "savoy-ooty": { cleanliness: 4.8, staff: 4.7, location: 4.8, facilities: 4.7, value: 4.7 },
  "fortune-resort-sullivan-court": { cleanliness: 4.6, staff: 4.6, location: 4.7, facilities: 4.6, value: 4.5 },
  "sterling-ooty-fern-hill": { cleanliness: 4.5, staff: 4.5, location: 4.6, facilities: 4.5, value: 4.5 },
  "gem-park-ooty": { cleanliness: 4.4, staff: 4.4, location: 4.5, facilities: 4.3, value: 4.4 }
};