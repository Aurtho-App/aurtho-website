type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
};

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started with smart money management",
    features: [
      "Unlimited income tracking",
      "Up to 5 custom categories",
      "Basic spending analytics",
      "Mobile app access",
      "Email support"
    ],
    buttonText: "Get Started For Free"
  },
  {
    name: "Pro",
    price: "$4.99/mo",
    description: "Advanced features for serious money management",
    features: [
      "Everything in Basic",
      "Unlimited categories",
      "Advanced analytics",
      "Custom category icons",
      "Priority support",
      "Export data to CSV"
    ],
    buttonText: "Start Pro Trial",
    isPopular: true
  },
  {
    name: "Family",
    price: "$9.99/mo",
    description: "Perfect for families and shared finances",
    features: [
      "Everything in Pro",
      "Up to 5 user accounts",
      "Shared categories",
      "Family budget planning",
      "Bill splitting",
      "24/7 priority support"
    ],
    buttonText: "Start Family Trial"
  }
];

export function PricingSection() {
  return (
    <section className="py-24 bg-emerald-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-16">
            Choose the perfect plan for your financial journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg flex flex-col
                ${tier.isPopular ? 'ring-2 ring-emerald-500' : ''}
              `}
            >
              {tier.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-4xl font-bold tracking-tight">
                    {tier.price}
                  </span>
                  {tier.price !== "Free" && (
                    <span className="text-lg text-gray-500 dark:text-gray-400">/month</span>
                  )}
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  {tier.description}
                </p>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-emerald-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-lg px-4 py-3 text-center font-semibold transition-colors
                  ${
                    tier.isPopular
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-800'
                  }
                `}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 