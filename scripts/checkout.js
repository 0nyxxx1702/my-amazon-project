import { renderOrderSummary } from './checkout/orderSummmary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js'

import { loadProducts } from '../data/products.js';
    //import '../cart-class.js';
//import '../data/backend-practice.js'


loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
