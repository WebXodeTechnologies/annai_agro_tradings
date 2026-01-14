"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Home, ArrowRight, PhoneCall } from "lucide-react";
import animationData from "@/public/animations/Error 404.json";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden p-6">
      {/* Abstract Background - Removes the need for boxes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
        {/* Large, Attractive Lottie Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-2"
        >
          {/* Decorative glow behind Lottie */}
          <div className="absolute inset-0 bg-green-200/20 rounded-full blur-3xl transform scale-50 animate-pulse" />

          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ width: 400, height:400 }} // Increased size for impact
            className="relative z-10"
          />
        </motion.div>

        {/* Text Section - Minimalist & Legible */}
        <div className="space-y-4 -mt-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900 tracking-tight">
              Lost in the <span className="text-green-700">Greenery?</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-500 font-body max-w-sm mx-auto leading-relaxed"
          >
            The link you followed might be broken or the harvest has moved.
          </motion.p>
        </div>

        {/* Action Buttons - Clean & Borderless focus */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 w-full justify-center items-center"
        >
          <Link
            href="/"
            className="group flex items-center gap-3 px-10 py-4 bg-green-700 text-white rounded-full text-sm font-bold shadow-2xl shadow-green-700/30 hover:bg-green-800 transition-all hover:-translate-y-1"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 text-slate-700 font-bold hover:text-green-700 transition-colors py-4 px-2"
          >
            <PhoneCall size={18} />
            Speak to Export Desk
            <ArrowRight
              size={16}
              className="ml-1 opacity-50 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
    
      </div>
    </div>
  );
}
