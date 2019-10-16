const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, InspectorControls } = wp.editor;

registerBlockType("cgb/what-we-do-hero", {
    title: __("what we do hero"),
    icon: "edit",
    category: "what-we-do",
    keywords: [__("what"), __("We"), __("Do"), __("Hero")],
    attributes: {
        text1: {
            type: "string",
            default: "Manage your business and customers better, with a phone solution from voxtell."
        },
        text2: {
            type: "string",
            default: "We know that ‘one size fits all’ doesn’t work. That’s why we work with you to create the best phone solution for your specific business needs."
        },
        text3: {
            type: "string",
            default: "We utilize the latest in VoIP technology to bring you products with cutting edge features and intuitive controls, all backed up by the reliability and security of cloud communications."
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/key_(1).png"
        },
        bgImg: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/bg-whatwedo-text-1.jpg"
        }
    },

    edit: props => {
        const {text1, text2, text3, img1, bgImg} = props.attributes;
        const { setAttributes } = props;
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });
        const handleBgImg = obj => setAttributes({ bgImg: obj.sizes.full.url });
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });

        return (
            <div>
                <section id="wwd-hero">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <img src={img1} onChange={handleImg1} alt=""/>
                            </div>
                            <div className="right-col">
                                <h2 className="title--sec">
                                    <RichText value={text1} onChange={handleText1} />
                                </h2>
                                <div className="para">
                                    <RichText value={text2} onChange={handleText2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="wwd-below-hero">
                    <p className="para">
                        <RichText value={text3} onChange={handleText3} />
                    </p>
                    <div className="right" style={{backgroundImage: bgImg}} />
                </section>

                <InspectorControls>
                    <strong>Select a background image:</strong>

                    {bgImg ? <img class="editor-background-preview" src={bgImg} /> : "" }

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
            </div>
        );
    },

    save: props => {
        const {text1, text2, text3, img1, bgImg} = props.attributes;

        return (
            <div>
                <section id="wwd-hero">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <img src={ img1 } alt=""/>
                            </div>
                            <div className="right-col">
                                <h2 className="title--sec">
                                    <RichText.Content value={ text1 } />
                                </h2>
                                <div className="para">
                                    <RichText.Content value={ text2 } />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="wwd-below-hero">
                    <p className="para">
                        <RichText.Content value={ text3 } />
                    </p>
                    <div className="right" style={ { backgroundImage: bgImg } }/>
                </section>
            </div>
        );
    }
});
