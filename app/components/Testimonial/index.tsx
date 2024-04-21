import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";
import Title from "../Title";
import cook from "/images/cook.png";
import notionImg from "/images/notion-avatar.png";
import suit from "/images/suit.png";

interface Feedback {
  name: string;
  position: string;
  img: string;
  content: string;
}

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Testimonial = () => {
  const feedbacks: Feedback[] = [
    {
      name: "Mahrouch Lina",
      position: "CTO - YourMom",
      img: notionImg,
      content: "Actually it was a good thing discovering this template.",
    },
    {
      name: "Letmi Cook",
      position: "CEO - Sleep Agency",
      img: cook,
      content: "It was a great experience using the app.",
    },
    {
      name: "Lee Nah",
      position: "CTO - WRizz",
      img: suit,
      content: "It was a great experience using the app.",
    },
    // ...other feedbacks
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-black text-white p-6">
      <Title
        title="Our lovely clients"
        caption="Feedbacks of some clients that tested our AI App"
      />
      {/* Restrict the max-width of the container */}
      <motion.div
        className=" mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.name} // It's better to use unique keys, if possible
              className="flex flex-col h-full rounded-lg shadow-md"
              variants={itemVariants}
            >
              <TestimonialCard feedback={feedback} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;
