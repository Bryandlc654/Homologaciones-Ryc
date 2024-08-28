import logoBureauVeritas from '../assets/img/logo-bureau-veritas.webp';
import logoMega from '../assets/img/logo-mega.webp';
import logoHodelpe from '../assets/img/logo-hodelpe.webp';
import logoSGS from '../assets/img/logo-sgs.webp';
import logoCial from '../assets/img/logo-cial.webp';
import logoIcontec from '../assets/img/logo-icontec.webp';
import logoAchilles from '../assets/img/logo-achilles.webp';
import { useInView } from 'react-intersection-observer';


const Companies_slide = () => {
    const { ref: ComslideMeRef, inView: ComslideMeInView } = useInView({
        threshold: 0,
    });
    return (
        <>
            <section className="companies container">
                <h2 className={`companies__title title title hidden ${ComslideMeInView ? 'fade-in-top' : 'fade-in'}`} ref={ComslideMeRef}>
                    Certificadoras con las que <br /> <span className="resalt">Trabajamos</span>
                </h2>
                <div className="companies__group">
                    <div className="companies__slide">
                        <img
                            className="companies__img"
                            src={logoBureauVeritas}
                            alt="Logo de Bureau Veritas"
                            title="Logo de Bureau Veritas"
                            loading="lazy"
                        />
                        <img
                            className="companies__img"
                            src={logoMega}
                            alt="Logo de Mega"
                            title="Logo de Mega"
                            loading="lazy"
                        />
                        <img
                            className="companies__img"
                            src={logoHodelpe}
                            alt="Logo de Hodelpe"
                            title="Logo de Hodelpe"
                            loading="lazy"
                        />
                        <img
                            className="companies__img"
                            src={logoSGS}
                            alt="Logo de SGS"
                            title="Logo de SGS"
                            loading="lazy"
                        />
                        <img
                            className="companies__img"
                            src={logoCial}
                            alt="Logo de Cial dun & bradstreet"
                            title="Logo de Cial dun & bradstreet"
                            loading="lazy"
                        />
                        <img
                            className="companies__img"
                            src={logoIcontec}
                            alt="Logo de Icontec"
                            title="Logo de Icontec"
                            loading="lazy"
                        />
                        <img
                            className="companies__img"
                            src={logoAchilles}
                            alt="Logo de Achilles"
                            title="Logo de Achilles"
                            loading="lazy"
                        />
                    </div>
                    <div className="companies__slide">
                        <img
                            className="companies__img"
                            src={logoBureauVeritas}
                            alt="Logo de Bureau Veritas"
                            title="Logo de Bureau Veritas"
                            loading="lazy"
                        />
                        <img
                            className="companies__img"
                            src={logoMega}
                            alt="Logo de Mega"
                            title="Logo de Mega"
                            loading="lazy"
                        />
                        <img
                            className="companies__img"
                            src={logoHodelpe}
                            alt="Logo de Hodelpe"
                            title="Logo de Hodelpe"
                            loading="lazy"
                        />
                        <img
                            className="companies__img"
                            src={logoSGS}
                            alt="Logo de SGS"
                            title="Logo de SGS"
                            loading="lazy"
                        />
                        <img
                            className="companies__img"
                            src={logoCial}
                            alt="Logo de Cial dun & bradstreet"
                            title="Logo de Cial dun & bradstreet"
                            loading="lazy"
                        />
                        <img
                            className="companies__img"
                            src={logoIcontec}
                            alt="Logo de Icontec"
                            title="Logo de Icontec"
                            loading="lazy"
                        />
                        <img
                            className="companies__img"
                            src={logoAchilles}
                            alt="Logo de Achilles"
                            title="Logo de Achilles"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Companies_slide;