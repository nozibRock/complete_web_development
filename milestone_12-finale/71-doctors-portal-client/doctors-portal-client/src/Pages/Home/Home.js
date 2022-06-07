import React from "react";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      {/* <h2>This is home</h2> */}
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonials />
    </div>
  );
};

export default Home;
