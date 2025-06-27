"use client";
import { useEffect, useState, useRef } from "react";

const sections = [
  { id: "reviews", label: "Customer Reviews" },
  { id: "why-us", label: "Why Choose Us?" },
  { id: "benefits", label: "Benefits of Commercial Vehicle Wraps Services" },
  { id: "projects", label: "Our Projects" },
  { id: "services", label: "Additional Services" },
  { id: "vehicles", label: "Types of Vehicles Wrapped" },
];

export default function ScrollSpyMenu() {
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const indicatorRef = useRef(null);

  // Track scroll and show/hide menu
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll > window.innerHeight / 2);

      let current = null;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Move the indicator
  useEffect(() => {
    const yPositions = [0, 62, 137, 212, 276, 340];
    const index = sections.findIndex((s) => s.id === activeSection);
    if (indicatorRef.current && index >= 0) {
      indicatorRef.current.style.transform = `translateY(${yPositions[index]}px)`;
    }
  }, [activeSection]);

  if (!isVisible) return null;

  return (
    <aside className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 pr-4 hidden lg:block">
      <div className="relative h-[360px] w-52 flex flex-col items-end justify-center">
        <div className="absolute right-0 h-full w-[6px] bg-gray-600 rounded" />
        <div
          ref={indicatorRef}
          className="absolute right-0 w-[6px] h-10 bg-white rounded-full transition-transform duration-300 translate-y-[-170px]"
        />
        <div className="flex flex-col justify-between h-full pr-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`text-right transition-opacity duration-300 text-sm font-semibold ${
                activeSection === section.id
                  ? "text-white opacity-100"
                  : "text-gray-500 opacity-40"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <a
          href="#quote"
          className="bg-red-600 text-white px-4 py-2 font-bold shadow-md transform inline-block"
        >
          Get a quote now!
        </a>
      </div>
    </aside>
  );
}
