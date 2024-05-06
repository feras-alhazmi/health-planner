"use client";

import { Image } from "@nextui-org/react";
import SymptomsIcon from "../../../public/assets/svg/Symptions-Icon";
import LandingCard from "./components/Landing-Card-Component";
import CustomizableTemplateIcon from "../../../public/assets/svg/Customizable-Template-Icon";
import {
  MdAccountBox,
  MdComputer,
  MdOutlineManageSearch,
  MdGroup,
  MdPrivacyTip,
} from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";

import ProviderCard from "../providers/ProviderCard";
import ProviderType from "./components/ProviderType";

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
          <div className="flex flex-col self-center max-w-lg">
            <h1 className="text-5xl font-bold text-cyan-950 mb-5">
              Health providers who accept your insurance
            </h1>
            <p className=" text-cyan-950 mb-5">
              Find a board-certified, Registered Health Provider who will design
              a custom plan for you and work through insurance to get it
              covered.
            </p>

            <div className="">
              <h1 className="text-2xl font-bold text-cyan-950 mb-5">
                Our Health providers
              </h1>
              <div className="flex flex-col gap-3 md:flex-row md:flex-nowrap">
                <ProviderType>Personal trainers</ProviderType>
                <ProviderType>Dietitians</ProviderType>
                <ProviderType>Physical Therapists</ProviderType>
              </div>
            </div>
          </div>
        </div>
        <article className="flex flex-row justify-around max-w-screen-2xl w-full self-center flex-wrap gap-5">
          <div className="flex flex-col gap-5 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
            <h1 className="text-4xl font-bold text-cyan-950">How it Works</h1>

            <Image
              alt="Medical Image"
              src="assets/images/illi.png"
              className="max-w-sm"
            />
          </div>

          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl self-center">
            <LandingCard
              title="Find a Provider"
              description="Never miss a task with our Task Management. Set reminders, refill alerts, and keep a detailed record of your prescriptions"
              icon={<MdOutlineManageSearch color="#0056B3" size={70} />}
            />
            <LandingCard
              title="Connect & Meet"
              description="Safely store and access medical records, test results, and important documents for quick reference during appointments or emergencies"
              icon={<MdComputer color="#0056B3" size={70} />}
            />
            <LandingCard
              title="Get a Plan"
              description="  Keep track of your symptoms and health conditions with our
                Symptoms Tracker. Monitor your health progress and share your
                symptoms with your healthcare provider."
              icon={<FaTasks color="#0056B3" size={70} />}
            />
            <LandingCard
              title="Pay with insurance"
              description="Tailor the planner to your specific needs with customizable templates for different health concerns or conditions"
              icon={<LuHeartHandshake color="#0056B3" size={70} />}
            />
          </div>
        </article>
        <section
          id="about-us"
          className="max-w-2xl w-full gap-7 flex flex-col self-center"
        >
          <h2 className="text-5xl text-center font-bold">About Us</h2>
          <h3>
            At BrightCare, we are transforming preventive healthcare by
            connecting individuals with top-tier health professionals, including
            personal trainers, nutritionists, and physical therapists. Our
            platform leverages advanced, user-friendly tools to provide
            personalized health plans, promoting proactive health management
            tailored to each client{"'"}s unique needs. Our commitment to
            prevention helps clients avoid serious health issues and enhance
            their quality of life. At BrightCare, preventive healthcare is not
            just a service—it is a partnership for a healthier future.
          </h3>
          <h2 className="text-5xl text-center font-bold">Our Vision</h2>

          <h3>
            At BrightCare, our vision is to revolutionize preventive healthcare
            by connecting individuals with top health professionals and
            equipping them with customized, easy-to-use monitoring tools. We aim
            to make preventive care personal, proactive, and powerful, ensuring
            that every client can avoid serious diseases and lead a healthier
            life.
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
