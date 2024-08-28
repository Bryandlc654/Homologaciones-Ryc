import ImgFaqs from "../assets/img/imagen-3.webp"
import { useInView } from 'react-intersection-observer';

const Faqs = () => {
    const { ref: FaqsMeRef, inView: FaqsMeInView } = useInView({
        threshold: 0,
    });
    return (
        <>
            <section className="faqs">
                <div className="faqs__content container">
                    <figure className={`faqs__figure hidden ${FaqsMeInView ? 'fade-in-left' : 'fade-in'}`}
                        ref={FaqsMeRef}>
                        <img
                            className="img"
                            src={ImgFaqs}
                            alt="Asesor orientando a una persona en una oficina con documentos y una laptop"
                            loading="lazy"
                        />
                    </figure>
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