const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/btm-3", {
    title: __( "Business Test Messaging 3" ),
    icon: "edit",
    category: "business-text-messaging",
    keywords: [ __( "Business" ), __( "Text" ), __( "Messaging" ), __( "3" ), __( "btm" ) ],
    attributes: {
        text1: {
            type: 'string',
            default: 'How Business Text Messaging Works:'
        },
        text2: {
            type: 'string',
            default: "Send business text messages easily with the Nextiva platform."
        },
        text3: {
            type: 'string',
            default: 'Local Business Numbers'
        },
        text4: {
            type: 'string',
            default: 'Use your current business phone number or get a new local or toll-free number.'
        },
        text5: {
            type: 'string',
            default: "Unlimited Send & Receive"
        },
        text6: {
            type: 'string',
            default: "Send and receive unlimited text messages from your business phone number."
        },
        text7: {
            type: 'string',
            default: "Use the App"
        },
        text8: {
            type: 'string',
            default: "Use the Nextiva App to send and receive texts from your desktop and mobile device."
        },
        img1: {
            type: 'string',
            default: "/wp-content/themes/voxtell-custom/img/new-pages/Local-Business-Numbers.svg"
        },
        img2: {
            type: 'string',
            default: "/wp-content/themes/voxtell-custom/img/new-pages/Unlimited-Send-and-Receive.svg"
        },
        img3: {
            type: 'string',
            default: "/wp-content/themes/voxtell-custom/img/new-pages/Use-the-App.svg"
        },
    },

    edit: props => {
        const {
            text1, text2, text3, text4, text5, text6, text7, text8,
            img1, img2, img3
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
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });
        const handleImg2 = obj => setAttributes({ img2: obj.sizes.full.url });
        const handleImg3 = obj => setAttributes({ img3: obj.sizes.full.url });

        return (
            <section id="btm-3" className="section">
                <div className="container">
                    <div className="row header">
                        <h2 className="title--big">
                            <RichText value={text1} onChange={handleText1}/>
                        </h2>
                        <p className="para para--subt">
                            <RichText value={text2} onChange={handleText2}/>
                        </p>
                    </div>
                    <div className="row icon-box">
                        <div className="icon-box__item">
                            <img src={img1} alt/>
                            <MediaUpload
                                onSelect={handleImg1} type="image" value={img1}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        Change Image!
                                    </button>
                                )}
                            />
                            <h3 className="title--sec">
                                <RichText value={text3} onChange={handleText3}/>
                            </h3>
                            <p className="para">
                                <RichText value={text4} onChange={handleText4}/>
                            </p>
                        </div>
                        <div className="icon-box__item">
                            <img src={img2} alt/>
                            <MediaUpload
                                onSelect={handleImg2} type="image" value={img2}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        Change Image!
                                    </button>
                                )}
                            />
                            <h3 className="title--sec">
                                <RichText value={text5} onChange={handleText5}/>
                            </h3>
                            <p className="para">
                                <RichText value={text6} onChange={handleText6}/>
                            </p>
                        </div>
                        <div className="icon-box__item">
                            <img src={img3} alt/>
                            <MediaUpload
                                onSelect={handleImg3} type="image" value={img3}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        Change Image!
                                    </button>
                                )}
                            />
                            <h3 className="title--sec">
                                <RichText value={text7} onChange={handleText7}/>
                            </h3>
                            <p className="para">
                                <RichText value={text8} onChange={handleText8}/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        const {
            text1, text2, text3, text4, text5, text6, text7, text8,
            img1, img2, img3
        } = props.attributes;

        return (
            <section id="btm-3" className="section">
                <div className="container">
                    <div className="row header">
                        <h2 className="title--big">
                            <RichText.Content value={text1} />
                        </h2>
                        <p className="para para--subt">
                            <RichText.Content value={text2} />
                        </p>
                    </div>
                    <div className="row icon-box">
                        <div className="icon-box__item">
                            <img src={img1} alt/>
                            <h3 className="title--sec">
                                <RichText.Content value={text3} />
                            </h3>
                            <p className="para">
                                <RichText.Content value={text4} />
                            </p>
                        </div>
                        <div className="icon-box__item">
                            <img src={img2} alt/>
                            <h3 className="title--sec">
                                <RichText.Content value={text5} />
                            </h3>
                            <p className="para">
                                <RichText.Content value={text6} />
                            </p>
                        </div>
                        <div className="icon-box__item">
                            <img src={img3} alt/>
                            <h3 className="title--sec">
                                <RichText.Content value={text7} />
                            </h3>
                            <p className="para">
                                <RichText.Content value={text8} />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
});
