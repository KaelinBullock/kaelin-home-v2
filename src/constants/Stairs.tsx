import { useEffect, useRef } from "react";
import lottie, { AnimationConfig, RendererType } from "lottie-web";
import octopusAnimation from "../assets/programming.json"

const Laptop = () => {
   const anime = useRef<any>(null);
   useEffect(() => {
    lottie.destroy();
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: octopusAnimation,
    });
      return () => lottie.stop();
   }, []);

   
   return <div style={{ height: 250, width: 300 }} ref={anime}></div>;
 };

export default Laptop;
