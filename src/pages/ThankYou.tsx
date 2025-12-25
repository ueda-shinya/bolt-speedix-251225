import { useState, useEffect } from 'react';
import { CheckCircle, FileText, Target, Users, Calendar, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  useEffect(() => {
    document.title = 'ご注文ありがとうございます | Speedix';
  }, []);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessContent: '',
    targetAudience: '',
    projectGoal: '',
    desiredDeliveryDate: '',
    referenceUrls: '',
    designPreferences: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center border border-gray-100">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ヒアリングフォームを送信しました
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              詳細なヒアリング情報をご提供いただき、ありがとうございます。
              <br />
              担当者より1営業日以内にご連絡させていただきます。
            </p>

            <div className="space-y-4">
              <Link
                to="/"
                className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-bold hover:from-blue-600 hover:to-cyan-600 transition-all"
              >
                トップページに戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center border border-gray-100 mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ご注文ありがとうございます
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            ご注文が完了いたしました。
            <br />
            担当者より追ってご連絡させていただきます。
          </p>

          <div className="bg-blue-50 rounded-xl p-6 text-left border border-blue-100">
            <h2 className="font-bold text-gray-900 mb-3">今後の流れ</h2>
            <ol className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">1.</span>
                <span>ご登録いただいたメールアドレスに確認メールをお送りします</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">2.</span>
                <span>下記のヒアリングフォームにご記入ください（任意）</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">3.</span>
                <span>担当者より1営業日以内にご連絡させていただきます</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">4.</span>
                <span>詳細のヒアリング後、制作を開始いたします</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-100">
          <div className="text-center mb-8">
            <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              WEBサイト制作ヒアリングフォーム
            </h2>
            <p className="text-gray-600">
              より良いWEBサイトを制作するため、以下の情報をご記入ください。
              <br />
              <span className="text-sm text-gray-500">（後日、担当者からヒアリングさせていただくことも可能です）</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Target className="w-4 h-4 mr-2" />
                事業内容・業種
              </label>
              <textarea
                name="businessContent"
                value={formData.businessContent}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例：飲食店、美容サロン、ECサイトなど"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 mr-2" />
                ターゲット層
              </label>
              <textarea
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例：20代〜30代の女性、経営者、主婦層など"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Target className="w-4 h-4 mr-2" />
                サイトの目的・ゴール
              </label>
              <textarea
                name="projectGoal"
                value={formData.projectGoal}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例：新規顧客の獲得、ブランド認知度向上、商品販売など"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                希望納期
              </label>
              <input
                type="text"
                name="desiredDeliveryDate"
                value={formData.desiredDeliveryDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例：1ヶ月以内、2025年3月末まで、特に急ぎではないなど"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <FileText className="w-4 h-4 mr-2" />
                参考サイト・URL
              </label>
              <textarea
                name="referenceUrls"
                value={formData.referenceUrls}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="参考にしたいサイトのURLがあればご記入ください（複数可）"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Palette className="w-4 h-4 mr-2" />
                デザインの好み・イメージ
              </label>
              <textarea
                name="designPreferences"
                value={formData.designPreferences}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例：シンプル、高級感、カジュアル、モダン、使用したいカラーなど"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                その他ご要望・特記事項
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="その他、ご要望や気になることがあればご記入ください"
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
              <p className="mb-2">
                ※ このフォームは任意です。後日、担当者より詳細なヒアリングをさせていただきます。
              </p>
              <p>
                ※ 事前にご記入いただくことで、よりスムーズに制作を進めることができます。
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
            >
              発注内容を送信する
            </button>

            <Link
              to="/"
              className="block w-full text-center bg-gray-100 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              後で記入する（トップページに戻る）
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
