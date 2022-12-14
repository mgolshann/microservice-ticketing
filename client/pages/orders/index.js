
const OrderList = ({ orders }) => {
console.log(orders)
    const showOrders = (orders) => {
        return orders.map((order, index) => {
            return (
                <tr key={order.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{order.ticket.title}</td>
                    <td>{order.ticket.price}</td>
                    <td>{order.status}</td>
                    <td>{new Date(order.createdAt).toString().slice(0, 15)}</td>
                </tr>
            )
        })
    }


    return (
    <div>
        <table className="table">
            <caption>list of orders</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">title</th>
                        <th scope="col">price</th>
                        <th scope="col">status</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    { showOrders(orders) }
                </tbody>
        </table>
    </div>
    )


};

OrderList.getInitialProps = async (context, client) => {
    const { data } = await client.get('/api/orders');

    return { orders: data }
}

export default OrderList;