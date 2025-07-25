"use client";
import React from "react";
import HostelListCustomSelect from "@/components/ui/HostelList";
import Footer from "@/components/ui/Footer";
export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 to-orange-400 px-4">
      <div className="flex flex-col items-center w-full max-w-2xl">
        <header className="mb-12 text-center w-full">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-md mb-4">
            Welcome to Mess Diary
          </h1>
          <p className="text-lg text-white/80 max-w-lg mx-auto">
            Choose your hostel mess to get started and see delicious meals
            planned for you every day!
          </p>
        </header>
        <section className="w-full max-w-md">
          <HostelListCustomSelect />
        </section>
      </div>

      <div className="w-full mt-40 flex-shrink-0 flex justify-center">
        <Footer />
      </div>
    </main>
  );
}
