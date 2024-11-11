import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-gray-300">
      {/* Ajuste de Grid para garantir responsividade */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-8">
        {/* Primeira coluna (título e ícones) */}
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">GREEN SIGHT</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, est.
          </p>
          <div className="flex justify-between md:w[75%] my-6 ">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>

        {/* Seções de serviços */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h6 className="font-medium text-gray-400">Serviços</h6>
            <ul>
              <li className="py-2 text-sm">lorem</li>
              <li className="py-2 text-sm">lorem</li>
              <li className="py-2 text-sm">lorem</li>
              <li className="py-2 text-sm">lorem</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-400">Serviços</h6>
            <ul>
              <li className="py-2 text-sm">lorem</li>
              <li className="py-2 text-sm">lorem</li>
              <li className="py-2 text-sm">lorem</li>
              <li className="py-2 text-sm">lorem</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-400">Serviços</h6>
            <ul>
              <li className="py-2 text-sm">lorem</li>
              <li className="py-2 text-sm">lorem</li>
              <li className="py-2 text-sm">lorem</li>
              <li className="py-2 text-sm">lorem</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-400">Serviços</h6>
            <ul>
              <li className="py-2 text-sm">lorem</li>
              <li className="py-2 text-sm">lorem</li>
              <li className="py-2 text-sm">lorem</li>
              <li className="py-2 text-sm">lorem</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
