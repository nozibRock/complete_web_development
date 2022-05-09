import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);

    const [user, setUser] = useState({
      name: "Jen Looper",
      email: 'jenlooper@gmail.com'
    });

    const handleEmailChange = event => {
        console.log(event.target.value);
        const {email, ...rest} = user;
        const newEmail = event.target.value;
        const newUser = {email: newEmail, ...rest };
        console.log(newUser);
        setUser(newUser)
        console.log(email, rest);
    }

    return (
      <div className="w-50 mx-auto">
        <h2>Please Order: {service.name}</h2>
        <form action="">
          <input className='w-100 mb-2' type="text" name="name" value={user.name} placeholder="Name" required />
          <br />
          <input className='w-100 mb-2' type="email" name="email" value={user.email} onChange={handleEmailChange} placeholder="Email" required />
          <br />
          <input className='w-100 mb-2' type="text" name="service" value={service.name} placeholder="Service" required />
          <br />
          <textarea className='w-100 mb-2' type="text" name="address" placeholder="Address" required />
          <br />
          <input className='w-100 mb-2' type="number" name="phone" placeholder="Phone" required />
          <br />
          <input className='btn btn-success' type="submit" value="Place Order" />
        </form>
      </div>
    );
};

export default Checkout;