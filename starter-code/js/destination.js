let bgImg = document.querySelector(".body__bgImg");
let planetaryObjImgs = document.querySelectorAll(".main__planetaryObjImg");
let planetaryObjBtns = document.querySelectorAll(".main__planetaryObjBtn");
let planetaryObjDesc = document.querySelectorAll(".main__planetaryObjDesc");
let planetaryObjDist = document.querySelectorAll(".main__planetaryObjDist");
let planetaryObjTime = document.querySelectorAll(".main__planetaryObjTime");

// Handles major screen size changes upon initial load and any resizing
function handleBackgroundImg(){
  if(window.innerWidth >= 768 && window.innerWidth < 1440){
    bgImg.setAttribute("src", "/assets/destination/background-destination-tablet.jpg");
  }
  else if(window.innerWidth >= 1440){
    bgImg.setAttribute("src", "/assets/destination/background-destination-desktop.jpg");
  }
  else if(window.innerWidth < 768){
    bgImg.setAttribute("src", "/assets/destination/background-destination-mobile.jpg");
  }
}

function handlePlanetState(selectedTab){
  planetaryObjImgs.forEach(img => {
    img.classList.remove("planet-spin", "active");
  });
  planetaryObjBtns.forEach(btn => {
    btn.classList.remove("active");
  });
  planetaryObjDesc.forEach(desc => {
    desc.classList.remove("active");
  });
  planetaryObjDist.forEach(dist => {
    dist.classList.remove("active");
  });
  planetaryObjTime.forEach(time => {
    time.classList.remove("active");
  });

  if(selectedTab === "MOON"){
    planetaryObjImgs[0].classList.add("active");
    planetaryObjBtns[0].classList.add("active");
    planetaryObjDesc[0].classList.add("active");
    planetaryObjDist[0].classList.add("active");
    planetaryObjTime[0].classList.add("active");
  }
  else if(selectedTab === "MARS"){
    planetaryObjImgs[1].classList.add("active");
    planetaryObjBtns[1].classList.add("active");
    planetaryObjDesc[1].classList.add("active");
    planetaryObjDist[1].classList.add("active");
    planetaryObjTime[1].classList.add("active");
  }
  else if(selectedTab === "EUROPA"){
    planetaryObjImgs[2].classList.add("active");
    planetaryObjBtns[2].classList.add("active");
    planetaryObjDesc[2].classList.add("active");
    planetaryObjDist[2].classList.add("active");
    planetaryObjTime[2].classList.add("active");
  }
  else{
    planetaryObjImgs[3].classList.add("active");
    planetaryObjBtns[3].classList.add("active");
    planetaryObjDesc[3].classList.add("active");
    planetaryObjDist[3].classList.add("active");
    planetaryObjTime[3].classList.add("active");
  }
}
planetaryObjBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handlePlanetState(e.target.textContent);
  });
});

function handleDefaultState(){
  planetaryObjImgs[0].classList.add("active");
  planetaryObjBtns[0].classList.add("active");
  planetaryObjDesc[0].classList.add("active");    
  planetaryObjDist[0].classList.add("active");
  planetaryObjTime[0].classList.add("active");
}
window.addEventListener("load", () => {
  handleBackgroundImg();
  handleDefaultState();
});
window.addEventListener("resize", () => {
  handleBackgroundImg();
})