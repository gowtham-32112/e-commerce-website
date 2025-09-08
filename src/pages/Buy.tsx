import { useLocation, useNavigate } from 'react-router-dom';

export default function BuyPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Product Found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
          </div>

          {/* Product Summary */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>

            <div className="text-3xl font-bold text-green-700">
              ₹{product.price.toLocaleString('en-IN')}
            </div>

            {/* Payment Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Select Payment Option</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-3">
                  <input type="radio" name="payment" value="card" className="form-radio" />
                  <span>Credit/Debit Card</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="radio" name="payment" value="netbanking" className="form-radio" />
                  <span>Net Banking</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="radio" name="payment" value="upi" className="form-radio" />
                  <span>UPI</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="radio" name="payment" value="cod" className="form-radio" />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>

            {/* Proceed Button */}
            <button
              onClick={() => alert('Order placed successfully!')}
              className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}