import './ubicacion.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function Ubicacion() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

  return (
    <div className="ubicacion-container">
        <h2>Ubicación e Información Extra</h2>
        <div className="map-container">
            <div className='info' data-aos="flip-right">
                <p><strong>Dirección:</strong> Av. Escalada 4320, Ciudad Autónoma de Buenos Aires</p>
                <p><strong>Teléfono:</strong> +54 11 3943-2242</p>
                <p><strong>Email:</strong> info@blacktrainingcenter.com</p>
                <p><strong>Instagram:</strong> @black_trainingcenter</p>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1656908516343!2d-58.45803872350053!3d-34.6757674613082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb6880427d7d%3A0x76abc47df9c4df5e!2sBlackTrainingCenter!5e0!3m2!1ses-419!2sar!4v1772899544128!5m2!1ses-419!2sar" 
                width="50%" 
                height="600" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                data-aos="flip-left"
            ></iframe>
        </div>
    </div>
  )
}

export default Ubicacion