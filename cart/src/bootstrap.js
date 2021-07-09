import faker from 'faker';


const mount = (el) => {

    console.log("Cart Loaded")
    el.innerText = `You have ${Math.floor(faker.commerce.price())} item in cart`

}

if (process.env.NODE_ENV === 'development') {

    const el = document.getElementById('dev-cartTitle')
    if (el) {
        mount(el);
    }
}

export { mount };