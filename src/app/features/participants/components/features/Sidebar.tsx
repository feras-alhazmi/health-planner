import React from 'react';
import Avatar from './Avatar';
import { HiUserGroup } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className='w-full dashboard_bg text-white-300 pt-[100px] h-full flex flex-col'>
      <div className='w-full flex justify-center items-center px-10'>
        <Avatar path='/assets/user.svg' size={90} />
        <p className='text-lg font-semibold text-white hidden xl:block xl:ml-5'>Dr. Waleed Alhazmi</p>
      </div>
      <ul className='m mt-32 text-white-300 w-full'>
        <li className='flex items-center w-full px-10 py-3 border-r-white border-l-[4px]' style={{
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.027) 100%)"
        }}>
          <HiUserGroup className='inline-block mr-5 font-extrabold' size={30} />
          <p className='text-white-300 font-bold text-lg'>Participants</p>
        </li>
        <li className='flex items-center w-full px-10 py-3 mt-2'>
          <FaTelegramPlane className='inline-block mr-5 font-extrabold' size={30} />
          <p className='text-white-300 font-bold text-lg'>Chats</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;