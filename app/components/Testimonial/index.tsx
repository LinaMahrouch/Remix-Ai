import React from 'react';
import TestimonialCard from './TestimonialCard';
import Title from '../Title';
import Me from '../../../public/images/me.jpeg';
import notionImg from '../../../public/images/notion-avatar.png';

interface Feedback {
  name: string;
  position: string;
  img: string;
  content: string;
}

//The Testimonial component displays client feedbacks
const Testimonial = () => {
  const feedbacks: Feedback[] = [
    {
      name: 'Mahrouch Lina',
      position: 'CTO - YourMom',
      img: notionImg, // your own image path here
      content: 'Actually it was a good thing discovering this template.'
    },
    {
      name: 'Letmi Cook',
      position: 'CEO - Sleep Agency',
      img : Me, // your own image path here
      content: 'It was a great experience using the app.'
    },
    
    // ... other feedbacks
  ];

  return (
    <section className="py-10 px-4 md:py-32 bg-black text-white">
      <Title
        title="Our lovely clients"
        caption="Feedbacks of some clients that trusted our process"
      />
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center py-8">
          {feedbacks.map((feedback, index) => (
            <TestimonialCard feedback={feedback} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Testimonial;
