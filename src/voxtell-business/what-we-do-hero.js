const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload, URLInputButton } = wp.editor;
const { ColorPalette } = wp.components;

registerBlockType("cgb/what-we-do-subpage-hero", {
    title: __("What We do Subpage Hero"),
    icon: "edit",
    category: "what-we-do",
    keywords: [__("What"), __("We"), __("Do"), __("Hero")],
    attributes: {
        heroImg:{
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/what-we-do-phone-service-hero3.jpg"
        },
        text1: {
            type: "string",
            default: "Save up to 70% on your monthly phone expenses with voxtell Business!"
        },
        text2: {
            type: "string",
            default: "There are no equipment costs – everything you need is included. Our phones are fully pre-configured and ready for calls. You can keep your existing phone number too. There’s no hardware to maintain – your system is in the cloud, so updates and new features appear automatically."
        },
        text3: {
            type: "string",
            default: "Included Are All These Great Features And More:"
        },
        text4: {
            type: "string",
            default: "list items"
        },
        text5: {
            type: "string",
            default: "View Full List Of Features"
        },
        link1: {
            type: "string",
            default: "/full-list-of-features"
        },
        background_color: {
            type: 'string',
            default: '#f29919', // Default value for newly added block
        }
    },

    edit: props => {
        const { heroImg, text1, text2, text3, text4, text5, link1, background_color } = props.attributes;
        const { setAttributes } = props;
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleText5 = text5 => setAttributes({ text5 });
        const handleHeroImg = imgObj => setAttributes({ heroImg: imgObj.sizes.full.url });
        const handleLink1 = link1 => setAttributes({ link1 });
        const onChangeBgColor = content => setAttributes({background_color: content});
        const colors = [
            { name: 'orange', color: '#f29919' },
            { name: 'dark', color: '#1a2731' },
            { name: 'red', color: '#d13f29' },
        ];

        let block_style = { backgroundColor: background_color };

        return (
            <div className="voxtell-business">
                <InspectorControls>
                    <label className="blocks-base-control__label"><strong>background color</strong></label>
                    <ColorPalette
                        colors={colors}
                        value={background_color}
                        onChange={ onChangeBgColor } // onChange event callback
                    />
                </InspectorControls>
                {/* whyv page hero only background image */}
                <section className="hero-notext" style={{
                    backgroundImage: `url(${heroImg})`
                }}>
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
                </section>
                {/* whyv page hero end */}

                <section id="vb-under-hero" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <div className="text">
                                    <h4 className="title--alt">
                                        <RichText value={text1} onChange={handleText1} />
                                    </h4>
                                    <p className="para">
                                        <RichText value={text2} onChange={handleText2} />
                                    </p>
                                </div>
                            </div>
                            <div className="right-col">
                                <div className="box vbh-box" style={block_style}>
                                    <p className="para title">
                                        <RichText value={text3} onChange={handleText3} />
                                    </p>
                                    <p className="para">
                                        <RichText value={text4} onChange={handleText4} />
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row cta">
                            <button className="btn">
                                <RichText value={text5} onChange={handleText5} />
                            </button>
                        </div>
                        <div className="center">
                            <URLInputButton url={link1} onChange={handleLink1}/>
                        </div>
                    </div>
                    {/* container */}
                </section>
            </div>
        )
    },

    save: props => {
        const { heroImg, text1, text2, text3, text4, text5, link1, background_color } = props.attributes;
        let block_style = { backgroundColor: background_color };

        return (
            <div className="voxtell-business">
                {/* whyv page hero only background image */}
                <section className="hero-notext" style={{
                    backgroundImage: `url(${heroImg})`
                }}>
                </section>
                {/* whyv page hero end */}

                <section id="vb-under-hero" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <div className="text">
                                    <h4 className="title--alt">
                                        <RichText.Content value={text1} />
                                    </h4>
                                    <p className="para">
                                        <RichText.Content value={text2} />
                                    </p>
                                </div>
                            </div>
                            <div className="right-col">
                                <div className="box vbh-box" style={block_style}>
                                    <p className="para title">
                                        <RichText.Content value={text3} />
                                    </p>
                                    <p className="para">
                                        <RichText.Content value={text4} />
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row cta">
                            <a href={link1} className="btn">
                                <RichText.Content value={text5} />
                            </a>
                        </div>
                    </div>
                    {/* container */}
                </section>
            </div>
        );
    }
});
