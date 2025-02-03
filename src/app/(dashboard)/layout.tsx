import SideNav from "@/app/ui/sidenav";
import React from "react";
// import { SheetProvider } from "@/app/providers/sheet-provider";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-[12rem]">
        <SideNav />
      </div>
      <div className="flex-grow p-4 md:overflow-y-auto">
        {children}
        {/* <SheetProvider /> */}
        <Toaster />
      </div>
    </main>
  );
}
