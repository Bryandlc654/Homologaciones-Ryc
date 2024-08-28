import { useEffect, useState } from "react";
import LogoRyc from "../assets/img/logo.webp"
import { useInView } from 'react-intersection-observer';

const Header = () => {
    const { ref: Secc1MeRef, inView: Secc1MeInView } = useInView({
        threshold: 0,
    });

    const { ref: formRef, inView: formInView } = useInView({
        threshold: 0,
    });

    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 40) { 
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={`navbar ${scrolled ? 'navbar_scrolled' : ''}`}>
                <a className="navbar__logo" href="/">
                    <img
                        className="navbar__img"
                        src={LogoRyc}
                        alt="R&C Consultiva Perú"
                    />
                </a>
                <a
                    className="navbar__cta cta heartbeat"
                    href="https://wa.link/2kktk3"
                    rel="noopener noreferrer"
                    target="_blank"
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
                    Asesoría gratuita
                </a>
            </nav>
            <header className="header">
                <div className="img_hero"></div>
                {/* HEADER - NAVBAR */}

                {/* HEADER - HERO */}
                <section className="hero container">
                    <div
                        className={`hero__texts hidden ${Secc1MeInView ? 'fade-in-left ' : 'fade-in'}`}
                        ref={Secc1MeRef}
                    >
                        <p className="hero__guide guide">¿Te solicitaron homologarte?</p>
                        <h1 className="hero__title title">
                            Somos especialistas en{" "}
                            <span className="resalt">Homologación de Proveedores</span>
                        </h1>
                        <p className="hero__paragraph paragraph">
                            Con más de 4 años de experiencia en el mercado peruano, te ofrecemos la
                            gestión completa de tu homologación y estamos contigo hasta la entrega
                            de tu certificación aprobada.
                        </p>
                        <div className="hero__buttons">
                            <div className="hero__buttons-container">
                                <a
                                    className="hero__cta cta pulsate"
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
                                <a className="hero__play" href="#video">
                                    <span className="hero__icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="icon"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                        </svg>
                                    </span>
                                    Ver video
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`hero-form hidden ${formInView ? 'fade-in-right' : ''}`}>
                        <p className="hero-form__title title">
                            Agenda una asesoría <br />{" "}
                            <span className="resalt">¡Totalmente gratis!</span>
                        </p>
                        <form
                            className="hero-form__form"
                            ref={formRef}
                            action="/"
                        >
                            <input
                                className="hero-form__input"
                                type="text"
                                placeholder="Nombres y Apellidos"
                            />
                            <input className="hero-form__input" type="tel" placeholder="Celular" />
                            <input
                                className="hero-form__input"
                                type="email"
                                placeholder="Correo Electrónico"
                            />
                            <input
                                className="hero-form__input"
                                type="text"
                                placeholder="RUC de la empresa"
                            />
                            <input
                                className="cta hero-form__cta"
                                type="submit"
                                defaultValue="Enviar"
                            />
                        </form>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header