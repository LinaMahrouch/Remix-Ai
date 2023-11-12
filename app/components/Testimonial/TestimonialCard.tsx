

// Define les feedbacks types:
interface Feedback {
  name: string;
  position: string;
  img: string;
  content: string;
}

interface TestimonialCardProps {
  feedback: Feedback;
}

const TestimonialCard = ({ feedback }: TestimonialCardProps) => {
  return (
    
    <div className="card flex flex-col items-center border border-gray-500 gap-6 w-full max-w-xs mx-auto shadow-lg rounded-xl p-4 h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl  ">
    <div className="avatar-container   border-white rounded-full overflow-hidden">
      <img
        src={feedback.img}
        alt={feedback.name}
        style={{ objectFit: "cover" }}
        className="object-cover w-12 h-12 border border-light rounded-full    "
      />
    </div>
    <div className="text-center">
      <p className="font-bold text-lg text-gray-300">{feedback.name}</p>
      <p className="text-blue-300 text-sm">{feedback.position}</p>
      <p className="text-gray-300 mt-2">{feedback.content}</p>
    </div>
  </div>
      
  
  );
};

export default TestimonialCard;
