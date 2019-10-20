const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload, URLInput } = wp.editor;
const { ColorPalette } = wp.components;

registerBlockType("cgb/team-section-new-bg", {
    title: __("Team Section New BG"),
    icon: "edit",
    category: "common",
    keywords: [__("Team"), __("Section"), __("New")],
    attributes: {
        text1: {
            type: "string",
            default: "We've got your back."
        },
        text2: {
            type: "string",
            default: "We don’t call it “Amazing Service” for nothing. Our award-winning, friendly, support HUMANS are all based in-house and ready to help you and your growing business."
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/CallUs-1.jpg"
        },
        img2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/CallUs-1.jpg"
        },
        img3: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/CallUs-1.jpg"
        },
        text3: {
            type: "string",
            default: "<strong>Mark C.</strong> | with Voxtell since 2018"
        },
        text4: {
            type: "string",
            default: "Email Us"
        },
        text5: {
            type: "string",
            default: "Fill out a short form"
        },
        text6: {
            type: "string",
            default: "<strong>Mark C.</strong> | with Voxtell since 2018"
        },
        text7: {
            type: "string",
            default: "Live Chat"
        },
        text8: {
            type: "string",
            default: "Chat Now"
        },
        text9: {
            type: "string",
            default: "<strong>Mark C.</strong> | with Voxtell since 2018"
        },
        text10: {
            type: "string",
            default: "Call Us"
        },
        text11: {
            type: "string",
            default: "(100) 000-0000"
        },
        text12: {
            type: "string",
            default: "We're committed to your growth and empowering you to run a successful business. We promise to back you up and be there when you need us. No pressure to purchase anything."
        },
        link1: {
            type: "string",
            default: "#"
        },
        link2: {
            type: "string",
            default: "#"
        },
        link3: {
            type: "string",
            default: "#"
        },
        background_color: {
            type: "string",
            default: "rgba(255,255,255,1)"
        }
    },

    edit: props => {
        const {
            text1, text2, img1, img2, img3, text3, text4, text5, text6, text7, text8,
            text9, text10, text11, text12, link1, link2, link3, background_color
        } = props.attributes;

        const { setAttributes } = props;
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });
        const handleImg2 = obj => setAttributes({ img2: obj.sizes.full.url });
        const handleImg3 = obj => setAttributes({ img3: obj.sizes.full.url });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleText5 = text5 => setAttributes({ text5 });
        const handleText6 = text6 => setAttributes({ text6 });
        const handleText7 = text7 => setAttributes({ text7 });
        const handleText8 = text8 => setAttributes({ text8 });
        const handleText9 = text9 => setAttributes({ text9 });
        const handleText10 = text10 => setAttributes({ text10 });
        const handleText11 = text11 => setAttributes({ text11 });
        const handleText12 = text12 => setAttributes({ text12 });
        const handleLink1 = link1 => setAttributes({ link1 });
        const handleLink2 = link2 => setAttributes({ link2 });
        const handleLink3 = link3 => setAttributes({ link3 });
        const onChangeBgColor = content => setAttributes({ background_color: content });
        const colors = [
            { name: 'orange', color: 'rgba(242, 153, 25, .2)' },
            { name: 'dark', color: 'rgba(26, 39, 49, .2)' },
            { name: 'red', color: 'rgba(209, 63, 41, .2)' },
        ];
        let block_style = { backgroundColor: background_color };

        return (
            <div style={block_style}>
                <InspectorControls>
                    <label className="blocks-base-control__label">
                        <strong>background color</strong>
                    </label>
                    <ColorPalette
                        colors={colors}
                        value={background_color}
                        onChange={ onChangeBgColor } // onChange event callback
                    />
                </InspectorControls>

                <section id="team-members-v2" className="section--last">
                <div className="container">
                    <div className="row header">
                        <h2 className="title--big">
                            <RichText value={text1} onChange={handleText1} />
                        </h2>
                        <p className="para">
                            <RichText value={text2} onChange={handleText2} />
                        </p>
                    </div>
                    <div className="row members">
                        {/* START member item */}
                        <div className="members__item">
                            <img src={img1} />
                            <MediaUpload
                                onSelect={handleImg1}
                                type="image"
                                value={img1}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">Change Image!</button>
                                )}
                            />
                            <div className="info">
                                <RichText value={text9} onChange={handleText9} />
                            </div>
                            <h3 className="title--sec">
                                <RichText value={text10} onChange={handleText10} />
                            </h3>
                            <span className="btn">
                                <RichText value={text11} onChange={handleText11} />
                            </span>
                            <URLInput value={link1} onChange={handleLink1} />
                        </div>
                        {/* END member item */}
                        {/* START member item */}
                        <div className="members__item">
                            <img src={img2} />
                            <MediaUpload
                                onSelect={handleImg2}
                                type="image"
                                value={img2}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">Change Image!</button>
                                )}
                            />
                            <div className="info">
                                <RichText value={text3} onChange={handleText3} />
                            </div>
                            <h3 className="title--sec">
                                <RichText value={text4} onChange={handleText4} />
                            </h3>
                            <span className="btn">
                                <RichText value={text5} onChange={handleText5} />
                            </span>
                            <URLInput value={link2} onChange={handleLink2} />
                        </div>
                        {/* END member item */}
                        {/* START member item */}
                        <div className="members__item">
                            <img src={img3} />
                            <MediaUpload
                                onSelect={handleImg3}
                                type="image"
                                value={img3}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">Change Image!</button>
                                )}
                            />
                            <div className="info">
                                <RichText value={text6} onChange={handleText6} />
                            </div>
                            <h3 className="title--sec">
                                <RichText value={text7} onChange={handleText7} />
                            </h3>
                            <span className="btn">
                                <RichText value={text8} onChange={handleText8} />
                            </span>
                            <URLInput value={link3} onChange={handleLink3} />
                        </div>
                        {/* END member item */}
                    </div>
                    <div className="row footer">
                        <p className="para">
                            <RichText value={text12} onChange={handleText12} />
                        </p>
                    </div>
                </div>
            </section>
            </div>
        );
    },

    save: props => {
        const {
            text1, text2, img1, img2, img3, text3, text4, text5, text6, text7, text8,
            text9, text10, text11, text12, link1, link2, link3, background_color
        } = props.attributes;
        let block_style = { backgroundColor: background_color };

        return (
            <div style={block_style}>
                <section id="team-members-v2" className="section--last">
                <div className="container">
                    <div className="row header">
                        <h2 className="title--big">
                            <RichText.Content value={text1} />
                        </h2>
                        <p className="para">
                            <RichText.Content value={text2} />
                        </p>
                    </div>
                    <div className="row members">
                        {/* START member item */}
                        <div className="members__item">
                            <img src={img1}/>
                            <div className="info">
                                <RichText.Content value={text9} />
                            </div>
                            <h3 className="title--sec">
                                <RichText.Content value={text10} />
                            </h3>
                            <a href={link1} className="btn">
                                <RichText.Content value={text11} />
                            </a>
                        </div>
                        {/* END member item */}
                        {/* START member item */}
                        <div className="members__item">
                            <img src={img2} />
                            <div className="info">
                                <RichText.Content value={text3} />
                            </div>
                            <h3 className="title--sec">
                                <RichText.Content value={text4} />
                            </h3>
                            <a href={link2} className="btn">
                                <RichText.Content value={text5} />
                            </a>
                        </div>
                        {/* END member item */}
                        {/* START member item */}
                        <div className="members__item">
                            <img src={img3} />
                            <div className="info">
                                <RichText.Content value={text6} />
                            </div>
                            <h3 className="title--sec">
                                <RichText.Content value={text7} />
                            </h3>
                            <a href={link3} className="btn">
                                <RichText.Content value={text8} />
                            </a>
                        </div>
                        {/* END member item */}
                    </div>
                    <div className="row footer">
                        <p className="para">
                            <RichText.Content value={text12} />
                        </p>
                    </div>
                </div>
            </section>
            </div>
        );
    }
});
