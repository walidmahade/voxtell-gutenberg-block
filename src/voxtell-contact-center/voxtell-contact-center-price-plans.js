const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/voxtell-contact-center-pricing", {
    title: __( "VoxTell contact-center-pricing" ),
    icon: "edit",
    category: "what-we-do",
    keywords: [ __( "Contact" ), __( "Center" ), __("Pricing") ],
    attributes: {
        text1: {
            type: "string",
            default: "Plans And pricing"
        },
        text2: {
            type: "string",
            default: "Voxtell Call Center Plan"
        },
        text3: {
            type: "string",
            default: "$19.95"
        },
        text4: {
            type: "string",
            default: "per agent<br/>per month"
        },
        btnText1: {
            type: "string",
            default: "Get Pricing"
        },
        btnLink1: {
            type: "string",
            default: "#"
        }
    },
    edit: props => {
        const { text1, text2, text3, text4, btnText1, btnLink1 } = props.attributes;
        const {setAttributes} = props;
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });

        const handleBtnText1 = btnText1 => setAttributes({ btnText1 });
        const handleBtnLink1 = btnLink1 => setAttributes({ btnLink1 });

        return(
            <section id="vcc-price-plans" className="section">
                <div className="bg-overlay dots-left" />
                <div className="container">
                    <div className="row">
                        <h2 className="title--sec">
                            <RichText value={text1} onChange={handleText1} />
                        </h2>
                    </div>
                    <div className="row vb-price-boxes-row">
                        <div className="vb-price-box">
                            <div className="box">
                                <h4 className="title--alt"><RichText value={text2} onChange={handleText2} /></h4>
                                <h1 className="title--big center">
                                    <RichText value={text3} onChange={handleText3} />
                                </h1>
                                <p className="para center">
                                    <RichText value={text4} onChange={handleText4} />
                                </p>
                                <div className="cta center">
                                    <span className="btn btn--dark">
                                        <RichText value={btnText1} onChange={handleBtnText1} />
                                    </span>
                                </div>
                                <URLInput value={btnLink1} onChange={handleBtnLink1} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    },
    save: props => {
        const { text1, text2, text3, text4, btnText1, btnLink1 } = props.attributes;

        return(
            <section id="vcc-price-plans" className="section">
                <div className="bg-overlay dots-left" />
                <div className="container">
                    <div className="row">
                        <h2 className="title--sec">
                            <RichText.Content value={text1} />
                        </h2>
                    </div>
                    <div className="row vb-price-boxes-row">
                        <div className="vb-price-box">
                            <div className="box">
                                <h4 className="title--alt"><RichText.Content value={text2} /></h4>
                                <h1 className="title--big center">
                                    <RichText.Content value={text3} />
                                </h1>
                                <p className="para center">
                                    <RichText.Content value={text4} />
                                </p>
                                <div className="cta center">
                                    <a href={btnLink1} className="btn btn--dark">
                                        <RichText.Content value={btnText1} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
