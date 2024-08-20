import { renderOrderSummary } from './checkout/orderSummmary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js'

import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';
    //import '../cart-class.js';
//import '../data/backend-practice.js'



new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('value1');
    });
}).then((value)=>{
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});

/*
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/