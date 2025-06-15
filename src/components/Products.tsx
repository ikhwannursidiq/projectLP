import React from 'react';
import { ShoppingCart, Star, ArrowRight, Zap, Shield, Headphones } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Paket Business Starter',
      price: 'Rp 2.500.000',
      originalPrice: 'Rp 3.500.000',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      features: ['Konsultasi Business Plan', 'Setup Digital Marketing', 'Brand Identity Design', '3 Bulan Support'],
      rating: 4.9,
      popular: true
    },
    {
      id: 2,
      name: 'Paket Business Pro',
      price: 'Rp 5.000.000',
      originalPrice: 'Rp 7.000.000',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
      features: ['Complete Business Analysis', 'Custom Software Development', 'Digital Transformation', '6 Bulan Support'],
      rating: 4.8,
      popular: false
    },
    {
      id: 3,
      name: 'Paket Enterprise',
      price: 'Rp 15.000.000',
      originalPrice: 'Rp 20.000.000',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      features: ['Full Business Integration', 'AI-Powered Analytics', 'Dedicated Team', '12 Bulan Support'],
      rating: 5.0,
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Implementasi cepat dalam 24 jam'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Keamanan data tingkat enterprise'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Tim support siap membantu kapan saja'
    }
  ];

  return (
    <section id="produk" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
            Produk & Layanan
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Pilih Paket yang Sesuai dengan
            <span className="text-blue-600"> Kebutuhan Bisnis</span> Anda
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan solusi lengkap untuk mengembangkan bisnis Anda dengan paket yang dirancang 
            khusus untuk berbagai skala perusahaan.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                product.popular ? 'ring-2 ring-blue-500 relative' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Terpopuler
                </div>
              )}
              
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-gray-900">{product.name}</h4>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600">Pembayaran sekali saja</p>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Pilih Paket</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Keunggulan Layanan Kami
            </h4>
            <p className="text-gray-600">
              Setiap paket dilengkapi dengan layanan premium untuk memastikan kesuksesan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h5>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
            <h5 className="text-xl font-bold text-gray-900 mb-2">
              Butuh Konsultasi Gratis?
            </h5>
            <p className="text-gray-600 mb-4">
              Tim ahli kami siap membantu Anda memilih paket yang tepat
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200">
              Konsultasi Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;