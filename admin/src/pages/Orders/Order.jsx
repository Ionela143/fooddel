import React, { useEffect, useState } from "react";
import "./Order.css";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets";

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllOrders = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`${url}/api/order/list`);

      console.log("API RESPONSE:", response.data);

      if (response.data.success) {
        setOrders(response.data.data || []);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [url]);

  return (
    <div className="order add">
      <h3>Order Page</h3>

      {loading ? (
        <p>Loading orders...</p>
      ) : (
        <div className="order-list">
          {orders?.length > 0 ? (
            orders.map((order, index) => (
              <div key={order._id || index} className="order-item">
                
                <img src={assets.parcel_icon} alt="parcel" />

                <div className="order-details">
                  <p className="order-item-food">
                    {(order.items || []).map((item, itemIndex) =>
                      itemIndex === order.items.length - 1
                        ? `${item.name} x ${item.quantity}`
                        : `${item.name} x ${item.quantity}, `
                    )}
                  </p>

                  <p className="order-item-name">
                    {order.address?.firstName} {order.address?.lastName}
                  </p>

                  <div className="order-item-address">
                    <p>{order.address?.street}</p>
                    <p>
                      {order.address?.city}, {order.address?.state},{" "}
                      {order.address?.country}, {order.address?.zipcode}
                    </p>
                  </div>

                  <p className="order-item-phone">
                    {order.address?.phone}
                  </p>
                </div>

                <div className="order-meta">
                  <p>Items: {order.items?.length || 0}</p>
                  <p>₹{order.amount}</p>
                </div>

                <select
                  value={order.status}
                  onChange={(e) => {
                    console.log("Status change:", order._id, e.target.value);
                    // later you can add update API here
                  }}
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            ))
          ) : (
            <p>No orders found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Order;