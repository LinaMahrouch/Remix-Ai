import { ChevronRight } from "lucide-react";
import { Spotlight } from "../ui/light";
import { Link } from "@remix-run/react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { InfiniteMovingCardsDemo } from "../Stack/moving-cards-demo";
import { InfiniteMovingCards } from "../ui/moving-cards";
import Stack from "../Stack";

export default function Hero() {
  return (
    <div>
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 mt-60 mx-auto relative z-10  w-full ">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Remix-AI SaaS template

        </h1>
        <p className="mt-4 font-normal text-xl text-zinc-500 max-w-lg text-center mx-auto">
          This is a starter template for you next AI SaaS with Remix
        </p>
        <div className="mt-3 mb-6 text-center">
          <Link to="/signin">
            <HoverBorderGradient as="button" containerClassName="rounded-full inline-flex items-center justify-center border-gray-400 text-zinc-300" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span className="mr-2 p-2" style={{ display: 'inline', lineHeight: '1' }}>Discover More</span>
              <ChevronRight size={20} style={{ display: 'inline' }} />
            </HoverBorderGradient>
          </Link>
        </div>  
             <Stack/>
        </div>

    </div>
    </div>
  );
}


