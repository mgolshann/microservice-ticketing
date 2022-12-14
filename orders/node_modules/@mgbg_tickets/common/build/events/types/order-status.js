"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    // When the order has been created, but the 
    // ticket it is trying to order has been reserved
    OrderStatus["Created"] = "Created";
    // The ticket the order is trying to reserve has already
    // been reserved, or when the user has cancelled the order
    // The order expires before payment
    OrderStatus["Cancelled"] = "Cancelled";
    // The order has successfully reseved the ticket
    OrderStatus["AwaitingPayment"] = "AwaitingPayment";
    // The order has reseved the ticket and the user has
    // provided payment successfully
    OrderStatus["Compelete"] = "Compelete";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
