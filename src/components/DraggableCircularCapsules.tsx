import React, { useState, useRef, useEffect } from 'react';

interface Capsule {
  id: number;
  text: string;
  x: number;
  y: number;
  isDragging: boolean;
  dragX: number;
  dragY: number;
  originalX: number;
  originalY: number;
}

const DraggableCircularCapsules: React.FC = () => {
  const [capsules, setCapsules] = useState<Capsule[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState(400);
  const returnAnimationRef = useRef<number>();

  // Initialize capsules with random positions in a circle
  useEffect(() => {
    const attributes = [
      "Customer Support", "Passion", "Positive Experience", 
      "Trustworthiness", "Customer Focus", "Long-Term Relationships",
      "Innovation", "Collaboration", "Personalization", 
      "Reliability", "Quality"
    ];
    
    const newCapsules: Capsule[] = [];
    const radius = containerSize / 2 - 50;
    const center = containerSize / 2;
    
    attributes.forEach((text, index) => {
      const angle = (index / attributes.length) * 2 * Math.PI;
      const x = center + radius * Math.cos(angle) - 60;
      const y = center + radius * Math.sin(angle) - 20;
      
      newCapsules.push({
        id: index,
        text,
        x,
        y,
        isDragging: false,
        dragX: 0,
        dragY: 0,
        originalX: x,
        originalY: y
      });
    });
    
    setCapsules(newCapsules);
  }, [containerSize]);

  // Handle container resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const size = Math.min(
          containerRef.current.offsetWidth, 
          containerRef.current.offsetHeight,
          600
        );
        setContainerSize(size);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    
    // Cancel any ongoing return animation
    if (returnAnimationRef.current) {
      cancelAnimationFrame(returnAnimationRef.current);
    }
    
    setCapsules(capsules.map(capsule => 
      capsule.id === id 
        ? { 
            ...capsule, 
            isDragging: true,
            dragX: e.clientX - capsule.x,
            dragY: e.clientY - capsule.y
          }
        : capsule
    ));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    setCapsules(capsules.map(capsule => {
      if (!capsule.isDragging) return capsule;
      
      const newX = e.clientX - capsule.dragX;
      const newY = e.clientY - capsule.dragY;
      
      // Calculate distance from original position
      const dx = newX - capsule.originalX;
      const dy = newY - capsule.originalY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Limit drag distance to 200px
      const maxDistance = 200;
      if (distance > maxDistance) {
        const angle = Math.atan2(dy, dx);
        return {
          ...capsule,
          x: capsule.originalX + Math.cos(angle) * maxDistance,
          y: capsule.originalY + Math.sin(angle) * maxDistance
        };
      }
      
      return { ...capsule, x: newX, y: newY };
    }));
  };

  const returnToPosition = (capsule: Capsule) => {
    const startTime = performance.now();
    const duration = 500; // Animation duration in ms
    const startX = capsule.x;
    const startY = capsule.y;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = (t: number) => {
        return 1 - Math.pow(1 - t, 3);
      };
      
      const easedProgress = easeOut(progress);
      
      setCapsules(prevCapsules => 
        prevCapsules.map(c => 
          c.id === capsule.id 
            ? { 
                ...c, 
                x: startX + (c.originalX - startX) * easedProgress,
                y: startY + (c.originalY - startY) * easedProgress
              }
            : c
        )
      );
      
      if (progress < 1) {
        returnAnimationRef.current = requestAnimationFrame(animate);
      }
    };
    
    returnAnimationRef.current = requestAnimationFrame(animate);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Find the capsule that was being dragged and return it to position
    const draggedCapsule = capsules.find(capsule => capsule.isDragging);
    if (draggedCapsule) {
      returnToPosition(draggedCapsule);
    }
    
    setCapsules(capsules.map(capsule => ({
      ...capsule,
      isDragging: false
    })));
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Interactive Customer Values</h1>
      
      <div 
        ref={containerRef}
        className="relative rounded-full border-2 border-dashed border-gray-400 bg-white/80 shadow-lg backdrop-blur-sm"
        style={{ width: containerSize, height: containerSize }}
      >
        {capsules.map(capsule => (
          <div
            key={capsule.id}
            className="absolute flex items-center justify-center cursor-grab active:cursor-grabbing select-none transition-all duration-300 hover:scale-105"
            style={{
              left: capsule.x,
              top: capsule.y,
              transform: capsule.isDragging ? 'scale(1.15)' : 'scale(1)',
              zIndex: capsule.isDragging ? 20 : 1,
              filter: capsule.isDragging ? 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.15))' : 'none',
            }}
            onMouseDown={(e) => handleMouseDown(capsule.id, e)}
          >
            <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-md font-medium whitespace-nowrap transition-colors duration-300 hover:from-blue-600 hover:to-indigo-700">
              {capsule.text}
            </div>
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-gray-600 font-semibold">Drag items outwards</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-white rounded-lg shadow-md max-w-md text-center">
        <p className="text-gray-700 mb-2">
          <span className="font-medium text-blue-600">Click and drag</span> any value to explore it further.
        </p>
        <p className="text-gray-600 text-sm">
          Each value will return to its position when released, showing how they all work together to create a complete customer experience.
        </p>
      </div>
    </div>
  );
};

export default DraggableCircularCapsules;