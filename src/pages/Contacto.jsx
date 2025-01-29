import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";


const Contacto = () => {

    return(
      
           /*  <div className="min-h-screen  text-white md:bg-cover   " */
         <div className="md:bg-[url('./img/tutuka3.jpeg')] bg-[url('./img/tutuka2.jpeg')]  md:bg-cover  h-screen flex flex-col md:pt-[300px] items-center justify-center">
           {/*  style={{ backgroundImage: 'url("./img/tutuka3.jpeg")' }}
           bg-[url('./img/tutuka5.jpg')]
           */}

<h3 className="md:text-7xl text-4xl shadow font-bold mb-4 text-center font-serif text-black bg-gradient-to-r from-blue-200 via-white to-blue-200 rounded p-4 animate-pulse">¡Contactanos!</h3>
  <p className="text-3xl mb-6 text-black bg-gradient-to-r from-blue-200 via-white to-blue-200 text-center rounded p-4">
    ¡Queremos hacer que tu evento sea inolvidable! <br/> Escribinos por WhatsApp o seguinos en Instagram para conocer más.
  </p>
  
  <div className="flex justify-center gap-6 bg-gradient-to-r from-blue-200 via-white to-blue-200 rounded">
    {/* Icono de Instagram */}
    <a 
      href="https://www.instagram.com/labestiacumbiera/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-red-500 hover:text-red-700 transition duration-300"
    >
     <FaInstagram size={80} />
    </a>

    {/* Icono de WhatsApp */}
    <a 
      href="https://wa.me/+541138192556" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-green-500 hover:text-green-700 transition duration-300"
    >
     <FaWhatsapp size={80}/>
    </a>
  </div>
            
            
              </div>
    )

}

export default Contacto