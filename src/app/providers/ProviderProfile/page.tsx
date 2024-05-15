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
          <p>
            dedicated personal trainer based at Fitness Time, a leading fitness
            center known for its comprehensive facilities and commitment to
            client health and wellness. With a passion for fitness that started
            in his teenage years, Nawaf has pursued a career that aligns with
            his love for helping others achieve their health and fitness goals.
          </p>
        </div>
        <div className="mt-4 ">
          <h2 className="font-semibold">Education and Certification</h2>
          <p>
            a degree in Sports Science from a reputable university, supplemented
            by certifications in personal training and nutrition. He continually
            seeks to further his knowledge and expertise through additional
            certifications, workshops, and seminars in areas such as strength
            training, cardio fitness, and rehabilitation.
          </p>
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
            <li>Strength and Conditioning</li>
            <li>Nutritional Counseling</li>
            <li>Functional Training</li>
            {/* Add other modalities */}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Insurance accepted</h2>
          <p>Aetna, Anthem, Blue Cross Blue Shield, Cigna, United Healthcare</p>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Seeing clients in</h2>
          <p>Jeddah</p>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
