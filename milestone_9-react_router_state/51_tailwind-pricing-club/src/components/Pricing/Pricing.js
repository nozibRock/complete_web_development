import React from 'react';

const Pricing = () => {
    const pricingOptions = [
      {
        id: 1,
        name: "Free",
        price: 0,
        benefits: [
          "lifetime free",
          "unlimited deals",
          "localized deals",
          "fantastic deals",
          "crazy deals",
        ],
      },
      {
        id: 2,
        name: "Regular",
        price: 9.99,
        benefits: [
          "everything on free",
          "unlimited deals",
          "localized deals",
          "fantastic deals",
          "crazy deals",
        ],
      },
      {
        id: 3,
        name: "Premium",
        price: 19.99,
        benefits: [
          "everything on Regular",
          "unlimited deals",
          "localized deals",
          "fantastic deals",
          "crazy deals",
        ],
      },
    ];
    return (
      <div className="bg-indigo-300 p-4 mt-8">
        <h1 className="text-5xl font-mono text-white">
          Best Deals of the town
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          assumenda! Sed iure obcaecati totam distinctio praesentium quae iusto
          numquam, animi autem architecto harum aut dolorum dolores. Quis
          commodi ipsa quibusdam!
        </p>
      </div>
    );
};

export default Pricing;