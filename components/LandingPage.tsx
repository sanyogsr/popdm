import React, { useState } from "react";
import Navbar from "./Navbar";
import IPhone14ProMax from "./IPhone";
import { Playwrite_HR_Lijeva } from "next/font/google";
import { GenZButton } from "./userReviews";
import IPhone14ProMaxx from "./VectorHand";
import POPDMFooter from "./Footer";

const yuji_mai = Playwrite_HR_Lijeva({ weight: ["400"] });

const BrutalistButton = ({ children, onClick, className = "" }: any) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div
      className={`
        relative cursor-pointer select-none
        bg-white text-black 
        px-4 py-2 
        border-2 border-black 
        font-bold text-sm uppercase
        transition-transform duration-100 ease-in-out
        ${
          isPressed
            ? "translate-y-1 shadow-none"
            : "translate-y-0 shadow-[4px_4px_0px_black]"
        }
        ${className}
      `}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const userReviews = [
  {
    username: "Rajat",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deserunt ab. Nisi obcaecati qui, totam reprehenderit perspiciatis veniam.",
    avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Rajat",
  },
  {
    username: "Himanshu",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deserunt ab. Nisi obcaecati qui, totam reprehenderit perspiciatis veniam.",
    avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Himanshu",
  },
  {
    username: "Nawal",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deserunt ab. Nisi obcaecati qui, totam reprehenderit perspiciatis veniam.",
    avatar: "https://api.dicebear.com/8.x/identicon/svg?seed=Nawal",
  },
];

export default function BrutalistLandingPage() {
  return (
    <>
      <div className="border-b-2 border-black">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col  md:grid md:grid-cols-2 overflow-hidden border-b-2 border-black">
        <div className="col-span-1 flex flex-col bg-white h-[25rem] md:h-full border-r-2 border-black p-8 justify-center">
          <div className="flex justify-center text-4xl  text-center max-w-xl md:max-w-2xl">
            <h1 className={`${yuji_mai.className} font-bold`}>
              Setup Instagram Comment Automation in Seconds
            </h1>
          </div>
          <div className="flex justify-center mt-8">
            <GenZButton>Get Started</GenZButton>
          </div>
        </div>

        <div className="col-span-1 flex flex-col justify-center border-l-2 border-black">
          <IPhone14ProMax />
        </div>
      </div>

      {/* Tutorial Section */}
      <div className="bg-white border-b-2 border-black ">
        <h1 className="text-black font-bold text-3xl text-center border-b-2 border-black pb-4 pt-4 ">
          Tutorial
        </h1>
        <div className="flex justify-center bg-[#2f83ff] h-full items-center py-8 px-8 md:px-0">
          <div className="w-full max-w-4xl aspect-video border-2 border-black shadow-[4px_4px_0px_black]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/uiJRBtfLgxs"
              title="Tutorial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* User Reviews Section */}
      <div className="bg-white border-b-2 border-black pt-8 ">
        <h1 className="text-3xl font-bold text-center border-b-2 border-black pb-4 ">
          Our Users Love Us
        </h1>
        <div className="bg-[#0ed199] py-8 px-8 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {userReviews.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-none border-2 border-black shadow-[4px_4px_0px_black] p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={item.avatar}
                    alt={`${item.username}'s avatar`}
                    className="w-12 h-12 rounded-none mr-4 border-2 border-black"
                  />
                  <h2 className="text-xl font-bold text-black">
                    {item.username}
                  </h2>
                </div>

                <p className="text-black mb-6 h-24 overflow-hidden">
                  {item.content}
                </p>

                <div className="flex justify-center">
                  <GenZButton>Read More</GenZButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="h-[5rem] ">
        <POPDMFooter />
      </div>
    </>
  );
}
