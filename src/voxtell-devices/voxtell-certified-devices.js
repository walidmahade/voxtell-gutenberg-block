const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/voxtell-phones-devices-hero", {
    title: __("Voxtell Phones Devices"),
    icon: "edit",
    category: "common",
    keywords: [__("Hero"), __("Phones"), __("Devices")],
    attributes: {
        text1: {
            type: "string",
            default: "New Year Special Offer"
        },
        text2: {
            type: "string",
            default: "<b>Free</b> Desk Phones* & Plans As Low As <b>$19.00/mo</b>"
        },
        text3: {
            type: "string",
            default: "plus taxes and fees"
        },
        text4: {
            type: "string",
            default: "Call Now 1.844.869.8355"
        },
        text5: {
            type: "string",
            default: "Image of phone shown for illustrative purposes; actual phone may vary. <br /> *Reasonable and acceptable use policies apply."
        },
        heroImg: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/Branded_phone.png"
        }
    },

    edit: props => {
        const { text1, text2, text3, text4, text5, heroImg } = props.attributes;
        const { setAttributes } = props;
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleText5 = text5 => setAttributes({ text5 });
        const handleHeroImg = imgObj => setAttributes({ heroImg: imgObj.sizes.full.url });

        return (
            <div className="voxtell-devices">
            <section id="pc-header">
                <div className="bg-overlay dots-right" />
                <div className="container">
                    <div className="row">
                        <div className="title light">
                            <h2 className="title--sec">
                                <RichText value={text1} onChange={handleText1} />
                            </h2>
                            <h2 className="title--sec second">
                                <RichText value={text2} onChange={handleText2} />
                            </h2>
                            <p className="para small">
                                <RichText value={text3} onChange={handleText3} />
                            </p>
                            <h2 className="title--sec third">
                                <RichText value={text4} onChange={handleText4} />
                            </h2>
                            <p className="para small">
                                <RichText value={text5} onChange={handleText5} />
                            </p>
                        </div>

                        <div className="phone">
                            <img src={heroImg} onChange={handleHeroImg} alt=""/>
                            <MediaUpload
                                onSelect={handleHeroImg}
                                type="image"
                                value={heroImg}
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
            </div>
        );
    },

    save: props => {
        const { text1, text2, text3, text4, text5, heroImg } = props.attributes;

        return (
            <div className="voxtell-devices">
                <section id="pc-header">
                <div className="bg-overlay dots-right" />
                <div className="container">
                    <div className="row">
                        <div className="title light">
                            <h2 className="title--sec">
                                <RichText.Content value={text1} />
                            </h2>
                            <h2 className="title--sec second">
                                <RichText.Content value={text2} />
                            </h2>
                            <p className="para small">
                                <RichText.Content value={text3} />
                            </p>
                            <h2 className="title--sec third">
                                <RichText.Content value={text4} />
                            </h2>
                            <p className="para small">
                                <RichText.Content value={text5} />
                            </p>
                        </div>

                        <div className="phone">
                            <img src={heroImg} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
});
