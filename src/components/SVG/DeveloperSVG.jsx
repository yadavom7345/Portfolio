const DeveloperSVG = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
      {/* Background elements */}
      <circle cx="250" cy="200" r="150" fill="#f5f5f5" />
      
      {/* Laptop base */}
      <rect x="160" y="180" width="180" height="120" rx="10" fill="#333" />
      <rect x="170" y="190" width="160" height="100" rx="5" fill="#555" />
      
      {/* Laptop screen */}
      <rect x="175" y="120" width="150" height="120" rx="5" fill="#444" />
      <rect x="185" y="130" width="130" height="100" rx="2" fill="#0077ff" />
      
      {/* Code on screen */}
      <line x1="195" y1="140" x2="245" y2="140" stroke="#fff" strokeWidth="2" />
      <line x1="195" y1="150" x2="275" y2="150" stroke="#fff" strokeWidth="2" />
      <line x1="195" y1="160" x2="255" y2="160" stroke="#fff" strokeWidth="2" />
      <line x1="205" y1="170" x2="265" y2="170" stroke="#fff" strokeWidth="2" />
      <line x1="215" y1="180" x2="285" y2="180" stroke="#fff" strokeWidth="2" />
      <line x1="225" y1="190" x2="275" y2="190" stroke="#fff" strokeWidth="2" />
      <line x1="195" y1="200" x2="265" y2="200" stroke="#fff" strokeWidth="2" />
      <line x1="205" y1="210" x2="255" y2="210" stroke="#fff" strokeWidth="2" />
      
      {/* Laptop hinge */}
      <rect x="205" y="240" width="90" height="5" rx="2" fill="#222" />
      
      {/* Developer figure - head */}
      <ellipse cx="340" cy="170" rx="35" ry="40" fill="#fff" />
      <path d="M320,170 Q340,190 360,170" stroke="#111" strokeWidth="2" fill="none" />
      <ellipse cx="325" cy="160" rx="3" ry="4" fill="#111" />
      <ellipse cx="355" cy="160" rx="3" ry="4" fill="#111" />
      
      {/* Hair */}
      <path d="M310,145 Q340,120 370,145 L370,170 Q355,180 325,180 L310,170 Z" fill="#111" />
      
      {/* Body */}
      <path d="M310,210 Q340,230 370,210 L380,300 Q340,320 300,300 Z" fill="#0077ff" />
      
      {/* Arms */}
      <path d="M310,230 Q270,240 250,200" stroke="#0077ff" strokeWidth="15" fill="none" />
      <path d="M370,230 Q415,250 400,290" stroke="#0077ff" strokeWidth="15" fill="none" />
      
      {/* Hands */}
      <circle cx="250" cy="200" r="10" fill="#fff" />
      <circle cx="400" cy="290" r="10" fill="#fff" />
      
      {/* Legs */}
      <path d="M320,300 Q310,350 300,370" stroke="#fff" strokeWidth="20" fill="none" />
      <path d="M360,300 Q370,350 380,370" stroke="#fff" strokeWidth="20" fill="none" />
    </svg>
  );
};

export default DeveloperSVG;