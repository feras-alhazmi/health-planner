import { Button } from "@nextui-org/react";
import React from "react";

// components/Header.js or in a Next.js page
// components/Header.js or in a Next.js page
const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-bold text-xl text-black">
            Hello, Dr. Waleed Alhazmi!
          </span>
          <span className="text-black">Have a good working day</span>
          <div className="flex mt-4">
            <Button className="bg-blue w-32 text-white font-bold py-2 px-4 rounded-lg mr-2">
              Patient Profile
            </Button>
            <Button className="bg-blue  w-32 text-white font-bold py-2 px-4 rounded-lg">
              Plans
            </Button>
          </div>
        </div>
        {/* Include avatar or user icon here */}
        <div className="rounded-full bg-white text-blue-900 p-2">
          <span role="img" aria-label="avatar">
            👤
          </span>{" "}
          {/* Replace with an actual avatar image */}
        </div>
      </div>
    </header>
  );
};

export default Header;
