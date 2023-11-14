import type { MetaFunction } from "@vercel/remix";
//import About from "~/components/About";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Testimonial from "~/components/Testimonial";
import AboutUs from '~/components/AboutUs'


export const meta: MetaFunction = () => {
  return [
    { title: "Your Remix AI APP" },
    //{ name: "description", content: "Welcome to Remix!" },
  ];
};



export default function Index() {
  return (
    
      <div>
    <div className="snap-y snap-mandatory overflow-y-auto h-screen">
    <div className="snap-start h-screen">
      <Hero />
    </div>
    <div className="snap-start h-screen">
      <AboutUs />
    </div>
    <div className="snap-start">
      <Testimonial />
      <Footer/>
    </div>
   
  </div>
  </div>
      
    
  );
}
