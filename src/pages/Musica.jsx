

import React from "react";

const Musica = () => {
  // Lista de canciones con título y enlace de YouTube
  const songs = [
    {
      title: "Desde el Oeste (Cumbia)",
      youtubeLink: "https://www.youtube.com/embed/ywMj41lVvoo?si=GO4gfLzTf5uMC26v",
    },
    {
      title: "Traición a la mexicana (Cumbia)",
      youtubeLink: "https://www.youtube.com/embed/w_sh8cHg5h8?si=kOWhIcYkVHN82_xV",
    },
    {
      title: "Negra Ron y Velas",
      youtubeLink: "https://www.youtube.com/embed/RnxbZHUwc0A?si=SVrvWvnmUlXmivZX",
    },
    {
        title: "Pobre corazón",
        youtubeLink: "https://www.youtube.com/embed/5k0TNl5jNcY?si=OogDS0_mJZ3vprHN",
      },
      {
        title: "Cosas que pasan",
        youtubeLink: "https://www.youtube.com/embed/H0TncvmBbv8?si=1tPfpRQrhqi_y8tM",
      },
      {
        title: "Querida",
        youtubeLink: "https://www.youtube.com/embed/0zsXSSZ2_Co?si=Ee2nzXOebjHyLOVG",
      },
      {
        title: "Dios de los pobres",
        youtubeLink: "https://www.youtube.com/embed/GoHCDQKr3No?si=tn9U_zgFWaTzQ1c7",
      },
      {
        title: "Brillarás(Aire de Saya)",
        youtubeLink: "https://www.youtube.com/embed/zo3ggFnbbfA?si=qTEsriavVMQyq64C",
      },
      {
        title: "Mis últimos días (Aire de Huayno)",
        youtubeLink: "https://www.youtube.com/embed/tgMXCTJwyuM?si=Em_e8cm-164YJR2W",
      },
      {
        title: "Ya no sos igual(Aire de carnavalito)",
        youtubeLink: "https://www.youtube.com/embed/x22G8qPBJbU?si=vyUddGm-mYh45TPi",
      },
   
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('./img/tutuka2.jpeg')`, // Cambia esto con la URL de tu imagen de fondo
      }}
    >
      <div className=" bg-opacity-50 min-h-screen flex flex-col items-center py-10 px-5">
        <h1 className="text-4xl font-bold text-white mb-8 text-center pt-20">
          Canciones del Álbum Vol 1 
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {songs.map((song, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-yellow-300 via-blue-300 to-red-500 rounded-2xl shadow-lg p-4 flex flex-col items-center"
            >
              <h2 className="text-lg font-semibold text-black mb-4">
                {song.title}
              </h2>
              <iframe
                width="100%"
                height="200"
                src={song.youtubeLink}
                title={song.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          ))}
        </div>

        <p className="text-4xl pt-5 text-white font-bold">
            También Podés escucharnos en Spotify!!
        </p>
        <a
        target="_blank"
        className="text-white text-3xl pt-4 font-bold"
        href="https://open.spotify.com/intl-es/artist/5hC47fqjdvikID2Bxjduj4?si=hzop0Yt0RLeJJxgT2lDxww">
        La Bestia Cumbiera y la Tutuka Sonidera 🎵</a>
      </div>
    </div>
  );
};

export default Musica;
