"use client";
import React, { useState } from "react";
import Link from "next/link";

type AutomationType = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const Icons = {
  Reply: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
      />
    </svg>
  ),
  Filter: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.5 21v-6.568a2.25 2.25 0 00-.659-1.591L3.409 7.409a2.25 2.25 0 01-.659-1.591V4.774c0-.54.384-1.006.917-1.096A48.399 48.399 0 0112 3z"
      />
    </svg>
  ),
  Schedule: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 6h13.5A2.25 2.25 0 0121 8.25v7.5"
      />
    </svg>
  ),
  Insights: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.5-1.5H12"
      />
    </svg>
  ),
};

export default function InstagramAutomationPage() {
  const [recentAutomations, setRecentAutomations] = useState<AutomationType[]>([
    {
      id: "auto-reply-1",
      title: "Positive Comment Auto-Reply",
      description: "Automatically respond to positive comments",
      icon: <Icons.Reply />,
      color: "#2f83ff",
    },
    {
      id: "filter-1",
      title: "Spam Comment Filter",
      description: "Remove and hide spam comments",
      icon: <Icons.Filter />,
      color: "#0ed199",
    },
  ]);

  const automationTypes: AutomationType[] = [
    {
      id: "comment-reply",
      title: "Comment Auto-Reply",
      description: "Set up automated responses to comments",
      icon: <Icons.Reply />,
      color: "#2f83ff",
    },
    {
      id: "comment-filter",
      title: "Comment Filtering",
      description: "Manage and filter incoming comments",
      icon: <Icons.Filter />,
      color: "#0ed199",
    },
    {
      id: "scheduled-responses",
      title: "Scheduled Responses",
      description: "Plan and schedule comment interactions",
      icon: <Icons.Schedule />,
      color: "#9f7cf0",
    },
    {
      id: "comment-insights",
      title: "Comment Insights",
      description: "Analyze comment performance and engagement",
      icon: <Icons.Insights />,
      color: "#fefd67",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4 mt-12 md:mt-0 md:p-8 space-y-8 overflow-x-hidden">
      {/* Recent Automations Section */}
      <section
        className="bg-neutral-50 border-4 border-black p-6 space-y-4 
        shadow-[6px_6px_0_rgba(0,0,0,0.2)] 
        transition-all duration-300 
        hover:shadow-[8px_8px_0_rgba(0,0,0,0.3)] 
        hover:-translate-x-1 hover:-translate-y-1"
      >
        <h2
          className="text-2xl font-bold border-b-2 border-black pb-2 
          transition-all duration-300 
          group-hover:text-blue-600"
        >
          Recent Automations
        </h2>
        {recentAutomations.length === 0 ? (
          <div className="text-center text-neutral-500 py-8">
            No recent automations. Start creating your first automation!
          </div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            {recentAutomations.map((automation) => (
              <div
                key={automation.id}
                className="border-2 border-black p-4 flex items-center space-x-4 
                group cursor-pointer
                hover:bg-neutral-100 
                transition-all duration-300 
                shadow-[4px_4px_0_rgba(0,0,0,0.2)]
                hover:shadow-[6px_6px_0_rgba(0,0,0,0.3)]
                hover:-translate-x-1 hover:-translate-y-1
                active:translate-x-0 active:translate-y-0 active:shadow-none"
                style={{ borderLeftColor: automation.color }}
              >
                <div
                  className="p-3 rounded-full transition-transform duration-300 
                  group-hover:scale-110"
                  style={{ backgroundColor: automation.color }}
                >
                  {automation.icon}
                </div>
                <div>
                  <h3
                    className="font-bold group-hover:text-blue-600 
                    transition-colors duration-300"
                  >
                    {automation.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {automation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Automation Types Section */}
      <section
        className="bg-neutral-50 border-4 border-black p-6 space-y-4 
        shadow-[6px_6px_0_rgba(0,0,0,0.2)]
        transition-all duration-300 
        hover:shadow-[8px_8px_0_rgba(0,0,0,0.3)] 
        hover:-translate-x-1 hover:-translate-y-1"
      >
        <h2 className="text-2xl font-bold border-b-2 border-black pb-2">
          Create New Automation
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {automationTypes.map((type) => (
            <Link
              href={`/dashboard/automation/create/${type.id}`}
              key={type.id}
              className="border-2 border-black p-4 flex flex-col items-center 
              group cursor-pointer
              hover:bg-neutral-100 
              transition-all duration-300 
              shadow-[4px_4px_0_rgba(0,0,0,0.2)]
              hover:shadow-[6px_6px_0_rgba(0,0,0,0.3)]
              hover:-translate-x-1 hover:-translate-y-1
              active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              <div
                className="p-4 rounded-full mb-2 transition-transform duration-300 
                group-hover:scale-110"
                style={{ backgroundColor: type.color }}
              >
                {type.icon}
              </div>
              <h3
                className="font-bold text-center group-hover:text-blue-600 
                transition-colors duration-300"
              >
                {type.title}
              </h3>
              <p className="text-sm text-center text-neutral-600">
                {type.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Start Guide */}
      <section
        className="bg-neutral-50 border-4 border-black p-6 space-y-4 
        shadow-[6px_6px_0_rgba(0,0,0,0.2)]
        transition-all duration-300 
        hover:shadow-[8px_8px_0_rgba(0,0,0,0.3)] 
        hover:-translate-x-1 hover:-translate-y-1"
      >
        <h2 className="text-2xl font-bold border-b-2 border-black pb-2">
          Quick Start Guide
        </h2>
        <div className="space-y-4">
          {[
            {
              number: "1",
              text: "Connect your Instagram account",
              color: "#2f83ff",
            },
            {
              number: "2",
              text: "Choose an automation type",
              color: "#0ed199",
            },
            {
              number: "3",
              text: "Configure your automation rules",
              color: "#9f7cf0",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black p-4 flex items-center space-x-4 
              group cursor-pointer
              transition-all duration-300 
              hover:bg-neutral-50
              hover:shadow-[4px_4px_0_rgba(0,0,0,0.2)]
              hover:-translate-x-1 hover:-translate-y-1
              active:translate-x-0 active:translate-y-0"
            >
              <span
                className="text-2xl font-bold transition-colors duration-300"
                style={{ color: step.color }}
              >
                {step.number}
              </span>
              <p className="group-hover:text-blue-600 transition-colors duration-300">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Features Modal Trigger */}
      {/* <div className="fixed bottom-4 right-4 z-50">
        <button
          className="bg-black text-white px-4 py-2 border-2 border-white 
          rounded-full shadow-[4px_4px_0_rgba(255,255,255,0.3)]
          hover:bg-blue-600 hover:border-blue-600
          transition-all duration-300
          active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          Advanced Features
        </button>
      </div> */}
    </div>
  );
}
