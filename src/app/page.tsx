"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
export default function Home() {
  const { data: session, status, update } = useSession();
  useEffect(() => {
    const interval = setInterval(() => update(), 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, [update]);

  useEffect(() => {
    console.log(session, status);
    console.log();
    if (session?.error) {
      signIn("poe");
    }
    const visibilityHandler = () =>
      document.visibilityState === "visible" && update();
    window.addEventListener("visibilitychange", visibilityHandler, false);
    return () =>
      window.removeEventListener("visibilitychange", visibilityHandler, false);
  }, [update]);

  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
