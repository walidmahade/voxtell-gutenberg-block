const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/pbxst-3", {
    title: __( "PBX sip trunk 3" ),
    icon: "edit",
    category: "pbx-sip-trunk",
    keywords: [ __( "Pbx" ), __( "Sip" ), __( "Trunk" ), __("pbxst"), __("3") ],
    attributes: {
        text1: {
            type: "string",
            default: "Significant service cost reductions."
        },
        text2: {
            type: "string",
            default: "Reduce your current PBX bill by up to 70%. Get local, toll-free, and international calls. No more per-minute charges. It's all included."
        },
        text3: {
            type: "string",
            default: "No disruptions to your service."
        },
        text4: {
            type: "string",
            default: "Maintain your current level of customer service and growth while we strategically transition your system to the cloud."
        },
        text5: {
            type: "string",
            default: "Keep your current equipment."
        },
        text6: {
            type: "string",
            default: "Instantly convert traditional phone systems to a feature rich IP-based set up. You avoid new equipment costs while getting better service."
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/cost-reduction-icon.svg"
        },
        img2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/no-disruptions-icon.svg"
        },
        img3: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/current-equipment-icon.svg"
        }
    },

    edit: props => {
        const {
            text1, text2, text3, text4, text5, text6, img1, img2, img3
        } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleText5 = text5 => setAttributes({ text5 });
        const handleText6 = text6 => setAttributes({ text6 });
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });
        const handleImg2 = obj => setAttributes({ img2: obj.sizes.full.url });
        const handleImg3 = obj => setAttributes({ img3: obj.sizes.full.url });

        return (
            <section id="pst-3" className="section">
                <div className="bg-overlay dots-right" />
                <div className="container">
                    <div className="row">
                        {/* START box */}
                        <div className="box">
                            <img src={img1} alt="icon" className="icon"/>
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
                            <h3 className="title--sec">
                                <RichText value={text1} onChange={handleText1} />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText value={text2} onChange={handleText2} />
                            </p>
                        </div>
                        {/* END box */}
                        {/* START box */}
                        <div className="box">
                            <img src={img2} alt="icon" className="icon"/>
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
                            <h3 className="title--sec">
                                <RichText value={text3} onChange={handleText3} />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText value={text4} onChange={handleText4} />
                            </p>
                        </div>
                        {/* END box */}
                        {/* START box */}
                        <div className="box">
                            <img src={img3} alt="iocn" className="icon"/>
                            <MediaUpload
                                onSelect={handleImg3}
                                type="image"
                                value={img3}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        Change Image!
                                    </button>
                                )}
                            />
                            <h3 className="title--sec">
                                <RichText value={text5} onChange={handleText5} />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText value={text6} onChange={handleText6} />
                            </p>
                        </div>
                        {/* END box */}
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        const {
            text1, text2, text3, text4, text5, text6, img1, img2, img3
        } = props.attributes;

        return (
            <section id="pst-3" className="section">
                <div className="bg-overlay dots-right" />
                <div className="container">
                    <div className="row">
                        {/* START box */}
                        <div className="box">
                            <img src={img1} alt="icon" className="icon"/>

                            <h3 className="title--sec">
                                <RichText.Content value={text1} />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText.Content value={text2} />
                            </p>
                        </div>
                        {/* END box */}
                        {/* START box */}
                        <div className="box">
                            <img src={img2} alt="icon" className="icon"/>

                            <h3 className="title--sec">
                                <RichText.Content value={text3} />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText.Content value={text4} />
                            </p>
                        </div>
                        {/* END box */}
                        {/* START box */}
                        <div className="box">
                            <img src={img3} alt="iocn" className="icon"/>

                            <h3 className="title--sec">
                                <RichText.Content value={text5} />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText.Content value={text6} />
                            </p>
                        </div>
                        {/* END box */}
                    </div>
                </div>
            </section>
        )
    },
});
