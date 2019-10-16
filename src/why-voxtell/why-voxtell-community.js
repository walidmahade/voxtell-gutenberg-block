const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, InspectorControls } = wp.editor;

registerBlockType("cgb/why-voxtell-community", {
    title: __("why voxtell community"),
    icon: "edit",
    category: "why-voxtell",
    keywords: [__("why"), __("voxtell"), __("community")],
    attributes: {
        text1: {
            type: "string",
            default: "We Love Our Community"
        },
        text2: {
            type: "string",
            default: "We are passionate about supporting local initiatives and nonprofit organizations, and we love working with local technology organizations. We have worked closely with Canvs, a nonprofit coworking space for tech startups, as well as the UCF Incubator. We are a proud member of the Downtown Orlando Partnership, and we write monthly articles on business and technology for our local BrazilUSA magazine."
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/clients/v2/canvs-gray.png"
        },
        img2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/clients/v2/downtown_orlando_partnership-gray.png"
        },
        img3: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/clients/v2/UID_BusinessIncubationProgram_KG_874_CS-gray.png"
        },
        img4: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/clients/v2/BrazilUSALogo-black-gray.png"
        },
        bgImg: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/Why-voxtell-footer-bg-2jpg.jpg"
        }
    },

    edit: props => {
        const {img1, img2, img3, img4, text1, text2, bgImg} = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleImg1 = o => setAttributes({ img1: o.sizes.full.url });
        const handleImg2 = o => setAttributes({ img2: o.sizes.full.url });
        const handleImg3 = o => setAttributes({ img3: o.sizes.full.url });
        const handleImg4 = o => setAttributes({ img4: o.sizes.full.url });
        const handleBgImg = o => setAttributes({ bgImg: o.sizes.full.url });

        return (
            <section id="whyv-community" className="seciton section--last" style={{ backgroundImage: `url(${bgImg})` }}>
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
                <div className="container">
                    <div className="row">

                        <div className="left-col">
                            <h2 className="titlie--sec">
                                <RichText value={text1} onChange={handleText1} />
                            </h2>
                            <p className="para">
                                <RichText value={text2} onChange={handleText2} />
                            </p>
                        </div>

                        <div className="right-col">
                            <div className="logo">
                                <img src={img1} alt="" />
                                <MediaUpload
                                    onSelect={handleImg1}
                                    type="image"
                                    value={img1}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">
                                            Upload Image!
                                        </button>
                                    )}
                                />
                            </div>
                            <div className="logo">
                                <img src={img2} alt="" />
                                <MediaUpload
                                    onSelect={handleImg2}
                                    type="image"
                                    value={img2}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">
                                            Upload Image!
                                        </button>
                                    )}
                                />
                            </div>
                            <div className="logo">
                                <img src={img3} alt="" />
                                <MediaUpload
                                    onSelect={handleImg3}
                                    type="image"
                                    value={img3}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">
                                            Upload Image!
                                        </button>
                                    )}
                                />
                            </div>
                            <div className="logo">
                                <img src={img4} alt="" />
                                <MediaUpload
                                    onSelect={handleImg4}
                                    type="image"
                                    value={img4}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">
                                            Upload Image!
                                        </button>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const {img1, img2, img3, img4, text1, text2, bgImg} = props.attributes;

        return (
            <section id="whyv-community" className="seciton section--last" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="container">
                    <div className="row">

                        <div className="left-col">
                            <h2 className="titlie--sec">
                                <RichText.Content value={text1} />
                            </h2>
                            <p className="para">
                                <RichText.Content value={text2} />
                            </p>
                        </div>

                        <div className="right-col">
                            <div className="logo">
                                <img src={img1} alt="logo" />
                            </div>
                            <div className="logo">
                                <img src={img2} alt="logo" />
                            </div>
                            <div className="logo">
                                <img src={img3} alt="logo" />
                            </div>
                            <div className="logo">
                                <img src={img4} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
