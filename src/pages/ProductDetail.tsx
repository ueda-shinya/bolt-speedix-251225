import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Zap, AlertCircle } from 'lucide-react';
import { getProductBySlug } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { addToCart, hasCorProduct } = useCart();
  const navigate = useNavigate();
  const hasCoreProduct = hasCorProduct();

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Speedix`;
    }
  }, [product]);

  const isCoreProduct = (slug: string) => {
    return slug === 'lp-creation' || slug === 'homepage-production';
  };

  const isOptionProduct = (slug: string) => {
    return !isCoreProduct(slug);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      navigate('/products');
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">商品が見つかりません</h1>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
            商品一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          商品一覧に戻る
        </Link>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          {product.image_url ? (
            <div className="w-full h-96 overflow-hidden">
              <img
                src={product.image_url}
                alt={product.image_alt || product.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-64 flex items-center justify-center">
              <Zap className="w-32 h-32 text-white opacity-80" />
            </div>
          )}

          <div className="p-8 lg:p-12">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">特徴・導入メリット</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-gray-600 mb-1">価格</p>
                  <span className="text-4xl font-bold text-blue-600">
                    ¥{product.price.toLocaleString()}
                  </span>
                  <span className="text-gray-600 ml-2">（税込）</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              {product && isOptionProduct(product.slug) && !hasCoreProduct && (
                <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-800">
                      追加オプションを利用するには、先に「LP制作」または「ホームページ制作」をカートに追加してください。
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={handleAddToCart}
                disabled={product && isOptionProduct(product.slug) && !hasCoreProduct}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl ${
                  product && isOptionProduct(product.slug) && !hasCoreProduct
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                }`}
              >
                カートに追加する
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            ご購入後、担当者より詳細のご連絡をさせていただきます。
            <br />
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </div>
  );
}
