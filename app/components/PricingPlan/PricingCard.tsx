

interface Feature {
  name: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  features: Feature[];
  annualPrice?: string;
}

const PricingCard = ({ title, price, features, annualPrice }:PricingCardProps ) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-4 text-4xl font-semibold text-gray-900">{price}<span className="text-base font-normal">/month</span></p>
      {annualPrice && <p className="text-sm text-gray-500">{annualPrice} per month if paid annually</p>}
      <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
        Buy plan
      </button>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"  className="w-6 h-6 text-green-500" />
</svg>
            
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;