const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/what-we-do-sec-3", {
    title: __("What we do section 3"),
    icon: "edit",
    category: "what-we-do",
    keywords: [__("What"), __("We"), __("Do")],
    attributes: {
        text1: {
            type: "string",
            default: "How It Works"
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
            default: "/wp-content/themes/voxtell-custom/img/hiw-1.png"
        },
        icon2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/hiw-2.png"
        },
        icon3: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/hiw-3.png"
        },
        icon1Text1: {
            type: "string",
            default: "Contact us for a<br />quote"
        },
        icon2Text1: {
            type: "string",
            default: "We will design a phone <br />solution perfect for <br />your business needs"
        },
        icon3Text1: {
            type: "string",
            default: "Installation and <br />integration is simple <br />and seamless"
        }
    },

    edit: props => {
        const {
            text1, btnText1, btnLink1, icon1, icon2, icon3, icon1Text1, icon2Text1, icon3Text1
        } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleBtnText1 = btnText1 => setAttributes({ btnText1 });
        const handleBtnLink1 = btnLink1 => setAttributes({ btnLink1 });

        const handleIcon1 = o => setAttributes({ icon1: o.sizes.full.url });
        const handleIcon2 = o => setAttributes({ icon2: o.sizes.full.url });
        const handleIcon3 = o => setAttributes({ icon3: o.sizes.full.url });

        const handleIcon1Text1 = icon1Text1 => setAttributes({ icon1Text1 });
        const handleIcon2Text1 = icon2Text1 => setAttributes({ icon2Text1 });
        const handleIcon3Text1 = icon3Text1 => setAttributes({ icon3Text1 });

        return (
            <section id="how-we-work">
                <div className="container">
                    <div className="row">
                        <h2 className="title--sec w-100 center">
                            <RichText value={text1} onChange={handleText1} />
                        </h2>
                        <div className="icons">
                            {/* item */}
                            <div className="icons__item">
                                <img
                                    src={icon1}
                                    alt="Voxtell Contact us for a quote"
                                />
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
                                <div className="para">
                                    <span className="num">1</span>
                                    <span>
                                        <RichText value={icon1Text1} onChange={handleIcon1Text1} />
                                    </span>
                                </div>
                            </div>
                            {/* end item */}
                            {/* item */}
                            <div className="icons__item">
                                <img
                                    src={icon2}
                                    alt="Voxtell We will design a phone solution perfect for your business needs"
                                />
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
                                <div className="para">
                                    <div className="num">2</div>
                                    <div>
                                        <RichText value={icon2Text1} onChange={handleIcon2Text1} />
                                    </div>
                                </div>
                            </div>
                            {/* end item */}
                            {/* item */}
                            <div className="icons__item">
                                <img
                                    src={icon3}
                                    alt="Voxtell Installation and integration is simple and seamless"
                                />
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
                                <h3 className="para">
                                    <span className="num">3</span>
                                    <span>
                                        <RichText value={icon3Text1} onChange={handleIcon3Text1} />
                                    </span>
                                </h3>
                            </div>
                            {/* end item */}
                        </div>
                        {/* icons end */}
                        <div className="cta w-100 center">
                            <span  className="btn">
                                <RichText value={btnText1} onChange={handleBtnText1} />
                            </span>
                            <URLInput value={btnLink1} onChange={handleBtnLink1}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const {
            text1, btnText1, btnLink1, icon1, icon2, icon3, icon1Text1, icon2Text1, icon3Text1
        } = props.attributes;

        return (
            <section id="how-we-work">
                <div className="container">
                    <div className="row">
                        <h2 className="title--sec w-100 center">
                            <RichText.Content value={text1}  />
                        </h2>
                        <div className="icons">
                            {/* item */}
                            <div className="icons__item">
                                <img src={icon1} alt="Voxtell Contact us for a quote"/>
                                <div className="para">
                                    <span className="num">1</span>
                                    <span>
                                        <RichText.Content value={icon1Text1}  />
                                    </span>
                                </div>
                            </div>
                            {/* end item */}
                            {/* item */}
                            <div className="icons__item">
                                <img src={icon2} alt="Voxtell We will design a phone solution perfect for your business needs"/>
                                <div className="para">
                                    <div className="num">2</div>
                                    <div>
                                        <RichText.Content value={icon2Text1}  />
                                    </div>
                                </div>
                            </div>
                            {/* end item */}
                            {/* item */}
                            <div className="icons__item">
                                <img src={icon3} alt="Voxtell Installation and integration is simple and seamless"/>
                                <h3 className="para">
                                    <span className="num">3</span>
                                    <span>
                                        <RichText.Content value={icon3Text1}  />
                                    </span>
                                </h3>
                            </div>
                            {/* end item */}
                        </div>
                        {/* icons end */}
                        <div className="cta w-100 center">
                            <a href={btnLink1} className="btn">
                                <RichText.Content value={btnText1}  />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
