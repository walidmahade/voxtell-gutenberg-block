const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/btm-4", {
    title: __( "Business Test Messaging 4" ),
    icon: "edit",
    category: "business-text-messaging",
    keywords: [ __( "Business" ), __( "Text" ), __( "Messaging" ), __( "4" ), __( "btm" ) ],
    attributes: {
        text1: {
            type: 'string',
            default: 'Benefits of business text messaging.'
        },
        text2: {
            type: 'string',
            default: "Get started"
        },
        text3: {
            type: 'string',
            default: 'Create a new communication channel customers love to use.'
        },
        text4: {
            type: 'string',
            default: 'Send and receive business text messages from app or platform.'
        },
        text5: {
            type: 'string',
            default: "Send appointment confirmations via text message."
        },
        text6: {
            type: 'string',
            default: "Answer business calls with texting via the Nextiva platform."
        },
        text7: {
            type: 'string',
            default: "Respond to missed calls discreetly and easily when you can't talk on the phone."
        },
        text8: {
            type: 'string',
            default: "Supplement phone, email, and social outreach with text message conversations."
        },
        img1: {
            type: 'string',
            default: "/wp-content/themes/voxtell-custom/img/new-pages/Business-Text-Messaging-Benefits.png"
        },
        link1: {
            type: 'string',
            default: "#"
        }
    },

    edit: props => {
        const {
            text1, text2, text3, text4, text5, text6, text7, text8,
            img1, link1
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
        const handleLink1 = link1 => setAttributes({ link1 });
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });

        return (
            <section id="btm-4" className="section">
                <div className="container">
                    <div className="row">
                        <h2 className="title--big w-100 center">
                            <RichText value={text1} onChange={handleText1} />
                        </h2>
                    </div>
                    <div className="row bottom">
                        <div className="left">
                            <img src={img1} alt className="img-responsive"/>
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
                            <span className="btn">
                                <RichText value={text2} onChange={handleText2} />
                            </span>
                            <URLInput value={link1} onChange={handleLink1} />
                        </div>
                        <div className="right">
                            <div className="item">
                                <p className="para">
                                    <RichText value={text3} onChange={handleText3} />
                                </p>
                            </div>
                            <div className="item">
                                <p className="para">
                                    <RichText value={text4} onChange={handleText4} />
                                </p>
                            </div>
                            <div className="item">
                                <p className="para">
                                    <RichText value={text5} onChange={handleText5} />
                                </p>
                            </div>
                            <div className="item">
                                <p className="para">
                                    <RichText value={text6} onChange={handleText6} />
                                </p>
                            </div>
                            <div className="item">
                                <p className="para">
                                    <RichText value={text7} onChange={handleText7} />
                                </p>
                            </div>
                            <div className="item">
                                <p className="para">
                                    <RichText value={text8} onChange={handleText8} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        const {
            text1, text2, text3, text4, text5, text6, text7, text8,
            img1, link1
        } = props.attributes;

        return (
            <section id="btm-4" className="section">
                <div className="container">
                    <div className="row">
                        <h2 className="title--big w-100 center">
                            <RichText.Content value={text1} />
                        </h2>
                    </div>
                    <div className="row bottom">
                        <div className="left">
                            <img src={img1} alt className="img-responsive"/>

                            <a href={link1} className="btn">
                                <RichText.Content value={text2} />
                            </a>
                        </div>
                        <div className="right">
                            <div className="item">
                                <p className="para">
                                    <RichText.Content value={text3} />
                                </p>
                            </div>
                            <div className="item">
                                <p className="para">
                                    <RichText.Content value={text4} />
                                </p>
                            </div>
                            <div className="item">
                                <p className="para">
                                    <RichText.Content value={text5} />
                                </p>
                            </div>
                            <div className="item">
                                <p className="para">
                                    <RichText.Content value={text6} />
                                </p>
                            </div>
                            <div className="item">
                                <p className="para">
                                    <RichText.Content value={text7} />
                                </p>
                            </div>
                            <div className="item">
                                <p className="para">
                                    <RichText.Content value={text8} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
});
