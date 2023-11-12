import type { MetaFunction } from "@vercel/remix";
//import About from "~/components/About";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar/Index";
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
    <>
      
      <Navbar />
      <Hero />
      <AboutUs />
      <Testimonial />
      <Footer />
      
    </>
  );
}
