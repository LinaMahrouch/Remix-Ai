

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
    
    
    <div className="flex flex-col items-center text-center bg-zinc-900 border border-gay-gray rounded-lg p-4 shadow-md h-full hover:bg-zinc-950">
    {/* Hide image on small screens */}
    <div className={`w-24 h-24 mb-4 ${feedback.img ? 'sm:block hidden' : ''}`}>
      {feedback.img && (
        <img src={feedback.img} alt={`${feedback.name}`} className="rounded-full" />
      )}
    </div>
    <h1 className="text-lg font-semibold ">{feedback.name}</h1>
    <p className="text-sm text-blue-700">{feedback.position}</p>
    <p className="mt-3 overflow-hidden">{feedback.content}</p>
  </div>
      
  
  );
};

export default TestimonialCard;
