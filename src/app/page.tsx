"use client";

import UserHeader from "@/core/modal/UserHeader";

import React, { useState } from "react";
import ProfilePage from "./Profile/page";
import Plans from "./plans/page";

export default function Page() {
  const [currentPage, setCurrentPage] = useState("profile");
  const handleNavigate = (page: "profile" | "plans") => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-background">
      <UserHeader
        activePage={currentPage}
        onNavigate={handleNavigate} // Simplifying the function passing
      />
      {currentPage === "profile" ? <ProfilePage /> : <Plans />}
    </div>
  );
}
