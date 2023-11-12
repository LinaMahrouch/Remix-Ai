import PricingCard from './PricingCard';

interface PricingSectionProps {
  plans: {
    title: string;
    price: string;
    features: { name: string }[];
    annualPrice?: string;
  }[];
}
const PricingSection = ({ plans }: PricingSectionProps) => {
  return (
    <section className="py-12">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Choose the right plan for you</h2>
        <p className="mt-2 text-sm text-gray-500">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p>
      </div>
      <div className="mt-10 max-w-4xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
