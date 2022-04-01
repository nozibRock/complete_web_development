import React, { useState } from "react";
import Link from "../Link/Link";

import {MenuAlt1Icon, XIcon} from '@heroicons/react/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Deals", link: "/deals" },
    { id: 4, name: "Coupons", link: "/coupons" },
    { id: 5, name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="bg-indigo-200">
      <div onClick={() => setOpen(!open)} className="w-8 h-8 lg:hidden">
        {open ? <XIcon></XIcon> : <MenuAlt1Icon></MenuAlt1Icon>}
      </div>
      <ul
        className={`lg:flex justify-center absolute lg:static bg-indigo-200 w-full duration-500 ease-in ${
          open ? "top-7" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
