import type { MetaFunction } from "@vercel/remix";
//import About from "~/components/About";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Testimonial from "~/components/Testimonial";
import AboutUs from '~/components/AboutUs'
import PricingSection from "~/components/PricingSection";


export const meta: MetaFunction = () => {
  return [
    { title: "Your Remix AI APP" },
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
    </div>
    <div className="snap-start">
      <PricingSection />
      <Footer/>
      </div>
     
    
    
   
  </div>
  </div>
      
    
  );
}
