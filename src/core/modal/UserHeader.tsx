import React from "react";
import { Button } from "@nextui-org/react";

interface Props {
  activePage: String;
  onNavigate: (page: "profile" | "plans") => void;
}

const UserHeader = ({ activePage, onNavigate }: Props) => {
  // Function to determine button class
  const buttonClass = (page: string) =>
    `w-32 font-bold py-2 px-4 rounded-lg ${
      activePage === page ? "bg-blue text-white" : " bg-white text-gray-400"
    }`;

  return (
    <header className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-bold text-xl text-black">
            Hello, Dr. Waleed Alhazmi!
          </span>
          <span className="text-black">Have a good working day</span>
          <div className="flex mt-4">
            <Button
              className={`${buttonClass("profile")} mr-2`}
              onClick={() => onNavigate("profile")}
            >
              Patient Profile
            </Button>
            <Button
              className={buttonClass("plans")}
              onClick={() => onNavigate("plans")}
            >
              Plans
            </Button>
          </div>
        </div>
        <div className="rounded-full bg-blue text-blue-900 p-2">
          <span role="img" aria-label="avatar">
            👤
          </span>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
