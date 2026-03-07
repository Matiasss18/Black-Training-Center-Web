import { useState } from 'react'
import { useRef } from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Form from './components/Form'
import BoutUs from './components/BoutUs'
import Footer from './components/Footer'
import './App.css'
import Ubicacion from './components/Ubicacion'
function App() {

  const formRef = useRef(null)
  const aboutUsRef = useRef(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToInicio = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header onAsociateClick={ scrollToForm } onInicioClick={ scrollToInicio } onAboutUsClick={ scrollToAboutUs }/>
      <Slider/>
      <Form asociateRef={ formRef }/>
      <BoutUs aboutUsRef={ aboutUsRef }/>
      <Ubicacion/>
      <Footer/>
    </>
  )
}

export default App
