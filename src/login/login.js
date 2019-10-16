const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, URLInputButton, InnerBlocks } = wp.editor;

registerBlockType("cgb/login-new", {
    title: __("Login Page New"),
    icon: "edit",
    category: "common",
    keywords: [__("Login"), __("New")],
    attributes: {
        text1: {
            type: "string",
            default: "Log in to your account"
        },
        text2: {
            type: "string",
            default:
                "Dont have an account? <a href='#'>Contact Us</a>.Copyright © 2019 Voxtell. All Rights Reserved."
        },
        text3: {
            type: "string",
            default: "The Voxtell platform is for awesome people."
        },
        text4: {
            type: "string",
            default: "The Voxtell platform is for awesome people."
        },
        text5: {
            type: "string",
            default:
                "Upgrade to our all-in -one business platform.Watch your business soar."
        },
        text6: {
            type: "string",
            default: "Sign up to receive updates and promotions."
        },
        logo: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/Logo-Voxtell.png"
        },
        icon1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/billing-acc.svg"
        },
        icon2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/admin.svg"
        },
        icon3: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/fax.svg"
        },
        iconTitle1: {
            type: "string",
            default: "Billing Account"
        },
        iconTitle2: {
            type: "string",
            default: "PBX Admin"
        },
        iconTitle3: {
            type: "string",
            default: "Voxtell vFAX"
        },
        iconInfo1: {
            type: "string",
            default:
                "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        iconInfo2: {
            type: "string",
            default:
                "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        iconInfo3: {
            type: "string",
            default:
                "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        btnText1: {
            type: "string",
            default: "Login"
        },
        btnLink1: {
            type: "string",
            default: "https://service.voxtell.com/"
        },
        btnText2: {
            type: "string",
            default: "Login"
        },
        btnLink2: {
            type: "string",
            default: "https://my.voxtell.com"
        },
        btnText3: {
            type: "string",
            default: "Login"
        },
        btnLink3: {
            type: "string",
            default: "https://vfax.voxtell.com/"
        }
    },

    edit: props => {
        const {
            text1,
            text2,
            text3,
            text4,
            text5,
            text6,
            logo,
            icon1,
            icon2,
            icon3,
            iconTitle1,
            iconTitle2,
            iconTitle3,
            iconInfo1,
            iconInfo2,
            iconInfo3,
            btnText1,
            btnLink1,
            btnText2,
            btnLink2,
            btnText3,
            btnLink3
        } = props.attributes;

        const { setAttributes } = props;

        const handleLogo = obj => setAttributes({ logo: obj.sizes.full.url });
        const handleText1 = text1 => setAttributes({ text1 });
        // icons - icon
        const handleIcon1 = obj => setAttributes({ icon1: obj.sizes.full.url });
        const handleIcon2 = obj => setAttributes({ icon2: obj.sizes.full.url });
        const handleIcon3 = obj => setAttributes({ icon3: obj.sizes.full.url });
        // icons - title
        const handleIconTitle1 = iconTitle1 => setAttributes({ iconTitle1 });
        const handleIconTitle2 = iconTitle2 => setAttributes({ iconTitle2 });
        const handleIconTitle3 = iconTitle3 => setAttributes({ iconTitle3 });
        // icons - info
        const handleIconInfo1 = iconInfo1 => setAttributes({ iconInfo1 });
        const handleIconInfo2 = iconInfo2 => setAttributes({ iconInfo2 });
        const handleIconInfo3 = iconInfo3 => setAttributes({ iconInfo3 });
        // buttons - text
        const handleBtnText1 = btnText1 => setAttributes({ btnText1 });
        const handleBtnText2 = btnText2 => setAttributes({ btnText2 });
        const handleBtnText3 = btnText3 => setAttributes({ btnText3 });
        // buttons - link
        const handleBtnLink1 = btnLink1 => setAttributes({ btnLink1 });
        const handleBtnLink2 = btnLink2 => setAttributes({ btnLink2 });
        const handleBtnLink3 = btnLink3 => setAttributes({ btnLink3 });
        // footer - text
        const handleText2 = text2 => setAttributes({ text2 });
        // right column text
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleText5 = text5 => setAttributes({ text5 });
        const handleText6 = text6 => setAttributes({ text6 });

        return (
            <section id="login-new">
                {/*  left col  */}
                <div className="left-col">
                    {/*  header end  */}
                    <div className="header">
                        <div className="brand center">
                            <img width="238" height="50" src={logo} alt="icon" />

                            <MediaUpload
                                onSelect={handleLogo}
                                type="image"
                                value={logo}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">Change Image!</button>
                                )}
                            />
                        </div>

                        <p className="para">
                            <RichText value={text1} onChange={handleText1} />
                        </p>
                    </div>
                    {/*  header end  */}

                    {/*  login cards  */}
                    <div className="login-boxes">
                        {/*  box  */}
                        <div className="box">
                            <img width="80px" height="auto" src={icon1} alt="icon" />
                            <MediaUpload
                                onSelect={handleIcon1}
                                type="image"
                                value={icon1}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">Change Image!</button>
                                )}
                            />
                            <h3 className="title--alt">
                                <RichText
                                    value={iconTitle1}
                                    onChange={handleIconTitle1}
                                />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText value={iconInfo1} onChange={handleIconInfo1}/>
                            </p>
                            <span className="btn w-100">
                                <RichText value={btnText1} onChange={handleBtnText1}/>
                            </span>
                            <URLInputButton url={btnLink1} onChange={handleBtnLink1}/>
                        </div>
                        {/*  box end  */}
                        {/*  box  */}
                        <div className="box">
                            <img width="80px" height="auto" src={icon2} alt="icon" />
                            <MediaUpload
                                onSelect={handleIcon2}
                                type="image"
                                value={icon2}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">Change Image!</button>
                                )}
                            />
                            <h3 className="title--alt">
                                <RichText
                                    value={iconTitle2}
                                    onChange={handleIconTitle2}
                                />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText value={iconInfo2} onChange={handleIconInfo2}/>
                            </p>
                            <span className="btn w-100">
                                <RichText value={btnText2} onChange={handleBtnText2}/>
                            </span>
                            <URLInputButton url={btnLink2} onChange={handleBtnLink2}/>
                        </div>
                        {/*  box end  */}
                        {/*  box  */}
                        <div className="box">
                            <img width="80px" height="auto" src={icon3} alt="icon"/>
                            <MediaUpload
                                onSelect={handleIcon3}
                                type="image"
                                value={icon3}
                                render={({ open }) => (
                                    <button onClick={open} className="btn-editor">Change Image!</button>
                                )}
                            />
                            <h3 className="title--alt">
                                <RichText value={iconTitle3} onChange={handleIconTitle3}/>
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText value={iconInfo3} onChange={handleIconInfo3}/>
                            </p>
                            <span className="btn w-100">
                                <RichText value={btnText3} onChange={handleBtnText3}/>
                            </span>
                            <URLInputButton url={btnLink3} onChange={handleBtnLink3}/>
                        </div>
                        {/*  box end  */}
                    </div>
                    {/*  login cards end  */}

                    <div className="footer center">
                        <p className="para">
                            <RichText value={text2} onChange={handleText2} />
                        </p>
                    </div>
                </div>
                {/*  end left col  */}

                {/*  right col  */}
                <div className="right-col light center">
                    <div className="bg-overlay dots-left" />

                    <h2 className="title--big light">
                        <RichText value={text3} onChange={handleText3} />
                    </h2>
                    <h2 className="title--sec light">
                        <RichText value={text4} onChange={handleText4} />
                    </h2>
                    <p className="para">
                        <RichText value={text5} onChange={handleText5} />
                    </p>

                    <div className="lead-capture-cta">
                        {/*<input type="email" required placeholder="Email Address"/>*/}
                        {/*<button className="btn btn--outline-light" type="submit">*/}
                        {/*    Submit*/}
                        {/*</button>*/}
                        <InnerBlocks />
                    </div>

                    <p className="para small">
                        <RichText value={text6} onChange={handleText6} />
                    </p>
                </div>
                {/*  end right col  */}
            </section>
        );
    },

    save: props => {
        const {
            text1,
            text2,
            text3,
            text4,
            text5,
            text6,
            logo,
            icon1,
            icon2,
            icon3,
            iconTitle1,
            iconTitle2,
            iconTitle3,
            iconInfo1,
            iconInfo2,
            iconInfo3,
            btnText1,
            btnLink1,
            btnText2,
            btnLink2,
            btnText3,
            btnLink3
        } = props.attributes;

        return (
            <section id="login-new">
                {/*  left col  */}
                <div className="left-col">
                    {/*  header end  */}
                    <div className="header">
                        <div className="brand center">
                            <img width="238" height="50" src={logo} alt={"voxtell_logo"}/>
                        </div>

                        <p className="para">
                            <RichText.Content value={text1} />
                        </p>
                    </div>
                    {/*  header end  */}

                    {/*  login cards  */}
                    <div className="login-boxes">
                        {/*  box  */}
                        <div className="box">
                            <img width="80px" height="auto" src={icon1} alt="icon" />

                            <h3 className="title--alt">
                                <RichText.Content value={iconTitle1} />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText.Content value={iconInfo1} />
                            </p>
                            <a href={btnLink1} target="_blank" className="btn w-100" rel="noopener noreferrer">
                                <RichText.Content value={btnText1} />
                            </a>
                        </div>
                        {/*  box end  */}
                        {/*  box  */}
                        <div className="box">
                            <img width="80px" height="auto" src={icon2} alt='icon'/>

                            <h3 className="title--alt">
                                <RichText.Content value={iconTitle2} />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText.Content value={iconInfo2} />
                            </p>
                            <a href={btnLink2} target="_blank" className="btn w-100" rel="noopener noreferrer">
                                <RichText.Content value={btnText2} />
                            </a>
                        </div>
                        {/*  box end  */}
                        {/*  box  */}
                        <div className="box">
                            <img width="80px" height="auto" src={icon3} />

                            <h3 className="title--alt">
                                <RichText.Content value={iconTitle3} />
                            </h3>
                            <div className="divider" />
                            <p className="para">
                                <RichText.Content value={iconInfo3} />
                            </p>
                            <a href={btnLink3} target="_blank" className="btn w-100" rel="noopener noreferrer">
                                <RichText.Content value={btnText3} />
                            </a>
                        </div>
                        {/*  box end  */}
                    </div>
                    {/*  login cards end  */}

                    <div className="footer center">
                        <p className="para">
                            <RichText.Content value={text2} />
                        </p>
                    </div>
                </div>
                {/*  end left col  */}

                {/*  right col  */}
                <div className="right-col light center">
                    <div className="bg-overlay dots-left" />

                    <h2 className="title--big light">
                        <RichText.Content value={text3} />
                    </h2>
                    <h2 className="title--sec light">
                        <RichText.Content value={text4} />
                    </h2>
                    <p className="para">
                        <RichText.Content value={text5} />
                    </p>

                    <div className="lead-capture-cta">
                        {/*<input type="email" required placeholder="Email Address"/>*/}
                        {/*<button className="btn btn--outline-light" type="submit">*/}
                        {/*    Submit*/}
                        {/*</button>*/}
                        <InnerBlocks.Content />
                    </div>

                    <p className="para small">
                        <RichText.Content value={text6} />
                    </p>
                </div>
                {/*  end right col  */}
            </section>
        );
    }
});
