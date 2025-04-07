import React from 'react';

const CodeSVG = () => {
  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="paint0_linear" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="250" y1="100" x2="250" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0077ff" />
          <stop offset="1" stopColor="#00c6ff" />
        </linearGradient>
        <filter id="shadow" x="0" y="0" width="500" height="500" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>

      <rect x="50" y="50" width="400" height="300" rx="20" filter="url(#shadow)" fill="#2D3748" />
      
      <circle cx="80" cy="80" r="8" fill="#FF5F56" />
      <circle cx="110" cy="80" r="8" fill="#FFBD2E" />
      <circle cx="140" cy="80" r="8" fill="#27C93F" />
      
      <rect x="80" y="120" width="120" height="10" rx="5" fill="#6366F1" opacity="0.7" />
      <rect x="80" y="140" width="160" height="10" rx="5" fill="#8B5CF6" opacity="0.7" />
      <rect x="80" y="160" width="140" height="10" rx="5" fill="#EC4899" opacity="0.7" />
      <rect x="110" y="180" width="180" height="10" rx="5" fill="#60A5FA" opacity="0.7" />
      <rect x="110" y="200" width="120" height="10" rx="5" fill="#34D399" opacity="0.7" />
      <rect x="110" y="220" width="160" height="10" rx="5" fill="#60A5FA" opacity="0.7" />
      <rect x="80" y="240" width="200" height="10" rx="5" fill="#8B5CF6" opacity="0.7" />
      <rect x="80" y="260" width="140" height="10" rx="5" fill="#EC4899" opacity="0.7" />
      <rect x="80" y="280" width="180" height="10" rx="5" fill="#6366F1" opacity="0.7" />
      <rect x="110" y="300" width="160" height="10" rx="5" fill="#34D399" opacity="0.7" />

      <text x="70" y="140" fill="#F9FAFB" fontSize="20" fontFamily="monospace">{`{`}</text>
      <text x="70" y="280" fill="#F9FAFB" fontSize="20" fontFamily="monospace">{`}`}</text>
      <text x="100" y="180" fill="#F9FAFB" fontSize="20" fontFamily="monospace">{`(`}</text>
      <text x="295" y="180" fill="#F9FAFB" fontSize="20" fontFamily="monospace">{`)`}</text>
      <text x="100" y="220" fill="#F9FAFB" fontSize="20" fontFamily="monospace">{`<`}</text>
      <text x="275" y="220" fill="#F9FAFB" fontSize="20" fontFamily="monospace">{`/>`}</text>

      <rect x="25" y="350" width="450" height="20" rx="5" fill="#4A5568" />
      <rect x="200" y="370" width="100" height="10" rx="5" fill="#2D3748" />

      <g className="animated-code-element">
        <rect x="310" y="130" width="100" height="40" rx="5" fill="url(#paint1_linear)" fillOpacity="0.8" />
        <text x="330" y="155" fill="#FFFFFF" fontSize="16" fontFamily="monospace">function</text>
      </g>

      <g className="animated-code-element" style={{ animationDelay: "0.5s" }}>
        <rect x="310" y="190" width="80" height="40" rx="5" fill="url(#paint1_linear)" fillOpacity="0.8" />
        <text x="325" y="215" fill="#FFFFFF" fontSize="16" fontFamily="monospace">const</text>
      </g>

      <g className="animated-code-element" style={{ animationDelay: "1s" }}>
        <rect x="310" y="250" width="120" height="40" rx="5" fill="url(#paint1_linear)" fillOpacity="0.8" />
        <text x="325" y="275" fill="#FFFFFF" fontSize="16" fontFamily="monospace">return()</text>
      </g>

      <circle cx="50" cy="420" r="15" fill="url(#paint1_linear)" className="floating-shape" />
      <rect x="90" y="410" width="30" height="30" rx="5" fill="url(#paint1_linear)" className="floating-shape" style={{ animationDelay: "0.3s" }} />
      <polygon points="150,400 170,430 130,430" fill="url(#paint1_linear)" className="floating-shape" style={{ animationDelay: "0.6s" }} />
      <circle cx="210" cy="420" r="15" fill="url(#paint1_linear)" className="floating-shape" style={{ animationDelay: "0.9s" }} />
      <rect x="250" y="410" width="30" height="30" rx="5" fill="url(#paint1_linear)" className="floating-shape" style={{ animationDelay: "1.2s" }} />
      <polygon points="310,400 330,430 290,430" fill="url(#paint1_linear)" className="floating-shape" style={{ animationDelay: "1.5s" }} />
      <circle cx="370" cy="420" r="15" fill="url(#paint1_linear)" className="floating-shape" style={{ animationDelay: "1.8s" }} />
      <rect x="410" y="410" width="30" height="30" rx="5" fill="url(#paint1_linear)" className="floating-shape" style={{ animationDelay: "2.1s" }} />
    </svg>
  );
};

export default CodeSVG; 