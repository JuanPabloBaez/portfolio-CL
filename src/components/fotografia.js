import React, { useState, useEffect } from "react";



const Fotografia = () => {
    const [current, setCurrent] = useState(0);
   
    function importAll(r) {
      return r.keys().map(r);
    }
    const fotoItems = importAll(require.context('../images/foto', false, /,*\.jpg$/));
   
     /*  useEffect(() => {
      const interval = setInterval(() => {
        setCurrent(current === fotoItems.length - 1 ? 0 : current + 1)
      },5000);
      return () => clearInterval(interval);
    },[current, fotoItems.length ])  */
   
    const nextSlide = () => {
      setCurrent( current === fotoItems.length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
      setCurrent( current === 0 ? fotoItems.length - 1 : current - 1);
    }
    
    
  return (
    <div className="foto-body">
      <section className='page-slider'>
        <button className="page-left-arrow" onClick={prevSlide}>
          <svg id="i-caret-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M22 30 L6 16 22 2 Z" />
          </svg>
        </button>
        <button className="page-right-arrow" onClick={nextSlide}>
          <svg id="i-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M10 30 L26 16 10 2 Z" />
          </svg> 
        </button>
        {
          fotoItems.map((image, index)=> {
              return(
                <div className={index=== current ? 'page-slide active' : 'page-slide'} key={index}>
                  {index === current && ( 
                    <img src={image.default} alt={`backstage from `} />
                  )}     
                </div>
              ) 
            }       
          )
        }
      </section>
    </div>
  )
}

export default Fotografia;