'use client';

import { dataContext } from "@/components/fecthApi/Fecth";
import { useContext } from "react";



function Carrito() {

  const { producto } = useContext(dataContext );
  // // Cargar productos desde localStorage al cargar el componente
  // useEffect(() => {
  //   const storedProductos = JSON.parse(localStorage.getItem('carrito')) || [];
  //   setProducto(storedProductos);
  // }, []);

  if (!producto || producto.length === 0) {
    return <div>No hay productos en el carrito.</div>;
  }

  return (
    <div className="flex justify-center items-center flex-wrap gap-4">

      

      {producto.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 border rounded-lg shadow-md flex flex-col justify-between w-[400px] mt-10"
        >
          <div className="text-lg font-semibold mb-2">
            <h2>Precio</h2> ${product.price}
          </div>
          <div className="text-gray-700 mb-2">
            <h2>Descripción:</h2>
            <br /> {product.description}
          </div>
          <div className="text-sm text-gray-500 mb-4">{product.category}</div>
          <div className="h-48 overflow-hidden">
            <img
              src={product.image}
              alt={product.category}
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default Carrito;