import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    document.title = 'プライバシーポリシー | Speedix';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            プライバシーポリシー
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12">
            <div className="prose max-w-none">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">個人情報保護方針</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">個人情報の管理</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">個人情報の利用目的</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  本ウェブサイトでは、お客様からのお問い合わせ時に、お名前、e-mailアドレス、電話番号等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">個人情報の第三者への開示・提供の禁止</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>お客さまの同意がある場合</li>
                  <li>お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</li>
                  <li>法令に基づき開示することが必要である場合</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">個人情報の安全対策</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">ご本人の照会</h2>
                <p className="text-gray-600 leading-relaxed">
                  お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">法令、規範の遵守と見直し</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
