import DesktopSidebar from "./DesktopSidebar";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <main className="lg:pl-20 h-full">
        <DesktopSidebar />
        {children}
      </main>
    </div>
  );
}
