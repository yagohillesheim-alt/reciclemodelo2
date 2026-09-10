import React from 'react';

export default function Logo({ className = "h-12 w-auto", variant = "default" }: { className?: string; variant?: "default" | "white" }) {
  const navy = variant === "white" ? "#FFFFFF" : "#1D3A78";
  const orange = variant === "white" ? "#FFFFFF" : "#E7743B";
  const lime = variant === "white" ? "#FFFFFF" : "#9BC23B";

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 200 240" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Hands Circle Icon */}
        <g transform="translate(100, 70) scale(0.6)">
          {/* External Circle Outline */}
          <circle cx="0" cy="0" r="100" stroke={navy} strokeWidth="4" />
          
          {/* Hand 1 (Navy Blue) - Left-ish */}
          <path 
            d="M-60,-20 C-80,-40 -40,-80 0,-70 C20,-65 30,-50 30,-30 L0,-10 Z" 
            fill={navy} 
            transform="rotate(0)"
          />
          
          {/* Hand 2 (Orange) - Top-ish */}
          <path 
            d="M-60,-20 C-80,-40 -40,-80 0,-70 C20,-65 30,-50 30,-30 L0,-10 Z" 
            fill={orange} 
            transform="rotate(120)"
          />
          
          {/* Hand 3 (Lime Green) - Right-ish */}
          <path 
            d="M-60,-20 C-80,-40 -40,-80 0,-70 C20,-65 30,-50 30,-30 L0,-10 Z" 
            fill={lime} 
            transform="rotate(240)"
          />
        </g>

        {/* Text Section */}
        <text 
          x="100" 
          y="160" 
          textAnchor="middle" 
          fill={navy} 
          style={{ font: 'bold 32px Plus Jakarta Sans, sans-serif' }}
        >
          RECICLE
        </text>
        
        <text 
          x="165" 
          y="160" 
          fill={orange} 
          style={{ font: 'italic 28px Playball, cursive' }}
        >
          &
        </text>
        
        <text 
          x="185" 
          y="160" 
          fill={lime} 
          style={{ font: 'italic 28px Playball, cursive' }}
        >
          Cia
        </text>

        <text 
          x="100" 
          y="190" 
          textAnchor="middle" 
          fill={navy} 
          style={{ font: '500 10px Plus Jakarta Sans, sans-serif', letterSpacing: '0.05em' }}
        >
          LOGÍSTICA COM RESPONSABILIDADE ECOSOCIAL
        </text>
      </svg>
    </div>
  );
}
