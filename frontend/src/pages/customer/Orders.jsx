import { useEffect, useState } from 'react';

import OrdersOrderItem from '@/components/OrdersOrderItem';
import { getAllOrders } from '@/utilities/api/OrderAPIHandlers';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from server
    const fetchOrders = async () => {
      try {
        // Fetch orders from server
        const res = await getAllOrders();
        setOrders(res.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <section className='container'>
      <div className='row py-lg-5'>
        <div className='mx-auto'>
          <h1 className='text-center pb-3 pt-md-0 pt-sm-5'>Orders</h1>
          <section className='container'>
            <div className='row py-lg-3'>
              <div className='col-lg-7 col-md-8 mx-auto'>
                {orders.map((order, index) => (
                  <OrdersOrderItem key={index} order={order} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Orders;
