"use client";
import TopNavbar from "@/core/navbar/TopNavbar-Component";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="bg-landing-page w-svw min-h-svh justify-center flex flex-col">
        {children}
      </div>
      <footer></footer>
    </section>
  );
}
