import { Card } from '../components';
import { items } from '../components';
import { useSelector } from 'react-redux';

export const Home = () => {
  const products = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);
  return (
    <div>
      <h1 className="p-4 mb-4 text-2xl text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
        Cart Items : {products.length} / ${total}
      </h1>
      <section className="max-w-7xl mx-auto p-7">
        <div className="flex space-x-4 space-y-4 justify-start flex-wrap other:justify-evenly">
          {items.map((cartItems) => (
            <Card key={cartItems.id} cartItems={cartItems} />
          ))}
        </div>
      </section>
    </div>
  );
};
