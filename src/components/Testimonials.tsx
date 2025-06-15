import React from 'react';
import { Star, Quote, User, Building } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Rizki',
      position: 'CEO',
      company: 'TechStart Indonesia',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      rating: 5,
      text: 'BisnisPro telah mengubah cara kami menjalankan bisnis. Dengan solusi mereka, produktivitas tim meningkat 300% dan revenue naik signifikan dalam 6 bulan pertama.'
    },
    {
      id: 2,
      name: 'Sarah Dewi',
      position: 'Founder',
      company: 'Creative Digital',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
      rating: 5,
      text: 'Pelayanan yang luar biasa! Tim BisnisPro sangat profesional dan responsif. Mereka membantu kami dari nol hingga menjadi perusahaan dengan omzet miliaran rupiah.'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      position: 'Managing Director',
      company: 'Indo Manufacturing',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      rating: 5,
      text: 'Investasi terbaik untuk bisnis kami. Sistem yang mereka bangun sangat robust dan mudah digunakan. ROI yang kami dapatkan melebihi ekspektasi awal.'
    },
    {
      id: 4,
      name: 'Diana Putri',
      position: 'Operations Manager',
      company: 'Retail Chain',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      rating: 5,
      text: 'Support 24/7 mereka benar-benar nyata. Setiap kali ada kendala, tim mereka langsung responsif dan menyelesaikan masalah dengan cepat dan efektif.'
    },
    {
      id: 5,
      name: 'Eko Prasetyo',
      position: 'CTO',
      company: 'FinTech Solutions',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg',
      rating: 5,
      text: 'Teknologi yang mereka gunakan sangat canggih dan up-to-date. Integration dengan sistem existing kami berjalan mulus tanpa downtime sama sekali.'
    },
    {
      id: 6,
      name: 'Maya Sari',
      position: 'Business Owner',
      company: 'Fashion Boutique',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg',
      rating: 5,
      text: 'Dari UMKM kecil menjadi brand nasional berkat bantuan BisnisPro. Strategi digital marketing mereka sangat efektif meningkatkan brand awareness kami.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Klien Puas' },
    { number: '98%', label: 'Tingkat Kepuasan' },
    { number: '24/7', label: 'Customer Support' },
    { number: '5.0', label: 'Rating Rata-rata' }
  ];

  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
            Testimoni Klien
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Apa Kata <span className="text-blue-600">Klien Kami</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ribuan perusahaan telah mempercayai kami untuk mengembangkan bisnis mereka. 
            Berikut adalah cerita sukses dari beberapa klien kami.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-blue-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Bergabunglah dengan Ribuan Klien yang Puas
            </h4>
            <p className="text-gray-600 mb-6">
              Mulai transformasi digital bisnis Anda hari ini dan rasakan perbedaannya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200">
                Mulai Sekarang
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;