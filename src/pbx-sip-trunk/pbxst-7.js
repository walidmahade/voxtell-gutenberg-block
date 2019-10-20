const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/pbxst-7", {
    title: __( "PBX sip trunk 7" ),
    icon: "edit",
    category: "pbx-sip-trunk",
    keywords: [ __( "Pbx" ), __( "Sip" ), __( "Trunk" ), __("pbxst"), __("7") ],
    attributes: {
        text1: {
            type: "string",
            default: "Our other enterprise products"
        },
        text2: {
            type: "string",
            default: "Make your whole company happy."
        },
        text3: {
            type: "string",
            default: "Enterprise Phone Service"
        },
        text4: {
            type: "string",
            default: "Get the leading voice platform. Crisp HD audio and reliable global collaboration on any device."
        },
        text5: {
            type: "string",
            default: "Learn more"
        },
        text6: {
            type: "string",
            default: "Cloud Contact Center"
        },
        text7: {
            type: "string",
            default: "Start resolving calls on the first try and manage it all with a simple and intuitive dashboard with analytics."
        },
        text8: {
            type: "string",
            default: "Learn more"
        },
        text9: {
            type: "string",
            default: "Simple to Use & Train"
        },
        text10: {
            type: "string",
            default: "Ultra Secure Network"
        },
        text11: {
            type: "string",
            default: "Reliable Service <br /> & Support"
        },
        text12: {
            type: "string",
            default: "Talk to an expert today."
        },
        text13: {
            type: "string",
            default: "Get started"
        },
        link1: {
            type: "string",
            default: ""
        },
        link2: {
            type: "string",
            default: ""
        },
        link3: {
            type: "string",
            default: ""
        },
        link4: {
            type: "string",
            default: ""
        },
        link5: {
            type: "string",
            default: ""
        },
        link6: {
            type: "string",
            default: ""
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/voice-platform-icon.svg"
        },
        img2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/contact-center-icon.svg"
        },
        img3: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/simple-to-use-icon.svg"
        },
        img4: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/ultra-secure-icon.svg"
        },
        img5: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/service-and-support-icon.svg"
        },
    },

    edit: props => {
        const {
            text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11,
            text12, text13, link1, link2, link3, link4, link5, link6,
            img1, img2, img3, img4, img5
        } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleText5 = text5 => setAttributes({ text5 });
        const handleText6 = text6 => setAttributes({ text6 });
        const handleText7 = text7 => setAttributes({ text7 });
        const handleText8 = text8 => setAttributes({ text8 });
        const handleText9 = text9 => setAttributes({ text9 });
        const handleText10 = text10 => setAttributes({ text10 });
        const handleText11 = text11 => setAttributes({ text11 });
        const handleText12 = text12 => setAttributes({ text12 });
        const handleText13 = text13 => setAttributes({ text13 });
        const handleLink1 = link1 => setAttributes({ link1 });
        const handleLink2 = link2 => setAttributes({ link2 });
        const handleLink3 = link3 => setAttributes({ link3 });
        const handleLink4 = link4 => setAttributes({ link4 });
        const handleLink5 = link5 => setAttributes({ link5 });
        const handleLink6 = link6 => setAttributes({ link6 });
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });
        const handleImg2 = obj => setAttributes({ img2: obj.sizes.full.url });
        const handleImg3 = obj => setAttributes({ img3: obj.sizes.full.url });
        const handleImg4 = obj => setAttributes({ img4: obj.sizes.full.url });
        const handleImg5 = obj => setAttributes({ img5: obj.sizes.full.url });

        return (
            <section id="pst-other-products" className="section">
                <div className="container">
                    <div className="row center header">
                        <div className="col w-100 center">
                            <h4 className="title--icon">
                                <RichText value={text1} onChange={handleText1} />
                            </h4>
                            <h2 className="title--big">
                                <RichText value={text2} onChange={handleText2} />
                            </h2>
                        </div>
                    </div>
                    <div className="row cards">
                        {/* START box */}
                        <div className="box">
                            <img src={img1} alt="image" className="icon"/>
                            <MediaUpload
                                onSelect={handleImg1}
                                type="image"
                                value={img1}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        Change Image!
                                    </button>
                                )}
                            />

                            <h3 className="title--sec">
                                <RichText value={text3} onChange={handleText3} />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText value={text4} onChange={handleText4} />
                            </p>
                            <span className="btn">
                                <RichText value={text5} onChange={handleText5} />
                            </span>
                            <URLInput value={link1} onChange={handleLink1} />
                        </div>
                        {/* END box */}
                        {/* START box */}
                        <div className="box">
                            <img src={img2} alt="image" className="icon"/>
                            <MediaUpload
                                onSelect={handleImg2}
                                type="image"
                                value={img2}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        Change Image!
                                    </button>
                                )}
                            />

                            <h3 className="title--sec">
                                <RichText value={text6} onChange={handleText6} />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText value={text7} onChange={handleText7} />
                            </p>
                            <span className="btn">
                                <RichText value={text8} onChange={handleText8} />
                            </span>
                            <URLInput value={link2} onChange={handleLink2} />
                        </div>
                        {/* END box */}
                    </div>
                    {/* END row cards */}
                    <div className="row small-cards">
                        <div className="box">
                            <div className="left">
                                <img src={img3} alt="icon" className="icon"/>
                                <MediaUpload
                                    onSelect={handleImg3}
                                    type="image"
                                    value={img3}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">
                                            Change Image!
                                        </button>
                                    )}
                                />

                                <p className="para para--subt">
                                    <RichText value={text9} onChange={handleText9} />
                                </p>
                            </div>
                            <div className="right">
                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={34} viewBox="0 0 22 34"><path d="M17,22,0,6,6,0,17,11,28,0l6,6Z" transform="translate(0 34) rotate(-90)" fill="#dedfe5"/></svg>
                            </div>
                            <div className="w-100">
                                <URLInput value={link3} onChange={handleLink3} placeholder="card link" />
                            </div>
                        </div>

                        <div className="box">
                            <div className="left">
                                <img src={img4} alt="icon" className="icon"/>
                                <MediaUpload
                                    onSelect={handleImg4}
                                    type="image"
                                    value={img4}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">
                                            Change Image!
                                        </button>
                                    )}
                                />
                                <p className="para para--subt">
                                    <RichText value={text10} onChange={handleText10} />
                                </p>
                            </div>
                            <div className="right">
                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={34} viewBox="0 0 22 34"><path d="M17,22,0,6,6,0,17,11,28,0l6,6Z" transform="translate(0 34) rotate(-90)" fill="#dedfe5"/></svg>
                            </div>
                            <div className="w-100">
                                <URLInput value={link4} onChange={handleLink4} placeholder="card link" />
                            </div>
                        </div>

                        <div className="box">
                            <div className="left">
                                <img src={img5} alt="icon" className="icon"/>
                                <MediaUpload
                                    onSelect={handleImg5}
                                    type="image"
                                    value={img5}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">
                                            Change Image!
                                        </button>
                                    )}
                                />
                                <p className="para para--subt">
                                    <RichText value={text11} onChange={handleText11} />
                                </p>
                            </div>
                            <div className="right">
                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={34} viewBox="0 0 22 34"><path d="M17,22,0,6,6,0,17,11,28,0l6,6Z" transform="translate(0 34) rotate(-90)" fill="#dedfe5"/></svg>
                            </div>
                            <div className="w-100">
                                <URLInput value={link5} onChange={handleLink5} placeholder="card link" />
                            </div>
                        </div>
                    </div>
                    {/* END row boxes */}
                    <div className="row cta center">
                        <h1 className="title--big w-100">
                            <RichText value={text12} onChange={handleText12} />
                        </h1>
                        <span className="btn">
                            <RichText value={text13} onChange={handleText13} />
                        </span>
                    </div>
                    <div className="center w-100">
                        <URLInput value={link6} onChange={handleLink6}/>
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        const {
            text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11,
            text12, text13, link1, link2, link3, link4, link5, link6,
            img1, img2, img3, img4, img5
        } = props.attributes;

        return (
            <section id="pst-other-products" className="section">
                <div className="container">
                    <div className="row center header">
                        <div className="col w-100 center">
                            <h4 className="title--icon">
                                <RichText.Content value={text1} />
                            </h4>
                            <h2 className="title--big">
                                <RichText.Content value={text2} />
                            </h2>
                        </div>
                    </div>
                    <div className="row cards">
                        {/* START box */}
                        <div className="box">
                            <img src={img1} alt="image" className="icon"/>
                            <h3 className="title--sec">
                                <RichText.Content value={text3} />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText.Content value={text4} />
                            </p>
                            <a href={link1} className="btn">
                                <RichText.Content value={text5} />
                            </a>
                        </div>
                        {/* END box */}
                        {/* START box */}
                        <div className="box">
                            <img src={img2} alt="image" className="icon"/>

                            <h3 className="title--sec">
                                <RichText.Content value={text6} />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText.Content value={text7} />
                            </p>
                            <a href={link2} className="btn">
                                <RichText.Content value={text8} />
                            </a>
                        </div>
                        {/* END box */}
                    </div>
                    {/* END row cards */}
                    <div className="row small-cards">
                        <a href={link3} className="box">
                            <div className="left">
                                <img src={img3} alt="icon" className="icon"/>
                                <p className="para para--subt">
                                    <RichText.Content value={text9} />
                                </p>
                            </div>
                            <div className="right">
                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={34} viewBox="0 0 22 34"><path d="M17,22,0,6,6,0,17,11,28,0l6,6Z" transform="translate(0 34) rotate(-90)" fill="#dedfe5"/></svg>
                            </div>
                        </a>

                        <a href={link4} className="box">
                            <div className="left">
                                <img src={img4} alt="icon" className="icon"/>
                                <p className="para para--subt">
                                    <RichText.Content value={text10} />
                                </p>
                            </div>
                            <div className="right">
                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={34} viewBox="0 0 22 34"><path d="M17,22,0,6,6,0,17,11,28,0l6,6Z" transform="translate(0 34) rotate(-90)" fill="#dedfe5"/></svg>
                            </div>
                        </a>

                        <a href={link5} className="box">
                            <div className="left">
                                <img src={img5} alt="icon" className="icon"/>
                                <p className="para para--subt">
                                    <RichText.Content value={text11} />
                                </p>
                            </div>
                            <div className="right">
                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={34} viewBox="0 0 22 34"><path d="M17,22,0,6,6,0,17,11,28,0l6,6Z" transform="translate(0 34) rotate(-90)" fill="#dedfe5"/></svg>
                            </div>
                        </a>
                    </div>
                    {/* END row boxes */}
                    <div className="row cta center">
                        <h1 className="title--big w-100">
                            <RichText.Content value={text12} />
                        </h1>
                        <a href={link6} className="btn">
                            <RichText.Content value={text13} />
                        </a>
                    </div>
                </div>
            </section>
        )
    },
});
