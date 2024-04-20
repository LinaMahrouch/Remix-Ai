import React from "react";
import Title from "../Title";
import PricingPlan from "./PricingPlan";

const PricingSection = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl   from-zinc-900 to-black p-6 text-white">
        <div className="container mt-4 mx-auto px-4">
        <Title
          title="Pricing"
          caption="Select the plan that works best for you."
        />
 <div className="flex flex-wrap -mx-4 justify-center items-start ">
          
            {/* Repeat for each pricing plan */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <PricingPlan
                title="Free"
                price="$0/month"
                features={['Unlimited Projects', 'Unlimited Projects', 'Unlimited Projects']}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <PricingPlan
                title="Premium"
                price="$10/month"
                mostPopular   // uncomment this line to make this plan the most popular
                features={['Unlimited Projects', 'Unlimited Projects', 'Unlimited Projects']}
              />
            </div>
           
          </div>
        </div>
        
      </section>
    );
};

export default PricingSection;