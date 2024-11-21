import React from 'react'
import { useEffect } from 'react'
const useScroll = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const animationClass = entry.target.dataset.animation;
                if(animationClass){
                    entry.target.classList.add(animationClass);
                }
               
                observer.unobserve(entry.target); 
              }
            });
          },
          { threshold: 0.15 } 
        );
    
        const elements = document.querySelectorAll("[data-animation]");
        elements.forEach((el) => observer.observe(el));
    
        return () => observer.disconnect(); 
      }, []);
  return (
    <div>
      
    </div>
  )
}

export default useScroll