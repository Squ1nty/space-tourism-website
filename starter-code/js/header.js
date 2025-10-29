let body = document.querySelector("body");
let hamburger = document.querySelector(".header__hamburgerIcon");
let closing = document.querySelector(".header__closingIcon");
let nav = document.querySelector("nav");
let navLinks = nav.querySelectorAll("a");
let lastNavLink = navLinks[navLinks.length - 1];

lastNavLink.addEventListener("keydown", (e) => {
  if(e.key === "Tab" && window.innerWidth < 768){
    e.preventDefault();
    closing.focus();
  }
});

// Event listeners for hamburger + function to handle the mobile nav being open
function handleNavActive(){
  hamburger.style.display = "none";
  hamburger.setAttribute("inert", true);

  closing.focus();

  nav.removeAttribute("inert");
  nav.classList.add("active");
}
hamburger.addEventListener("click", () => {
  handleNavActive();
});
hamburger.addEventListener("keydown", (e) => {
  if(e.key === " " || e.key === "Enter"){
    e.preventDefault();
    handleNavActive();
  }
});

// Event listeners for closing + function to handle the mobile nav being closed
function handleNavInactive(){
  nav.classList.remove("active");
  nav.setAttribute("inert", true);

  hamburger.style.display = "block";
  hamburger.removeAttribute("inert");
  hamburger.focus();
}
closing.addEventListener("click", () => {
  handleNavInactive();
});
closing.addEventListener("keydown", (e) => {
  if(e.key === " " || e.key === "Enter"){
    e.preventDefault();
    handleNavInactive();
  }
});

function handleNavDefaultStates(){
  if(window.innerWidth >= 768){
    hamburger.setAttribute("inert", true);
    nav.removeAttribute("inert");
    nav.classList.remove("active");
  }
  else{
    hamburger.removeAttribute("inert");
    nav.setAttribute("inert", true);
  }
}

window.addEventListener("resize", () => {
  handleNavDefaultStates();
});
document.addEventListener("DOMContentLoaded", (e) => {
  const currentPage = window.location.pathname.split('/').pop();
  console.log("currentPage: " + currentPage);
  navLinks.forEach((anchor) => {
    const linkPage = anchor.getAttribute('href').split('/').pop();
    console.log("linkPage: " + linkPage);
    if(linkPage === currentPage){
      anchor.classList.add("activePage");
    }
  });

  handleNavDefaultStates();
});