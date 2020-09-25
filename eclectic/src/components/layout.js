import React from "react"
import Footer from "./footer"
import Header from "./header"
import Landing from "./landing"
import gsap from "gsap"
import "./layout.css"

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".carousel", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo("footer", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=2");
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

const Layout = () => (
    <>
      <Header/>
      <div class="intro">
        <div class="intro-text">
          <h1 class="hide">
            <span class="text">Creating inovation</span>
          </h1>
          <h1 class="hide">
            <span class="text">For Everyday</span>
          </h1>
          <h1 class="hide">
            <span class="text">people.</span>
          </h1>
        </div>
      </div>
      <div class="slider"></div>
      <script
            src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
            integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ=="
            crossorigin="anonymous"
            >
            
      </script>

      <Landing />
      <Footer/>
    </>
  
)

export default Layout
