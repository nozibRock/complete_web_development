import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl font-bold">
        My Appointments: {appointments.length}
      </h2>

      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
                <th></th>
              <th>Name</th>
              <th>Treatment</th>

              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr>
                  <td>{index + 1}</td>
                <td>{a.patientName}</td>
                <td>{a.treatment}</td>

                <td>{a.slot}</td>
                <td>{a.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
