"use client";
import React, { PropsWithChildren } from "react";
import UsersFilteration from "./UsersFilteration";
import ParticipantCard from "../../participants/ParticipantCard";
import { User } from "@/app/features/types";
import { useParticipantsStore } from "@/store/useParticipantsStore";
import Link from "next/dist/client/link";
import ProviderCard from "@/app/providers/page";

const UsersCatalog: React.FC<PropsWithChildren> = ({ children }) => {
  const childrenCount = React.Children.count(children);
  return (
    <div className="w-full flex flex-col h-full">
      <UsersFilteration />
      <div
        className={`grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5 overflow-y-auto z-1 ${
          childrenCount > 6 ? "flex-grow h-1" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default UsersCatalog;
