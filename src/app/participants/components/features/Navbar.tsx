import React, { Fragment } from "react";
import SearchInput from "./SearchInput";
import Avatar from "../../../../core/navbar/side_menu/Avatar";
import { AiOutlineDown } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import NotificationBadge from "./NotificationBadge";

const Navbar = (): JSX.Element => {
  return (
    <Fragment>
      <nav className="w-full bg-transparent lg:grid grid-cols-12 hidden">
        <div className="col-span-8">
          <SearchInput />
        </div>
        <div className="flex space-x-4 col-span-4 justify-end">
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
      </nav>
      <nav className="w-full bg-transparent lg:hidden">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center">
            <RxHamburgerMenu className="text-2xl text-black" />
            <div className="flex items-center bg-white px-3 py-2 ml-3 rounded-md">
              <Avatar
                path="/assets/images/participant.png"
                size={30}
                alt="User"
              />
              <p className="text-md text-black mx-2">Dr. Waleed Alhazmi</p>
              <AiOutlineDown
                className="inline-block ml-4 font-bold"
                size={15}
              />
            </div>
          </div>
          <div className="flex space-x-4 col-span-4 justify-end">
            <button className="btn btn-primary">
              <NotificationBadge count={3} />
            </button>
            <button className="btn btn-secondary">
              <Avatar
                path="/assets/images/participant.png"
                size={50}
                alt="User"
              />
            </button>
          </div>
        </div>
        <div className="col-span-8 mt-5">
          <SearchInput />
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
