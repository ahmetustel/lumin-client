// pages/index.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FiUsers, FiAirplay, FiBriefcase, FiShield } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Lumin AI Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <h1 className="text-2xl font-bold text-gray-800">
                Lumin AI
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Hakkımızda
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                İletişim
              </Link>
              <Link
                href="/login"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Giriş Yap
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Yapay Zeka ile Rezervasyon Yönetiminde Yeni Dönem
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Modern teknoloji ve yapay zeka ile rezervasyon süreçlerinizi optimize edin, 
                müşteri memnuniyetini artırın.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/login"
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
                >
                  Hemen Başla
                </Link>
                <Link
                  href="/demo"
                  className="bg-white text-blue-500 px-8 py-3 rounded-lg border border-blue-500 hover:bg-blue-50 transition"
                >
                  Demo İzle
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <Image
                src="/images/dashboard.png"
                alt="Dashboard Preview"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Özellikler
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <FiUsers className="text-4xl text-blue-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Müşteri Yönetimi</h4>
              <p className="text-gray-600">
                Müşteri verilerini analiz edin ve kişiselleştirilmiş deneyimler sunun
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <FiAirplay className="text-4xl text-blue-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Gerçek Zamanlı İzleme</h4>
              <p className="text-gray-600">
                Rezervasyonları anlık takip edin ve hızlı aksiyonlar alın
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <FiBriefcase className="text-4xl text-blue-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">AI Önerileri</h4>
              <p className="text-gray-600">
                Yapay zeka destekli öneriler ile verimliliği artırın
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <FiShield className="text-4xl text-blue-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Güvenli Sistem</h4>
              <p className="text-gray-600">
                En son güvenlik standartları ile verilerinizi koruyun
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">10K+</div>
              <div className="text-gray-600">Aktif Kullanıcı</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">1M+</div>
              <div className="text-gray-600">Rezervasyon</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">99%</div>
              <div className="text-gray-600">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Lumin AI Logo"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="font-bold text-xl">Lumin AI</span>
              </div>
              <p className="text-gray-600">
                Yapay zeka destekli rezervasyon yönetim sistemi
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Ürün</h5>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/features">Özellikler</Link></li>
                <li><Link href="/pricing">Fiyatlandırma</Link></li>
                <li><Link href="/demo">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Şirket</h5>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/about">Hakkımızda</Link></li>
                <li><Link href="/contact">İletişim</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Yasal</h5>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/privacy">Gizlilik Politikası</Link></li>
                <li><Link href="/terms">Kullanım Şartları</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Lumin AI. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
