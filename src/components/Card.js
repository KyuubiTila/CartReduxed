import { useDispatch } from 'react-redux';
import { add, remove } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const getButtonColor = (color) =>
  `bg-${color}-700  hover:bg-${color}-800 focus:ring-${color}-300 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`;

export const Card = ({ cartItems }) => {
  const products = useSelector((state) => state.cartState.cartList);

  const { brand, description, price, image } = cartItems;
  const dispatch = useDispatch();
  const isAddedToCart =
    products.findIndex(({ id }) => id === cartItems.id) > -1;
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img className="rounded-t-lg" src={image} alt="" />
        </Link>
        <div className="p-5">
          <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {brand}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="flex justify-between">
            <h1>${price}</h1>
            <Link
              to="#"
              className={`inline-flex rounded-lg text-white  items-center px-3 py-2 text-sm font-medium text-center focus:ring-4 focus:outline-none ${getButtonColor(
                isAddedToCart ? 'red' : 'blue'
              )} `}
              onClick={() => {
                isAddedToCart
                  ? dispatch(remove(cartItems))
                  : dispatch(add(cartItems));
              }}
            >
              {isAddedToCart ? 'Remove' : 'Add to cart'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
