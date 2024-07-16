import Hero from "@/components/Hero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
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
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col mx-auto sm:px-10 px-3">
      <TracingBeam className="px-4">
        <FloatingNavDemo />
        <div className="max-w-9xl w-full">
          <Hero />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </TracingBeam>
    </main>
  );
}
