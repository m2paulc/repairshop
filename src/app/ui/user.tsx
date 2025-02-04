"use client";

import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export function User() {
  return (
    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2">
      <ClerkLoaded>
        <UserButton afterSwitchSessionUrl="/" showName />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="size-8 animate-spin" />
      </ClerkLoading>
    </button>
  );
}
