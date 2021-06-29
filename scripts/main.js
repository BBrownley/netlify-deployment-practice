const faker = require("faker");
const fakerItem = faker.commerce.product();
const fakerItemEl = document.getElementById("faker-commerce-item");

fakerItemEl.innerText = fakerItem;
