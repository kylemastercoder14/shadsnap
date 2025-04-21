import React from "react";
import SidebarLinks from "@/components/globals/sidebar-links";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid lg:grid-cols-10 max-w-7xl mx-auto h-screen grid-cols-1">
      <div className="col-span-2 relative lg:block hidden border-dashed border-l border-r px-6">
        <div className="fixed">
          <SidebarLinks />
        </div>
      </div>
      <div className="col-span-8 border-dashed border-r">{children}</div>
    </div>
  );
};

export default MainLayout;
