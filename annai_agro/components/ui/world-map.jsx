"use client";
import { useRef } from "react";
import { motion } from "framer-motion"; // Changed from motion/react for standard next.js compatibility
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function WorldMap({
  dots = [],
  lineColor = "#67944e", // Updated to your brand green
}) {
  const svgRef = useRef(null);
  const { theme } = useTheme();

  // 1. Improved Dotted Map Configuration
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    // Using a subtle vibrant green for the dots instead of slate
    color: theme === "dark" ? "#67944e30" : "#67944e40",
    shape: "circle",
    backgroundColor: theme === "dark" ? "#0f172a" : "#f8fafc",
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-2/1 dark:bg-slate-950 bg-white rounded-3xl relative overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#67944e15] via-transparent to-transparent" />

      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full mask-[linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)] opacity-80 pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none z-10"
      >
        <defs>
          {/* 2. Added Glow Filter for the Lines */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#67944e" stopOpacity="0" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="#67944e" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`} filter="url(#glow)">
              {/* Static Path Shadow */}
              <path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={lineColor}
                strokeWidth="0.5"
                className="opacity-20"
              />
              {/* 3. Animated Flowing Path */}
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

        {/* 4. Refined Hub Points with Pulse */}
        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-${i}`}>
              {" "}
              {/* Using <g> (SVG Group) is safer than Fragments inside SVGs */}
              <circle cx={start.x} cy={start.y} r="3" fill={lineColor} />
              <circle cx={end.x} cy={end.y} r="3" fill={lineColor} />
              <motion.circle
                cx={end.x}
                cy={end.y}
                r="3"
                stroke={lineColor}
                strokeWidth="1"
                fill="transparent"
                animate={{ r: [3, 12], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
