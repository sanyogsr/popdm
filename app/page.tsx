"use client";
import LandingPage from "@/components/LandingPage";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession();
  if (session && session.data?.user?.email) {
    redirect("/dashboard");
    return;
  }
  return <LandingPage />;
}
