import Link from "next/link";
import { useContext } from "react";
import { dataContext } from "../fecthApi/Fecth";

const Navbar = () => {


  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link  href="/" className="text-lg font-bold">
            Home
          </Link>
        </div>
        <div className="flex space-x-4">

          <Link href="/products/carrito">
            🛒
          </Link> 
          <Link href="/about">
            Acerca de
          </Link>
          <Link href="/contact">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;