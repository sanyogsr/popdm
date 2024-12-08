"use client";
import LandingPage from "@/components/LandingPage";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const session = useSession();
  const handleLogout = async () => {
    await signOut({ redirect: true, redirectTo: "/" });
  };

  if (!session) {
    redirect("/");
    return;
  }
  return <LandingPage />;
};

export default Dashboard;
