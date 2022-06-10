import { format } from "date-fns";
import React, { useState, useEffect } from "react";

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
      <div></div>
    </div>
  );
};

export default AvailableAppointments;
