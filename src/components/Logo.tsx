interface LogoProps {
  className?: string;
  size?: "default" | "large";
  onClick?: () => void;
}

const Logo = ({ className = "", size = "default", onClick }: LogoProps) => {
  const dimensions = size === "large" ? "w-14 h-14" : "w-11 h-11";
  
  return (
    <div 
      className={`${dimensions} ${className} cursor-pointer group`}
      onClick={onClick}
    >
      <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full"
      >
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
        
        {/* 3D Cube - Left face with floating animation */}
        <path 
          d="M4 14 L24 4 L24 34 L4 24 Z" 
          fill="url(#cubeGradient1)"
          className="animate-[cube-left_3s_ease-in-out_infinite]"
          style={{ transformOrigin: 'center' }}
        />
        
        {/* 3D Cube - Right face with floating animation */}
        <path 
          d="M24 4 L44 14 L44 34 L24 44 L24 34 Z" 
          fill="url(#cubeGradient2)"
          className="animate-[cube-right_3s_ease-in-out_infinite_0.2s]"
          style={{ transformOrigin: 'center' }}
        />
        
        {/* 3D Cube - Top face with pulse animation */}
        <path 
          d="M4 14 L24 4 L44 14 L24 24 Z" 
          fill="url(#cubeGradient3)"
          className="animate-[cube-top_3s_ease-in-out_infinite_0.4s]"
          style={{ transformOrigin: 'center' }}
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
        
        {/* Floating particles */}
        <circle 
          cx="10" cy="8" r="1.5" 
          fill="hsl(145, 50%, 55%)"
          className="animate-[float-particle_2s_ease-in-out_infinite]"
        />
        <circle 
          cx="38" cy="10" r="1" 
          fill="hsl(145, 50%, 60%)"
          className="animate-[float-particle_2.5s_ease-in-out_infinite_0.5s]"
        />
        <circle 
          cx="24" cy="2" r="1.2" 
          fill="hsl(145, 50%, 65%)"
          className="animate-[float-particle_2.2s_ease-in-out_infinite_0.3s]"
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
      
      <style>{`
        @keyframes cube-left {
          0%, 100% { transform: translateX(0) translateY(0); opacity: 1; }
          50% { transform: translateX(-2px) translateY(1px); opacity: 0.9; }
        }
        @keyframes cube-right {
          0%, 100% { transform: translateX(0) translateY(0); opacity: 1; }
          50% { transform: translateX(2px) translateY(1px); opacity: 0.9; }
        }
        @keyframes cube-top {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-2px); opacity: 0.95; }
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.8; }
          50% { transform: translateY(-3px) scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Logo;
