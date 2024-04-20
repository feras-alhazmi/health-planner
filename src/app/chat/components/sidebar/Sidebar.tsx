import DesktopSidebar from "./DesktopSidebar";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return <div className="bg-orange-600 h-full">{children}</div>;
}
