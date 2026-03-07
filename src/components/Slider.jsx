import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slide1 from '../images/slide1.jpg';
import slide2  from '../images/slide2.jpg';
import slide3  from '../images/slide3.jpg';
import slide4  from '../images/slide4.jpg';
import slide5  from '../images/slide5.jpg';
import slide6  from '../images/slide6.jpg';
import slide7  from '../images/slide7.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';

const slidesData = [
    { image: slide1, title: 'Entrenamiento 1' },
    { image: slide2, title: 'Entrenamiento 2' },
    { image: slide3, title: 'Entrenamiento 3' },
    { image: slide4, title: 'Entrenamiento 4' },
    { image: slide5, title: 'Entrenamiento 5' },
    { image: slide6, title: 'Entrenamiento 6' },
    { image: slide7, title: 'Entrenamiento 7' }
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