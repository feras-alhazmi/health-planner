"use client";

import { Image } from "@nextui-org/react";
import SymptomsIcon from "../../../public/assets/svg/Symptions-Icon";
import LandingCard from "./components/Landing-Card-Component";
import MedicalManagementIcon from "../../../public/assets/svg/Medical-Managment-Icon";
import HeathRecordsIcon from "../../../public/assets/svg/Health-Records-Icon";
import CustomizableTemplateIcon from "../../../public/assets/svg/Customizable-Template-Icon";
import {
  MdAccountBox,
  MdComputer,
  MdCorporateFare,
  MdGroup,
  MdPrivacyTip,
} from "react-icons/md";

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col gap-24 justify-center p-10">
        <div className="flex flex-row justify-around max-w-screen-2xl w-full self-center flex-wrap gap-5">
          <Image
            alt="Medical Image"
            src="assets/images/Medical.png"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
          <div className="flex flex-col gap-3 self-center max-w-lg">
            <h1 className="text-3xl font-bold text-cyan-950">
              Your Medical Planner
            </h1>
            <p className="text-sm text-cyan-950">
              Stay on top of your health journey with our comprehensive Medical
              Planner. Designed to streamline and organize your healthcare
              needs, our planner offers a user-friendly interface to manage
              appointments, medications, vital information, and more. Manage
              your medical records with ease
            </p>
          </div>
        </div>
        <article className="flex flex-row justify-around max-w-screen-2xl w-full self-center flex-wrap gap-5">
          <div className="flex flex-col gap-5 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
            <h1 className="text-4xl font-bold text-cyan-950">Our Services</h1>
            <p>What make us stand out</p>
            <Image
              alt="Medical Image"
              src="assets/images/illi.png"
              className="max-w-sm"
            />
          </div>

          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl self-center">
            <LandingCard
              title="Medication Management"
              description="Never miss a dose with our medication tracker. Set reminders, refill alerts, and keep a detailed record of your prescriptions"
              icon={<MedicalManagementIcon></MedicalManagementIcon>}
            />
            <LandingCard
              title="Health Records"
              description="Safely store and access medical records, test results, and important documents for quick reference during appointments or emergencies"
              icon={<HeathRecordsIcon></HeathRecordsIcon>}
            />
            <LandingCard
              title="Symptoms Tracker"
              description="  Keep track of your symptoms and health conditions with our
                Symptoms Tracker. Monitor your health progress and share your
                symptoms with your healthcare provider."
              icon={<SymptomsIcon></SymptomsIcon>}
            />
            <LandingCard
              title="Customizable Templates"
              description="Tailor the planner to your specific needs with customizable templates for different health concerns or conditions"
              icon={<CustomizableTemplateIcon></CustomizableTemplateIcon>}
            />
          </div>
        </article>
        <section
          id="about-us"
          className="max-w-2xl w-full gap-7 flex flex-col self-center"
        >
          <h2 className="text-5xl text-center font-bold">About Us</h2>
          <h3>
            Welcome to [Your Company Name], Your Trusted Partner in Health
            Management! At [Your Company Name], we are dedicated to
            revolutionizing the way individuals engage with their healthcare
            journey. Founded on the belief that proactive health management
            leads to better outcomes, we have developed innovative tools and
            resources to empower users in taking control of their well-being.
          </h3>
          <h3 className="text-green-700">
            Our Mission: Driven by a commitment to enhancing health literacy and
            promoting proactive health behaviors, our mission is to provide
            individuals with the tools and support they need to make informed
            decisions about their health. We strive to simplify the complexities
            of healthcare management, making it accessible, intuitive, and
            personalized for every user.
          </h3>
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl self-center">
            <LandingCard
              backgroundColor="bg-slate-200"
              title="Data Privacy and Security"
              description="We adhere to the highest standards of data privacy and security, ensuring that our users' sensitive health information is always protected and handled with the utmost care."
              icon={<MdPrivacyTip size={36}></MdPrivacyTip>}
            />
            <LandingCard
              title="Innovation and Technology"
              backgroundColor="bg-slate-200"
              description="Leveraging cutting-edge technology and industry best practices, we continuously innovate to deliver solutions that are at the forefront of health management."
              icon={<MdComputer size={36}></MdComputer>}
            />
            <LandingCard
              backgroundColor="bg-slate-200"
              title="Collaborative Partnerships"
              description="We collaborate with healthcare providers, institutions, and experts to ensure that our solutions are evidence-based, clinically sound, and aligned with the latest advancements in healthcare."
              icon={<MdGroup size={36}></MdGroup>}
            />
            <LandingCard
              backgroundColor="bg-slate-200"
              title="User-Centric Approach"
              description="We prioritize user experience above all else, designing our products and services with the needs and preferences of our users in mind."
              icon={<MdAccountBox size={36}></MdAccountBox>}
            />
          </div>
        </section>
      </div>
    </>
  );
}
