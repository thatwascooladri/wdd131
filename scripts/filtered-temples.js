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

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah, USA",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
    },
    {
      templeName: "Manila Philippines Temple",
      location: "Quezon City, Metro Manila, Philippines",
      dedicated: "1984, September, 25",
      area: 26246,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg",
    },
    {
      templeName: "Rome Italy Temple",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 37755,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
    },
    {
      templeName: "Tokyo Japan Temple",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 29313,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg",
    },
    {
      templeName: "Paris France Temple",
      location: "Le Chesnay, France",
      dedicated: "2017, May, 21",
      area: 44153,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg",
    },
  ];

  const gallery = document.querySelector(".photo-gallery");

  const renderTemples = (templesToRender) => {
    gallery.innerHTML = "";
    templesToRender.forEach((temple) => {
      const card = document.createElement("div");
      card.classList.add("temple-card");

      card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
      `;

      gallery.appendChild(card);
    });
  };

  renderTemples(temples);


  const filterTemples = (criteria) => {
    let filteredTemples = temples;
  
    switch (criteria) {
      case "Old":
        filteredTemples = temples.filter((temple) => {
          const year = parseInt(temple.dedicated.split(",")[0], 10);
          return year < 1900;
        });
        break;
      case "New":
        filteredTemples = temples.filter((temple) => {
          const year = parseInt(temple.dedicated.split(",")[0], 10);
          return year > 2000;
        });
        break;
      case "Large":
        filteredTemples = temples.filter((temple) => temple.area > 90000);
        break;
      case "Small":
        filteredTemples = temples.filter((temple) => temple.area < 10000);
        break;
      default:
        filteredTemples = temples;
    }
  
    renderTemples(filteredTemples);
  };

  const navItems = document.querySelectorAll("nav ul li a");
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const criteria = e.target.textContent;
      filterTemples(criteria);
    });
  });
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    filterTemples("Home");
    const allCards = document.querySelectorAll(".temple-card");
    allCards.forEach((card) => {
      const cardTitle = card.querySelector("h3").textContent.toLowerCase();
      if (!cardTitle.includes(query)) {
        card.style.display = "none";
      } else {
        card.style.display = "";
      }
    });
  });
});

