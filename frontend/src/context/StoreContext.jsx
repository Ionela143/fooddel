
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const url = "https://fooddel-backend-six.vercel.app";

  const [food_list, setFoodList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");

  // ADD TO CART
  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));

    try {
      if (token) {
        const response = await axios.post(
          `${url}/api/cart/add`,
          { itemId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Add Cart Response:", response.data);
      }
    } catch (error) {
      console.log("Add Cart Error:", error);
    }
  };

  // REMOVE FROM CART
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));

    try {
      if (token) {
        await axios.post(
          `${url}/api/cart/remove`,
          { itemId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
    } catch (error) {
      console.log("Remove Cart Error:", error);
    }
  };

  // TOTAL
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = food_list.find(
          (product) => product._id === itemId
        );

        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      }
    }

    return totalAmount;
  };

  // FOOD LIST
  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);

      if (response.data.success) {
        console.log("FOOD DATA:", response.data.data);
        setFoodList(response.data.data);
      }
    } catch (error) {
      console.log("Food List Error:", error);
    }
  };

  // GET CART DATA
  const loadCartData = async (savedToken) => {
    try {
      const response = await axios.post(
        `${url}/api/cart/get`,
        {},
        {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        }
      );

      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log("Load Cart Error:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();

      const savedToken = localStorage.getItem("token");

      if (savedToken) {
        setToken(savedToken);
        await loadCartData(savedToken);
      }
    };

    loadData();
  }, []);

  const contextValue = {
    url,
    token,
    setToken,
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
