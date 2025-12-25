import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Speedix</h3>
            <p className="text-sm leading-relaxed">
              最短・最速で成果を出すWeb制作サービス
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">メニュー</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/speedix-about" className="hover:text-white transition-colors">
                  Speedixについて
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  提供内容
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  会社情報
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2025 Yis株式会社</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                特定商取引法表示
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
