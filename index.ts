// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number
const reviewTotalDisplay = document.querySelector("#reviews");
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const propertiesDisplay = document.querySelector(".properties");

//Reviews

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyaltyUser: boolean
) {
  if (reviewTotalDisplay) {
    const loyalUserIcon = isLoyaltyUser ? " ⭐" : "";
    reviewTotalDisplay.innerHTML =
      "total reviews available are: " +
      value.toString() +
      "| last reviewed by " +
      reviewer +
      loyalUserIcon;
  }
}

// User

const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
} = {
  firstName: "Amogelang",
  lastName: "Mashishi",
  isReturning: true,
  age: 25,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

// Properties Array

const properties: {
  image: string;
  title: string;
  price: number;
  location: {
    address: string;
    city: string;
    postcode: number;
    country: string;
  };
  contact: [number, string];
  toRent: boolean;
}[] = [
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
      postcode: 80332,
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

    // Append property div to display div
    propertiesDisplay?.appendChild(propertyDiv);
  });
}

// Calling of Functions

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
showProperties();
