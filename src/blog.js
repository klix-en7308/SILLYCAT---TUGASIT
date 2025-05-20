import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { gsap } from "gsap";
    
import { ScrollTrigger } from "./gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrollToPlugin);

let blogs = [
    {id: 1, title: "NEW WEB LOL", date: '15/05/2025', content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue vel nunc et imperdiet. Vivamus in felis quis mauris tincidunt consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque nec ex a risus mollis auctor. Morbi lobortis eros vitae elit mollis, porttitor porttitor nisl bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras at laoreet lorem. Nam venenatis felis tellus, et scelerisque lorem egestas ac. Nulla eu eleifend nisl, sed convallis tellus. Vivamus dictum lacus eget bibendum suscipit. Fusce non dignissim lorem. Suspendisse convallis ut diam sed venenatis. Nunc id facilisis mi. Integer eu lorem massa. Phasellus lacinia quam lorem, vel euismod nunc pulvinar sed. Suspendisse efficitur congue elit sed vehicula.
        <br>
In sagittis ante libero, sed euismod quam ornare et. Etiam ipsum massa, dignissim venenatis metus vitae, placerat lobortis odio. Quisque imperdiet varius ullamcorper. Mauris ante enim, dapibus non ultrices et, tincidunt quis est. Etiam sit amet est eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sodales faucibus libero sit amet posuere. Morbi ultricies turpis augue, et posuere libero semper in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo lectus, elementum at sollicitudin in, mollis in augue. Vivamus congue maximus nisl, volutpat porttitor est semper nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi aliquet neque ut purus pellentesque mattis. Etiam vel tellus elementum, cursus sem eu, sollicitudin turpis.
        `},
    {
        id: 2,
        title: "UPCOMING GAME",
        date: '16/05/2025',
        content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue vel nunc et imperdiet. Vivamus in felis quis mauris tincidunt consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque nec ex a risus mollis auctor. Morbi lobortis eros vitae elit mollis, porttitor porttitor nisl bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras at laoreet lorem. Nam venenatis felis tellus, et scelerisque lorem egestas ac. Nulla eu eleifend nisl, sed convallis tellus. Vivamus dictum lacus eget bibendum suscipit. Fusce non dignissim lorem. Suspendisse convallis ut diam sed venenatis. Nunc id facilisis mi. Integer eu lorem massa. Phasellus lacinia quam lorem, vel euismod nunc pulvinar sed. Suspendisse efficitur congue elit sed vehicula.
        <br><br>
In sagittis ante libero, sed euismod quam ornare et. Etiam ipsum massa, dignissim venenatis metus vitae, placerat lobortis odio. Quisque imperdiet varius ullamcorper. Mauris ante enim, dapibus non ultrices et, tincidunt quis est. Etiam sit amet est eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sodales faucibus libero sit amet posuere. Morbi ultricies turpis augue, et posuere libero semper in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo lectus, elementum at sollicitudin in, mollis in augue. Vivamus congue maximus nisl, volutpat porttitor est semper nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi aliquet neque ut purus pellentesque mattis. Etiam vel tellus elementum, cursus sem eu, sollicitudin turpis.
        
        `
    }
]

blogs.forEach((blog)=>{
    console.log(blog.title)
    document.getElementById("blogs").innerHTML += `
        <div class="yayay">
        
            <div class="flexer onblog">
                <div class="leftinfo">
                <h2>${blog.title}</h2>
                <p class="date">${blog.date}</p>
                </div>
                <div class="rightbtn">
                <a class="yesbtn" data-bs-toggle="collapse" href="#blog-${blog.id}" role="button" aria-expanded="false" aria-controls="blog-${blog.id}">
    <i class="fas fa-chevron-down"></i>
  </a>
  
                </div>
            </div>

            
            <div class="theactualthing collapse" id="blog-${blog.id}">
                ${blog.content}
            </div>
        </div>
    `
})

gsap.utils.toArray(".yayay").forEach(function(blog) {
    const q = gsap.utils.selector(blog);
    const btn = q(".yesbtn");
    const content = q(".theactualthing")
    
    
    const tl = gsap.timeline({ paused: true })
      .to(blog, {scale: 1.02, duration: 0.1})
      .from(btn, {opacity: 0, duration: 0.1});
      
    blog.addEventListener("mouseenter", function() {
      tl.play();
    });
    blog.addEventListener("mouseleave", function() {
      tl.reverse();
    });
  });
