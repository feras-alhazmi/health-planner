import React from "react";
import { FaTelegramPlane, FaStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

import Avatar from "../../core/navbar/side_menu/Avatar";
interface ProviderCardProps {
  provider: {
    name: string;
    specialty: string;
    hospital: string;
    image: string;
    rating: number;
    reviewsCount: number;
    consultationTime: string;
  };
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center w-full">
          <Avatar path={provider.image} size={70} alt={provider.name} />
          <div className="ml-3 ">
            <h1 className="text-lg font-medium">{provider.name}</h1>
            <div className="flex  mt-1">
              <p className="text-sm text-gray-500 mr-3">{provider.specialty}</p>
              <div className="flex  mt-1 justify-end">
                <MdAccessTime color="#0056B3" />
                <span className="text-sm text-gray-500">
                  {provider.consultationTime}
                </span>
              </div>
            </div>

            <div className="flex items-center ">
              <FaStar color="#0056B3" className="mr-1" />
              <span className="text-md font-semibold">{provider.rating}</span>
              <span className="text-sm text-gray-500 ml-1">
                ({provider.reviewsCount} Reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-[#F3F9FD] px-4 py-2 rounded-full flex items-center justify-center gap-2 w-full">
          <p className="text-[#0056B3]">Chat with Doctor</p>
          <FaTelegramPlane className="text-[#0056B3]" size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProviderCard;
