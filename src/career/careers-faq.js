const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks, URLInput } = wp.editor;

registerBlockType("cgb/careers-faq", {
    title: __("Careers FAQ"),
    icon: "edit",
    category: "careers-page-blocks",
    keywords: [__("Careers"), __("FAQ")],
    attributes: {
        text1: {
            type: "string",
            default: "Marketing & graphics"
        },
        text2: {
            type: "string",
            default:
                "Marketing & Graphics We’re always looking for someone who is ambitious, honest, proactive, positive, innovative, and has an insatiable appetite for success to join our team.Send us your info and we will get back to you.🙂 Good Luck!"
        },
        btnText: {
            type: "string",
            default: "Join the team"
        },
        btnLink: {
            type: "string",
            default: "#careers-apply"
        }
    },

    edit: props => {
        const { text1, text2, btnText, btnLink } = props.attributes;
        const { setAttributes } = props;

        const handleT1 = text1 => setAttributes({ text1 });
        const handleT2 = text2 => setAttributes({ text2 });
        const setBtnUrl = btnLink => setAttributes({ btnLink });
        const updateBtnText = btnText => setAttributes({ btnText });

        const handleAccdnToggle = e => {
            // console.log(e.target);
            // console.log(e.currentTarget);
            // const accdnItems = document.querySelectorAll(".accdn__item");
            const accdnTitle = document.querySelectorAll(".accdn__title");

            e.currentTarget.parentNode.classList.toggle("accdn__item--active");

            accdnTitle.forEach(function(item) {
                if (item != e.currentTarget) {
                    item.parentNode.classList.remove("accdn__item--active");
                }
            });
        };

        return (
            <section id="careers-faq">
                <div className="container">
                    <div className="row">
                        <div className="accdn">
                            <div className="accdn__item accdn__item--active">
                                <h3 className="accdn__title" onClick={handleAccdnToggle}>
                                    <span>
                                        <RichText value={text1} onChange={handleT1}/>
                                    </span>
                                    <span className="icon icon--closed">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.09 27.31"><defs><style>{`.cls-1 { fill: url(#linear-gradient); }`}</style><linearGradient id="linear-gradient" y1="13.65" x2="47.09" y2="13.65" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbb615"></stop><stop offset="1" stop-color="#cb2d2c"></stop></linearGradient></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M47.09,3.07,43.94,0,23.55,21,3.16,0,0,3.07,23.55,27.31Z"></path></g></g></svg>
                                    </span>
                                    <span className="icon icon--open">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.09 27.31"><defs><style>{`.cls-1 { fill: url(#linear-gradient); }`}</style><linearGradient id="linear-gradient" x1="-1220" y1="13.65" x2="-1172.91" y2="13.65" gradientTransform="translate(-1172.91 27.31) rotate(180)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbb615"></stop><stop offset="1" stop-color="#cb2d2c"></stop></linearGradient></defs><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M0,24.24l3.15,3.07,20.39-21,20.39,21,3.16-3.07L23.54,0Z"></path></g></g></svg>
                                    </span>
                                </h3>

                                <div className="accdn__body">
                                    <div className="accdn__body__wrap">
                                        <p className="para">
                                            <RichText value={text2} onChange={handleT2}/>
                                        </p>

                                        <button className="btn">
                                            <RichText value={btnText} onChange={updateBtnText}/>
                                        </button>

                                        <URLInput value={btnLink} onChange={setBtnUrl}/>
                                    </div>
                                </div>
                            </div>

                            <InnerBlocks
                                allowedBlocks={["cgb/accordion-item"]}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { text1, text2, btnText, btnLink } = props.attributes;

        return (
            <section id="careers-faq">
                <div className="container">
                    <div className="row">
                        <div className="accdn">
                            <div className="accdn__item accdn__item--active">
                                <h3 className="accdn__title">
                                    <span>
                                        <RichText.Content value={text1} />
                                    </span>
                                    <span className="icon icon--closed">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.09 27.31"><defs><style>{`.cls-1 { fill: url(#linear-gradient); }`}</style><linearGradient id="linear-gradient" y1="13.65" x2="47.09" y2="13.65" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbb615"></stop><stop offset="1" stop-color="#cb2d2c"></stop></linearGradient></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M47.09,3.07,43.94,0,23.55,21,3.16,0,0,3.07,23.55,27.31Z"></path></g></g></svg>
                                    </span>
                                    <span className="icon icon--open">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.09 27.31"><defs><style>{`.cls-1 { fill: url(#linear-gradient); }`}</style><linearGradient id="linear-gradient" x1="-1220" y1="13.65" x2="-1172.91" y2="13.65" gradientTransform="translate(-1172.91 27.31) rotate(180)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbb615"></stop><stop offset="1" stop-color="#cb2d2c"></stop></linearGradient></defs><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M0,24.24l3.15,3.07,20.39-21,20.39,21,3.16-3.07L23.54,0Z"></path></g></g></svg>
                                    </span>
                                </h3>

                                <div className="accdn__body center">
                                    <div className="accdn__body__wrap">
                                        <p className="para">
                                            <RichText.Content value={text2} />
                                        </p>
                                        <a href={btnLink} className="btn">
                                            <RichText.Content value={btnText} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
