const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/btm-2", {
    title: __( "Business Test Messaging 2" ),
    icon: "edit",
    category: "business-text-messaging",
    keywords: [ __( "Business" ), __( "Text" ), __( "Messaging" ), __( "2" ), __( "btm" ) ],
    attributes: {
        text1: {
            type: 'string',
            default: 'Business Text Messaging Made Easy.'
        },
        text2: {
            type: 'string',
            default: 'Send unlimited text messages to customers and employees from your business phone number.'
        },
        text3: {
            type: 'string',
            default: 'Get Started'
        },
        link1: {
            type: 'string',
            default: '#'
        },
        img1: {
            type: 'string',
            default: "/wp-content/themes/voxtell-custom/img/new-pages/What-Is-Business-Text-Messaging.svg"
        }
    },

    edit: props => {
        const { text1, text2, text3, link1, img1 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleLink1 = link1 => setAttributes({ link1 });
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });

        return (
            <section id="btm-2" className="section section-btm-lr-50">
                <div className="container">
                    <div className="row">
                        <div className="left-col">
                            <h2 className="title--big">
                                <RichText value={text1} onChange={handleText1}/>
                            </h2>
                            <p className="para">
                                <RichText value={text2} onChange={handleText2}/>
                            </p>
                            <span className="btn">
                                 <RichText value={text3} onChange={handleText3}/>
                             </span>
                            <URLInput value={link1} onChange={handleLink1} />
                        </div>
                        <div className="right-col">
                            <img src={img1} alt="send sms" className="img-responsive"/>
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
                        </div>
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        const { text1, text2, text3, link1, img1 } = props.attributes;

        return (
            <section id="btm-2" className="section section-btm-lr-50">
                <div className="container">
                    <div className="row">
                        <div className="left-col">
                            <h2 className="title--big">
                                <RichText.Content value={text1} />
                            </h2>
                            <p className="para">
                                <RichText.Content value={text2} />
                            </p>
                            <a href={link1} className="btn">
                                <RichText.Content value={text3} />
                            </a>
                        </div>
                        <div className="right-col">
                            <img src={img1} alt="send sms" className="img-responsive"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
});
