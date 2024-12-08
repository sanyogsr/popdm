"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession();
  if (session && session.data?.user?.email) {
    redirect("/dashboard");
    return;
  }
  return (
    <div>
      Hii kya haal chaal
      <Link href={"/auth/login"}>Login</Link>
    </div>
  );
}
