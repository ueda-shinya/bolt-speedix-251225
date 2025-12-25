import { useEffect } from 'react';
import { Clock, DollarSign, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpeedixAbout() {
  useEffect(() => {
    document.title = 'Speedixについて | Speedix';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Speedixについて
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            迅速かつ低コストで効果的なLP制作を通じて、ビジネス成長をサポートします。
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Speedixについて
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Speedixは、顧客のニーズに応えるため、迅速かつ低コストでLPを制作するエージェンシーです。マーケティング視点を大切にしています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="text-center mb-6">
                <Clock className="w-12 h-12 mx-auto stroke-blue-500" style={{ strokeWidth: 2 }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">迅速性</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                短期間で高品質なランディングページを提供し、競争力を向上させます。
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="text-center mb-6">
                <DollarSign className="w-12 h-12 mx-auto stroke-cyan-500" style={{ strokeWidth: 2 }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">コスト効率</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                低コストの制作により、広告費用を最大限に活用し、効果を高めます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200">
              <div className="text-center mb-6">
                <Eye className="w-12 h-12 mx-auto stroke-blue-500" style={{ strokeWidth: 2 }} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                私たちは、全てのビジネスが簡単に集客を実現できる世界を目指します。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200">
              <div className="text-center mb-6">
                <Target className="w-12 h-12 mx-auto stroke-cyan-500" style={{ strokeWidth: 2 }} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Speedixは、革新的なLP制作で顧客の成功を実現し、マーケティング効果を向上させます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            今すぐビジネスを加速させましょう
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            お客様のビジネス成長をサポートする最適なソリューションをご提案します
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
          >
            今すぐ制作を開始する
          </Link>
        </div>
      </section>
    </div>
  );
}
