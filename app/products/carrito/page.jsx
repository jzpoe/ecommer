"use client";
import { Store } from "@/components/utils/Store";
import { useContext } from "react";

function Carrito() {
  const { state } = useContext(Store); // Correcto uso de useContext

  return (
    <div>
      <h1>Tus compras</h1>
      {state.cart.cartItems.length > 0 ? (
        state.cart.cartItems.map((carr) => (
          <div
            key={carr.id}
            className="bg-white p-4 border rounded-lg shadow-md flex flex-col justify-between"
          >
            <div className="text-lg font-semibold mb-2">${carr.price}</div>
            <div className="text-sm text-gray-500 mb-4">cantidad: {carr.quantity}</div>
            <div className="h-48 overflow-hidden">
              <img
                src={carr.image}
                alt={carr.category}
                className="w-full h-full object-contain rounded"
              />
            </div>
          </div>
        ))
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
}

export default Carrito;