import { Shield, Award, CheckCircle, FileCheck, HardHat, Star } from 'lucide-react';

export default function TrustCertifications() {
  const certifications = [
    {
      icon: Shield,
      title: 'NHBRC Registered',
      description: 'National Home Builders Registration Council',
    },
    {
      icon: CheckCircle,
      title: 'Insured & Bonded',
      description: 'Full liability coverage',
    },
    {
      icon: Award,
      title: '10 Year Guarantee',
      description: 'Structural warranty included',
    },
    {
      icon: FileCheck,
      title: 'Licensed Contractor',
      description: 'Fully certified & compliant',
    },
    {
      icon: HardHat,
      title: 'Safety Compliant',
      description: 'ISO safety standards',
    },
    {
      icon: Star,
      title: 'Quality Assured',
      description: 'Premium workmanship',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Certifications & Guarantees
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your peace of mind is our priority. We're fully certified, insured, and committed to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#FFD600]"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FFD600] rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Shield className="w-5 h-5 text-[#FFD600]" />
            <span className="text-gray-900 font-semibold">
              Trusted by 500+ Satisfied Clients Across Gauteng
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}