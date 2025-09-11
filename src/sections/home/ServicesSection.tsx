import React from 'react';
import { 
  Database, 
  Cloud, 
  CheckCircle, 
  Zap, 
  Shield, 
  Target 
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ServicesSection: React.FC = () => {
  const titleRef = useScrollReveal();
  const subtitleRef = useScrollReveal(150);

  const services = [
    {
      icon: Database,
      title: 'AI & Data Engineering',
      description: 'Turn data into actionable insight through tailored analytics, custom dashboards, and cloud-based data modeling.',
      delay: 0
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Leverage the power of the cloud with our expert architecture, migration, and management services for scalable infrastructure.',
      delay: 150
    },
    {
      icon: CheckCircle,
      title: 'QA Automation',
      description: 'Enhance software quality and accelerate release cycles with our end-to-end test automation frameworks and services.',
      delay: 300
    },
    {
      icon: Zap,
      title: 'MS Power Platform',
      description: 'Enable operational efficiency and unlock innovation through low-code automation and custom applications using Power Platform.',
      delay: 0
    },
    {
      icon: Shield,
      title: 'CyberSecurity',
      description: 'Protect your digital assets with comprehensive security assessments, threat mitigation, and compliance guidance.',
      delay: 150
    },
    {
      icon: Target,
      title: 'Project Management',
      description: 'From PMO setup and portfolio governance to agile delivery, we ensure strategic alignment and on-time execution.',
      delay: 300
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-white">
            Our Offerings
          </h2>
          <p ref={subtitleRef} className="text-gray-400 mt-2">
            We deliver solutions that drive real business impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const cardRef = useScrollReveal(service.delay);
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                ref={cardRef}
                className="group bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;