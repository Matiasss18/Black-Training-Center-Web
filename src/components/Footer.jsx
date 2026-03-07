import './footer.css'
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
       <img src="./src/images/logoBTCChicho.png" alt="Logo" />
        <p>© 2024 Black Training Center. Todos los derechos reservados.</p>
        <div className='redes'>
            <FaInstagram />
            <a href="https://www.instagram.com/black_trainingcenter/" target="_blank" rel="noopener noreferrer">black_trainingcenter</a>
        </div>
    </div>
  )
}

export default Footer