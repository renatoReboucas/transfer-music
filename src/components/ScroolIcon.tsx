"use client";

import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";

const ScrollIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      size="icon"
      className="fixed right-4 bottom-4 z-50 bg-zinc-900 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onClick={scrollToTop}
    >
      <ArrowUpIcon className="size-5" />
    </Button>
  );
};

export default ScrollIcon;
