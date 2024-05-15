"use client";

import LandingPage from "./landing/page";
import { useAuthStore } from "@/core/auth/store/Auth-Store";
import ParticipantsPage from "./participants/page";
import { useRouter } from "next/navigation";
export default function Page() {
  const user = useAuthStore((state) => state.userData);
  const router = useRouter();
  user?.roles === "DOCTOR"
    ? router.push("/participants")
    : user
    ? router.push("/providers")
    : null;
  return (
    <div className="bg-background">
      <LandingPage />
    </div>
  );
}
