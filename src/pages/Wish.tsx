
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function WishListPage() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();

  const handleRemove = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Wishlist</h1>
      {state.wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {state.wishlist.map(product => (
            <div key={product.id} className="bg-white p-4 rounded shadow">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-lg font-bold mt-2">₹{product.price}</p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View
                </button>
                <button
                  onClick={() => handleRemove(product.id)}
                  className="bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
