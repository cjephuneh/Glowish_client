// components/ProductCollection.js
const products = [
    { title: 'Beauty of Skin', count: 2, image: '/beauty-category-1.jpg' },
    { title: 'Facial Care', count: 3, image: '/beauty-category-2.jpg' },
    { title: 'Discover Skincare', count: 4, image: '/beauty-category-3.jpg' },
    { title: 'Awesome Lip Care', count: 6, image: '/beauty-category-4.jpg' },
  ];
  
  export default function ProductCollection() {
    return (
      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold text-center mb-6">Choose from our Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="bg-cover bg-center w-full h-[550px] rounded-lg" style={{ backgroundImage: `url(${product.image})` }}></div>
              <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.count} Products</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 mb-7">
          <a href="/products" className="text-indigo-600 font-semibold hover:underline border p-3 border-gray-600">Shop All Products</a>
        </div>
      </div>
    );
  }
  