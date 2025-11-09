let bgImg = document.querySelector(".body__bgImg");
let allCrewInfo = document.querySelectorAll(".main__crewInfo");
let allCrewImgs = document.querySelectorAll(".main__crewImg");
let crewBtns = document.querySelectorAll(".main__crewBtn");

function handleCrewBtns(btn){
  crewBtns.forEach(button => {
    button.classList.remove("active");
  });
  if(btn === crewBtns[0]){
    updateCurrentCrewState(0);
  }
  else if(btn === crewBtns[1]){
    updateCurrentCrewState(1);
  }
  else if(btn === crewBtns[2]){
    updateCurrentCrewState(2);
  }
  else if(btn === crewBtns[3]){
    updateCurrentCrewState(3);
  }
  btn.classList.add("active");
}
crewBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    handleCrewBtns(e.target);
  });
});
function updateCurrentCrewState(number){
  allCrewImgs.forEach(img => {
    img.classList.remove("active");
  });
  allCrewInfo.forEach(info => {
    info.classList.remove("active");
  });
  allCrewInfo[number].classList.add("active");
  allCrewImgs[number].classList.add("active");
}

// Handles major screen size changes upon initial load and any resizing
function handleBackgroundImg(){
  if(window.innerWidth >= 768 && window.innerWidth < 1440){
    bgImg.setAttribute("src", "/starter-code/assets/crew/background-crew-tablet.jpg");
  }
  else if(window.innerWidth >= 1440){
    bgImg.setAttribute("src", "/starter-code/assets/crew/background-crew-desktop.jpg");
  }
  else if(window.innerWidth < 768){
    bgImg.setAttribute("src", "/starter-code/assets/crew/background-crew-mobile.jpg");
  }
}
window.addEventListener("load", () => {
  handleBackgroundImg();
  handleCrewBtns(crewBtns[0]);
  updateCurrentCrewState(0);
});
window.addEventListener("resize", () => {
  handleBackgroundImg();
})