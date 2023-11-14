type PricingPlanProps = {
    title: string;
    price: string;
    features: string[];
    mostPopular?: boolean;
  };
  
  const PricingPlan = ({ title, price, features, mostPopular = false }: PricingPlanProps) => (
    <div className={`rounded-lg shadow-lg p-4 md:p-6 ${mostPopular ? 'border-2 border-blue-500' : 'border border-zinc-600'}`}>
      <h1 className={`text-lg md:text-xl font-semibold text-center mb-2 md:mb-4 ${mostPopular ? 'text-blue-600' : 'text-gray-300'}`}>{title}</h1>
      <p className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">{price}</p>
    <ul className="mb-4 md:mb-6">
        {features.map((feature, index) => (
           <li key={index} className="flex items-center justify-center text-gray-300 mb-1">
            {/* add ur features here ;) */}
          </li>
        ))}
        <li className="flex items-center justify-center text-gray-300 mb-1">
            Unlimited Projects
        </li>
        <li className="flex items-center justify-center text-gray-300 mb-1">
            Unlimited Projects
        </li>
        <li className="flex items-center justify-center text-gray-300 mb-1">
            Unlimited Projects
        </li>
      </ul>

      <button className={`w-full py-2 rounded-lg text-white font-semibold ${mostPopular ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700 hover:bg-gray-800'}`}>
        Subscribe
      </button>
    </div>
  );
export default PricingPlan;
