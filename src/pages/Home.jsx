
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const handleScrollToTop = () => {
    window.scrollTo(0,0)
}

  return (
    <div className="min-h-screen  text-white md:bg-cover bg-center "
    style={{ backgroundImage: 'url("./img/tutukaotro.jpeg")' }}
    >
      {/* Hero Section */}
      <header className="flex flex-col items-center pt-20 text-center h-screen">
        <h1 className="text-4xl md:text-7xl font-bold animate-pulse pt-4">
          La Bestia Cumbiera <br />
          Y La Tutuka Sonidera

        </h1>
       {/*  <p className="mt-4 text-xl md:text-2xl font-medium">
          Ritmo que prende, ¡cumbia que enciende el alma!
        </p> */}
        <Link 
        onClick={handleScrollToTop}
        to={"/musica"}
        className="mt-8 bg-yellow-400 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white hover:scale-110 transition transform duration-300">
          Escuchá Nuestra Música
        </Link>
      </header>

      {/* Próximos Eventos */}
      <section className="bg-gradient-to-br from-yellow-300 via-blue-300 to-red-500 text-black py-16 px-4 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-pulse">
          Próximas Fechas
        </h2>

        <p
        className="text-xl"
        >
          Seguinos en Instagram para enterarte de las últimas novedades!!!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Evento 1 */}
        {/*   <div className="bg-white/30 border border-white/20 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300">
          
          <h3 className="text-2xl font-bold mb-4 text-center font-serif">Cumpleaños</h3>
            <p className="text-lg mb-5">
            Dale vida a tu cumpleaños con la energía única de la cumbia. Te garantizamos un ambiente lleno de diversión y baile, donde todos tus invitados disfrutarán como nunca. ¡Tu día será legendario! 🎉🎵 </p>
            <Link 
            onClick={handleScrollToTop}
             to={"/contacto"}
             className="mt-10 bg-black text-red-500 px-4 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-black transition duration-300">
              Contactanos!
            </Link>  
            
          </div>
            */}

          {/* Evento 2 */}
        {/*   <div className="bg-white/20  border border-white/20 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-center font-serif">Casamientos</h3>
            <p className="text-lg mb-5">
            ¡Convierte tu casamiento en una fiesta inolvidable! Nuestra banda de cumbia llenará de ritmo y alegría tu celebración, haciendo que todos se levanten a bailar y disfruten de una noche mágica. 🎶💍
            </p>
            <Link 
            onClick={handleScrollToTop}
             to={"/contacto"}
             className="mt-10 bg-black text-red-500 px-4 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-black transition duration-300">
              Contactanos!
            </Link> 
          </div> */}

          {/* Evento 3 */}
         {/*  <div className="bg-white/30 border border-white/20 p-6 rounded-xl shadow-lg hover:scale-105 ">
            <h3 className="text-2xl font-bold mb-4 text-center font-serif">Eventos</h3>
            <p className="text-lg mb-5">
            Desde aniversarios hasta eventos corporativos, llevamos la esencia de la cumbia a donde sea necesario. Ritmo, emoción y buena vibra para que tu celebración sea todo un éxito. ¡Nada se compara con nuestra música en vivo! 🎤✨
            </p>
             <Link 
             onClick={handleScrollToTop}
             to={"/contacto"}
             className="mt-10 bg-black text-red-500 px-4 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-black transition duration-300">
              Contactanos!
            </Link> 
          </div> */}
        </div>
      </section>

      
     
    </div>
  );
};

export default Home;
