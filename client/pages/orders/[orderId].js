import { useEffect, useState } from "react";
import StripeCheckout from 'react-stripe-checkout';
import useRequest from "../../hooks/use-request";
import Router from 'next/router';

const OrderShow = ({ order, currentuser }) => {

    const [timeLeft, setTimeLeft] = useState(0);

    const { doRequest, errors } = useRequest({
        url: '/api/payments',
        method: 'post',
        body: {
            orderId: order.id
        },
        onSuccess: () => Router.push('/orders')
    });


    useEffect(() => {

        const findTimeLeft = () => {
            const expireTime = new Date(order.expiresAt) - new Date();
            setTimeLeft(Math.round(expireTime / 1000))
        }

        findTimeLeft();
        const timerId = setInterval(findTimeLeft, 1000);

        return () => {
            clearInterval(timerId)
        }

    }, [order])

    if (timeLeft < 0 ) {
        return <div>Order Expired</div>;
    }

    return (
        <div>
            Time left to pay: {timeLeft} seconds

            <StripeCheckout 
                token={({ id }) => doRequest({ token: id })}
                stripeKey="pk_test_51LyqTcCb6BhwWbKzaFjBEASkYfPdkCtA6di37aKm5B8d0t11cV5xBJYML3Et7jngH4M2kvFc4MS0GosDUPy1Tk8h00BD93OeMA"
                amount={order.ticket.price * 100}
                email={currentuser.email}
            />
            
            {errors}
        </div>
    )
};

OrderShow.getInitialProps = async (context, client) => {
    
    const { orderId } = context.query;
    const { data } = await client.get(`/api/orders/${orderId}`);

    return { order: data }
}

export default OrderShow;