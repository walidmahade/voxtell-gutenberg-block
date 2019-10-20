const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, URLInput, InspectorControls } = wp.editor;

registerBlockType("cgb/pbxst-4", {
    title: __( "PBX sip trunk 4" ),
    icon: "edit",
    category: "pbx-sip-trunk",
    keywords: [ __( "Pbx" ), __( "Sip" ), __( "Trunk" ), __("pbxst"), __("4") ],
    attributes: {
        text1: {
            type: "string",
            default: "Get more power."
        },
        text2: {
            type: "string",
            default: "Your existing phones and devices get crisp HD audio, messaging, and video capabilities. Manage, administer, and monitor your entire system from one place—the NextOS dashboard."
        },
        text3: {
            type: "string",
            default: "Get Started"
        },
        text4: {
            type: "string",
            default: "Any PBX works."
        },
        text5: {
            type: "string",
            default: "We use a hardware solution which creates a blended SIP trunking environment. You'll get TLS, SRTP, HTTPS, SSH client/server encryption and authentication. We'll do the hard work for you."
        },
        text6: {
            type: "string",
            default: "Get started"
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/More-Power@2x.png"
        },
        img2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/PBX-SIP-Trunking.png"
        },
        link1: {
            type: "string",
            default: "#"
        },
        link2: {
            type: "string",
            default: "#"
        }
    },

    edit: props => {
        const {
            text1, text2, text3, text4, text5, text6, img1, img2, link2, link1
        } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleText5 = text5 => setAttributes({ text5 });
        const handleText6 = text6 => setAttributes({ text6 });
        const handleLink1 = link1 => setAttributes({ link1 });
        const handleLink2 = link2 => setAttributes({ link2 });

        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });
        const handleImg2 = obj => setAttributes({ img2: obj.sizes.full.url });

        return (
            <section id="pst-4" className="section">
                <InspectorControls>
                    <div>
                        <h4>Card Left Link</h4>
                        <div>
                            <URLInput value={link1} onChange={handleLink1} />
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h4>Card Right Link</h4>
                        <div>
                            <URLInput value={link2} onChange={handleLink2} />
                        </div>
                    </div>
                </InspectorControls>

                <div className="row">
                    {/* big card left */}
                    <span className="card-left">
                        <img src={img1} alt="More-Power"/>
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
                        <h2 className="title--big">
                            <RichText value={text1} onChange={handleText1} />
                        </h2>
                        <p className="para">
                            <RichText value={text2} onChange={handleText2} />
                        </p>
                        <p className="para text-link">
                            <span>
                                <RichText value={text3} onChange={handleText3} />
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={13} height="14.182" viewBox="0 0 13 14.182"><path id="Path_1256" data-name="Path 1256" d="M13,6.739,5.909,13.83,3.545,11.467,7.091,8.512H0V4.967H7.091L3.545,2.012,5.909-.352Z" transform="translate(0 0.352)" fill="#FFFFFF"/></svg>
                        </p>
                    </span>
                    {/* big card left end */}
                    {/* big card right */}
                    <span className="card-right">
                        <img src={img2} alt/>
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
                        <h2 className="title--big">
                            <RichText value={text4} onChange={handleText4} />
                        </h2>
                        <p className="para">
                            <RichText value={text5} onChange={handleText5} />
                        </p>
                        <p className="para text-link">
                            <span>
                                <RichText value={text6} onChange={handleText6} />
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={13} height="14.182" viewBox="0 0 13 14.182"><path id="Path_1256" data-name="Path 1256" d="M13,6.739,5.909,13.83,3.545,11.467,7.091,8.512H0V4.967H7.091L3.545,2.012,5.909-.352Z" transform="translate(0 0.352)" fill="#FFFFFF"/></svg>
                        </p>
                    </span>
                    {/* big card right end */}
                </div>
            </section>
        )
    },

    save: props => {
        const {
            text1, text2, text3, text4, text5, text6, img1, img2, link2, link1
        } = props.attributes;

        return (
            <section id="pst-4" className="section">
                <div className="row">
                    {/* big card left */}
                    <a href={link1} className="card-left">
                        <img src={img1} alt="More-Power"/>

                        <h2 className="title--big">
                            <RichText.Content value={text1} />
                        </h2>
                        <p className="para">
                            <RichText.Content value={text2} />
                        </p>
                        <p className="para text-link">
                            <span>
                                <RichText.Content value={text3} />
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={13} height="14.182" viewBox="0 0 13 14.182"><path id="Path_1256" data-name="Path 1256" d="M13,6.739,5.909,13.83,3.545,11.467,7.091,8.512H0V4.967H7.091L3.545,2.012,5.909-.352Z" transform="translate(0 0.352)" fill="#FFFFFF"/></svg>
                        </p>
                    </a>
                    {/* big card left end */}
                    {/* big card right */}
                    <a href={link2} className="card-right">
                        <img src={img2} alt/>

                        <h2 className="title--big">
                            <RichText.Content value={text4} />
                        </h2>
                        <p className="para">
                            <RichText.Content value={text5} />
                        </p>
                        <p className="para text-link">
                            <span>
                                <RichText.Content value={text6} />
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={13} height="14.182" viewBox="0 0 13 14.182"><path id="Path_1256" data-name="Path 1256" d="M13,6.739,5.909,13.83,3.545,11.467,7.091,8.512H0V4.967H7.091L3.545,2.012,5.909-.352Z" transform="translate(0 0.352)" fill="#FFFFFF"/></svg>
                        </p>
                    </a>
                    {/* big card right end */}
                </div>
            </section>
        )
    },
});
