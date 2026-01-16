"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
    loading: () => (
      <div className="h-160 w-full flex items-center justify-center bg-slate-50/10 animate-pulse rounded-3xl" />
    ),
  }
);

const NAMAKKAL = { lat: 11.2194, lng: 78.1678 };
const BRAND_GREEN = "#67944e";
const LIGHT_GREEN_BASE = "#f0fdf4"; // Soft Mint Green base

const globeConfig = {
  pointSize: 7,
  globeColor: "#062056", // Light green base
  showAtmosphere: true,
  atmosphereColor: "#ffffff", // Fixed: Added quotes for white
  atmosphereAltitude: 0.1,
  emissive: "#062056", // No internal glow to prevent muddy colors
  emissiveIntensity: 0,
  shininess: 0.1, // Slight sheen for texture
  polygonColor: "rgba(255,255,255,0.7)", // Pure white countries
  ambientLight: "#cccc", // Full white light to keep colors crisp
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: NAMAKKAL.lat, lng: NAMAKKAL.lng },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const exportArcs = [
  {
    order: 1,
    startLat: NAMAKKAL.lat,
    startLng: NAMAKKAL.lng,
    endLat: 25.2048,
    endLng: 55.2708,
    arcAlt: 0.1,
    color: BRAND_GREEN,
  },
  {
    order: 2,
    startLat: NAMAKKAL.lat,
    startLng: NAMAKKAL.lng,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: BRAND_GREEN,
  },
  {
    order: 3,
    startLat: NAMAKKAL.lat,
    startLng: NAMAKKAL.lng,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.3,
    color: BRAND_GREEN,
  },
  {
    order: 4,
    startLat: NAMAKKAL.lat,
    startLng: NAMAKKAL.lng,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: BRAND_GREEN,
  },
  {
    order: 5,
    startLat: NAMAKKAL.lat,
    startLng: NAMAKKAL.lng,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.4,
    color: BRAND_GREEN,
  },
];

export function GlobeSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full bg-white dark:bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 items-center">
          {/* Globe Container */}
          <div className="relative h-100 md:h-150 w-full flex items-center justify-center">
            <World data={exportArcs} globeConfig={globeConfig} />
          </div>

          {/* Text Content */}
        </div>
      </div>

      {/* Subtle fade to prevent harsh bottom edges */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white dark:from-black to-transparent pointer-events-none" />
    </section>
  );
}
