const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/osf-3", {
    title: __("Online Fax Service 3"),
    icon: "edit",
    category: "online-fax",
    keywords: [__("Online"), __("Fax"), __("Service"),__("ofs"), __("3")],
    attributes: {
        text1: {
            type: "string",
            default: "Online faxing built for how you work."
        },
        text2: {
            type: "string",
            default: "Whether you're going full digital or you plan to continue using your fax machine—we'll help simplify the entire faxing process. We make faxing more secure, more convenient, and easily managed."
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/Online-Fax-Service.png"
        },

    },

    edit: props => {
        const { text1, text2, img1 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });

        return (
            <section id="ofs-3" className="section">
                <div className="container">
                    <div className="row">
                        <img src={img1} alt="" className="img-responsive"/>
                        <MediaUpload
                            onSelect={handleImg1}
                            type="image"
                            value={img1}
                            render={({ open }) => (
                                <button onClick={open} className="btn-editor">Change Image!</button>
                            )}
                        />
                        <h2 className="title--big">
                            <RichText value={text1} onChange={handleText1} />
                        </h2>
                        <div className="para para--subt">
                            <RichText value={text2} onChange={handleText2} />
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { text1, text2, img1 } = props.attributes;

        return (
            <section id="ofs-3" className="section">
                <div className="container">
                    <div className="row">
                        <img src={img1} alt="" className="img-responsive"/>

                        <h2 className="title--big">
                            <RichText.Content value={text1} />
                        </h2>
                        <div className="para para--subt">
                            <RichText.Content value={text2} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
