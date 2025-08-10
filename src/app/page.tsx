"use client";

import { initSatellite } from "@junobuild/core";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () =>
      await initSatellite({
        workers: {
          auth: true,
        },
      }))();
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}
        >
          Navigation
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Link
            href="/defaultHome"
            style={{
              display: "block",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#3b82f6",
              color: "white",
              borderRadius: "0.25rem",
              textDecoration: "none",
            }}
          >
            Go to Default Home
          </Link>
          <Link
            href="/about"
            style={{
              display: "block",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#10b981",
              color: "white",
              borderRadius: "0.25rem",
              textDecoration: "none",
            }}
          >
            Go to About
          </Link>
          <div className="bg-red-500 text-white p-2 rounded">Test Tailwind</div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Tailwind Button
          </button>
          <button className="mt-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
            Deployed via Main (Test)
          </button>
        </div>
      </div>
    </div>
  );
}
