import { useEffect } from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    document.title = '会社情報 | Speedix';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            会社情報
          </h1>
          <p className="text-xl text-white leading-relaxed">
            成果を重視した戦略的クリエイティブで、
            <br className="hidden sm:block" />
            お客様のビジネス成長を支援します
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <img
              src="/img/yislogo.png"
              alt="Yis株式会社ロゴ"
              className="h-20 w-auto object-contain"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Yis株式会社</h2>
              <p className="text-gray-600">マーケティング型Web制作会社</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Yis株式会社は、マーケティング視点を取り入れたWeb制作を専門とする企業です。
              単にWebサイトを作るのではなく、お客様のビジネス目標達成に向けて、
              戦略的なクリエイティブとマーケティング施策を一体的に提供しています。
            </p>
            <p className="text-gray-600 leading-relaxed">
              企画・制作から運用・マーケティングまで、一貫したサポート体制で、
              お客様のビジネス成長を加速させます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            私たちの強み
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="bg-blue-100 p-4 rounded-xl inline-block mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">成果重視のアプローチ</h3>
              <p className="text-gray-600 leading-relaxed">
                デザインだけでなく、マーケティング戦略に基づいた成果にコミットする制作を行います。
                集客・売上向上に直結するWebサイトを提供します。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="bg-blue-100 p-4 rounded-xl inline-block mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">一貫したサポート体制</h3>
              <p className="text-gray-600 leading-relaxed">
                企画から制作、運用、マーケティングまで、すべての工程をワンストップで対応。
                複数の業者に依頼する手間を省き、一貫性のある施策を実現します。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="bg-blue-100 p-4 rounded-xl inline-block mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">スピード対応</h3>
              <p className="text-gray-600 leading-relaxed">
                最短3〜5営業日での納品を実現。お急ぎのプロジェクトにも柔軟に対応し、
                ビジネスチャンスを逃しません。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            サービス内容
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Web制作</h3>
              <p className="text-gray-600">
                コーポレートサイト、ランディングページ、ECサイトなど、
                目的に応じた最適なWebサイトを制作します。
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Webマーケティング</h3>
              <p className="text-gray-600">
                SEO対策、Web広告運用、SNS運用など、
                集客とコンバージョン向上のための施策を展開します。
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">運用・保守</h3>
              <p className="text-gray-600">
                公開後の更新作業、サーバー管理、セキュリティ対策など、
                安定したWebサイト運営をサポートします。
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">システム開発</h3>
              <p className="text-gray-600">
                予約システム、顧客管理システム、業務効率化ツールなど、
                ビジネスに必要なシステムを開発します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            お客様のビジネス成長をサポートします
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Speedixのサービスで、今すぐビジネスを加速させましょう
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
