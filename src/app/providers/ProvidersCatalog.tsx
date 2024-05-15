"use client";

import React from "react";
import UsersCatalog from "../components/usersSearch/UsersCatalog";

import { useParticipantsStore } from "@/store/useParticipantsStore";
import { Link } from "@nextui-org/react";
import { User } from "@prisma/client";
import ProviderCard from "./ProviderCard";

const ProvidersCatalog = () => {
  const providers = [
    {
      name: "Nawaf Alharby",
      specialty: "personal trainer",
      hospital: "fitness Time",
      image: "/assets/images/participant.png",
      rating: 4.6,
      reviewsCount: 128,
      consultationTime: "10PM",
    },
    {
      name: "Mohsen anahash",
      specialty: "personal trainer",
      hospital: "GoTrain",
      image: "/assets/images/participant.png",
      rating: 4.3,
      reviewsCount: 45,
      consultationTime: "2PM",
    },
    {
      name: "Mohammed owaji",
      specialty: "Dietitian",
      hospital: "Yarmook",
      image: "/assets/images/participant.png",
      rating: 4.7,
      reviewsCount: 12,
      consultationTime: "7PM",
    },
  ];
  const { searchQuery, filteration } = useParticipantsStore((state) => state);
  const filteredUsers = providers.filter((user) => {
    let isValid = false;
    isValid =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.hospital?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.rating.toString().toLowerCase().includes(searchQuery.toLowerCase());

    return isValid;
  });

  return (
    <UsersCatalog>
      {filteredUsers.map((provider) => (
        <Link key={provider.name} href={"/providers/ProviderProfile"}>
          <ProviderCard provider={provider} />
        </Link>
      ))}
    </UsersCatalog>
  );
};

export default ProvidersCatalog;
