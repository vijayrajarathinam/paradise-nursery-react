"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "react-feather";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [cartItemCount, setCartItemCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate total items and amount
  useEffect(() => {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const amount = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    setCartItemCount(count);
    setTotalAmount(amount);
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemCount={cartItemCount} />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Link
              to="/products"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              Browse Plants
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">
                Total Cart Amount: ${totalAmount.toFixed(2)}
              </h2>

              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row border-b pb-6"
                  >
                    <div className="md:w-1/4">
                      <img
                        src={item.image || "placeholder.svg"}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded"
                      />
                    </div>
                    <div className="md:w-3/4 md:pl-6 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="text-green-600 font-bold">${item.price}</p>

                      <div className="flex items-center mt-4">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-4">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <p className="font-bold">
                          Total: ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                          aria-label="Delete item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded text-center"
              >
                Continue Shopping
              </Link>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded">
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
