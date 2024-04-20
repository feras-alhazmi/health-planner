// ContactInformation.tsx
import React from 'react';
import { FaPhone, FaEnvelope, FaUserMd } from 'react-icons/fa';
import { BiChat } from 'react-icons/bi';
import Image from 'next/image'


type ContactInformationProps = {
  name: string;
  age: number;
  gender: string;
  address: string;
  job: string;
  phone: string;
  email: string;
  diagnosis: string;
  healthBarriers: string[];
};

const ContactInformation: React.FC<ContactInformationProps> = ({
    name,
    age,
    gender,
    address,
    job,
    phone,
    email,
    diagnosis,
    healthBarriers,
  }) => {
    return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 rounded-full"
          src="person.png" // Replace with the path to the profile image
          alt={`${name}'s profile`}
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">Chat with the patient</p>
        </div>
        <BiChat className="h-6 w-6 text-blue-500" />
      </div>
      <div className="space-y-1">
        <div className="flex items-center">
          <FaUserMd className="text-gray-400" />
          <p className="ml-2 text-sm">{`${gender}, ${age} (${new Date().getFullYear() - age})`}</p>
        </div>
        <p className="text-sm">{address}</p>
        <p className="text-sm">{job}</p>
      </div>
      <div className="space-y-1">
        <div className="flex items-center">
          <FaPhone className="text-gray-400" />
          <p className="ml-2 text-sm">{phone}</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-gray-400" />
          <p className="ml-2 text-sm">{email}</p>
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="font-semibold">Own Diagnosis</h4>
        <p className="text-sm">{diagnosis}</p>
      </div>
      <div className="space-y-1">
        <h4 className="font-semibold">Health Barriers</h4>
        {healthBarriers.map((barrier, index) => (
          <p key={index} className="text-sm">{barrier}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactInformation;
