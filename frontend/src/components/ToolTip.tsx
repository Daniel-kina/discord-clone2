import React from "react";

interface TooltipProps {
  children: React.ReactNode; // Das Element/Icon, über das gehovert wird
  content: string; // Der Text des Tooltips
  side?: "top" | "bottom" | "left" | "right"; // Die Richtung (Standard ist "top")
}

export default function ToolTip({
  children,
  content,
  side = "top",
}: TooltipProps) {
  // Dynamische Klassen für die Position des Tooltips
  const positionClasses = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-3 top-1/2 -translate-y-1/2",
    right: "left-full ml-3 top-1/2 -translate-y-1/2",
  };

  // Dynamische Klassen für die Position der kleinen Pfeilspitze
  const arrowClasses = {
    top: "left-1/2 -translate-x-1/2 -bottom-1",
    bottom: "left-1/2 -translate-x-1/2 -top-1",
    left: "-right-1 top-1/2 -translate-y-1/2",
    right: "-left-1 top-1/2 -translate-y-1/2",
  };

  return (
    <div className="relative group inline-flex  ">
      {/* Das eigentliche Element */}
      {children}

      {/* Der Tooltip */}
      <div
        className={`absolute px-3 py-1.5 bg-[#111214] text-white text-xs font-medium rounded-md shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-50 ${positionClasses[side]}`}
      >
        {/* Die kleine Pfeilspitze */}
        <div
          className={`absolute w-2 h-2 bg-[#111214] rotate-45 ${arrowClasses[side]}`}
        />
        {content}
      </div>
    </div>
  );
}
