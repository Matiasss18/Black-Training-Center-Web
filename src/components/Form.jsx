import './form.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react'
import comunidadImg from '../images/asociacion.jpg'

function Form({ asociateRef }) {

    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        tel: ''
    })

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            nombre: datos.nombre,
            email: datos.email,
            telefono: datos.tel
        };

        emailjs.send(
            'service_q3nxz6k',
            'template_u3tlgsu',
            templateParams,
            'sMGM7iiGIxjKWI6TW'
        )
        .then((response) => {
            console.log('¡ÉXITO!', response.status, response.text);
            alert("Revisá tu casilla de correo, te enviamos la información.");
        }, (err) => {
            console.log('FALLÓ...', err);
        });
    }

  return (
    <div className='main' ref={ asociateRef }>
        <h1 className='title'>Asociate a Black Training Center</h1>
        <div className='form-container'>
            <img src={comunidadImg} alt="Asociación" />
            <div className='formulario' onSubmit={ handleSubmit }>
                <h2>Ingresá tus datos</h2>
                <form className='contenidoFormulario'>
                    <input type="text" name='nombre' placeholder="Nombre Completo" value={ datos.nombre } onChange={ handleChange } required/>
                    <input type="email" name='email' placeholder="Email" value={ datos.email } onChange={ handleChange } required/>
                    <input type="tel" name='tel' placeholder="Teléfono" value={ datos.tel } onChange={ handleChange } required/>
                    <button type="submit">Enviar</button>
                </form>
                <p>Se enviará la información de los planes disponibles</p>
            </div>
        </div>
    </div>
  )
}

export default Form