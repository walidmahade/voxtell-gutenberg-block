const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/osf-5", {
    title: __("Online Fax Service 5"),
    icon: "edit",
    category: "online-fax",
    keywords: [__("Online"), __("Fax"), __("Service"),__("ofs"), __("5")],
    attributes: {
        text1: {
            type: "string",
            default: "Get faxes directly to your inbox."
        },
        text2: {
            type: "string",
            default: "Get all of your faxes securely delivered to your inbox of choice. Know exactly when a fax arrives with text alerts for new faxes. No sensitive papers to lose and no security risks. See our fax to email hardware to get your business securely delivering faxes online."
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/vfax-phone.png"
        },

    },

    edit: props => {
        const { text1, text2, img1 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });

        return (
            <section id="ofs-5" className="section">
                <div className="container">
                    <div className="row">

                        <div className="left-col">
                            <h2 className="title--big">
                                <RichText value={text1} onChange={handleText1} />
                            </h2>
                            <p className="para">
                                <RichText value={text2} onChange={handleText2} />
                            </p>
                        </div>

                        <div className="right-col">
                            <img src={img1} alt="vfax phone image"/>
                            <MediaUpload
                                onSelect={handleImg1}
                                type="image"
                                value={img1}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">Change Image!</button>
                                )}
                            />
                        </div>

                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { text1, text2, img1 } = props.attributes;

        return (
            <section id="ofs-5" className="section">
                <div className="container">
                    <div className="row">

                        <div className="left-col">
                            <h2 className="title--big">
                                <RichText.Content value={text1} />
                            </h2>
                            <p className="para">
                                <RichText.Content value={text2} />
                            </p>
                        </div>

                        <div className="right-col">
                            <img src={img1} alt="vfax phone image"/>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
});
