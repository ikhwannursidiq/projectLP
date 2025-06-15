import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your preferred form handling service
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Halo! Saya tertarik dengan layanan BisnisPro. Bisa tolong berikan informasi lebih lanjut?');
    const phoneNumber = '6281234567890'; // Replace with your actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      detail: '+62 21 8765 4321',
      description: 'Senin - Jumat, 09:00 - 18:00'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@bisnispro.co.id',
      description: 'Kami akan balas dalam 2 jam'
    },
    {
      icon: MapPin,
      title: 'Alamat',
      detail: 'Jl. Sudirman No. 123',
      description: 'Jakarta Pusat, Indonesia 10220'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      detail: 'Senin - Jumat: 09:00 - 18:00',
      description: 'Sabtu: 09:00 - 15:00'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Tim Ahli',
      description: 'Professional berpengalaman 10+ tahun'
    },
    {
      icon: Award,
      title: 'Terpercaya',
      description: 'ISO 9001:2015 Certified'
    },
    {
      icon: MessageCircle,
      title: 'Responsif',
      description: 'Response time rata-rata < 2 jam'
    }
  ];

  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
            Hubungi Kami
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Mari Diskusikan <span className="text-blue-600">Kebutuhan Bisnis</span> Anda
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk mengembangkan bisnis. 
            Konsultasi gratis tersedia untuk semua calon klien.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Kirim Pesan</h4>
              <p className="text-gray-600">
                Isi form di bawah ini dan tim kami akan segera menghubungi Anda
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="+62 812 3456 7890"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="PT. Contoh Perusahaan"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                  placeholder="Ceritakan tentang kebutuhan bisnis Anda..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Kirim Pesan</span>
                </button>
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="flex-1 bg-green-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h4>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{info.title}</h5>
                      <p className="text-blue-600 font-medium mb-1">{info.detail}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Mengapa Pilih Kami?</h4>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">{item.title}</h5>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
              <h4 className="text-xl font-bold mb-4">Butuh Respon Cepat?</h4>
              <p className="mb-6 opacity-90">
                Hubungi kami melalui WhatsApp untuk mendapatkan respon dalam hitungan menit
              </p>
              <button
                onClick={openWhatsApp}
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;