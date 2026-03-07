import './header.css'

function Header({  onAsociateClick, onInicioClick, onAboutUsClick }) {

  return (
    <>
      <div className='header'>
        <a href="/" onClick={(e) => { e.preventDefault(); onInicioClick(); }}>
          <img src="./src/images/logoBTCChicho.png" alt="Logo" className='logoBTC' />
        </a>
        <ul className='navBar'>
          <li onClick={ onInicioClick }>Inicio</li>
          <li onClick={ onAboutUsClick }>Sobre Nosotros</li>
          <li className='asociate' onClick={ onAsociateClick }>
            Asociate
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
