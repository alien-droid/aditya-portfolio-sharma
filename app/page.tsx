"use client";
import React, { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

function useScreenSize() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 640); // Adjust this breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isLargeScreen;
}

function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default function Home() {
  const isLargeScreen = useScreenSize();

  const content = (
    <>
      <FloatingNavDemo />
      <div className="max-w-9xl w-full xs:max-w-xl">
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );

  return (
    <main className="relative bg-black-100 flex flex-col mx-auto sm:px-10 px-3">
      {isLargeScreen ? (
        <TracingBeam className="px-4">{content}</TracingBeam>
      ) : (
        content
      )}
    </main>
  );
}