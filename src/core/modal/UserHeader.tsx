import React from "react";
import { Button } from "@nextui-org/react";
import { HiArrowSmallLeft } from "react-icons/hi2";
import Link from "next/link";
import NotificationBadge from "@/app/components/usersSearch/NotificationBadge";
import Avatar from "@/app/features/participants/components/features/Avatar";

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
    <header className="text-white p-4 mt-4">
      <div className="flex justify-between">
        <Link key="" href={"/participants"}>
          <HiArrowSmallLeft color="black" size={30} />
        </Link>

        <div className=" flex space-x-4 ">
          <button className="btn btn-primary">
            <NotificationBadge count={3} />
          </button>
          <button className="btn btn-secondary">
            <Avatar
              path="/assets/images/participant.png"
              size={40}
              alt="User"
            />
          </button>
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-bold text-xl text-black">Hello, Yousuf!</span>
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
      </div>
    </header>
  );
};

export default UserHeader;
