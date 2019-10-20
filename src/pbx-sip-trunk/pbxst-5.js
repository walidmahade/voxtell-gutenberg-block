const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/pbxst-5", {
    title: __( "PBX sip trunk 5" ),
    icon: "edit",
    category: "pbx-sip-trunk",
    keywords: [ __( "Pbx" ), __( "Sip" ), __( "Trunk" ), __("pbxst"), __("5") ],
    attributes: {
        text1: {
            type: "string",
            default: "Easily scale as you grow."
        },
        text2: {
            type: "string",
            default: "Our system allows you to quickly respond to growing customer call volumes and see exactly where your bottlenecks are. You can add more lines within minutes with no complex set up."
        },
        text3: {
            type: "string",
            default: "Deploy in days, not weeks."
        },
        text4: {
            type: "string",
            default: "We'll introduce you to our strategic deployment strategy. Our goal is to get your system upgraded and running as fast as we can. We'll support you the whole way."
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/easily-scale-icon.svg"
        },
        img2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/deploy-in-days-icon.svg"
        }
    },

    edit: props => {
        const {
            text1, text2, text3, text4, img1, img2
        } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });
        const handleImg2 = obj => setAttributes({ img2: obj.sizes.full.url });

        return (
            <section id="pst-5" className="section">
                <div className="container">
                    <div className="row">
                        <div className="left-col">
                            <img src={img1} alt className="icon"/>
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
                            <h2 className="title--sec">
                                <RichText value={text1} onChange={handleText1} />
                            </h2>
                            <p className="para">
                                <RichText value={text2} onChange={handleText2} />
                            </p>
                        </div>
                        <div className="right-col">
                            <img src={img2} alt className="icon"/>
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
                            <h2 className="title--sec">
                                <RichText value={text3} onChange={handleText3} />
                            </h2>
                            <p className="para">
                                <RichText value={text4} onChange={handleText4} />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        const {
            text1, text2, text3, text4, img1, img2
        } = props.attributes;

        return (
            <section id="pst-5" className="section">
                <div className="container">
                    <div className="row">

                        <div className="left-col">
                            <img src={img1} alt="icon" className="icon"/>
                            <h2 className="title--sec">
                                <RichText.Content value={text1} />
                            </h2>
                            <p className="para">
                                <RichText.Content value={text2} />
                            </p>
                        </div>

                        <div className="right-col">
                            <img src={img2} alt="icon" className="icon"/>
                            <h2 className="title--sec">
                                <RichText.Content value={text3} />
                            </h2>
                            <p className="para">
                                <RichText.Content value={text4} />
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        )
    },
});
