"use client";

import { useState, useEffect } from "react";

export const SheetProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-col items-center py-4 h-screen">
      <h1 className="text-3xl font-bold text-center">
        Welcome to the Repair Shop!
      </h1>
    </div>
  );
};
