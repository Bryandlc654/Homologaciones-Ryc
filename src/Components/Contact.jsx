import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { ref: ContactMeRef, inView: ContactMeInView } = useInView({
        threshold: 0,
    });

    return (
        <>
            <section className="contact">
                <div className="contact__content container">
                    <div className={`contact__texts hidden ${ContactMeInView ? 'fade-in-top' : 'fade-in'}`}
                        ref={ContactMeRef}>
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
