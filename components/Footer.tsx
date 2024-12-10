import React, { useState } from "react";
import { GenZButton } from "./userReviews";
import Link from "next/link";

const HyperNeoBrutalistFooter = () => {
  const [activeInteraction, setActiveInteraction] = useState(null);

  const ultraModernLinks = [
    {
      label: "DIGITAL CORE",
      subtext: "ECOSYSTEM MAPPING",
      interaction: "core",
      gradient: "from-[#00F5A0] to-[#00D9F5]",
    },
    {
      label: "NEURAL NETWORK",
      subtext: "CONNECTIVITY HUB",
      interaction: "network",
      gradient: "from-[#FF6B6B] to-[#4ECDC4]",
    },
    {
      label: "QUANTUM SYNC",
      subtext: "RAPID ITERATION",
      interaction: "sync",
      gradient: "from-[#8A4FFF] to-[#FF4F91]",
    },
  ];

  return (
    <footer className="bg-black text-white border-t-8 border-[#00F5A0] relative overflow-hidden">
      {/* Glitch Effect Background */}
      <div className="absolute inset-0  opacity-10 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Ultra-Modern Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-[4rem] md:text-[6rem] font-black uppercase tracking-tighter leading-none">
              POPDM
            </h2>
            <div className=" sm:hidden flex flex-col justify-start mt-5">
              <a
                href="#"
                className="text-xl hover:text-[#00F5A0] transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-xl hover:text-[#00F5A0] transition-colors"
              >
                Docs
              </a>
            </div>
            <p className="hidden md:block text-xl mt-4 text-[#00F5A0]  uppercase tracking-widest">
              NEXT-GEN Social Media Automation tool
            </p>
          </div>

          <div className="hidden  md:flex justify-end">
            <GenZButton className="bg-[#00F5A0] text-black border-4 border-black px-8 py-4 text-2xl font-black uppercase hover:bg-[#FF4F91] transition-all duration-300">
              <Link href={"/auth/login"}>Get Started</Link>
            </GenZButton>
          </div>
        </div>

        {/* Hyper-Contact Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl uppercase tracking-widest mb-4 text-[#00F5A0]">
              Subscribe to updates
            </h4>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="DIGITAL TRANSMISSION POINT"
                className="
                  w-full bg-black border-4 border-white/20 
                  px-4 py-3 text-white uppercase 
                  focus:border-[#00F5A0] 
                  transition-all duration-300
                "
              />
              <button
                className="
                bg-[#FF4F91] text-black 
                px-6 py-3 uppercase font-black
                border-4 border-black
                hover:bg-[#00F5A0]
                transition-all duration-300
              "
              >
                SYNC
              </button>
            </div>
          </div>

          <div className="flex justify-start md:justify-end items-center space-x-4">
            <a
              href="#"
              className="text-xl hover:text-[#00F5A0] transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-xl hover:text-[#00F5A0] transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-xl hover:text-[#00F5A0] transition-colors"
            >
              Linked In
            </a>
          </div>
        </div>

        {/* Cyberpunk Footer Bottom */}
        <div className="mt-16 pt-8 border-t-2 border-white/20 text-center">
          <p className="text-sm uppercase tracking-widest text-white/50">
            © 2024 POPDM | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HyperNeoBrutalistFooter;
