import React from "react";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      className="
        w-full flex justify-center items-center
        mb-6
      "
    >
      <div
        className="
          flex items-center gap-4
          px-6 py-3
          bg-white/90
          rounded-full
          shadow-lg
          border border-pink-200
          text-gray-700 text-sm
          font-medium
          transition-all
        "
      >
        <span className="font-bold text-gray-800">Mess Diary</span>
        <span className="text-gray-500">
          © {new Date().getFullYear()} &middot; All rights reserved
        </span>
        <a
          href="https://github.com/pd241008/MessDairy"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-1
            px-3 py-1 rounded-full
            bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300
            text-white font-semibold shadow
            hover:scale-105 hover:shadow-md hover:bg-pink-600
            focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2
            transition
          "
          aria-label="View Mess Diary Repository on GitHub"
        >
          <FiGithub size={17} />
          GitHub
        </a>
      </div>
    </footer>
  );
}
