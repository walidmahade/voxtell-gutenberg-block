const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/product-page-hero", {
    title: __("Product page hero"),
    icon: "edit",
    category: "common",
    keywords: [__("Product"), __("Page"), __("Hero")],
    attributes: {
        text1: {
            type: "string",
            default: "Advanced Business VoIP Technology. Crisp And Clear Audio."
        },
        text2: {
            type: "string",
            default: "Easy To Set Up In Minutes. Better Service That Costs Less."
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/Branded_phone.png"
        }
    },

    edit: props => {
        const {text1, text2, img1} = props.attributes;
        const { setAttributes } = props;
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleImg1 = o => setAttributes({ img1: o.sizes.full.url });

        return(
            <section id="pc-header">
                <div className="bg-overlay dots-right" />
                <div className="container">
                    <div className="row">
                        <div className="title light">
                            <h2 className="title--sec">
                                <RichText value={text1} onChange={handleText1} />
                            </h2>

                            <p className="para">
                                <RichText value={text2} onChange={handleText2} />
                            </p>
                        </div>

                        <div className="phone">
                            <img src={img1} alt="products_voxtell"/>
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
        const {text1, text2, img1} = props.attributes;

        return(
            <section id="pc-header">
                <div className="bg-overlay dots-right" />
                <div className="container">
                    <div className="row">
                        <div className="title light">
                            <h2 className="title--sec">
                                <RichText.Content value={text1} />
                            </h2>

                            <p className="para">
                                <RichText.Content value={text2} />
                            </p>
                        </div>

                        <div className="phone">
                            <img src={img1} alt="products_voxtell"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
