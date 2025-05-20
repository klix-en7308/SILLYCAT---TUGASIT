
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrollToPlugin);

const maxheight = document.documentElement.clientHeight
const maxwidth = document.documentElement.clientWidth

let panels = gsap.utils.toArray(".panel");
panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    pin: true, 
    pinSpacing: false 
  });
});


gsap.utils.toArray(".oo").forEach(function(card) {
  gsap.set(card, {
    transformStyle: "preserve-3d",
    transformPerspective: 1000
  });
  const q = gsap.utils.selector(card);
  const front = q("#backcard");
  const back = q("#frontcard");
  
  gsap.set(back, { rotationY:-180 });
  
  const tl = gsap.timeline({ paused: true })
    .to(front, { duration: 1, rotationY: 180 })
    .to(back, { duration: 1, rotationY: 0 }, 0)
    .to(card, { z: 50 }, 0)
    .to(card, { z: 0 }, 0.5);
  card.addEventListener("mouseenter", function() {
    tl.play();
  });
  card.addEventListener("mouseleave", function() {
    tl.reverse();
  });
});

let newtl = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
      trigger: '#startnav',// pin the trigger element while active
      start: 'top-=20% top', // when the top of the trigger hits the top of the viewport
      end: 'end end', // end after scrolling 500px beyond the start
      scrub: true,
      markers: true
  }
});
newtl.from(".navbar",{opacity: 0});

// tl.to("#games",{
//   scrollTrigger: {
//     trigger: "#games",
//     start: "top top",
//     end:"+=2000",
//     pin: true,
//     immediateRender: false,
//     markers: true,
//   }
// })

// // ScrollTrigger.create({
// //   trigger: "#aboutus",
// //   start: "top top",
// //   pin: true,
// //   end: "bottom bottom",
// //   markers: true
// // })


// // ScrollTrigger.create({
// //   trigger: "#games",
// //   start: "top top",
// //   end: "bottom 400px",
// //   pinSpacing: true,
// //   pin: true
// // })

// // ScrollTrigger.create({
// //   trigger: "#aboutus",
// //   start: "top top",
// //   end: "bottom bottom",
// //   pin: true
// // })
// document.getElementById("backcard").addEventListener("mouseover",()=>{
//   gsap.to("#frontcard",{marginLeft: 130})
// })

// document.getElementById("backcard").addEventListener("mouseleave",()=>{
//   gsap.to("#frontcard",{marginLeft: 0})
// })

// document.getElementById("backcard2").addEventListener("mouseover",()=>{
//   gsap.to("#frontcard2",{marginLeft: 130})
// })

// document.getElementById("backcard2").addEventListener("mouseleave",()=>{
//   gsap.to("#frontcard2",{marginLeft: 0})
// })