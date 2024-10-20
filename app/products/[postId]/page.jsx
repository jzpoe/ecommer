'use client'
import loadPost from "@/app/fecthId/page";
import Link from "next/link";
import { useRouter } from "next/navigation";




async function Favoritos({ params }) {

  

  const router = useRouter();
  const post = await loadPost(params.postId);

  // if (!post || Object.keys(post).length === 0) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <h2 className="text-xl font-bold text-red-500">
  //         El objeto buscado no existe
  //       </h2>
  //     </div>
  //   );
  // }

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
        
          <button onClick={()=> router.push('/')}  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            volver
          </button>
        
        <Link href="/">
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Comprar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Favoritos;