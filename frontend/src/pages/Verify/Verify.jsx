import React, { useContext, useEffect } from "react";
import "./Verify.css";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { url } = useContext(StoreContext);

  const verifyPayment = async () => {
    try {
      console.log("🔥 VERIFY STARTED");
      console.log("Success param:", success);
      console.log("OrderId param:", orderId);

      const response = await axios.post(
        `${url}/api/order/verify`,
        {
          success,
          orderId,
        }
      );

      console.log("🔥 FULL RESPONSE:", response);
      console.log("🔥 RESPONSE DATA:", response.data);

      if (response.data.success) {
        console.log("🔥 NAVIGATING TO /myorders");
        alert("SUCCESS → GOING TO MY ORDERS");
        navigate("/myorders");
      } else {
        console.log("🔥 NAVIGATING TO /");
        alert("FAILED → GOING HOME");
        navigate("/");
      }
    } catch (error) {
      console.log("🔥 VERIFY ERROR:", error);
      alert("ERROR IN VERIFY API");
      navigate("/");
    }
  };

  useEffect(() => {
    console.log("🔥 VERIFY PAGE LOADED");

    if (success && orderId) {
      verifyPayment();
    } else {
      console.log("❌ Missing success or orderId");
    }
  }, [success, orderId]);

  return (
    <div className="verify">
      <h2>Verifying Payment...</h2>
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;