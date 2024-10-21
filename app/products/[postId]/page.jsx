'use client';

import loadPost from "@/app/fecthId/page";
import { dataContext } from "@/components/fecthApi/Fecth";
import Link from "next/link";
import { useContext, useEffect, useState } from "react"; // Importa useState y useEffect
import Image from 'next/image'; // Importa el componente Image

function Favoritos({ params }) {
  const { producto, setProducto } = useContext(dataContext);
  const [post, setPost] = useState(null); // Estado para almacenar el post cargado

  useEffect(() => {
    const handleId = async () => {
      const loadedPost = await loadPost(params.postId);
      setPost(loadedPost); // Actualiza el estado con el post cargado
    };
    handleId();
  }, [params.postId]); // Asegúrate de que se ejecute cada vez que params.postId cambie

  const handleComprar = (post) => {
    setProducto((prevProductos) => [...prevProductos, post]); // Agregar al array de productos
    console.log("este es el carrito", post);
  };

  // Asegúrate de que post esté disponible antes de renderizar
  if (!post) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga si no hay datos
  }

  return (
    <div className="flex justify-center items-center">
      <div
        key={post.id}
        className="bg-white p-4 border rounded-lg shadow-md flex flex-col justify-between w-[300px] mt-10"
      >
        <div className="text-lg font-semibold mb-2">
          <h2>Precio</h2> ${post.price}
        </div>
        <div className="text-gray-700 mb-2">
          <h2>Descripción:</h2>
          <br /> {post.description}
        </div>
        <div className="text-sm text-gray-500 mb-4">{post.category}</div>
        <div className="h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.category}
            className="w-full h-full object-contain rounded"
            width={300} // Ajusta el ancho según sea necesario
            height={300} // Ajusta la altura según sea necesario
          />
        </div>
        <Link href="/">
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Volver
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