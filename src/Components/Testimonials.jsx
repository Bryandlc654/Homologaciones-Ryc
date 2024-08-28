import Client1 from "../assets/img/imagen-2.webp"
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

const Testimonials = () => {
    const { ref: TesMeRef, inView: TesMeInView } = useInView({
        threshold: 0,
    });
    return (
        <>
            <section className="testimonies container">
                <div className={`testimonies__texts hidden ${TesMeInView ? 'fade-in-top' : 'fade-in'}`}
                    ref={TesMeRef}>
                    <p className="guide">Testimonios</p>
                    <h2 className="testimonies__title title">
                        <span className="resalt">Nuestros Clientes</span> <br /> nos respaldan
                    </h2>
                </div>
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
                    modules={[EffectCoverflow, Autoplay, Navigation]}
                    className="mySwiper testimonies__group"
                >
                    <SwiperSlide className="testimony">
                        <svg
                            className="testimony__quote"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                        </svg>
                        <p className="testimony__paragraph paragraph">
                            Lorem ipsum dolor sit amet consectetur. Eleifend fermentum nulla aliquam
                            nisl ut enim.{" "}
                        </p>
                        <div className="testimony__user">
                            <div className="testimony__image">
                                <img
                                    src={Client1}
                                    alt="Foto de perfil del Usuario Lorem Ipsum"
                                    loading="lazy"
                                />
                            </div>
                            <div className="testimony__data">
                                <p className="testimony__name">Lorem Ipsum</p>
                                <p className="testimony__company">Empresa</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="testimony">
                        <svg
                            className="testimony__quote"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                        </svg>
                        <p className="testimony__paragraph paragraph">
                            Lorem ipsum dolor sit amet consectetur. Eleifend fermentum nulla aliquam
                            nisl ut enim.{" "}
                        </p>
                        <div className="testimony__user">
                            <div className="testimony__image">
                                <img
                                    src={Client1}
                                    alt="Foto de perfil del Usuario Lorem Ipsum"
                                    loading="lazy"
                                />
                            </div>
                            <div className="testimony__data">
                                <p className="testimony__name">Lorem Ipsum</p>
                                <p className="testimony__company">Empresa</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="testimony">
                        <svg
                            className="testimony__quote"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                        </svg>
                        <p className="testimony__paragraph paragraph">
                            Lorem ipsum dolor sit amet consectetur. Eleifend fermentum nulla aliquam
                            nisl ut enim.{" "}
                        </p>
                        <div className="testimony__user">
                            <div className="testimony__image">
                                <img
                                    src={Client1}
                                    alt="Foto de perfil del Usuario Lorem Ipsum"
                                    loading="lazy"
                                />
                            </div>
                            <div className="testimony__data">
                                <p className="testimony__name">Lorem Ipsum</p>
                                <p className="testimony__company">Empresa</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="testimony">
                        <svg
                            className="testimony__quote"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                        </svg>
                        <p className="testimony__paragraph paragraph">
                            Lorem ipsum dolor sit amet consectetur. Eleifend fermentum nulla aliquam
                            nisl ut enim.{" "}
                        </p>
                        <div className="testimony__user">
                            <div className="testimony__image">
                                <img
                                    src={Client1}
                                    alt="Foto de perfil del Usuario Lorem Ipsum"
                                    loading="lazy"
                                />
                            </div>
                            <div className="testimony__data">
                                <p className="testimony__name">Lorem Ipsum</p>
                                <p className="testimony__company">Empresa</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

        </>
    )
}

export default Testimonials