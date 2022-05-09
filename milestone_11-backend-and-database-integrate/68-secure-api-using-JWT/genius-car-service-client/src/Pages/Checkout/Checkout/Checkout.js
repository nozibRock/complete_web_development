import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  const [user] = useAuthState(auth);

  if (user) {
    console.log(user);
  }
  const handlePlaceOrder = (event) => {
      event.preventDefault();
      const order = {
          user: user.displayName,
          email: user.email,
          service: service.name,
          serviceId: serviceId,
          address: event.target.address.value,
          phone: event.target.phone.value
      }
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please Order: {service.name}</h2>
      <form action="">
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          value={user.displayName}
          placeholder="Name"
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          value={service.name}
          placeholder="Service"
          required
          readOnly
        />
        <br />
        <textarea
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="Address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="number"
          name="phone"
          placeholder="Phone"
          required
        />
        <br />
        <input className="btn btn-success" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
