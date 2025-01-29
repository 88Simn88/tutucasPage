import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa"

const Footer = () => {

    return(
        <div className="bg-black text-white py-8 text-center">
          <div className="flex gap-10 justify-center mb-4">
           
          <a
                    href="https://open.spotify.com/intl-es/artist/5hC47fqjdvikID2Bxjduj4?si=hzop0Yt0RLeJJxgT2lDxww"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-lime-500 transition duration-300"
                >
            <FaSpotify size={50}/>
            </a>

            <a
                    href="http://www.youtube.com/channel/UCAg584ebSCvwZEEPC_sVBrA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-500 transition duration-300"
                >

            <FaYoutube size={50}/>
            </a>

            <a
                    href="https://www.instagram.com/labestiacumbiera/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-lime-500 transition duration-300"
                >
            <FaInstagram size={50}/>
            </a>
          </div>
        <p className="text-sm md:mx-5 mx-5">
          © {new Date().getFullYear()} La Bestia Cumbiera y La Tutuka Sonidera. Todos los derechos reservados.
        </p>
        <p className="pt-4">Coded by <a 
        className="text-lime-500" 
        target="_blank"
        href="https://portfolio-simv3.netlify.app/">Simn</a></p>
      </div>
    )
}

export default Footer 