import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service/Service";

const Services = () => {
    const services = [
      {
        _id: 1,
        name: "Fluoride Treatment",
        description:
          "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
        img: fluoride,
      },
      {
        _id: 2,
        name: "Cavity Filling",
        description:
          "When it involves having a cavity filled, its important to understand that you simply have the proper information to make a decision , after consultation together with your dentist, what treatments and materials are used for your care?",
        img: cavity,
      },
      {
        _id: 3,
        name: "Teeth Whitening",
        description:
          "Teeth whitening is not permanent. It can lasts up to 3 years it varies from person to person. The whitening effect would not last as long if you smoke or drink red wine, tea or coffee, which can all stain your teeth.",
        img: whitening,
      },
    ];
  return (
    <div className="my-28">
      <div className="text-center my-4">
        <h3 className="text-primary  text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
