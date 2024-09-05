import Test1 from "../assets/img/testimonio-1.webp"
import Test2 from "../assets/img/testimonio-2.webp"
import Test3 from "../assets/img/testimonio-3.webp"
import Test4 from "../assets/img/testimonio-4.webp"
import Test5 from "../assets/img/testimonio-5.webp"
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
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[EffectCoverflow, Autoplay, Navigation]}
                    className="mySwiper testimonies__group"
                >
                    <SwiperSlide className="testimony">
                        <img src={Test1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="testimony">
                        <img src={Test2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="testimony">
                        <img src={Test3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="testimony">
                        <img src={Test4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="testimony">
                        <img src={Test5} alt="" />
                    </SwiperSlide>

                </Swiper>
            </section>

        </>
    )
}

export default Testimonials