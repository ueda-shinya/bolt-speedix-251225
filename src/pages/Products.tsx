import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { getActiveProducts } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Products() {
  const products = getActiveProducts();
  const { addToCart, hasCorProduct } = useCart();
  const hasCoreProduct = hasCorProduct();

  useEffect(() => {
    document.title = '提供内容 | Speedix';
  }, []);

  const isCoreProduct = (slug: string) => {
    return slug === 'lp-creation' || slug === 'homepage-production' || slug === 'lp-contact' || slug === 'lp-booking';
  };

  const isOptionProduct = (slug: string) => {
    return !isCoreProduct(slug);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            提供内容
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            お客様のニーズに合わせた最適なソリューションをご用意しています
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-sm transition-all border border-gray-100 overflow-hidden"
              >
                {product.image_url && (
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={product.image_url}
                      alt={product.image_alt || product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">特徴・メリット</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-blue-600">
                          ¥{product.price.toLocaleString()}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">（税込）</span>
                      </div>
                      {isCoreProduct(product.slug) && (
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                          コア商品
                        </span>
                      )}
                      {isOptionProduct(product.slug) && (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                          追加オプション
                        </span>
                      )}
                    </div>

                    {isOptionProduct(product.slug) && !hasCoreProduct && (
                      <div className="mb-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <div className="flex items-start space-x-2">
                          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-amber-800">
                            追加オプションを利用するには、先に「LP制作」または「ホームページ制作」をカートに追加してください。
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-3">
                      <Link
                        to={`/products/${product.slug}`}
                        className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                      >
                        詳細を見る
                      </Link>
                      <button
                        onClick={() => addToCart(product)}
                        disabled={isOptionProduct(product.slug) && !hasCoreProduct}
                        className={`px-6 py-3 rounded-lg font-bold transition-all ${
                          isOptionProduct(product.slug) && !hasCoreProduct
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                        }`}
                      >
                        カートに追加
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
