import { Permissions, LoyaltyUser } from "./enums.js";
import { MainImage } from "./classes.js";
const reviewTotalDisplay = document.querySelector("#reviews");
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const propertiesDisplay = document.querySelector(".properties");
const footerDisplay = document.querySelector(".footer");
const container = document.querySelector(".container");
const reviewContainer = document.querySelector(".reviews");
const button = document.querySelector(".button");
const mainImageContainer = document.querySelector(".main-image");
//Reviews
const reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "01-04-2021",
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: "28-03-2021",
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: "27-03-2021",
    },
];
// Reviews Functions
function showReviewTotal(value, reviewer, isLoyaltyUser) {
    if (reviewTotalDisplay) {
        const loyalUserIcon = LoyaltyUser.GOLD_USER ? " ⭐" : "";
        reviewTotalDisplay.innerHTML =
            value.toString() +
                " Review" +
                makeMultiple(value) +
                "| last reviewed by " +
                reviewer +
                loyalUserIcon;
    }
}
function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return "s";
    }
    else
        return "";
}
const you = {
    firstName: "Amogelang",
    lastName: "Mashishi",
    peermissions: Permissions.ADMIN,
    isReturning: true,
    age: 25,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
// Properties Array
const properties = [
    {
        image: "images/treehouse.jpeg",
        title: "African TreeHouse",
        price: 1500,
        location: {
            address: "65 Mandela Drive",
            city: "Johannesburg",
            postcode: 2001,
            country: "South-Africa",
        },
        contact: [+211773032811, "amogelangmashishi12@gmail.com"],
        toRent: true,
    },
    {
        image: "images/irish.jpg",
        title: "Irish Bungalow",
        price: 1000,
        location: {
            address: "123 Bogota Drive",
            city: "Bogota",
            postcode: "GBX 2XT",
            country: "Irish",
        },
        contact: [+279991273613, "maryjane@gmail.com"],
        toRent: false,
    },
    {
        image: "images/tokyo.jpg",
        title: "Tokyo Cottage",
        price: 3000,
        location: {
            address: "5 hello drive ",
            city: "Tokyo",
            postcode: 4522,
            country: "Japan",
        },
        contact: [+25372888827, "shanghai25@gmail.com"],
        toRent: true,
    },
    {
        image: "images/malaysion-hotel.jpg",
        title: "Malia Hotel",
        price: 35,
        location: {
            address: "Room 4",
            city: "Malia",
            postcode: 45334,
            country: "Malaysia",
        },
        contact: [+60349822083, "lee34@gmail.com"],
        toRent: false,
    },
];
function showProperties() {
    // Clear existing content
    propertiesDisplay.innerHTML = "";
    // Loop through each property and create a div container for each property
    properties.forEach((property) => {
        const propertyDiv = document.createElement("div");
        propertyDiv.className = "property";
        // Create and set the title
        const titleElement = document.createElement("h2");
        titleElement.textContent = property.title;
        // Create and set the image
        const imageElement = document.createElement("img");
        imageElement.src = property.image;
        // Append title and image to the property div
        propertyDiv.appendChild(titleElement);
        propertyDiv.appendChild(imageElement);
        // Show the price using showDetails
        showDetails(isLoggedIn, propertyDiv, property.price);
        // Append property div to display div
        propertiesDisplay === null || propertiesDisplay === void 0 ? void 0 : propertiesDisplay.appendChild(propertyDiv);
    });
}
// Footer: Current Location
let currentLocation = ["Rustenburg", "13:56", 35];
footerDisplay.innerHTML =
    currentLocation[0] +
        " " +
        currentLocation[1] +
        " " +
        currentLocation[2] +
        "°";
// Show price per night
let isLoggedIn;
let authorityStatus;
isLoggedIn = true;
function showDetails(authorityStatus, element, price) {
    if (authorityStatus) {
        const priceDisplay = document.createElement("div");
        priceDisplay.innerHTML = price.toString() + "/night";
        priceDisplay.className = "price";
        element.appendChild(priceDisplay);
    }
}
// Get top 2 Reviews
function getTopTwoReviews(reviews) {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}
// Button - add event listener
let count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        const topTwo = getTopTwoReviews(array);
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement("div");
            card.classList.add("review-card");
            card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
button.addEventListener("click", () => addReviews(reviews));
let yourMainImage = new MainImage("images/greece.jpg", "Island In Greece", [
    {
        name: "Porsha",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "25.12.2023",
    },
]);
const image = document.createElement("img");
image.setAttribute("src", yourMainImage.src);
mainImageContainer.appendChild(image);
// Calling of Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
showProperties();
