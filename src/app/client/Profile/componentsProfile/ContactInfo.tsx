// ContactInformation.tsx
import React from 'react';
import { FaPhone, FaEnvelope, FaUserMd } from 'react-icons/fa';
import { BiChat } from 'react-icons/bi';
import Image from 'next/image'
import { ContactInfoData } from '../tempUser';


type ContactInformationProps = {
  contactinfo: ContactInfoData
};

const ContactInformation: React.FC<ContactInformationProps> = ({ contactinfo }) => {
  return (
    <div className="contactInfoContainer bg-white p-4 rounded-lg shadow space-y-4">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 rounded-full"
          src="/assets/images/participant.png" // Replace with the path to the profile image
          alt={`${contactinfo.name}'s profile`}
        />
        <div>
          <h3 className="text-lg font-semibold">{contactinfo.name}</h3>
          <p className="text-sm text-gray-500">Chat with the patient</p>
        </div>
        <BiChat className="h-6 w-6 text-blue-500" />
      </div>
      <div className="space-y-1">
        <div className="flex items-center">
          <FaUserMd className="text-gray-400" />
          <p className="ml-2 text-sm">{`${contactinfo.gender}, ${contactinfo.dob}`}</p>
        </div>
        <p className="text-sm">{contactinfo.address}</p>
        <p className="text-sm">{contactinfo.job}</p>
      </div>
      <div className="space-y-1">
        <div className="flex items-center">
          <FaPhone className="text-gray-400" />
          <p className="ml-2 text-sm">{contactinfo.phone}</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-gray-400" />
          <p className="ml-2 text-sm">{contactinfo.email}</p>
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="font-semibold">Own Diagnosis</h4>
        <p className="text-sm">{contactinfo.diagnosis}</p>
      </div>
      <div className="space-y-1">
        <h4 className="font-semibold">Health Barriers</h4>
        {contactinfo.healthBarriers.map((barrier, index) => (
          <p key={index} className="text-sm">{barrier}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactInformation;
