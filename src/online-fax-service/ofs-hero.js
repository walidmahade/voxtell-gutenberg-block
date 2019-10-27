const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/osf-hero", {
    title: __("Online Fax Hero"),
    icon: "edit",
    category: "online-fax",
    keywords: [__("Online"), __("Fax"), __("Service")],
    attributes: {
        text1: {
            type: "string",
            default: "Voxtell vFax"
        },
        text2: {
            type: "string",
            default: "Online fax service simplified"
        },
        text3: {
            type: "string",
            default: "Send and receive secure electronic faxes from anywhere on any device. You're finally free from the fax machine."
        },
        btnLink: {
            type: "string",
            default: "#"
        },
        btnText: {
            type: "Start Your Free Trial",
            default: "Start Free Trial"
        }
    },

    edit: props => {
        const { text2, text1, text3, btnText,btnLink } = props.attributes;
        const { setAttributes } = props;
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleBtnText = btnText => setAttributes({ btnText });
        const handleBtnLink = btnLink => setAttributes({ btnLink });

        return (
            <section className="section" id="ofs-hero">
                <div className="bg-overlay dots-right" />
                <div className="container">
                    <div className="row">
                        <h3 className="title--alt">
                            <RichText value={text1} onChange={handleText1} />
                        </h3>
                        <h2 className="title--sec">
                            <RichText value={text2} onChange={handleText2} />
                        </h2>
                        <p className="para para--subt">
                            <RichText value={text3} onChange={handleText3} />
                        </p>
                        <div className="w-100 center">
                            <span className="btn btn--dark">
                                <RichText value={btnText} onChange={handleBtnText} />
                            </span>
                        </div>
                        <div>
                            <URLInput value={btnLink} onChange={handleBtnLink} />
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { text2, text1, text3, btnText,btnLink } = props.attributes;

        return (
            <section className="section" id="ofs-hero">
                <div className="bg-overlay dots-right" />
                <div className="container">
                    <div className="row">
                        <h3 className="title--alt">
                            <RichText.Content value={text1} />
                        </h3>
                        <h2 className="title--sec">
                            <RichText.Content value={text2} />
                        </h2>
                        <p className="para para--subt">
                            <RichText.Content value={text3} />
                        </p>
                        <div className="w-100 center">
                            <a href={btnLink} className="btn btn--dark">
                                <RichText.Content value={btnText} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
