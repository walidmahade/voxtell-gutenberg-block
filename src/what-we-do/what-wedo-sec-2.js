const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/what-we-do-sec-2", {
    title: __("What we do section 2"),
    icon: "edit",
    category: "what-we-do",
    keywords: [__("What"), __("We"), __("Do")],
    attributes: {
        text1: {
            type: "string",
            default: "We guarantee that you will be delighted with your new voxtell solution"
        },
        text2: {
            type: "string",
            default: "That’s Why We Offer a Risk-Free 30 Day Trial."
        },
        btnText1: {
            type: "string",
            default: "get started"
        },
        btnLink1: {
            type: "string",
            default: "#"
        },
        icon1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/medal.png"
        },
        icon2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/badge_new.png"
        },
        icon3: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/customer-service.png"
        },
        icon4: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/credit-card.png"
        },
        icon1Text1: {
            type: "string",
            default: "Experience the Best in Call Quality"
        },
        icon1Text2: {
            type: "string",
            default: "We route our traffic through only high-quality channels."
        },
        icon2Text1: {
            type: "string",
            default: "Automatic, simple commission paid monthly for a year"
        },
        icon2Text2: {
            type: "string",
            default: "We never use refurbished models."
        },
        icon3Text1: {
            type: "string",
            default: "Reliable and local customer service at your fingertips"
        },
        icon3Text2: {
            type: "string",
            default: "Whether you have an analog system and don’t know where to start, or you are unhappy with your current provider, we can help."
        },
        icon4Text1: {
            type: "string",
            default: "Don’t worry about wasting money"
        },
        icon4Text2: {
            type: "string",
            default: "Our products are fully compatible with your existing VoIP handsets."
        },
    },

    edit: props => {
        const {
            text1, text2, btnText1, btnLink1, icon1, icon2, icon3, icon4, icon1Text1, icon1Text2,
            icon2Text1, icon2Text2, icon3Text1, icon3Text2, icon4Text1, icon4Text2
        } = props.attributes;

        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleBtnText1 = btnText1 => setAttributes({ btnText1 });
        const handleBtnLink1 = btnLink1 => setAttributes({ btnLink1 });

        const handleIcon1 = o => setAttributes({ icon1: o.sizes.full.url });
        const handleIcon2 = o => setAttributes({ icon2: o.sizes.full.url });
        const handleIcon3 = o => setAttributes({ icon3: o.sizes.full.url });
        const handleIcon4 = o => setAttributes({ icon4: o.sizes.full.url });

        const handleIcon1Text1 = icon1Text1 => setAttributes({ icon1Text1 });
        const handleIcon1Text2 = icon1Text2 => setAttributes({ icon1Text2 });
        const handleIcon2Text1 = icon2Text1 => setAttributes({ icon2Text1 });
        const handleIcon2Text2 = icon2Text2 => setAttributes({ icon2Text2 });
        const handleIcon3Text1 = icon3Text1 => setAttributes({ icon3Text1 });
        const handleIcon3Text2 = icon3Text2 => setAttributes({ icon3Text2 });
        const handleIcon4Text1 = icon4Text1 => setAttributes({ icon4Text1 });
        const handleIcon4Text2 = icon4Text2 => setAttributes({ icon4Text2 });

        return (
            <section id="wwd-gurantee">
                <div className="container">
                    {/* START box row*/}
                    <div className="row">
                        <div className="box top-box">
                            <p className="para">
                                <RichText value={text1} onChange={handleText1} />
                            </p>
                            <h2 className="title--sec">
                                <RichText value={text2} onChange={handleText2} />
                            </h2>
                            <span className="btn">
                                <RichText value={btnText1} onChange={handleBtnText1} />
                            </span>
                            <URLInput value={btnLink1} onChange={handleBtnLink1} />
                        </div>
                    </div>
                    {/* END box row */}
                    <div className="row">
                        {/* section pp benefits */}
                        <section id="pp-benefits">
                            <div className="container">
                                <div className="row">
                                    <div className="benefits">

                                        <div className="benefits__item">
                                            <div className="benefits__icon">
                                                <img src={icon1} alt=""/>

                                                <MediaUpload
                                                    onSelect={handleIcon1}
                                                    type="image"
                                                    value={icon1}
                                                    render={({ open }) => (
                                                        <button onClick={open} className="btn-editor">
                                                            Change Image!
                                                        </button>
                                                    )}
                                                />
                                            </div>
                                            <h4 className="benefits__title title--alt">
                                                <RichText value={icon1Text1} onChange={handleIcon1Text1} />
                                            </h4>
                                            <p className="para">
                                                <RichText value={icon1Text2} onChange={handleIcon1Text2} />
                                            </p>
                                        </div>


                                        <div className="benefits__item">
                                            <div className="benefits__icon">
                                                <img src={icon2} alt=""/>

                                                <MediaUpload
                                                    onSelect={handleIcon2}
                                                    type="image"
                                                    value={icon2}
                                                    render={({ open }) => (
                                                        <button onClick={open} className="btn-editor">
                                                            Change Image!
                                                        </button>
                                                    )}
                                                />
                                            </div>
                                            <h4 className="benefits__title title--alt">
                                                <RichText value={icon2Text1} onChange={handleIcon2Text1} />
                                            </h4>
                                            <p className="para">
                                                <RichText value={icon2Text2} onChange={handleIcon2Text2} />
                                            </p>
                                        </div>


                                        <div className="benefits__item">
                                            <div className="benefits__icon">
                                                <img src={icon3} alt=""/>

                                                <MediaUpload
                                                    onSelect={handleIcon3}
                                                    type="image"
                                                    value={icon3}
                                                    render={({ open }) => (
                                                        <button onClick={open} className="btn-editor">
                                                            Change Image!
                                                        </button>
                                                    )}
                                                />
                                            </div>
                                            <h4 className="benefits__title title--alt">
                                                <RichText value={icon3Text1} onChange={handleIcon3Text1} />
                                            </h4>
                                            <p className="para">
                                                <RichText value={icon3Text2} onChange={handleIcon3Text2} />
                                            </p>
                                        </div>


                                        <div className="benefits__item">
                                            <div className="benefits__icon">
                                                <img src={icon4} alt=""/>

                                                <MediaUpload
                                                    onSelect={handleIcon4}
                                                    type="image"
                                                    value={icon4}
                                                    render={({ open }) => (
                                                        <button onClick={open} className="btn-editor">
                                                            Change Image!
                                                        </button>
                                                    )}
                                                />
                                            </div>
                                            <h4 className="benefits__title title--alt">
                                                <RichText value={icon4Text1} onChange={handleIcon4Text1} />
                                            </h4>
                                            <p className="para">
                                                <RichText value={icon4Text2} onChange={handleIcon4Text2} />
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* section pp benefits end */}
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const {
            text1, text2, btnText1, btnLink1, icon1, icon2, icon3, icon4, icon1Text1, icon1Text2,
            icon2Text1, icon2Text2, icon3Text1, icon3Text2, icon4Text1, icon4Text2
        } = props.attributes;

        return (
            <section id="wwd-gurantee">
                <div className="container">
                    {/* START box row*/}
                    <div className="row">
                        <div className="box top-box">
                            <p className="para">
                                <RichText.Content value={text1} />
                            </p>
                            <h2 className="title--sec">
                                <RichText.Content value={text2} />
                            </h2>
                            <a href={btnLink1} className="btn">
                                <RichText.Content value={btnText1} />
                            </a>
                        </div>
                    </div>
                    {/* END box row */}
                    <div className="row">
                        {/* section pp benefits */}
                        <section id="pp-benefits">
                            <div className="container">
                                <div className="row">
                                    <div className="benefits">

                                        <div className="benefits__item">
                                            <div className="benefits__icon">
                                                <img src={icon1} alt=""/>
                                            </div>
                                            <h4 className="benefits__title title--alt">
                                                <RichText.Content value={icon1Text1} />
                                            </h4>
                                            <p className="para">
                                                <RichText.Content value={icon1Text2} />
                                            </p>
                                        </div>


                                        <div className="benefits__item">
                                            <div className="benefits__icon">
                                                <img src={icon2} alt=""/>
                                            </div>
                                            <h4 className="benefits__title title--alt">
                                                <RichText.Content value={icon2Text1} />
                                            </h4>
                                            <p className="para">
                                                <RichText.Content value={icon2Text2} />
                                            </p>
                                        </div>


                                        <div className="benefits__item">
                                            <div className="benefits__icon">
                                                <img src={icon3} alt=""/>
                                            </div>
                                            <h4 className="benefits__title title--alt">
                                                <RichText.Content value={icon3Text1} />
                                            </h4>
                                            <p className="para">
                                                <RichText.Content value={icon3Text2} />
                                            </p>
                                        </div>


                                        <div className="benefits__item">
                                            <div className="benefits__icon">
                                                <img src={icon4} alt=""/>
                                            </div>
                                            <h4 className="benefits__title title--alt">
                                                <RichText.Content value={icon4Text1} />
                                            </h4>
                                            <p className="para">
                                                <RichText.Content value={icon4Text2} />
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* section pp benefits end */}
                    </div>
                </div>
            </section>
        );
    }
});
