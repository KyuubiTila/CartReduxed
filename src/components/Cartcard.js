import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

import { Link } from 'react-router-dom';

export const Cartcard = ({ cartItems }) => {
  const dispatch = useDispatch();
  const { image, brand, price } = cartItems;
  return (
    <>
      <div className="flex justify-between bg-white border-y-8 rounded-lg overflow-hidden shadow-md">
        <div className="w-20 h-20">
          <Link to="#">
            <img className="rounded-t-lg" src={image} alt="" />
          </Link>
        </div>
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="text-lg font-medium">{`${brand}:`}</h3>
          <span className="text-gray-600 font-medium">${price}</span>
        </div>
        <div className="flex items-center px-4 py-3 border-b">
          <label htmlFor="quantity" className="text-gray-600 font-medium">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="ml-2 w-16 rounded border-gray-400 focus:border-blue-500 focus:outline-none py-1 px-2"
          />
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-gray-600 font-medium">Subtotal:</span>
          <span className="text-gray-800 font-medium">${price}</span>
        </div>
        <div className=" flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ">
          <button
            className="text-center"
            onClick={() => dispatch(remove(cartItems))}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
