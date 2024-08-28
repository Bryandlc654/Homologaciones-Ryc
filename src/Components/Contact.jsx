import PosterVideo from "../assets/img/poster-video.webp";
import VideoA from "../assets/video/video.webm";
import VideoB from "../assets/video/video.mp4";
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';

const Contact = () => {
    const { ref: ContactMeRef, inView: ContactMeInView } = useInView({
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
            <section className="contact">
                <div className="contact__content container">
                    <div className={`contact__texts hidden ${ContactMeInView ? 'fade-in-top' : 'fade-in'}`}
                        ref={ContactMeRef}>
                        <h2 className="contact__title title">
                            Accede a mejores clientes <br />{" "}
                            <span className="resalt">con una Homologación de proveedores</span>
                        </h2>
                        <p className="guide">Dale click para mayor información</p>
                        <a
                            className="contact__cta cta pulsate"
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
            </section>
        </>
    );
};

export default Contact;
