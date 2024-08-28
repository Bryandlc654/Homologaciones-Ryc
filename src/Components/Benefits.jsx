import { useEffect, useState } from 'react';
import fondoMapa from '../assets/img/fondo-mapa.webp';
import imagen3 from '../assets/img/imagen-3.webp';
import hero from '../assets/img/hero.webp';
import imagen2 from '../assets/img/imagen-2.webp';
import imagen5 from '../assets/img/imagen-5.webp';
import imagen7 from '../assets/img/imagen-7.webp';
import imagen6 from '../assets/img/imagen-6.webp';
import imagenBeneficio1 from '../assets/img/imagen-beneficio-1.webp';
import imagenBeneficio2 from '../assets/img/imagen-beneficio-2.webp';
import imagenBeneficio3 from '../assets/img/imagen-beneficio-3.webp';
import imagenBeneficio4 from '../assets/img/imagen-beneficio-4.webp';
import imagenBeneficio5 from '../assets/img/imagen-beneficio-5.webp';
import imagenBeneficio6 from '../assets/img/imagen-beneficio-6.webp';
import { useInView } from 'react-intersection-observer';

const Benefits = () => {
    const [activeBenefit, setActiveBenefit] = useState(0);

    const { ref: BenefitMeRef, inView: BenefitMeInView } = useInView({
        threshold: 0,
    });

    const benefits = [
        {
            imgBackground: imagen3,
            imgBenefit: imagenBeneficio1,
            text: 'Elaboración de toda la documentación necesaria.',
        },
        {
            imgBackground: hero,
            imgBenefit: imagenBeneficio2,
            text: 'Diagnostico de la empresa e implementación.',
        },
        {
            imgBackground: imagen2,
            imgBenefit: imagenBeneficio3,
            text: 'Acompañamiento al afrontar auditoria.',
        },
        {
            imgBackground: imagen5,
            imgBenefit: imagenBeneficio4,
            text: 'Asesoria integral los 360 días del año.',
        },
        {
            imgBackground: imagen7,
            imgBenefit: imagenBeneficio5,
            text: 'Soporte y elaboración de evidencias.',
        },
        {
            imgBackground: imagen6,
            imgBenefit: imagenBeneficio6,
            text: 'Te garantizamos la aprobación de tu homologacion.',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBenefit((prev) => (prev + 1) % benefits.length);
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval);
    }, [benefits.length]);

    return (
        <section className="benefits">
            <div className="benefits__background">
                <img
                    className="img"
                    src={fondoMapa}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                    role="presentation"
                />
            </div>
            <div className="benefits__content container">
                <h2 className={`companies__title title hidden ${BenefitMeInView ? 'fade-in-top' : 'fade-in'}`}
                        ref={BenefitMeRef}>
                    ¿Qué te <span className="resalt">ofrecemos?</span>
                </h2>
                <div className="benefits__group">
                    {benefits.map((benefit, index) => (
                        <article
                            key={index}
                            className={`benefit ${activeBenefit === index ? 'active' : ''}`}
                        >
                            <div className="benefit__background">
                                <img
                                    className="img"
                                    src={benefit.imgBackground}
                                    alt=""
                                    loading="lazy"
                                    aria-hidden="true"
                                    role="presentation"
                                />
                            </div>
                            <div className="benefit__container-img">
                                <img
                                    className="benefit__img"
                                    src={benefit.imgBenefit}
                                    loading="lazy"
                                    alt={`Imagen de referencia beneficio ${index + 1}`}
                                />
                            </div>
                            <p className="benefit__paragraph paragraph">
                                {benefit.text}
                            </p>
                        </article>
                    ))}
                </div>
                <a
                    className="benefits__cta cta pulsate"
                    href="https://wa.link/2kktk3"
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
    );
};

export default Benefits;
