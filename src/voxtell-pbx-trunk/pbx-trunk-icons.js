const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/pbx-trunk-partners", {
    title: __("PBX trunk partners"),
    icon: "edit",
    category: "what-we-do",
    keywords: [__("PBX"), __("trunk"), __("partners"), __("Logos")],
    attributes: {
        secTitle: {
            type: "string",
            default: "Voxtell PBX/SIP Trunking supports these PBX systems and more:"
        },
        image1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/clients/images/Voxtell-What-We-Do-PBX-SIP-Trunking_03.jpg"
        },
        image2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/clients/images/Voxtell-What-We-Do-PBX-SIP-Trunking_05.jpg"
        },
        image3: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/clients/images/Voxtell-What-We-Do-PBX-SIP-Trunking_08.jpg"
        },
        image4: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/clients/images/Voxtell-What-We-Do-PBX-SIP-Trunking_11.jpg"
        },
        image5: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/clients/images/Voxtell-What-We-Do-PBX-SIP-Trunking_17.jpg"
        },
        image6: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/clients/images/Voxtell-What-We-Do-PBX-SIP-Trunking_19.jpg"
        },
        image7: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/clients/images/Voxtell-What-We-Do-PBX-SIP-Trunking_21.jpg"
        },
        image8: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/clients/images/Voxtell-What-We-Do-PBX-SIP-Trunking_23.jpg"
        },
        image9: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/clients/images/Voxtell-What-We-Do-PBX-SIP-Trunking_03.jpg"
        }
    },

    edit: props => {
        const {
            secTitle, image1, image2, image3, image4, image5, image6, image7, image8, image9,
        } = props.attributes;

        const { setAttributes } = props;

        const onSecTitleChange = secTitle => setAttributes({ secTitle });

        const onImage1Change = imgObj => setAttributes({ image1: imgObj.sizes.full.url });
        const onImage2Change = imgObj => setAttributes({ image2: imgObj.sizes.full.url });
        const onImage3Change = imgObj => setAttributes({ image3: imgObj.sizes.full.url });
        const onImage4Change = imgObj => setAttributes({ image4: imgObj.sizes.full.url });
        const onImage5Change = imgObj => setAttributes({ image5: imgObj.sizes.full.url });
        const onImage6Change = imgObj => setAttributes({ image6: imgObj.sizes.full.url });
        const onImage7Change = imgObj => setAttributes({ image7: imgObj.sizes.full.url });
        const onImage8Change = imgObj => setAttributes({ image8: imgObj.sizes.full.url });
        const onImage9Change = imgObj => setAttributes({ image9: imgObj.sizes.full.url });

        return (
            <section className="section--last" id="pbx-supp-icons">
                <h2 className="title--sec center">
                    <RichText value={secTitle} onChange={onSecTitleChange} />
                </h2>

                <div className="container">
                    <div className="row icons">
                        <div className="icon__item">
                            <img src={image1} alt="illustratedproperties" />
                            <MediaUpload
                                onSelect={onImage1Change} type="image" value={image1}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        <span className="dashicons dashicons-format-image" />
                                    </button>
                                )}
                            />
                        </div>

                        <div className="icon__item">
                            <img src={image2} alt="illustratedproperties" />
                            <MediaUpload
                                onSelect={onImage2Change} type="image" value={image2}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        <span className="dashicons dashicons-format-image" />
                                    </button>
                                )}
                            />
                        </div>

                        <div className="icon__item">
                            <img src={image3} alt="illustratedproperties" />
                            <MediaUpload
                                onSelect={onImage3Change} type="image" value={image3}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        <span className="dashicons dashicons-format-image" />
                                    </button>
                                )}
                            />
                        </div>

                        <div className="icon__item">
                            <img src={image4} alt="illustratedproperties" />
                            <MediaUpload
                                onSelect={onImage4Change} type="image" value={image4}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        <span className="dashicons dashicons-format-image" />
                                    </button>
                                )}
                            />
                        </div>

                        <div className="icon__item">
                            <img src={image5} alt="illustratedproperties" />
                            <MediaUpload
                                onSelect={onImage5Change} type="image" value={image5}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        <span className="dashicons dashicons-format-image" />
                                    </button>
                                )}
                            />
                        </div>

                        <div className="icon__item">
                            <img src={image6} alt="illustratedproperties" />
                            <MediaUpload
                                onSelect={onImage6Change} type="image" value={image6}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        <span className="dashicons dashicons-format-image" />
                                    </button>
                                )}
                            />
                        </div>

                        <div className="icon__item">
                            <img src={image7} alt="illustratedproperties" />
                            <MediaUpload
                                onSelect={onImage7Change} type="image" value={image7}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        <span className="dashicons dashicons-format-image" />
                                    </button>
                                )}
                            />
                        </div>

                        <div className="icon__item">
                            <img src={image8} alt="illustratedproperties" />
                            <MediaUpload
                                onSelect={onImage8Change} type="image" value={image8}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        <span className="dashicons dashicons-format-image" />
                                    </button>
                                )}
                            />
                        </div>

                        <div className="icon__item">
                            <img src={image9} alt="illustratedproperties" />
                            <MediaUpload
                                onSelect={onImage9Change} type="image" value={image9}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">
                                        <span className="dashicons dashicons-format-image" />
                                    </button>
                                )}
                            />
                        </div>

                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const {
            secTitle, image1, image2, image3, image4, image5, image6, image7, image8, image9,
        } = props.attributes;

        return (
            <section className="section--last" id="pbx-supp-icons">
                <h2 className="title--sec center">
                    <RichText.Content value={secTitle} />
                </h2>

                <div className="container">
                    <div className="row icons">
                        <div class="icon__item">
                            <img src={image1} alt="" />
                        </div>

                        <div class="icon__item">
                            <img src={image2} alt="" />
                        </div>

                        <div class="icon__item">
                            <img src={image3} alt="" />
                        </div>

                        <div class="icon__item">
                            <img src={image4} alt="" />
                        </div>

                        <div class="icon__item">
                            <img src={image5} alt="" />
                        </div>

                        <div class="icon__item">
                            <img src={image6} alt="" />
                        </div>

                        <div class="icon__item">
                            <img src={image7} alt="" />
                        </div>

                        <div class="icon__item">
                            <img src={image8} alt="" />
                        </div>

                        <div class="icon__item">
                            <img src={image9} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
