import { Cartcard } from '../components';
import { useSelector } from 'react-redux';
export const Cart = () => {
  const products = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);
  return (
    <div>
      <section>
        <h1 className="p-4 mb-4 text-2xl text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
          Cart Items : {products.length} / ${total}
        </h1>
        <div>
          {products.map((cartItems) => (
            <Cartcard key={cartItems.id} cartItems={cartItems} />
          ))}
        </div>
      </section>
    </div>
  );
};
