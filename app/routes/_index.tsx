import type { LoaderFunctionArgs, MetaFunction } from "@vercel/remix";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import AboutUs from '../components/AboutUs'
import PricingSection from "../components/PricingSection";
import React from "react";
import { createClient } from "../utils/supabase.server";
import { useLoaderData } from "@remix-run/react";



export const meta: MetaFunction = () => {
  return [
    { title: "Your Remix AI APP" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const { supabase } = createClient(request);

  const { data } = await supabase.auth.getSession();

  return { user: data?.session?.user };
}


export default function Index() {
  const { user } = useLoaderData<typeof loader>();

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
          <Footer />
        </div>




      </div>
    </div>


  );
}
