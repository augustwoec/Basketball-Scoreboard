let homecount = 0
let guestcount = 0
let homecountEl = document.getElementById("homecount-el")
let guestcountEl = document.getElementById("guestcount-el")

function homeincrement1() {
   homecount += 1
   homecountEl.textContent = homecount
}

function homeincrement2() {
   homecount += 2
   homecountEl.textContent = homecount
}

function homeincrement3() {
   homecount += 3
   homecountEl.textContent = homecount
}

function guestincrement1() {
   guestcount += 1
   guestcountEl.textContent = guestcount
}

function guestincrement2() {
   guestcount += 2
   guestcountEl.textContent = guestcount
}

function guestincrement3() {
   guestcount += 3
   guestcountEl.textContent = guestcount
}