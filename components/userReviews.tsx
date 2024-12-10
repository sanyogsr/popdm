"use client";
import React, { useState } from "react";

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

export const GenZButton = ({ children, onClick }: any) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePressStart = () => setIsPressed(true);
  const handlePressEnd = () => setIsPressed(false);
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
      `}
      onTouchStart={handlePressStart} // For mobile devices
      onTouchEnd={handlePressEnd} // For mobile devicess
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default function UserReviews() {
  return (
    <div className="bg-[#0c52e6] py-12 px-4">
      <h1 className="text-3xl text-white font-light text-center mb-10">
        Our Users
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {userReviews.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_black] p-6"
          >
            <div className="flex items-center mb-4">
              <img
                src={item.avatar}
                alt={`${item.username}'s avatar`}
                className="w-12 h-12 rounded-full mr-4 border-2 border-black"
              />
              <h2 className="text-xl font-bold text-black">{item.username}</h2>
            </div>

            <p className="text-black mb-6 h-24 overflow-hidden">
              {item.content}
            </p>

            <div className="flex justify-center">
              <GenZButton
              // onClick={() => alerout(`Full review by ${item.username}`)}
              >
                Read More
              </GenZButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
