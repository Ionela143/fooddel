import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      console.log("Fetching orders...");
      console.log("Token:", token);

      const response = await axios.post(
        `${url}/api/order/userorders`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Orders Response:", response.data);

      if (response.data.success) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error("FETCH ORDERS ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return (
      <div className="my-orders">
        <h2>Loading Orders...</h2>
      </div>
    );
  }

  return (
    <div className="my-orders">
      <h2>My Orders</h2>

      <div className="container">
        {data.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          data.map((order, index) => (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="Parcel" />

              <p>
                {order.items?.map((item, itemIndex) => (
                  <span key={itemIndex}>
                    {item.name} x {item.quantity}
                    {itemIndex !== order.items.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>

              <p>₹{order.amount}</p>

              <p>Items: {order.items?.length}</p>

              <p>
                <span>&#x25cf;</span> <b>{order.status}</b>
              </p>

              <button onClick={fetchOrders}>
                Refresh Orders
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;