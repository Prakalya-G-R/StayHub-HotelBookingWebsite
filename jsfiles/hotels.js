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


