"use client";
import { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import GoogleIcon from "@/assets/google.svg";

// SVG Icons for Instagram Automation Themes
const AutomationIcons = {
  Hashtag: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-12 h-12 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.424.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.17 48.17 0 003.424-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
      />
    </svg>
  ),
  Analytics: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-12 h-12 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
      />
    </svg>
  ),
  Schedule: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-12 h-12 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 6h13.5A2.25 2.25 0 0121 8.25v7.5m-9-6h.008v.008H12v-.008z"
      />
    </svg>
  ),
  Content: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-12 h-12 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.852-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
      />
    </svg>
  ),
};

export default function Login() {
  const [loading, setLoading] = useState({
    isLoading: false,
    message: "",
  });

  const handleLogin = async () => {
    setLoading({ isLoading: true, message: "Connecting to Google..." });
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      setLoading({ isLoading: false, message: error as string });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 bg-black 
          bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] 
          bg-[size:40px_40px] 
          opacity-30"
      />

      {/* Floating Feature Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 transform -rotate-12 opacity-20">
          <AutomationIcons.Hashtag />
        </div>
        <div className="absolute bottom-40 right-20 transform rotate-12 opacity-20">
          <AutomationIcons.Analytics />
        </div>
        <div className="absolute top-1/2 left-1/3 transform -rotate-6 opacity-20">
          <AutomationIcons.Schedule />
        </div>
        <div className="absolute bottom-20 left-1/4 transform rotate-6 opacity-20">
          <AutomationIcons.Content />
        </div>
      </div>

      {/* Loading Overlay */}
      {loading.isLoading && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl font-bold animate-pulse">{loading.message}</p>
          </div>
        </div>
      )}

      {/* Login Container */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-[#1a1a1a] border-4 border-white p-8 space-y-8 relative">
          {/* Decorative Corner Brackets */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-white" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-white" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-white" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-white" />

          {/* Login Content */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight uppercase">
              PopDM
            </h1>
            <p className="text-neutral-400">Instagram Automation Platform</p>
          </div>

          {/* Login Button */}
          <div className="mt-8">
            <button
              onClick={handleLogin}
              disabled={loading.isLoading}
              className="w-full relative group"
            >
              {/* Gradient Border */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                  rounded-lg blur-sm group-hover:blur-md transition-all duration-300 
                  opacity-70 group-hover:opacity-100"
              />

              {/* Button Content */}
              <div
                className="relative bg-black border-2 border-white py-4 rounded-lg 
                  flex items-center justify-center space-x-4 
                  transform transition-transform group-hover:scale-95"
              >
                <Image src={GoogleIcon} alt="Google" width={32} height={32} />
                <span className="font-bold text-lg">Continue with Google</span>
              </div>
            </button>
          </div>

          {/* Additional Info */}
          <div className="text-center text-neutral-500 text-sm mt-4">
            <p>© 2024 PopDM. All rights reserved.</p>
            <p className="mt-2 underline">Terms of Service | Privacy Policy</p>
          </div>
        </div>
      </main>
    </div>
  );
}
