'use client';

import loadPost from "@/app/fecthId/page";
import { dataContext } from "@/components/fecthApi/Fecth";
import Link from "next/link";
import {  useContext } from "react";

async function Favoritos({ params }) {

  const {producto, setProducto} = useContext(dataContext)



  // // Cargar productos desde localStorage al cargar el componente
  // useEffect(() => {
  //   const storedProductos = JSON.parse(localStorage.getItem('carrito')) || [];
  //   setProducto(storedProductos);
  // }, []);

  const post = await loadPost(params.postId);

  const handleComprar = (post) => {
    setProducto((prevProductos) => [...prevProductos, post]); // Agregar al array de productos
    console.log("este es el carrito", post);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        key={post.id}
        className="bg-white p-4 border rounded-lg shadow-md flex flex-col justify-between w-[300px] mt-10 "
      >
        <div className="text-lg font-semibold mb-2">
          <h2>Precio</h2> ${post.price}
        </div>
        <div className="text-gray-700 mb-2">
          <h2>Descripcion:</h2>
          <br /> {post.description}
        </div>
        <div className="text-sm text-gray-500 mb-4">{post.category}</div>
        <div className="h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.category}
            className="w-full h-full object-contain rounded"
          />
        </div>
        <Link href="/">
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            volver
          </button>
        </Link>
        
          <button onClick={() => handleComprar(post)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Comprar
          </button>
        
      </div>
    </div>
  );
}

export default Favoritos;