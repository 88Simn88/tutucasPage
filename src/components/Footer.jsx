
const Footer = () => {

    return(
        <div className="bg-black text-white py-8 text-center">
        <p className="text-sm">
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