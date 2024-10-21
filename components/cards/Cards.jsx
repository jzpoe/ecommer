"use client"

import Link from "next/link";
import { dataContext } from "../fecthApi/Fecth";
import { useContext } from "react";

const Cards = () => { // Asegúrate de que esta prop esté presente
  const {dataFetch} = useContext(dataContext);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mx-0 mt-10">
        {dataFetch.map((datos) => (
          <div
            key={datos.id}
            className="bg-white p-4 border rounded-lg shadow-md flex flex-col justify-between"
          >
            
              <div className="text-lg font-semibold mb-2">${datos.price}</div>
              <div className="text-sm text-gray-500 mb-4">{datos.category}</div>
              <div className="h-48 overflow-hidden">
                <img
                  src={datos.image}
                  alt={datos.category}
                  className="w-full h-full object-contain rounded"
                />
              </div>
            
            <Link href={`/products/${datos.id}`} key={datos.id}>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Agregar
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;