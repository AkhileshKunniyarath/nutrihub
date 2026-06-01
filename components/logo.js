"use client";

import React from "react";

export function Logo({ width = 180, height = 72, className = "", style = {} }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 120"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5C17D" />
          <stop offset="35%" stopColor="#C5A059" />
          <stop offset="70%" stopColor="#A37E38" />
          <stop offset="100%" stopColor="#8C6A24" />
        </linearGradient>
      </defs>

      {/* Leaves Group */}
      <g id="logo-leaves" fill="url(#goldGradient)">
        {/* Left Leaf */}
        <path
          d="M136 34C131 22 121 23 118 29C115 35 122 43 136 34Z"
          opacity="0.95"
        />
        <path
          d="M134 32C130 20 122 18 116 27C110 36 123 45 134 32Z"
        />
        {/* Right Leaf */}
        <path
          d="M152 26C147 13 133 16 132 25C131 33 144 38 152 26Z"
        />
        {/* Stems */}
        <path
          d="M132 33C133 36 136 40 140 43C141 44 140 45 139 44C135 41 132 37 131 33C131 32 132 32 132 33Z"
          fill="#A37E38"
        />
      </g>

      {/* NutriFab Typography */}
      <text
        x="150"
        y="76"
        textAnchor="middle"
        fill="url(#goldGradient)"
        fontSize="36"
        fontWeight="600"
        style={{
          fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif",
          letterSpacing: "-0.01em",
        }}
      >
        NutriFab
      </text>

      {/* Naturals Subtitle with Tapered Lines */}
      <g>
        {/* Left Tapered Line */}
        <path
          d="M 20 98.5 L 30 96.5 L 90 98.5 L 30 100.5 Z"
          fill="url(#goldGradient)"
        />
        
        {/* NATURALS Text */}
        <text
          x="150"
          y="102"
          textAnchor="middle"
          fill="url(#goldGradient)"
          fontSize="12.5"
          fontWeight="500"
          style={{
            fontFamily: "var(--font-body), Inter, sans-serif",
            letterSpacing: "0.45em",
          }}
        >
          NATURALS
        </text>

        {/* Right Tapered Line */}
        <path
          d="M 280 98.5 L 270 96.5 L 210 98.5 L 270 100.5 Z"
          fill="url(#goldGradient)"
        />
      </g>
    </svg>
  );
}
