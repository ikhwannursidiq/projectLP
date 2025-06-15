import React from 'react';
import { CheckCircle, Target, Zap, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Fokus pada Hasil',
      description: 'Setiap strategi yang kami kembangkan dirancang khusus untuk mencapai target bisnis Anda.'
    },
    {
      icon: Zap,
      title: 'Inovasi Terdepan',
      description: 'Menggunakan teknologi dan metodologi terbaru untuk memberikan solusi yang efektif.'
    },
    {
      icon: Shield,
      title: 'Keamanan Terjamin',
      description: 'Sistem keamanan berlapis untuk melindungi data dan investasi bisnis Anda.'
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Tentang Kami
              </h2>
              <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                Mitra Terpercaya untuk
                <span className="text-blue-600"> Kesuksesan Bisnis</span> Anda
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dengan pengalaman lebih dari 10 tahun, kami telah membantu ribuan perusahaan 
                mencapai target bisnis mereka melalui solusi inovatif dan strategi yang tepat sasaran.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement List */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Pencapaian Kami:</h4>
              <div className="space-y-3">
                {[
                  'ISO 9001:2015 Certified',
                  'Penghargaan Best Innovation 2023',
                  'Trusted by Fortune 500 Companies',
                  '24/7 Customer Support'
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Team collaboration"
                  className="rounded-xl shadow-lg h-48 w-full object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="Business meeting"
                  className="rounded-xl shadow-lg h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                  alt="Professional workspace"
                  className="rounded-xl shadow-lg h-64 w-full object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                  alt="Success celebration"
                  className="rounded-xl shadow-lg h-48 w-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;