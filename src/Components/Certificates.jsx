import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';


import Certifcate1 from "../assets/img/certificacion-1.webp"
import Certifcate2 from "../assets/img/certificacion-2.webp"
import Certifcate3 from "../assets/img/certificacion-3.webp"
import Certifcate4 from "../assets/img/certificacion-4.webp"
import Certifcate5 from "../assets/img/certificacion-5.webp"
import Certifcate6 from "../assets/img/certificacion-6.webp"
import Aprobado from "../assets/img/aprobado.webp"
import { useInView } from 'react-intersection-observer';

const Certificates = () => {
    const { ref: CertMeRef, inView: CertMeInView } = useInView({
        threshold: 0,
    });
    return (
        <>
            <section id="clientes" className="certificates">
                <div className='certificates__content container'>
                    <h2 id="carousel-heading" className={`certificates__title title hidden ${CertMeInView ? 'fade-in-top' : 'fade-in'}`} ref={CertMeRef}>
                        <span className="resalt">Clientes</span> Certificados
                    </h2>
                    <section
                        className="splide certificates__carrusel"
                        aria-labelledby="carousel-heading"
                    >
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'2'}
                            loop={true}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[EffectCoverflow, Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='certificates__container-img'>
                                    <img className='certificates__aproved' src={Aprobado} alt='Insignia de aprobado' loading="lazy" />
                                    <img
                                        className="certificates__img"
                                        src={Certifcate1}
                                        alt="Certificado obtenido"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='certificates__container-img'>
                                    <img className='certificates__aproved' src={Aprobado} alt='Insignia de aprobado' loading="lazy" />
                                    <img
                                        className="certificates__img"
                                        src={Certifcate2}
                                        alt="Certificado obtenido"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='certificates__container-img'>
                                    <img className='certificates__aproved' src={Aprobado} alt='Insignia de aprobado' loading="lazy" />
                                    <img
                                        className="certificates__img"
                                        src={Certifcate3}
                                        alt="Certificado obtenido"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='certificates__container-img'>
                                    <img className='certificates__aproved' src={Aprobado} alt='Insignia de aprobado' loading="lazy" />
                                    <img
                                        className="certificates__img"
                                        src={Certifcate4}
                                        alt="Certificado obtenido"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='certificates__container-img'>
                                    <img className='certificates__aproved' src={Aprobado} alt='Insignia de aprobado' loading="lazy" />
                                    <img
                                        className="certificates__img"
                                        src={Certifcate5}
                                        alt="Certificado obtenido"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='certificates__container-img'>
                                    <img className='certificates__aproved' src={Aprobado} alt='Insignia de aprobado' loading="lazy" />
                                    <img
                                        className="certificates__img"
                                        src={Certifcate6}
                                        alt="Certificado obtenido"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </section>
                    <a
                        className="certificates__cta cta pulsate"
                        href="https://wa.link/b0874f"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="WhatsApp de R&C Consultiva Perú"
                    >
                        <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                        Contáctate con un asesor
                    </a>
                </div>
            </section>
        </>
    )
}

export default Certificates