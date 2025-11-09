let bgImg = document.querySelector(".body__bgImg");
let heroImgs = document.querySelectorAll(".tech__heroImg");
let textBoxes = document.querySelectorAll(".tech__textBox");
let btns = document.querySelectorAll(".tech__slideBtn");
let btnsArray = Array.from(btns);

function handleContentState(index){
  heroImgs.forEach(img => {
    img.classList.remove("active");
  });
  textBoxes.forEach(box => {
    box.classList.remove("active");
  });
  heroImgs[index].classList.add("active");
  textBoxes[index].classList.add("active");
}
function handleActiveBtn(index){
  btns.forEach(btn => {
    btn.classList.remove("active");
  });
  btns[index].classList.add("active");
  handleContentState(index);
}
btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    if(btn === e.target){
      handleActiveBtn(btnsArray.indexOf(btn));
      handleContentState(btnsArray.indexOf(btn));
    }
  });
});
// Handles major screen size changes upon initial load and any resizing
function handleImgs(){
  if(window.innerWidth >= 768 && window.innerWidth < 1024){
    bgImg.setAttribute("src", "../assets/technology/background-technology-tablet.jpg");
    heroImgs.forEach(img => {
      img.setAttribute("src", `../assets/technology/image-${img.classList[1]}-landscape.jpg`);
    });
  }
  else if(window.innerWidth >= 1024){
    bgImg.setAttribute("src", "../assets/technology/background-technology-desktop.jpg");
    heroImgs.forEach(img => {
      img.setAttribute("src", `../assets/technology/image-${img.classList[1]}-portrait.jpg`);
    });
  }
  else if(window.innerWidth < 768){
    bgImg.setAttribute("src", "../assets/technology/background-technology-mobile.jpg");
    heroImgs.forEach(img => {
      img.setAttribute("src", `../assets/technology/image-${img.classList[1]}-portrait.jpg`);
    });
  }
}
window.addEventListener("load", () => {
  handleImgs();
  handleActiveBtn(0);
});
window.addEventListener("resize", () => {
  handleImgs();
})