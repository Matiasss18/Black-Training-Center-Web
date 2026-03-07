import './boutUs.css'
import { FaDumbbell, FaHeartbeat, FaUsers } from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';

function BoutUs( { aboutUsRef } ) {

    const items = [
    {
      id: 1,
      icono: <FaDumbbell className="icono-fitness" />,
      titulo: "Entrenamiento Serio",
    },
    {
      id: 2,
      icono: <GiMuscleUp className="icono-fitness" />,
      titulo: "Fuerza y Potencia",
      descripcion: "Programas diseñados para maximizar tu rendimiento físico real."
    },
    {
      id: 3,
      icono: <FaHeartbeat className="icono-fitness" />,
      titulo: "Salud Integral",
    },
        {
      id: 4,
      icono: <FaUsers className="icono-fitness" />,
      titulo: "Comunidad BTC",
    }
  ];

  return (
    <div className="boutUs" ref={ aboutUsRef }>
        <div className="mainContainer">
            <h1>¿Quiénes somos?</h1>
            <div className='contenedor'>
                <p>Somos un equipo de profesionales apasionados y certificados, dedicados a brindar una educación de calidad en el área del entrenamiento físico. Nuestro objetivo no es solo ayudarte a alcanzar tus metas estéticas, sino transformar tu estilo de vida a través de una planificación seria, técnica y personalizada para cada nivel.</p>
                <div className='iconos-grid'>
                    {items.map((item) => (
                        <div key={item.id} className='icono-item'>
                            <div className="icono-container">
                                {item.icono}
                            </div>
                            <h3>{item.titulo}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BoutUs
