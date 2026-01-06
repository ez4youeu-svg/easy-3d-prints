const Logo = ({ className = "", size = "default" }: { className?: string; size?: "default" | "large" }) => {
  const dimensions = size === "large" ? "w-14 h-14" : "w-11 h-11";
  
  return (
    <div className={`${dimensions} ${className}`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Background gradient */}
        <defs>
          <linearGradient id="cubeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(145, 50%, 48%)" />
            <stop offset="100%" stopColor="hsl(145, 50%, 35%)" />
          </linearGradient>
          <linearGradient id="cubeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(145, 50%, 55%)" />
            <stop offset="100%" stopColor="hsl(145, 50%, 42%)" />
          </linearGradient>
          <linearGradient id="cubeGradient3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(145, 50%, 62%)" />
            <stop offset="100%" stopColor="hsl(145, 50%, 48%)" />
          </linearGradient>
        </defs>
        
        {/* 3D Cube - Left face */}
        <path 
          d="M4 14 L24 4 L24 34 L4 24 Z" 
          fill="url(#cubeGradient1)"
        />
        
        {/* 3D Cube - Right face */}
        <path 
          d="M24 4 L44 14 L44 34 L24 44 L24 34 Z" 
          fill="url(#cubeGradient2)"
        />
        
        {/* 3D Cube - Top face */}
        <path 
          d="M4 14 L24 4 L44 14 L24 24 Z" 
          fill="url(#cubeGradient3)"
        />
        
        {/* Inner cube lines for depth */}
        <path 
          d="M24 24 L24 44" 
          stroke="hsl(145, 50%, 30%)" 
          strokeWidth="0.5" 
          opacity="0.5"
        />
        <path 
          d="M4 24 L24 34 L44 24" 
          stroke="hsl(145, 50%, 30%)" 
          strokeWidth="0.5" 
          opacity="0.3"
        />
        
        {/* Highlight lines */}
        <path 
          d="M4 14 L24 24" 
          stroke="white" 
          strokeWidth="0.5" 
          opacity="0.3"
        />
        <path 
          d="M24 24 L44 14" 
          stroke="white" 
          strokeWidth="0.5" 
          opacity="0.2"
        />
      </svg>
    </div>
  );
};

export default Logo;
