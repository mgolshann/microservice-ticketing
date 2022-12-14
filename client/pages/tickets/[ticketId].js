import router from "next/router";
import useRequest from '../../hooks/use-request';

const TicketShow = ({ ticket }) => {

    const { doRequest, errors } = useRequest({
        method: 'post',
        url: '/api/orders',
        body: {
            ticketId: ticket.id
        },
        onSuccess: (order) => router.push('/orders/[orderId]', `/orders/${order.id}`)
    });

    return <div>
            <h1>{ticket.title}</h1>
            <h4>{ticket.price}</h4>
            {errors}
            <button className="btn btn-primary" onClick={() => doRequest()}>Purchase</button>
        </div>
};

TicketShow.getInitialProps = async (context, client) => {
    /*
    برای گرفتن آیدی باید از کانتکس استفاده کنیم . توجه کنید که تیکت آیدی که ما در نظر گرفتیم 
    به خاطر اینکه اسم صفحمون هم تیکت آیدی هست. پس اسم صفحت هر چی کی بود میتونی اونو از کانکس بگیری
    */

    const { ticketId } = context.query;
    
    const { data } = await client.get(`/api/tickets/${ticketId}`);
    return { ticket: data }

}

export default TicketShow;