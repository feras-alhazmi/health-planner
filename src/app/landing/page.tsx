"use client";

import { Image } from "@nextui-org/react";

import LandingCard from "./components/Landing-Card-Component";

import {
  MdAccountBox,
  MdComputer,
  MdOutlineManageSearch,
  MdGroup,
  MdPrivacyTip,
} from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { FaBrain, FaFlag, FaHandHoldingHeart, FaTasks } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";

import ProviderType from "./components/ProviderType";
import Footer from "./components/Footer";
import ValueCard from "./components/ValueCard";

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
              description=" Explore Our Trusted Network to easily find a certified health professionals, ensuring expert care tailored just for you"
              icon={<MdOutlineManageSearch color="#0056B3" size={70} />}
            />
            <LandingCard
              title="Connect & Meet"
              description="Effortlessly links you with health professionals for real-time consultations, enabling personalized care and immediate support when you need it most"
              icon={<MdComputer color="#0056B3" size={70} />}
            />
            <LandingCard
              title="Get a Plan"
              description="Tailor your health journey with customized care plans designed by experts to meet your unique wellness goals."
              icon={<FaTasks color="#0056B3" size={70} />}
            />
            <LandingCard
              title="Pay with insurance"
              description="Simplify your healthcare payments and reduce costs with direct insurance billing through our platform"
              icon={<LuHeartHandshake color="#0056B3" size={70} />}
            />
          </div>
        </article>
        <section
          id="about-us"
          className="max-w-2xl w-full gap-7 flex flex-col self-center"
        >
          <h2 className="text-5xl text-cyan-950">About Us</h2>
          <h3>
            At BrightKare, we are transforming preventive healthcare by
            connecting individuals with top-tier health professionals, including
            personal trainers, nutritionists, and physical therapists. Our
            platform leverages advanced AI-driven tools to provide personalized
            health plans, promoting proactive health management tailored to each
            client{"'"}s unique needs. Our commitment to prevention helps
            clients avoid serious health issues and enhance their quality of
            life. At BrightKare, preventive healthcare is not just a service—it
            is a partnership for a healthier future.
          </h3>
          <h2 className="text-5xl text-cyan-950">Our Vision</h2>

          <h3>
            At BrightKare, our vision is to revolutionize preventive healthcare
            by connecting individuals with top health professionals and
            equipping them with customized, easy-to-use monitoring tools. We aim
            to make preventive care personal, proactive, and powerful, ensuring
            that every client can avoid serious diseases and lead a healthier
            life.
          </h3>

          <h2 className="text-5xl text-cyan-950 ">Core Values</h2>

          <div className="px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ValueCard
                icon={<FaFlag className="text-2xl text-blue " />}
                title="Efficiency"
                description="We excel by effectively prioritizing and focusing on what is necessary to accomplish any task or project."
              />
              <ValueCard
                icon={<FaBrain className="text-2xl text-blue" />}
                title="Forward-thinking"
                description="We see beyond the present, and imagine a changed world – not as it is, but as it could be."
              />
              <ValueCard
                icon={<FaHandHoldingHeart className="text-2xl text-blue" />}
                title="Empathy"
                description="We care about our users, and strive to understand their problems at the deepest level."
              />
              <ValueCard
                icon={
                  <CiCircleQuestion size={36} className="text-2xl text-blue" />
                }
                title="Curiosity"
                description="We want to dig deep into problems, and really understand everything from first principles."
              />
            </div>
          </div>

          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl ">
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

      <Footer />
    </>
  );
}
