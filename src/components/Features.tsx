import { BarChart3, Bell, Package, Zap, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Smart Tracking',
    description: 'Track inventory across multiple locations with real-time updates and intelligent categorization.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain actionable insights with comprehensive reports and predictive analytics dashboards.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Get notified about low stock, expiring items, and important inventory changes instantly.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Automated Workflows',
    description: 'Streamline operations with automated reordering, stock transfers, and routine tasks.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security with role-based access control and full audit trails.',
    color: 'from-slate-500 to-gray-600'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Enable seamless collaboration with multi-user support and permission management.',
    color: 'from-indigo-500 to-blue-500'
  }
];

export function Features() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful features designed to give you complete control over your inventory operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
