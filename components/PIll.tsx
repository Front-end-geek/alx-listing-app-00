// components/Pill.tsx

import React from "react";

interface PillProps {
  label: string; // Text to display on the pill
  onClick: () => void; // Action to perform when the pill is clicked
  isActive: boolean; // Whether the pill is active
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        isActive
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Pill;
