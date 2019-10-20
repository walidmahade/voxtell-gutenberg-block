const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, InspectorControls } = wp.editor;

registerBlockType("cgb/osf-4", {
    title: __("Online Fax Service 4"),
    icon: "edit",
    category: "online-fax",
    keywords: [__("Online"), __("Fax"), __("Service"),__("ofs"), __("4")],
    attributes: {
        text1: {
            type: "string",
            default: "World-class security."
        },
        text2: {
            type: "string",
            default: "Every fax you send or receive uses 256-bit SSL encryption to keep your sensitive information secure. There's no paper to lose and everything is delivered directly to your inbox."
        },
        text3: {
            type: "string",
            default: "Easily managed."
        },
        text4: {
            type: "string",
            default: "All of your faxes are managed in one place, so it's easy to keep up with everything. Use a secure portal accessed through any authorized browser enabled device. You'll never lose a fax again."
        },
        text5: {
            type: "string",
            default: "Use any device."
        },
        text6: {
            type: "string",
            default: "Use your existing PC, tablet, fax machine or mobile device to send and receive faxes. We don't make you buy any new expensive equipment."
        },
        text7: {
            type: "string",
            default: "Keep your current number."
        },
        text8: {
            type: "string",
            default: "The transition to Voxtell vFAX is seamless. You'll keep all of your current information and your fax service will never be disrupted during the process."
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/easily-managed-icon.svg"
        },
        img2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/any-device-icon.svg"
        },
        bgImg1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/security-bg.svg"
        },
        bgImg2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/keep-number-bg.svg"
        }

    },

    edit: props => {
        const {
            text1, text2, text3, text4, text5, text6, text7, text8, img1, img2,
            bgImg1, bgImg2
        } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleText5 = text5 => setAttributes({ text5 });
        const handleText6 = text6 => setAttributes({ text6 });
        const handleText7 = text7 => setAttributes({ text7 });
        const handleText8 = text8 => setAttributes({ text8 });
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });
        const handleImg2 = obj => setAttributes({ img2: obj.sizes.full.url });
        const handleBgImg1 = obj => setAttributes({ bgImg1: obj.sizes.full.url });
        const handleBgImg2 = obj => setAttributes({ bgImg2: obj.sizes.full.url });

        return (
            <section id="ofs-features" className="section">
                <InspectorControls>
                    <div>
                        <h4>Background One</h4>
                        <div>
                            <img src={bgImg1} alt=""/>
                        </div>
                        <MediaUpload
                            onSelect={handleBgImg1}
                            type="image"
                            value={bgImg1}
                            render={({ open }) => (
                                <button onClick={open} className="btn-editor">Change Image!</button>
                            )}
                        />
                    </div>
                    <hr/>
                    <div>
                        <h4>Background Two</h4>
                        <img src={bgImg2} alt=""/>
                        <MediaUpload
                            onSelect={handleBgImg2}
                            type="image"
                            value={bgImg2}
                            render={({ open }) => (
                                <button onClick={open} className="btn-editor">Change Image!</button>
                            )}
                        />
                    </div>
                </InspectorControls>
                <div className="row">
                    <div className="left-col">
                        {/* START item */}
                        <div className="feature-item security" style={{
                            background: `url(${bgImg1}) center left 80px no-repeat`
                        }}>
                            <div className="content">
                                <h3 className="title--sec">
                                    <RichText value={text1} onChange={handleText1} />
                                </h3>
                                <p className="para">
                                    <RichText value={text2} onChange={handleText2} />
                                </p>
                            </div>
                        </div>
                        {/* END item */}
                        {/* START item */}
                        <div className="feature-item manage">
                            <div className="content">
                                <img src={img1} alt=""/>
                                <MediaUpload
                                    onSelect={handleImg1}
                                    type="image"
                                    value={img1}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                                <h3 className="title--big">
                                    <RichText value={text3} onChange={handleText3} />
                                </h3>

                                <p className="para">
                                    <RichText value={text4} onChange={handleText4} />
                                </p>
                            </div>
                        </div>
                        {/* END item */}
                    </div>
                    {/* END left col */}
                    <div className="right-col">
                        {/* START item */}
                        <div className="feature-item device">
                            <div className="content">
                                <img src={img2} alt=""/>
                                <MediaUpload
                                    onSelect={handleImg2}
                                    type="image"
                                    value={img2}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                                <h3 className="title--big">
                                    <RichText value={text5} onChange={handleText5} />
                                </h3>
                                <p className="para">
                                    <RichText value={text6} onChange={handleText6} />
                                </p>
                            </div>
                        </div>
                        {/* END item */}
                        {/* START item */}
                        <div className="feature-item number" style={{
                            background: `url(${bgImg2}) center right 80px no-repeat`
                        }}>
                            <div className="content">
                                <h3 className="title--sec">
                                    <RichText value={text7} onChange={handleText7} />
                                </h3>
                                <p className="para">
                                    <RichText value={text8} onChange={handleText8} />
                                </p>
                            </div>
                        </div>
                        {/* END item */}
                    </div>
                    {/* END right col */}
                </div>
                {/* END row */}
            </section>
        );
    },

    save: props => {
        const {
            text1, text2, text3, text4, text5, text6, text7, text8, img1, img2,
            bgImg1, bgImg2
        } = props.attributes;

        return (
            <section id="ofs-features" className="section">
                <div className="row">
                    <div className="left-col">
                        {/* START item */}
                        <div className="feature-item security" style={{
                            background: `url(${bgImg1}) center left 80px no-repeat`
                        }}>
                            <div className="content">
                                <h3 className="title--sec">
                                    <RichText.Content value={text1} />
                                </h3>
                                <p className="para">
                                    <RichText.Content value={text2} />
                                </p>
                            </div>
                        </div>
                        {/* END item */}
                        {/* START item */}
                        <div className="feature-item manage">
                            <div className="content">
                                <img src={img1} alt=""/>
                                <h3 className="title--big">
                                    <RichText.Content value={text3} />
                                </h3>

                                <p className="para">
                                    <RichText.Content value={text4} />
                                </p>
                            </div>
                        </div>
                        {/* END item */}
                    </div>
                    {/* END left col */}
                    <div className="right-col">
                        {/* START item */}
                        <div className="feature-item device">
                            <div className="content">
                                <img src={img2} alt=""/>
                                <h3 className="title--big">
                                    <RichText.Content value={text5} />
                                </h3>
                                <p className="para">
                                    <RichText.Content value={text6} />
                                </p>
                            </div>
                        </div>
                        {/* END item */}
                        {/* START item */}
                        <div className="feature-item number" style={{
                            background: `url(${bgImg2}) center right 80px no-repeat`
                        }}>
                            <div className="content">
                                <h3 className="title--sec">
                                    <RichText.Content value={text7} />
                                </h3>
                                <p className="para">
                                    <RichText.Content value={text8} />
                                </p>
                            </div>
                        </div>
                        {/* END item */}
                    </div>
                    {/* END right col */}
                </div>
                {/* END row */}
            </section>
        );
    }
});
