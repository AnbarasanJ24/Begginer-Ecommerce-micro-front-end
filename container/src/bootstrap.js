import { mount as ProductMount } from 'products/ProductsIndex';
import { mount as CartMount } from 'cart/CartIndex';

console.log('Container!');

ProductMount(document.getElementById('container-products'));
CartMount(document.getElementById('container-cartTitle'));
