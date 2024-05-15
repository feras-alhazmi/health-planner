// components/ProviderProfile.js
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const ProviderProfile = () => {
  return (
    <div className=" bg-graybg p-6 rounded-lg shadow-lg">
      <div className="flex  bg-white rounded-lg mb-6 p-4 items-center space-x-4">
        <Image
          src="/assets/images/participant.png"
          alt="Rachel Davis, RD"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <h1 className="text-xl font-bold">Nawaf Alharby</h1>
          <div className="flex items-center text-sm space-x-2">
            <Button className="bg-blue text-white "> Book Now</Button>

            <span>💬 Get your price</span>
          </div>
        </div>
      </div>
      <div
        className="
      bg-white   p-4"
      >
        <div className="mt-4 ">
          <h2 className="font-semibold">Background</h2>
          <p>Information about Rachel Davis...</p>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Specialties</h2>
          <ul>
            <li>Diabetes</li>
            <li>Bariatric</li>
            {/* Add other specialties */}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Modalities</h2>
          <ul>
            <li>Weight Loss Medication</li>
            <li>Cognitive Behavioral Therapy (CBT)</li>
            {/* Add other modalities */}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Insurance accepted</h2>
          <p>Aetna, Anthem, Blue Cross Blue Shield, Cigna, United Healthcare</p>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Seeing clients in</h2>
          <p>
            AK, AZ, CA, CO, CT, HI, ID, IL, IN, KS, MA, MI, NH, NY, OK, OR, PA,
            TX, UT, VT, VA, WA, WV, WI, WY
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
