document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    navigation.classList.toggle('open');
});
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
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
        templeName: "Tallahassee Florida",
        location: "Tallahassee, Florida, United States",
        dedicated: "2024, December, 8",
        area: 29255,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tallahassee-florida-temple/tallahassee-florida-temple-54647.jpg"
    },
    {
        templeName: "Fort Lauderdale Florida",
        location: "Davie, Florida, United States",
        dedicated: "2014, May, 4",
        area: 30500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/fort-lauderdale-florida-temple/fort-lauderdale-florida-temple-11108.jpg"
    },
    {
        templeName: "Los Angeles California",
        location: "Los Angeles, California, United States",
        dedicated: "1956, March, 11",
        area: 190614,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-67748.jpg"
    }
];
const templeCards = document.querySelector("#temple-cards");

function displayTemples(list) {
    templeCards.innerHTML = "";
    list.forEach((temple) => {
        const card = document.createElement("section");
        card.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        templeCards.appendChild(card);

    });
}
displayTemples(temples);

document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    displayTemples(temples.filter(t => Number(t.dedicated.slice(0, 4)) < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
    displayTemples(temples.filter(t => Number(t.dedicated.slice(0, 4)) > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area < 10000));
});
const pageHeading = document.querySelector("#page-heading");

document.querySelector("#home").addEventListener("click", () => {
    pageHeading.textContent = "All Temples";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    pageHeading.textContent = "Old Temples";
    displayTemples(temples.filter(t => Number(t.dedicated.slice(0, 4)) < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
    pageHeading.textContent = "New Temples";
    displayTemples(temples.filter(t => Number(t.dedicated.slice(0, 4)) > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
    pageHeading.textContent = "Large Temples";
    displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
    pageHeading.textContent = "Small Temples";
    displayTemples(temples.filter(t => t.area < 10000));
});