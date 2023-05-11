let homeStoreEle =document.getElementById("home-score")
let guestStoreEle =document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function addHomeOne(){
    homeScore += 1
    homeStoreEle.textContent = homeScore
}
function addHomeTwo(){
    homeScore += 2
    homeStoreEle.textContent = homeScore
}
function addHomeThree(){
    homeScore += 3
    homeStoreEle.textContent = homeScore
}
function resetHome(){
  homeScore = 0
  homeStoreEle.textContent = homeScore
}

function addGuestOne(){
    guestScore += 1
    guestStoreEle.textContent = guestScore
}
function addGuestTwo(){
    guestScore += 2
    guestStoreEle.textContent = guestScore
}
function addGuestThree(){
    guestScore += 3
    guestStoreEle.textContent = guestScore
}
function resetGuest(){
  guestScore = 0
  guestStoreEle.textContent = guestScore
}
