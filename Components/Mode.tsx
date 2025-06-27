"use client";

import * as React from "react";
import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Mode = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button variant="outline" size="icon" onClick={handleToggle}>
      <LuMoon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <LuSun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default Mode;
