import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dash-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        <h2 className="text-4xl font-bold text-purple-500">
          Welcome to your Dashboard
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dash-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/history">My history</Link>
          </li>
          {admin && (
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
