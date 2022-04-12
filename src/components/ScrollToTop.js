import React, { useState,useEffect,/*  useRef */  } from "react";


export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(true);
  /* const bodyEndRef = useRef(0); */




  const checkScrollTop = () => {
    console.log("in");
    if (!isVisible && window.pageYOffset > 400){
      setIsVisible(true);
      console.log("pass")
      
    } else if (isVisible && window.pageYOffset <= 400){
      setIsVisible(false)
      console.log("pass")
    }
  };

  
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
/*     window.scroll(0,0);
 */    console.log("up")
    return
  };


/*   window.addEventListener('scroll', checkScrollTop);
 */
  useEffect(() => {
      window.addEventListener("scroll", checkScrollTop);
      console.log("listen");
      return () => window.removeEventListener("scroll", checkScrollTop);
    });

    

  return (
    <div className="scroll-to-top">
      {isVisible===true && (
        <svg onClick={scrollToTop} id="i-chevron-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  height="100%" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
          <path d="M30 20 L16 8 2 20" />
        </svg>
      )}
    </div>
  );
}