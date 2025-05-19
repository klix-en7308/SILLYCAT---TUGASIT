import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrollToPlugin);

gsap.utils.toArray(".tablink").forEach(function(disc) {
    const q = gsap.utils.selector(disc);
    const front = q(".mainbtns");
    const back = q(".diccs");
    
    
    const tl = gsap.timeline({ paused: true })
      .to(back, {marginLeft: -180});
      
    disc.addEventListener("mouseenter", function() {
      tl.play();
    });
    disc.addEventListener("mouseleave", function() {
        
      tl.reverse();
    });
  });
