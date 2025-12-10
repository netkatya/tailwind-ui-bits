"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function HeartButton() {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Link
        href="/favorites"
        aria-label="Favorites"
        title="Favorites"
        onClick={() => setIsActive(!isActive)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          flex items-center justify-center
          rounded-full
          w-10 h-10
          bg-[rgba(255,137,179,0.25)]
          border border-[#e44848]
          backdrop-blur-md
          transition-shadow duration-200 ease-out
          md:w-12 md:h-12
          xl:w-12 xl:h-12
          ${
            isHovered
              ? "shadow-[0_0_12px_rgba(255,137,179,0.7),0_0_6px_rgba(255,137,179,0.5)_inset]"
              : "shadow-[0_4px_20px_rgba(255,137,179,0.5),0_0_20px_rgba(255,137,179,0.5)_inset]"
          }
          ${
            isActive
              ? "bg-gradient-to-b from-[rgba(255,137,179,0.42)] to-[rgba(255,137,179,0.32)] border-[rgba(255,137,179,0.7)] shadow-[0_10px_30px_rgba(255,137,179,0.18)]"
              : ""
          }
        `}
      >
        <Heart
          className="w-6 h-6 stroke-[#e44848] md:w-6 md:h-6 xl:w-7 xl:h-7 floatPulse"
          style={{
            transformOrigin: "center",
            display: "inline-block",
            animation: "floatPulse 2.2s ease-in-out infinite",
          }}
        />
      </Link>

      <style jsx>{`
        @keyframes floatPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.06);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
