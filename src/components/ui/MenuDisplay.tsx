import React from "react";

interface MenuDisplayProps {
  meal: string;
  day: string;
  menu: string | undefined;
  onBack: () => void;
}

const MenuDisplay: React.FC<MenuDisplayProps> = ({
  meal,
  day,
  menu,
  onBack,
}) => {
  if (!menu) {
    return (
      <section className="max-w-xl bg-white/40 rounded-2xl p-8 shadow-xl backdrop-blur-md text-gray-900 w-full px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-pink-700">
            {meal} - {day}
          </h2>
          <button
            type="button"
            onClick={onBack}
            className="bg-pink-600 text-white px-4 py-1 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-200"
          >
            &larr; Back
          </button>
        </div>
        <p className="text-lg font-medium">No menu data available.</p>
      </section>
    );
  }

  // Parse the menu string by splitting into groups by newline,
  // then each group into items by commas.
  const groups = menu.split("\n").reduce<string[][]>((acc, line) => {
    if (line.trim() === "") {
      acc.push([]);
    } else {
      if (acc.length === 0) acc.push([]);
      const items = line
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      acc[acc.length - 1].push(...items);
    }
    return acc;
  }, []);

  return (
    <section className="max-w-xl bg-white/60 rounded-2xl p-8 shadow-2xl backdrop-blur-md text-gray-900 w-full px-6 max-h-[480px] overflow-y-auto border-2 border-pink-200">
      <div className="flex justify-between items-center mb-6 sticky top-0 bg-white/60 backdrop-blur-md z-10 rounded-t-2xl py-2 px-6 shadow-sm">
        <h2 className="text-3xl font-extrabold text-pink-600">
          {meal} - {day}
        </h2>
        <button
          type="button"
          onClick={onBack}
          className="bg-pink-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-200"
          aria-label="Go back to meal selection"
        >
          &larr; Back
        </button>
      </div>

      {/* Menu items displayed two per row in grid */}
      <div className="space-y-6">
        {groups.map((group, groupIdx) => (
          <ul
            key={groupIdx}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 list-none p-0"
          >
            {group.map((item, idx) => (
              <li
                key={idx}
                className="
                  text-base leading-relaxed text-gray-800
                  bg-white rounded-lg px-4 py-2
                  transition transform duration-200 cursor-pointer
                  hover:scale-105 hover:bg-pink-100/70 hover:text-pink-700 hover:shadow-lg
                  font-semibold border border-gray-100
                "
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default MenuDisplay;
