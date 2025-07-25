"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function ComingSoonPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 to-orange-400 p-6 text-center">
      <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
        Coming Soon!
      </h1>
      <p className="text-lg text-white/90 max-w-lg mb-10">
        This section is under development. Stay tuned for updates!
      </p>
      <button
        onClick={() => router.back()}
        className="bg-white/90 text-pink-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white transition"
        aria-label="Go back"
      >
        &larr; Go Back
      </button>
    </main>
  );
}
