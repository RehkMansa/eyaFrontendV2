import React from "react";
import { footerOptions } from "../../components/blocks/Footer";

/* <div key={opt.name} className="col-12">
    <div
        className="alert alert-success contact__msg"
        role="alert"
        style={{ display: "none" }}
    >
        Your message was sent successfully.
    </div>
</div>; */

const ContactDetail = ({ title, content }: { title: string; content: string }) => (
    <p>
        <b>{title} :</b> {content}
    </p>
);

const formOption = [
    {
        col: 12,
        type: "text",
        name: "name",
        placeholder: "Your Name",
    },
    {
        col: 6,
        type: "email",
        name: "email",
        placeholder: "Your Email Address",
    },
    {
        col: 6,
        type: "text",
        name: "phone",
        placeholder: "Your Number",
    },
    {
        col: 12,
        type: "text",
        name: "subject",
        placeholder: "Subject",
    },
];

const ContactUs = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <section className="section-padding2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 animate-box">
                        <h2 className="section-title mb-15">
                            Contact <span>Us</span>
                        </h2>
                    </div>
                </div>
                <div className="row mb-90">
                    <div className="col-md-4 mb-30 animate-box">
                        <p>
                            <b>Contact Details</b>
                        </p>
                        {footerOptions.map(opt => (
                            <ContactDetail key={opt.idx} {...opt} />
                        ))}
                    </div>
                    <div className="col-md-8 animate-box">
                        <p>
                            <b>Contact Form</b>
                        </p>
                        <form onSubmit={handleSubmit} className="contact__form">
                            <div className="row">
                                {formOption.map(opt => (
                                    <div
                                        key={opt.name}
                                        className={`col-md-${opt.col} form-group`}
                                    >
                                        <input {...opt} />
                                    </div>
                                ))}

                                <div className="col-md-12 form-group">
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols={30}
                                        rows={4}
                                        placeholder="Message *"
                                        required
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        name="submit"
                                        type="submit"
                                        value="Send Message"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
