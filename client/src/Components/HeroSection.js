import React, { Component, useState } from 'react';
import {useSpring, animated} from 'react-spring'

// function NewDiv() {
//    const props = useSpring({'opacity': 1, 'font-size':'23px', from: {opacity: 0}})
//    return <animated.div style={props}>I will fade in</animated.div>
// }


const Hero = () => {
      const [screenWidth, setWidth] = React.useState(window.innerWidth);
      const [screenHeight, setHeight] = React.useState(window.innerHeight);

      const s1024px = 1020;
      const s900px = 900;
      const s767px = 767;
   
      React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
   
      // Return a function from the effect that removes the event listener
      return () => window.removeEventListener("resize", handleWindowResize);
      }, []);
      

      if (screenWidth<s900px){
         return(
            <div id="HeroSection">
                  <section className="innerHero" style={{'width':'100%'}}>
                     <canvas
                        id="canvas"
                        style={{'width': '100%', 'height': '100%', 'padding': '0', 'margin': '0'}}
                     ></canvas>
                     <svg height="100%" width="100%">
                        <defs>
                           <mask id="mask" x="0" y="0" width="100%" height="100%" >
                              <rect x="0" y="0" width="100%" height="100%" />
                              <text x="49%" y="55%" textAnchor="middle">BUILD</text>
                           </mask>
                        </defs>
                        <rect fill="white" x="0" y="0" width="100%" height="100%" />
                     </svg>
                     </section>
                  <section></section>
                  <section></section>
               </div>
         )
      }
      else{
         return(
            <div id="HeroSection">
                  <section className="innerHero" style={{'width':'100%'}}>
                     {/* <canvas
                        id="canvas"
                        style={{'width': '100%', 'height': '100%', 'padding': '0', 'margin': '0'}}
                     ></canvas> */}
                     <img src="images/photo-1593486544625-13ef2368e43a.jpg"></img>
                     <svg height="100%" width="100%">
                        <defs>
                           <mask id="mask" x="0" y="0" width="100%" height="100%" >
                              <rect x="0" y="0" width="100%" height="100%" />
                              <text x="49%" y="50%" textAnchor="middle">BUILD</text>
                           </mask>
                        </defs>
                        <rect fill="#333333" x="0" y="0" width="100%" height="100%" />
                     </svg>
                     </section>
                  <section></section>
                  <section></section>
               </div>
         )
      }
      
}

export default Hero;

