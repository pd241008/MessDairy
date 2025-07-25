"use client";

import React, { useEffect, useState } from "react";
import MenuDisplay from "@/components/ui/MenuDisplay";
type Day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

type Meal = "Breakfast" | "Lunch" | "Snack" | "Dinner";

const days: Day[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const meals: Meal[] = ["Breakfast", "Lunch", "Snack", "Dinner"];

export default function MenuPage() {
  const [menuData, setMenuData] = useState<Record<
    Day,
    Record<Meal, string>
  > | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedDay, setSelectedDay] = useState<Day>(() => {
    const dayIndex = new Date().getDay();
    return days[dayIndex === 0 ? 6 : dayIndex - 1];
  });

  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("/api/menu")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load menu data");
        return res.json();
      })
      .then((data: Record<Day, Record<Meal, string>>) => {
        setMenuData(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 to-orange-400 text-white text-xl">
        Loading menu...
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 to-orange-400 text-red-500 text-xl p-4 text-center">
        Error loading menu: {error}
      </main>
    );
  }

  const currentMenu =
    selectedMeal && menuData ? menuData[selectedDay][selectedMeal] : undefined;

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-400 to-orange-400 p-4">
      <h1 className="text-white font-extrabold text-3xl sm:text-4xl mb-8 drop-shadow-lg text-center">
        Choose Your Meal
      </h1>

      {/* Day selector */}
      <div className="mb-8">
        <label
          htmlFor="day-select"
          className="mr-2 text-white font-semibold select-none"
        >
          Select Day:
        </label>
        <select
          id="day-select"
          className="rounded-xl py-1 px-3 text-gray-900 cursor-pointer"
          value={selectedDay}
          onChange={(e) => {
            setSelectedDay(e.target.value as Day);
            setSelectedMeal(null);
          }}
        >
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      {!selectedMeal ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-xl px-2 sm:px-6">
          {meals.map((meal) => (
            <button
              key={meal}
              type="button"
              onClick={() => setSelectedMeal(meal)}
              className="transition transform hover:-translate-y-2 hover:scale-105
                bg-white/30 backdrop-blur-lg rounded-2xl text-center py-8 text-xl font-semibold
                text-white shadow-lg border border-white/20 flex items-center justify-center
                hover:bg-white/60 hover:text-pink-700 focus:outline-none focus:ring-4 focus:ring-white/80
                focus:ring-offset-2 cursor-pointer"
            >
              {meal}
            </button>
          ))}
        </div>
      ) : (
        <MenuDisplay
          meal={selectedMeal}
          day={selectedDay}
          menu={currentMenu}
          onBack={() => setSelectedMeal(null)}
        />
      )}
    </main>
  );
}
