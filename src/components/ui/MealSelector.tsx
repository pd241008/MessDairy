import React from "react";

const meals = ["Breakfast", "Lunch", "Snack", "Dinner"];

interface MealSelectorProps {
  onMealSelect: (meal: string) => void;
}

const MealSelector: React.FC<MealSelectorProps> = ({ onMealSelect }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-xl px-2 sm:px-6">
    {meals.map((meal) => (
      <button
        key={meal}
        onClick={() => onMealSelect(meal)}
        className="transition transform hover:-translate-y-2 hover:scale-105
                   bg-white/30 backdrop-blur-lg rounded-2xl text-center py-8 text-xl font-semibold
                   text-white shadow-lg border border-white/20 flex items-center justify-center
                   hover:bg-white/60 hover:text-pink-700 focus:outline-none focus:ring-4 focus:ring-white/80
                   focus:ring-offset-2
                   cursor-pointer"
      >
        {meal}
      </button>
    ))}
  </div>
);

export default MealSelector;
