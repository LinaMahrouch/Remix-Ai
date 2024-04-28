
import { InfiniteMovingCards } from "../ui/moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" flex flex-col antialiased  bg-grid-white/[0.05] items-center justify-center relative ">
      <InfiniteMovingCards
        items={techStackItems}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const techStackItems = [
    {
      
      name: "Remix",
      title: "",
      imageSrc: "/images/remix-run.svg",
    },

    {
        
        name: "Supabase",
        title: "",
        imageSrc: "/images/supabase.png",
      },

      {
        
        name: "Vercel AI SDK",
        title: "",
        imageSrc: "/images/logo-vercel.svg",
      },

      {
        
        name: "Aceternity UI",
        title: "",
        imageSrc: "/images/aceternity.png",
      },
{
      name: "TailwindCss",
        title: "",
        imageSrc: "/images/tailwind.png",
      },

    
    
  ];
