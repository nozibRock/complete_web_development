import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import AppointmentService from "../AppointmentService/AppointmentService";

const AvailableAppointments = ({ selected, setSelected }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(selected, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4">
        {services.map((service) => (
          <AppointmentService key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
