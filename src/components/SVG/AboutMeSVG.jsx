import React from 'react';

const AboutMeSVG = () => {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="about_gradient" x1="200" y1="0" x2="200" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
        <filter id="about_shadow" x="0" y="0" width="400" height="400" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>

      {/* Background Circle */}
      <circle cx="200" cy="200" r="180" fill="#2D3748" filter="url(#about_shadow)" />
      
      {/* Person Silhouette */}
      <circle cx="200" cy="140" r="60" fill="#60A5FA" />
      <path d="M120 310C120 265.817 155.817 230 200 230C244.183 230 280 265.817 280 310V330H120V310Z" fill="#60A5FA" />
      
      {/* Details */}
      <circle cx="175" cy="130" r="8" fill="#F9FAFB" />
      <circle cx="225" cy="130" r="8" fill="#F9FAFB" />
      <path d="M185 160C185 160 195 170 215 160" stroke="#F9FAFB" strokeWidth="3" strokeLinecap="round" />
      
      {/* Code Elements */}
      <rect x="40" y="80" width="80" height="15" rx="7.5" fill="#EC4899" opacity="0.7" />
      <rect x="40" y="110" width="60" height="15" rx="7.5" fill="#8B5CF6" opacity="0.7" />
      <rect x="40" y="140" width="70" height="15" rx="7.5" fill="#34D399" opacity="0.7" />
      
      <rect x="280" y="80" width="80" height="15" rx="7.5" fill="#EC4899" opacity="0.7" />
      <rect x="300" y="110" width="60" height="15" rx="7.5" fill="#8B5CF6" opacity="0.7" />
      <rect x="290" y="140" width="70" height="15" rx="7.5" fill="#34D399" opacity="0.7" />
      
      <rect x="60" y="280" width="60" height="15" rx="7.5" fill="#60A5FA" opacity="0.7" />
      <rect x="50" y="310" width="80" height="15" rx="7.5" fill="#6366F1" opacity="0.7" />
      <rect x="70" y="340" width="50" height="15" rx="7.5" fill="#EC4899" opacity="0.7" />
      
      <rect x="280" y="280" width="60" height="15" rx="7.5" fill="#60A5FA" opacity="0.7" />
      <rect x="270" y="310" width="80" height="15" rx="7.5" fill="#6366F1" opacity="0.7" />
      <rect x="290" y="340" width="50" height="15" rx="7.5" fill="#EC4899" opacity="0.7" />
      
      {/* Decorative Elements */}
      <circle cx="40" cy="40" r="10" fill="url(#about_gradient)" className="floating-shape" />
      <rect x="340" y="30" width="20" height="20" rx="5" fill="url(#about_gradient)" className="floating-shape" style={{ animationDelay: "0.5s" }} />
      <polygon points="60,360 80,380 40,380" fill="url(#about_gradient)" className="floating-shape" style={{ animationDelay: "1s" }} />
      <circle cx="340" cy="360" r="10" fill="url(#about_gradient)" className="floating-shape" style={{ animationDelay: "1.5s" }} />
    </svg>
  );
};

export default AboutMeSVG; 