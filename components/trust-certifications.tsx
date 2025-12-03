import { Shield, Award, CheckCircle, FileCheck, HardHat, Star } from 'lucide-react';

interface TrustCertificationsProps {
  dict: any
}

export default function TrustCertifications({ dict }: TrustCertificationsProps) {
  const certifications = [
    {
      icon: Shield,
      title: dict.trustCertifications.certifications.nhbrc.title,
      description: dict.trustCertifications.certifications.nhbrc.description,
    },
    {
      icon: CheckCircle,
      title: dict.trustCertifications.certifications.insured.title,
      description: dict.trustCertifications.certifications.insured.description,
    },
    {
      icon: Award,
      title: dict.trustCertifications.certifications.guarantee.title,
      description: dict.trustCertifications.certifications.guarantee.description,
    },
    {
      icon: FileCheck,
      title: dict.trustCertifications.certifications.licensed.title,
      description: dict.trustCertifications.certifications.licensed.description,
    },
    {
      icon: HardHat,
      title: dict.trustCertifications.certifications.safety.title,
      description: dict.trustCertifications.certifications.safety.description,
    },
    {
      icon: Star,
      title: dict.trustCertifications.certifications.quality.title,
      description: dict.trustCertifications.certifications.quality.description,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {dict.trustCertifications.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict.trustCertifications.subtitle}
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
              {dict.trustCertifications.footer}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}