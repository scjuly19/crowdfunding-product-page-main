const menuModal = document.querySelector("#menu-modal");
const pledgeModal = document.querySelector("#pledge-modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const menuBtn = document.querySelector("#menu-phone");
const backBtn = document.querySelector("#back-btn");
const pledgeClose = document.querySelector(".pledge-close-button");
const thankModal = document.querySelector("#thank-modal");
const rewardBtn=document.querySelector(".reward-btn");
const closethanksModal=document.querySelector(".close-thanks-modal");
const bookmarkWeb=document.querySelector("#bookmark-web");

function toggleModal(isTrigger) {
  menuModal.classList.toggle("show-modal");
  if (isTrigger) {
    menuBtn.style.display = "none";
  } else {
    menuBtn.style.display = "block";
  }
}
function togglePledgeModal() {
  pledgeModal.classList.toggle("show-modal");
}
function togglethanksModal() {
  thankModal.classList.toggle("show-modal");
}
function bookmarkToggle(){
  const bookmarkText=document.querySelector("#bookmark-text");
  const circle=document.querySelector("#circle");
  circle.style.fill="hsl(176, 72%, 28%)";
  bookmarkText.style.color="hsl(176, 72%, 28%)";
  bookmarkText.innerHTML="Bookmarked"
}
trigger.addEventListener("click", () => toggleModal(true));
closeButton.addEventListener("click", () => toggleModal(false));
backBtn.addEventListener("click", togglePledgeModal);
pledgeClose.addEventListener("click", togglePledgeModal);
rewardBtn.addEventListener("click",togglethanksModal);
closethanksModal.addEventListener("click",togglethanksModal);
bookmarkWeb.addEventListener("click",bookmarkToggle);