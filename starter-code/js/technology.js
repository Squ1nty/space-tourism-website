let bgImg = document.querySelector(".body__bgImg");
let heroImg = document.querySelectorAll(".tech__heroImg");

// Handles major screen size changes upon initial load and any resizing
function handleImgs(){
  if(window.innerWidth >= 768 && window.innerWidth < 1440){
    bgImg.setAttribute("src", "../assets/technology/background-technology-tablet.jpg");
    heroImg.forEach(img => {
      img.setAttribute("src", `../assets/technology/image-${img.classList[1]}-landscape.jpg`);
    });
  }
  else if(window.innerWidth >= 1440){
    bgImg.setAttribute("src", "../assets/technology/background-technology-desktop.jpg");
    heroImg.forEach(img => {
      img.setAttribute("src", `../assets/technology/image-${img.classList[1]}-portrait.jpg`);
    });
  }
  else if(window.innerWidth < 768){
    bgImg.setAttribute("src", "../assets/technology/background-technology-mobile.jpg");
    heroImg.forEach(img => {
      img.setAttribute("src", `../assets/technology/image-${img.classList[1]}-portrait.jpg`);
    });
  }
}
window.addEventListener("load", () => {
  handleImgs();
});
window.addEventListener("resize", () => {
  handleImgs();
})