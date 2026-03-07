import { Swiper, SwiperSlide } from 'swiper/react';
// Importamos los módulos desde la ruta correcta para Vite/Swiper 11
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Estilos obligatorios de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';

const slidesData = [
    { image: './src/images/slide1.jpg', title: 'Entrenamiento 1' },
    { image: './src/images/slide2.jpg', title: 'Entrenamiento 2' },
    { image: './src/images/slide3.jpg', title: 'Entrenamiento 3' },
    { image: './src/images/slide4.jpg', title: 'Entrenamiento 4' },
    { image: './src/images/slide5.jpg', title: 'Entrenamiento 5' },
    { image: './src/images/slide6.jpg', title: 'Entrenamiento 6' },
    { image: './src/images/slide7.jpg', title: 'Entrenamiento 7' }
];

function Slider() {
    return (
        <div className='container'>
            <div className='swiperContainer'>
                <Swiper
                    // Instalamos los módulos que vamos a usar
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true} // Hace que el slider sea infinito
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true, // Puntitos que cambian de tamaño
                    }}
                    navigation={true} // Flechas laterales (opcional)
                    className="mySwiper"
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.image} alt={slide.title || 'Slide'} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Slider;