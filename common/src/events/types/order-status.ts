
export enum OrderStatus {
    // When the order has been created, but the 
    // ticket it is trying to order has been reserved
    Created = 'Created',

    // The ticket the order is trying to reserve has already
    // been reserved, or when the user has cancelled the order
    // The order expires before payment
    Cancelled = 'Cancelled',


    // The order has successfully reseved the ticket
    AwaitingPayment = 'AwaitingPayment',

    // The order has reseved the ticket and the user has
    // provided payment successfully
    Compelete = 'Compelete'
}
