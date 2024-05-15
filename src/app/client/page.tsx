"use client";

import UserHeader from "@/core/modal/UserHeader";

import React, { useState } from "react";
import ProfilePage from "./Profile/page";
import Plans from "./plans/page";

export default function ClientPage() {
  const [currentPage, setCurrentPage] = useState("profile");
  const handleNavigate = (page: "profile" | "plans") => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-background mx-5">
      <UserHeader activePage={currentPage} onNavigate={handleNavigate} />
      {currentPage === "profile" ? <ProfilePage /> : <Plans />}
    </div>
  );
}
