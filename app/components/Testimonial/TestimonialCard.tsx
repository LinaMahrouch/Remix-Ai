

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
    <div className="card flex flex-col items-center  border-gray-500 gap-6 w-full max-w-xs mx-auto shadow-lg rounded-xl p-4">
  <div className="avatar-container w-24 h-24 border border-gray-200 rounded-full overflow-hidden">
    <img
      src={feedback.img}
      alt={feedback.name}
      width={96} // Adjust the size as needed
      height={96}
      style={{objectFit: "cover"}} // Change the objectFit as needed
      className="object-cover rounded-full"
    />
  </div>
  <div className="text-center">
    <p className="font-bold text-lg text-gray-300">{feedback.name}</p>
    <p className="text-gray-500">{feedback.position}</p>
    <p className="text-gray-300 mt-2">{feedback.content}</p>
  </div>
</div>
      
  
  );
};

export default TestimonialCard;
