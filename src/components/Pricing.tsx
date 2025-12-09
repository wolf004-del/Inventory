import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 1,000 items',
      'Basic analytics',
      '2 user accounts',
      'Email support',
      'Mobile app access',
      'Standard security'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '79',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 10,000 items',
      'Advanced analytics',
      '10 user accounts',
      'Priority support',
      'API access',
      'Custom workflows',
      'Advanced security',
      'Multi-location support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'For large-scale operations',
    features: [
      'Unlimited items',
      'Custom analytics',
      'Unlimited users',
      '24/7 dedicated support',
      'Full API access',
      'Custom integrations',
      'Enterprise security',
      'White-label options',
      'SLA guarantee'
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-105'
                  : 'border border-slate-200 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-slate-900">${plan.price}</span>
                  <span className="text-slate-600">/month</span>
                </div>
              </div>

              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 mb-8 ${
                  plan.popular
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                Start Free Trial
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
