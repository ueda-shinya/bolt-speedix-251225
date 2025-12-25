import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Clock, Award, CheckCircle, DollarSign, TrendingUp, AlertCircle, Sparkles } from 'lucide-react';
import { getActiveProducts } from '../data/products';
import { AnimatedRadarChart, AnimatedBarChart } from '../components/AnimatedCharts';

export default function Home() {
  useEffect(() => {
    document.title = 'Speedix | 最短・最速で成果を出すWeb制作サービス';
  }, []);

  const products = getActiveProducts();

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="timeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#22D3EE" />
              </linearGradient>
              <linearGradient id="salesGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            <path
              d="M 0 500 L 100 480 L 200 450 L 300 420 L 400 380 L 500 350 L 600 310 L 700 270 L 800 230 L 900 190 L 1000 150 L 1100 110 L 1200 70"
              fill="none"
              stroke="url(#timeGradient)"
              strokeWidth="3"
              className="animate-draw-line"
            />
            <path
              d="M 0 550 L 100 540 L 200 520 L 300 490 L 400 460 L 500 420 L 600 390 L 700 350 L 800 310 L 900 270 L 1000 230 L 1100 190 L 1200 150"
              fill="none"
              stroke="url(#salesGradient)"
              strokeWidth="3"
              className="animate-draw-line-delayed"
            />
          </svg>
        </div>

        <div className="absolute top-10 left-10 w-48 h-48 opacity-40 hidden lg:block">
          <AnimatedRadarChart />
        </div>

        <div className="absolute bottom-10 right-10 w-56 h-40 opacity-40 hidden lg:block">
          <AnimatedBarChart />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              制作時間は売上損失
              <br />
              まだ時間をかけますか？
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-gray-300 leading-relaxed">
              売上までの時間損失を極限に減らします
            </p>
            <p className="text-lg sm:text-xl mb-8 text-gray-400 leading-relaxed">
              スピーディーな制作で今すぐLPを市場に出しましょう
            </p>
            <Link
              to="/products"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-xl"
            >
              今すぐ制作を開始する
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-left">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">01.</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">短縮時間</h3>
              <p className="text-gray-600 leading-relaxed">
                従来のLP制作に比べ、制作時間を大幅に短縮し、業務を効率化します。
              </p>
            </div>
            <div className="text-left">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">02.</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">コスト削減</h3>
              <p className="text-gray-600 leading-relaxed">
                低コストのLP制作で、広告費の増加を実現し、ビジネスの成長をサポートします。
              </p>
            </div>
            <div className="text-left">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">03.</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">高度なAI活用</h3>
              <p className="text-gray-600 leading-relaxed">
                AI技術を活用し、効果的なマーケティング戦略を反映したLPを提供します。
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Speedixについて
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Speedixは、顧客のニーズに応えるため、迅速かつ低コストでLPを制作するエージェンシーです。マーケティング視点を大切にしています。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              お客様が効率的に集客できるよう、常に革新と改善を求めて日々努めています。
            </p>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            Speedixの特長
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="text-center mb-6">
                <Clock className="w-12 h-12 mx-auto" style={{ stroke: 'url(#gradient)', strokeWidth: 2 }} />
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">スピード納品</h3>
              <p className="text-gray-600 leading-relaxed text-left">
                最短3〜5営業日で納品。お急ぎのプロジェクトにも柔軟に対応し、ビジネスチャンスを逃しません。
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="text-center mb-6">
                <Award className="w-12 h-12 mx-auto stroke-blue-500" style={{ strokeWidth: 2 }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">プロ品質デザイン</h3>
              <p className="text-gray-600 leading-relaxed text-left">
                マーケティング視点を取り入れた、成果にコミットする戦略的デザインを提供します。
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="text-center mb-6">
                <Zap className="w-12 h-12 mx-auto stroke-cyan-500" style={{ strokeWidth: 2 }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">ワンストップ対応</h3>
              <p className="text-gray-600 leading-relaxed text-left">
                企画から制作、運用まで一貫してサポート。複数の業者に依頼する手間を省きます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            私たちは、この課題を解決するために誕生しました
          </h2>
          <p className="text-center text-gray-600 mb-12">
            今までのLP制作の課題
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="text-center mb-4">
                <Clock className="w-12 h-12 mx-auto stroke-red-600" style={{ strokeWidth: 2 }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">制作するまでに時間がかかる</h3>
              <p className="text-gray-600 leading-relaxed">
                集客に関する課題について専門のコンサルタントが無料で相談に乗ります。お気軽にお問合せください。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="text-center mb-4">
                <DollarSign className="w-12 h-12 mx-auto stroke-red-600" style={{ strokeWidth: 2 }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">料金が高い</h3>
              <p className="text-gray-600 leading-relaxed">
                LP制作やマーケティングに関するワークショップを定期的に開催し、多くの方々に知識を提供しています。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="text-center mb-4">
                <AlertCircle className="w-12 h-12 mx-auto stroke-red-600" style={{ strokeWidth: 2 }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">マーケティング視点がない</h3>
              <p className="text-gray-600 leading-relaxed">
                実際にご利用いただいたお客様の成功事例を通じて、効果的なLP制作のヒントをお伝えします。
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            提供内容
          </h2>
          <p className="text-center text-gray-600 mb-12">
            お客様のニーズに合わせた最適なソリューションをご用意しています
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-sm transition-all border border-gray-100 overflow-hidden group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-600">
                      ¥{product.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">（税込）</span>
                  </div>
                  <Link
                    to={`/products/${product.slug}`}
                    className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-3 rounded-lg font-bold hover:from-blue-600 hover:to-cyan-600 transition-all"
                  >
                    カートに追加する
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            選ばれる理由
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Yis株式会社は、マーケティング型のWeb制作会社として、
            <br className="hidden sm:block" />
            ただ作るだけではなく、成果を重視した戦略的クリエイティブを提供します。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">制作から運用まで一貫対応</h4>
                <p className="text-gray-600 text-sm">Webサイトの企画・制作・運用・マーケティングまで、すべてをサポート</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">豊富な実績と信頼</h4>
                <p className="text-gray-600 text-sm">多業種での制作実績により、様々なニーズに対応可能</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">明確な料金体系</h4>
                <p className="text-gray-600 text-sm">追加費用なしの分かりやすい価格設定で安心</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">迅速なレスポンス</h4>
                <p className="text-gray-600 text-sm">お問い合わせから納品まで、スピーディーな対応を実現</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            今すぐビジネスを加速させましょう
          </h2>
          <p className="text-xl text-white mb-8 leading-relaxed">
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
