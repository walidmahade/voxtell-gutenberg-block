const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/osf-6", {
    title: __("Online Fax Service 6"),
    icon: "edit",
    category: "online-fax",
    keywords: [__("Online"), __("Fax"), __("Service"),__("ofs"), __("6")],
    attributes: {
        text1: {
            type: "string",
            default: "Deploy, route, and scale."
        },
        text2: {
            type: "string",
            default: "Make sure faxes get where you want them with our intuitive routing tools. Add more lines instantly with no infrastructure adjustments. Scale up within minutes if your fax volume grows."
        },
        text3: {
            type: "string",
            default: "We make it easy to switch."
        },
        text4: {
            type: "string",
            default: "Make sure faxes get where you want them with our intuitive routing tools. Add more lines instantly with no infrastructure adjustments. Scale up within minutes if your fax volume grows."
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/deploy-route-icon.svg"
        },
        img2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/easy-switch-icon.svg"
        },
    },

    edit: props => {
        const { text1, text2, text3, text4, img1, img2 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });
        const handleImg2 = obj => setAttributes({ img2: obj.sizes.full.url });

        return (
            <section id="ofs-6" className="section">
                <div className="container">
                    <div className="row">
                        <div className="left-col">
                            <img src={img1} alt="deploy route icon"/>
                            <MediaUpload
                                onSelect={handleImg1}
                                type="image"
                                value={img1}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">Change Image!</button>
                                )}
                            />
                            <h3 className="title--sec">
                                <RichText value={text1} onChange={handleText1} />
                            </h3>
                            <p className="para">
                                <RichText value={text2} onChange={handleText2} />
                            </p>
                        </div>

                        <div className="right-col">
                            <img
                                src={img2}
                                alt="deploy route icon"
                            />
                            <MediaUpload
                                onSelect={handleImg2}
                                type="image"
                                value={img2}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">Change Image!</button>
                                )}
                            />
                            <h3 className="title--sec">
                                <RichText value={text3} onChange={handleText3} />
                            </h3>
                            <p className="para">
                                <RichText value={text4} onChange={handleText4} />
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { text1, text2, text3, text4, img1, img2 } = props.attributes;

        return (
            <section id="ofs-6" className="section">
                <div className="container">
                    <div className="row">
                        <div className="left-col">
                            <img src={img1} alt="deploy route icon"/>
                            <h3 className="title--sec">
                                <RichText.Content value={text1} />
                            </h3>
                            <p className="para">
                                <RichText.Content value={text2} />
                            </p>
                        </div>

                        <div className="right-col">
                            <img src={img2} alt="easy switch icon"/>
                            <h3 className="title--sec">
                                <RichText.Content value={text3} />
                            </h3>
                            <p className="para">
                                <RichText.Content value={text4} />
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
});
