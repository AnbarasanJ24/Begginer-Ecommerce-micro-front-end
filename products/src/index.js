import faker from 'faker';

let products = '';

for (let index = 0; index < 3; index++) {
    const name = faker.commerce.productName();
    products += `<h1>${name}</h1>`

}
document.querySelector('#products').innerHTML = products


