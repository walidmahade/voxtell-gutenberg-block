const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/pbxst-6", {
    title: __( "PBX sip trunk 6" ),
    icon: "edit",
    category: "pbx-sip-trunk",
    keywords: [ __( "Pbx" ), __( "Sip" ), __( "Trunk" ), __("pbxst"), __("6") ],
    attributes: {
        text1: {
            type: "string",
            default: "Keep your existing number and info."
        },
        text2: {
            type: "string",
            default: "We'll help you easily port your number and information from your previous provider. So you'll keep everything intact."
        },
        text3: {
            type: "string",
            default: "Talk to an expert"
        },
        link1: {
            type: "string",
            default: "#"
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/hands-icon.svg"
        }
    },

    edit: props => {
        const {
            text1, text2, text3, link1, img1
        } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleLink1 = link1 => setAttributes({ link1 });
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });

        return (
            <section id="pst-6" className="section">
                <div className="container">
                    <div className="row center">
                        <div className="col">
                            <img src={img1} alt="iocn" className="icon"/>
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

                            <h2 className="title--big">
                                <RichText value={text1} onChange={handleText1} />
                            </h2>
                            <p className="para">
                                <RichText value={text2} onChange={handleText2} />
                            </p>
                            <span className="btn">
                                <RichText value={text3} onChange={handleText3} />
                            </span>
                            <URLInput value={link1} onChange={handleLink1} />
                        </div>
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        const {
            text1, text2, text3, link1, img1
        } = props.attributes;

        return (
            <section id="pst-6" className="section">
                <div className="container">
                    <div className="row center">
                        <div className="col">
                            <img src={img1} alt="iocn" className="icon"/>

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
                    </div>
                </div>
            </section>
        )
    },
});
