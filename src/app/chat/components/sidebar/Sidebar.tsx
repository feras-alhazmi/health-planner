import DesktopSidebar from "./DesktopSidebar";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return <div className="h-full">{children}</div>;
}
