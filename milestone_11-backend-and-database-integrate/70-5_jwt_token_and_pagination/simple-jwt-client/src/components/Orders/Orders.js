import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status !== 200 || res.status === 401 || res.status === 403) {
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);

  return (
    <div className='my-10'>
        <h2 className='font-bold text-2xl text-white'>This is Orders page: {orders.length}</h2>
    </div>
  );
};

export default Orders;
