const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload } = wp.editor;

registerBlockType("cgb/why-voxtell-hero", {
    title: __("Why voxtell hero"),
    icon: "edit",
    category: "why-voxtell",
    keywords: [__("Why"), __("voxtell"), __("hero")],
    attributes: {
        bgImg: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/why-voxtell-hero.jpg"
        },
        text1: {
            type: "string",
            default: "Because we’re local, we can get started quickly – contact us for a proposal, and you can be up and running with your new phone system the very next day. We love to get to know our customers! <br/> <br/>Get in touch anytime you have questions or just want to learn more about your phone’s latest features. We’re committed to providing the best phone solution for your business, with customer service that is second to none."
        },
        icon1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/logo-voxtellqualityguarantee.png"
        },
        icon2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/guarantee.png"
        },
        icon3: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/security.png"
        },
        icon4: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/quality.png"
        },
        icon1Text1: {
            type: "string",
            default: "Guarantee"
        },
        icon1Text2: {
            type: "string",
            default: "We think you’ll be more than happy with your new voxtell phone solution. As a guarantee, we offer a risk-free 30 day trial for all of our products. As a customer we check in with you every month, just to make sure that everything is running smoothly."
        },
        icon2Text1: {
            type: "string",
            default: "Security"
        },
        icon2Text2: {
            type: "string",
            default: "With voxtell, you get complete peace of mind. Enjoy outstanding reliability and total security with our cloud-based communication solution. You are always up to date – new services and features are automatically added to your system."
        },
        icon3Text1: {
            type: "string",
            default: "Quality"
        },
        icon3Text2: {
            type: "string",
            default: "Experience the best in call quality – we route our traffic through only high-quality channels. All of our phones and devices are brand new – we never use refurbished models. Our 24/7 customer support is always here for you when you need us."
        }
    },

    edit: props => {
        const { text1, icon1, icon2, icon3, icon4, icon1Text1, icon1Text2,
            icon2Text1, icon2Text2, icon3Text1, icon3Text2, bgImg } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleBgImg = o => setAttributes({ bgImg: o.sizes.full.url });

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

        return (
            <div>
                <InspectorControls>
                    <strong>Select Hero background image:</strong>

                    {bgImg ? <img class="editor-background-preview" src={bgImg} /> : ""}

                    <MediaUpload
                        onSelect={handleBgImg}
                        type="image"
                        value={bgImg}
                        render={({ open }) => (
                            <button onClick={open} className="btn-editor">
                                Upload Image!
                            </button>
                        )}
                    />
                </InspectorControls>

                <section className="hero-notext" style={{ backgroundImage: `url(${bgImg})` }} />

                <section id="whyv-quality">
                    <div className="container">
                        <div className="row">
                            <div className="icon">
                                <img src={icon1} alt="" />
                                <MediaUpload
                                    onSelect={handleIcon1}
                                    type="image"
                                    value={icon1}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">
                                            Upload Image!
                                        </button>
                                    )}
                                />
                            </div>
                            <div className="text">
                                <p className="para">
                                    <RichText value={text1} onChange={handleText1} />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="whyv-icon-box">
                    <div className="container">
                        <div className="row ib">
                            {/* iconbox item */}
                            <div className="ib__item">
                                <img src={icon2} alt="make great first impression" />
                                <MediaUpload
                                    onSelect={handleIcon2}
                                    type="image"
                                    value={icon2}
                                    render={({ open }) => ( <button onClick={open} className="btn-editor">Upload Image!</button> )}
                                />
                                <h3 className="title--alt">
                                    <RichText value={icon1Text1} onChange={handleIcon1Text1} />
                                </h3>
                                <p className="para">
                                    <RichText value={icon1Text2} onChange={handleIcon1Text2} />
                                </p>
                            </div>
                            {/* iconbox item end */}
                            {/* iconbox item */}
                            <div className="ib__item">
                                <img src={icon3} alt="work from anywhere" />
                                <MediaUpload
                                    onSelect={handleIcon3}
                                    type="image"
                                    value={icon3}
                                    render={({ open }) => ( <button onClick={open} className="btn-editor">Upload Image!</button> )}
                                />
                                <h3 className="title--alt">
                                    <RichText value={icon2Text1} onChange={handleIcon2Text1} />
                                </h3>
                                <p className="para">
                                    <RichText value={icon2Text2} onChange={handleIcon2Text2} />
                                </p>
                            </div>
                            {/* iconbox item end */}
                            {/* iconbox item */}
                            <div className="ib__item">
                                <img src={icon4} alt="easy to use" />
                                <MediaUpload
                                    onSelect={handleIcon4}
                                    type="image"
                                    value={icon4}
                                    render={({ open }) => ( <button onClick={open} className="btn-editor">Upload Image!</button> )}
                                />
                                <h3 className="title--alt">
                                    <RichText value={icon3Text1} onChange={handleIcon3Text1} />
                                </h3>
                                <p className="para">
                                    <RichText value={icon3Text2} onChange={handleIcon3Text2} />
                                </p>
                            </div>
                            {/* iconbox item end */}
                        </div>
                    </div>
                </section>
            </div>
        );
    },

    save: props => {
        const { text1, icon1, icon2, icon3, icon4, icon1Text1, icon1Text2,
            icon2Text1, icon2Text2, icon3Text1, icon3Text2, bgImg } = props.attributes;

        return (
            <div>
                <section className="hero-notext" style={ { backgroundImage: `url(${ bgImg })` } }/>

                <section id="whyv-quality">
                    <div className="container">
                        <div className="row">
                            <div className="icon">
                                <img src={ icon1 } alt=""/>
                            </div>
                            <div className="text">
                                <p className="para">
                                    <RichText.Content value={ text1 } />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="whyv-icon-box">
                    <div className="container">
                        <div className="row ib">
                            {/* iconbox item */ }
                            <div className="ib__item">
                                <img src={ icon2 } alt="make great first impression"/>
                                <h3 className="title--alt">
                                    <RichText.Content value={ icon1Text1 } />
                                </h3>
                                <p className="para">
                                    <RichText.Content value={ icon1Text2 } />
                                </p>
                            </div>
                            {/* iconbox item end */ }
                            {/* iconbox item */ }
                            <div className="ib__item">
                                <img src={ icon3 } alt="work from anywhere"/>
                                <h3 className="title--alt">
                                    <RichText.Content value={ icon2Text1 } />
                                </h3>
                                <p className="para">
                                    <RichText.Content value={ icon2Text2 } />
                                </p>
                            </div>
                            {/* iconbox item end */ }
                            {/* iconbox item */ }
                            <div className="ib__item">
                                <img src={ icon4 } alt="easy to use"/>
                                <h3 className="title--alt">
                                    <RichText.Content value={ icon3Text1 } />
                                </h3>
                                <p className="para">
                                    <RichText.Content value={ icon3Text2 } />
                                </p>
                            </div>
                            {/* iconbox item end */ }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});
