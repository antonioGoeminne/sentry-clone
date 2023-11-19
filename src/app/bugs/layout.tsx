import { MiddleTab } from "@features/projects";
import { Sidebar } from "@features/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <MiddleTab />
      {children}
    </div>
  );
}
