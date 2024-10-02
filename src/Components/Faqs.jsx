import PosterVideo from "../assets/img/poster-video.webp";
import VideoA from "../assets/video/video.webm";
import VideoB from "../assets/video/video.mp4";
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';

const Faqs = () => {
    const { ref: FaqsMeRef, inView: FaqsMeInView } = useInView({
        threshold: 0,
    });

    const videoRef = useRef(null); // Referencia al video
    const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar la reproducción

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <>
            <section className="faqs">
                <div className="faqs__content container">
                    <div className="faqs__contact">
                        <h2 className="faqs__title title">
                            Accede a mejores <span className="resalt">Clientes</span>
                        </h2>
                        <p className="faqs__guide guide">¡Homologando tu empresa!</p>
                        <a
                            className="faqs__cta cta pulsate"
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
                        <div id="video" className="video">
                            <video
                                id="video-html"
                                className="video__player"
                                poster={PosterVideo}
                                preload="none"
                                ref={videoRef} // Asociar el video a la referencia
                                onPlay={() => setIsPlaying(true)} // Actualizar el estado cuando se reproduce
                                onPause={() => setIsPlaying(false)} // Actualizar el estado cuando se pausa
                            >
                                <source src={VideoA} type="video/webm" />
                                <source src={VideoB} type="video/mp4" />
                            </video>
                            {!isPlaying && (
                                <button 
                                    id="play" 
                                    className="video__btn" 
                                    title="Reproducir video"
                                    onClick={handlePlayPause} // Añadir evento de clic
                                >
                                    <div className="video__btn-border">
                                        <div className="video__btn-background">
                                            <svg
                                                className="video__btn-icon"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            )}
                            {isPlaying && (
                                <button 
                                    id="pause" 
                                    className="video__btn" 
                                    title="Pausar video"
                                    onClick={handlePlayPause} // Añadir evento de clic
                                >
                                    <div className="video__btn-border">
                                        <div className="video__btn-background">
                                            <svg
                                                className="video__btn-icon"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M5.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h1zm6 0a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h1z" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>  
                    <div className={`faqs__texts hidden ${FaqsMeInView ? 'fade-in-right' : 'fade-in'}`}
                        ref={FaqsMeRef}>
                        <h2 className="faqs__title title">
                            <span className="resalt">Preguntas Frecuentes</span>
                        </h2>
                        <div className="faqs__group">
                            <details className="faq" name="faq">
                                <summary className="faq__title">
                                    ¿Qué requisitos debo cumplir para homologar mi empresa?
                                </summary>
                                <p className="faq__paragraph paragraph">
                                    Para homologar, solo necesitas que tu empresa figure en SUNAT como
                                    ACTIVA, tener al menos 3 meses de formalizada y llevar en orden la
                                    parte contable. Por lo demás RYC Consultiva se encarga de la gestión
                                    y elaboración de todos los documentos.
                                </p>
                            </details>
                            <details className="faq" name="faq">
                                <summary className="faq__title">
                                    ¿Cuánto tiempo demora el proceso de homologación?
                                </summary>
                                <p className="faq__paragraph paragraph">
                                    El promedio de duración de un proceso de homologación es de 1 mes,
                                    donde se realiza la documentación, se presenta al sistema de la
                                    certificadora y finalmente se lleva la auditoría para la aprobación
                                    de la certificación.
                                </p>
                            </details>
                            <details className="faq" name="faq">
                                <summary className="faq__title">
                                    ¿Cuál es la diferencia entre la homologación a cuenta propia y a
                                    pedido?
                                </summary>
                                <p className="faq__paragraph paragraph">
                                    La homologación a cuenta propia ocurre cuando la empresa decide
                                    homologarse por su cuenta. En cambio, la homologación a pedido se da
                                    cuando uno de los clientes solicita a la empresa homologarse para
                                    aceptarla como proveedor, generalmente mediante un correo o carta de
                                    invitación.
                                </p>
                            </details>
                            <details className="faq" name="faq">
                                <summary className="faq__title">
                                    ¿Cuánto tiempo de vigencia tiene un certificado de homologación?
                                </summary>
                                <p className="faq__paragraph paragraph">
                                    Una vez emitido, el certificado tiene una vigencia de 1 año. Pasado
                                    este plazo, deberá renovarse y repetir el proceso de homologación.
                                    No existe un certificado de homologación sin fecha de vencimiento;
                                    sin embargo, algunas homologaciones a pedido pueden tener una
                                    vigencia de hasta 3 años, dependiendo del puntaje obtenido en la
                                    certificación.
                                </p>
                            </details>
                            <details className="faq" name="faq">
                                <summary className="faq__title">
                                    ¿Es lo mismo una certificación ISO que una homologación de
                                    proveedores?
                                </summary>
                                <p className="faq__paragraph paragraph">
                                    No, no es lo mismo. La certificación ISO es una evaluación de un
                                    solo aspecto de tu empresa, como calidad, SST, medioambiental, u
                                    otro, dependiendo de la norma en la que desees certificarte. En
                                    cambio, la homologación a pedido es una evaluación integral que
                                    abarca varios aspectos de tu empresa: calidad, SST, medioambiental,
                                    contable, legal, comercial, entre otros.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Faqs