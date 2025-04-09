"use client";

import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { plantData } from "../data/plants";
import Header from "../components/Header";

export default function ProductsPage() {
  const { cart, addToCart } = useCart();
  const [cartItemCount, setCartItemCount] = useState(0);

  // Calculate total items in cart
  useEffect(() => {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(count);
  }, [cart]);

  // Group plants by category
  const plantsByCategory = plantData.reduce((acc, plant) => {
    plant.categories.forEach((category) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(plant);
    });
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemCount={cartItemCount} />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {Object.entries(plantsByCategory).map(([category, plants]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plants.map((plant) => (
                <div
                  key={plant.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={plant.image || "placeholder.svg"}
                      alt={plant.name}
                      className="w-full h-48 object-cover"
                    />
                    {plant.onSale && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        SALE
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{plant.name}</h3>
                    <p className="text-green-600 font-bold">${plant.price}</p>
                    <p className="text-sm text-gray-600 mt-2">
                      {plant.description}
                    </p>
                    <button
                      onClick={() => addToCart(plant)}
                      disabled={cart.some((item) => item.id === plant.id)}
                      className={`mt-4 w-full py-2 px-4 rounded ${
                        cart.some((item) => item.id === plant.id)
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700 text-white"
                      }`}
                    >
                      {cart.some((item) => item.id === plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
