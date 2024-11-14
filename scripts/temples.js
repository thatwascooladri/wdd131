
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const navMenu = document.querySelector("nav ul");
  
    hamburgerIcon.addEventListener("click", () => {
      navMenu.classList.toggle("visible"); 
      if (hamburgerIcon.innerHTML.trim() === "X") {
        hamburgerIcon.innerHTML = "☰";
      } else {
        hamburgerIcon.innerHTML = "X";
      }
    });
  });
  

