import axios from "axios";

export const getMyOrders = async () => {
  const token = localStorage.getItem("token");

  const { data } = await axios.get(
    "http://localhost:3000/api/orders/my",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};
