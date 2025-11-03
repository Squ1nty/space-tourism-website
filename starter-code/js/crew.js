let bgImg = document.querySelector(".body__bgImg");

// Handles major screen size changes upon initial load and any resizing
function handleBackgroundImg(){
  if(window.innerWidth >= 768 && window.innerWidth < 1440){
    bgImg.setAttribute("src", "../assets/crew/background-crew-tablet.jpg");
  }
  else if(window.innerWidth >= 1440){
    bgImg.setAttribute("src", "../assets/crew/background-crew-desktop.jpg");
  }
  else if(window.innerWidth < 768){
    bgImg.setAttribute("src", "../assets/crew/background-crew-mobile.jpg");
  }
}

window.addEventListener("load", () => {
  handleBackgroundImg();
});
window.addEventListener("resize", () => {
  handleBackgroundImg();
})