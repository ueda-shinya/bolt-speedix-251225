import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'ページが見つかりません | Speedix';
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <div className="mt-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              ページが見つかりません
            </h2>
            <p className="text-gray-600 text-lg">
              お探しのページは存在しないか、移動または削除された可能性があります。
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            ホームに戻る
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            前のページに戻る
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">お困りですか？</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link to="/speedix-about" className="text-blue-600 hover:underline">
              Speedixについて
            </Link>
            <Link to="/products" className="text-blue-600 hover:underline">
              提供内容
            </Link>
            <Link to="/contact" className="text-blue-600 hover:underline">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
