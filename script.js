// PASSWORD

function checkPassword() {

const password = document.getElementById("passwordInput").value;

if(password === "230625"){

showPage("envelopePage");

}else{

alert("Password salah 😋");

}

}

// PAGE TRANSITION

function showPage(pageId){

document.querySelectorAll(".page").forEach(page=>{

page.classList.remove("active");

});

document.getElementById(pageId).classList.add("active");

window.scrollTo(0,0);

}

// RELATIONSHIP TIMER

const startDate = new Date("2025-06-23T00:00:00");

function updateTimer(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(diff / (1000 * 60 * 60)) % 24
);

const minutes = Math.floor(
(diff / (1000 * 60)) % 60
);

const seconds = Math.floor(
(diff / 1000) % 60
);

document.getElementById("timer").innerHTML =
`${days} Days • ${hours} Hours • ${minutes} Minutes • ${seconds} Seconds`;

}

updateTimer();

setInterval(updateTimer,1000);
