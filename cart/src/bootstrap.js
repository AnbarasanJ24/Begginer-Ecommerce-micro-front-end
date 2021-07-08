import faker from 'faker';


console.log("Cart Loaded")

const title = document.getElementById('cartTitle')
title.innerText = `You have ${Math.floor(faker.commerce.price())} item in cart`