"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Check } from "lucide-react";

const messOptions = [
  { label: "Boys", value: "Boys" },
  { label: "Girls", value: "Girls" },
  { label: "NRI", value: "NRI" },
];

export default function HostelList() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>(messOptions[0].value);
  const router = useRouter();

  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const onSelect = (value: string) => {
    setSelected(value);
    setOpen(false);

    if (value === "Boys") {
      router.push(`/menu?mess=${encodeURIComponent(value)}`);
    } else {
      router.push("/commingsoon");
    }
  };

  return (
    <div className="flex justify-center mt-20 w-full">
      <div ref={ref} className="relative w-full max-w-xs" tabIndex={0}>
        {/* Trigger Button */}
        <button
          onClick={() => setOpen((o) => !o)}
          className={`
            w-full flex items-center justify-between gap-3 rounded-xl px-6 py-4
            bg-white/15 shadow-xl backdrop-blur-md transition
            border border-white/30
            text-base text-white font-medium
            focus:outline-none focus:ring-2 focus:ring-white/40
            ${open ? "ring-2 ring-white/50" : ""}
          `}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span>
            {messOptions.find((opt) => opt.value === selected)?.label}
          </span>
          <ChevronDown
            className={`text-white transition-transform ${
              open ? "rotate-180" : ""
            }`}
            size={18}
            aria-hidden="true"
          />
        </button>

        {/* Dropdown List */}
        {open && (
          <ul
            className={`
              absolute left-0 top-full mt-2 min-w-full z-10
              bg-white/90 backdrop-blur-xl py-2 rounded-xl shadow-2xl
              ring-1 ring-white/40 border border-white/10
              text-gray-900 animate-fade-in
            `}
            tabIndex={-1}
            role="listbox"
          >
            {messOptions.map((opt) => (
              <li
                key={opt.value}
                role="option"
                tabIndex={0}
                onClick={() => onSelect(opt.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onSelect(opt.value);
                  }
                }}
                aria-selected={selected === opt.value}
                className={`
                  flex items-center px-6 py-3 cursor-pointer select-none
                  text-base rounded-lg
                  transition-colors
                  ${
                    selected === opt.value
                      ? "bg-pink-50 text-pink-700 font-semibold"
                      : "hover:bg-pink-100/80 hover:text-pink-700"
                  }
                  ${selected === opt.value ? "shadow-pink-100" : ""}
                `}
              >
                {selected === opt.value && (
                  <Check
                    className="w-4 h-4 text-pink-500 mr-2"
                    aria-hidden="true"
                  />
                )}
                <span>{opt.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
