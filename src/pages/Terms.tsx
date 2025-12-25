import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    document.title = '特定商取引法に基づく表記 | Speedix';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            特定商取引法に基づく表記
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">販売事業者</td>
                  <td className="py-4 text-gray-600">Yis株式会社</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">運営統括責任者</td>
                  <td className="py-4 text-gray-600">川村清美</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">所在地</td>
                  <td className="py-4 text-gray-600">神奈川県横浜市中区桜木町1-101-1クロスゲート7F</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">電話番号</td>
                  <td className="py-4 text-gray-600">050-1808-1053</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">メールアドレス</td>
                  <td className="py-4 text-gray-600">info@speedixweb.site</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">販売URL</td>
                  <td className="py-4 text-gray-600">https://speedixweb.site/</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">お支払い方法</td>
                  <td className="py-4 text-gray-600">クレジットカード、電子マネーなど決済システムによる</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">商品代金以外の<br />必要金額</td>
                  <td className="py-4 text-gray-600">
                    基本的に表記以外の料金はかかりません。<br />
                    オプションを選択される場合は、オプション料金が追加で必要となります。
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">販売数量</td>
                  <td className="py-4 text-gray-600">１サービスから販売（オプションのみの購入は受け付けておりません）</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">お申込み有効期限</td>
                  <td className="py-4 text-gray-600">
                    7日以内にお願いいたします。<br />
                    7日間入金がない場合は、キャンセルとさせていただきます。
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">商品引渡し時期</td>
                  <td className="py-4 text-gray-600">お支払い確認後に制作を行い、制作が完了した時点で公開（商品お引き渡し）となります。</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">商品引渡し方法</td>
                  <td className="py-4 text-gray-600">サイトへの公開をもって納品となります。</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">返品・不良品について</td>
                  <td className="py-4 text-gray-600">
                    <p className="font-bold mb-2">【返品につきまして】</p>
                    <p className="mb-4">オーダーメイドの制作品となりますため、お客様都合による返品は受け付けておりません。</p>
                    <p className="font-bold mb-2">【不良品につきまして】</p>
                    <p>当社によるミスや間違いがあります場合は、無償にて変更修正を行います。システム上の機能などは、製品をご理解のうえご購入ください。</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-bold text-gray-900 align-top whitespace-nowrap">表現、及び商品に<br />関する注意書き</td>
                  <td className="py-4 text-gray-600">
                    本商品に示された表現や再現性には個人差があり、必ずしも利益や効果を保証したものではございません。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
