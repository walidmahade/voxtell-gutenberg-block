const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
    RichText, InspectorControls, MediaUpload, URLInput, URLInputButton
} = wp.editor;
const { TextareaControl  } = wp.components;

registerBlockType("cgb/business-phone-service-app", {
    title: __("Business Phone Service App"),
    icon: "edit",
    category: "common",
    keywords: [__("Business"), __("Phone"), __("Service")],
    attributes: {
        heroT1: {
            type: "string",
            default: "Communicate from anywhere your business"
        },
        heroT2: {
            type: "string",
            default: "Clear communication, seamless mobility, and Amazing Service. Get all the power to manage your business right on your mobile devices."
        },
        btnText1: {
            type: "string",
            default: "View the suite"
        },
        btnLink1: {
            type: "string",
            default: "#"
        },
        btnText2: {
            type: "string",
            default: "Get started"
        },
        btnLink2: {
            type: "string",
            default: "#"
        },
        heroImg: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/Business-Phone-Service-App.png"
        },
        text1: {
            type: "string",
            default: "SMS for your business. Now available on the Nextiva App."
        },
        text2: {
            type: "string",
            default: "Work<br />from<br />anywhere."
        },
        text3: {
            type: "string",
            default: "Working today is rarely limited to an office. We need to stay connected when traveling, commuting, and working from home. The Nextiva App, included in the Business Communication Suite, enables complete mobility for your Nextiva phone service."
        },
        btnText3: {
            type: "string",
            default: "Get started"
        },
        btnLink3: {
            type: "string",
            default: "#"
        },
        img2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/Complete-Mobility.png"
        },
        text4: {
            type: "string",
            default: "Feature Flexibility"
        },
        text5: {
            type: "string",
            default: "Business desk<br />phone <span className=\"orange\">optional</span>."
        },
        text6: {
            type: "string",
            default: "Make and receive calls on your computer or mobile phone. The Nextiva App keeps you connected when you're away from your office phone - or replaces your desk phone all together. It's like carrying your office in the palm of your hand."
        },
        text7: {
            type: "string",
            default: "Conferencing &amp; Collaboration"
        },
        text8: {
            type: "string",
            default: "<span className=\"orange\">Convenient</span><br />collaboration."
        },
        text9: {
            type: "string",
            default: "In addition to phone calls, the Nextiva App is loaded with collaboration tools to keep you connected to your colleagues and customers from any location. Conduct video conferences with screen-sharing from any computer or laptop. Plus, chat in real time with coworkers and teams using our instant messaging, chatroom, and SMS features on your mobile phone."
        },
        btnText4: {
            type: "string",
            default: "Get Started"
        },
        btnLink4: {
            type: "string",
            default: "#"
        },
        img3: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/Convenient-collaboration@2x.png"
        },
        img4: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/swap-devices.svg"
        },
        text10: {
            type: "string",
            default: "Swap<br />devices<span className=\"orange\">like a ninja</span>."
        },
        text11: {
            type: "string",
            default: "Call Pulling"
        },
        text12: {
            type: "string",
            default: "One of the great features of the app is the ability to seamlessly swap devices. Need to leave your office in the middle of an important call? Transfer the call to your cell phone and keep talking without missing a beat. Or vice versa, if you arrive at your office and want to transfer from cell to desk phone - now you can."
        },
        text13: {
            type: "string",
            default: "App Downloads"
        },
        text14: {
            type: "string",
            default: "Get the business phone service app."
        },
        text15: {
            type: "string",
            default: "If you already have the Business Communication Suite, download the app below."
        },
        img5: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/download-android.svg"
        },
        img6: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/download-iphone.svg"
        },
        img7: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/download-pc.svg"
        },
        img8: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/download-mac.svg"
        },
        text16: {
            type: "string",
            default: "For Android"
        },
        text17: {
            type: "string",
            default: "For iPhone"
        },
        text18: {
            type: "string",
            default: "For PC"
        },
        text19: {
            type: "string",
            default: "For Mac"
        },
        text20: {
            type: "string",
            default: "Don't have the Business Communication Suite?"
        },
        text21: {
            type: "string",
            default: "Features that make staying connected easy."
        },
        btnText5: {
            type: "string",
            default: "Get Started"
        },
        btnLink5: {
            type: "string",
            default: "#"
        },
        img9: {
            type: "string",
            default:  "/wp-content/themes/voxtell-custom/img/new-pages/Nextiva-App.svg"
        },
        img10: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/Text-Messaging.svg"
        },
        img11: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/Auto-Attendant.svg"
        },
        img12: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/Voicemail-to-Email.svg"
        },
        img13: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/Call-Queuing.svg"
        },
        img14: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/Unlimited-Calling.svg"
        },
        text22: {
            type: "string",
            default: "Nextiva App"
        },
        text23: {
            type: "string",
            default: "Stay connected with your customers, employees, and partners directly from your mobile device - no matter where you are"
        },
        text24: {
            type: "string",
            default: "Text Messaging"
        },
        text25: {
            type: "string",
            default: "Manage teams and employees by sending and receiving business text messages through the Nextiva app"
        },
        text26: {
            type: "string",
            default: "Auto Attendant"
        },
        text27: {
            type: "string",
            default: "Instant automated greeting that lets callers choose the person or department they are trying to reach"
        },
        text28: {
            type: "string",
            default: "Voicemail to Email"
        },
        text29: {
            type: "string",
            default: "Access your voicemail messages from a single source, your email account, from anywhere your business takes you"
        },
        text30: {
            type: "string",
            default: "Call Queuing"
        },
        text31: {
            type: "string",
            default: "Organize employees, teams, and departments into queues so that callers will be routed to the next available company representative in the selected queue"
        },
        text32: {
            type: "string",
            default: "Unlimited Calling"
        },
        text33: {
            type: "string",
            default: "No per-minute charges or limits when you place calls in the United States, Canada and Puerto Rico"
        },
        text34: {
            type: "string",
            default: "Have questions about the Business Communication Suite?"
        },
        text35: {
            type: "string",
            default: "Build Amazing<span className=\"orange\">Companies</span>"
        },
        btnText6: {
            type: "string",
            default: "Chat with an expert"
        },
        btnLink6: {
            type: "string",
            default: "#"
        },
    },

    edit: props => {
        const {
            heroImg, heroT1, heroT2, btnText1, btnText2, btnLink1, btnLink2,
            text1, text2, text3, btnText3, btnLink3, img2, text4, text5, text6,
            text7, text8, text9, btnText4, btnLink4, img3, img4, text10, text11,
            text12, text13, text14, text15, img5, img6, img7, img8, text16, text17,
            text18, text19, text20, btnText5, btnLink5, text21, img9, img10, img11,
            img12, img13, img14, text22, text23, text24, text25, text26, text27, text28,
            text29, text30, text31, text32, text33, text34, text35, btnText6, btnLink6
        } = props.attributes;

        const { setAttributes } = props;

        const handleHeroImg = obj => setAttributes({ logo: obj.sizes.full.url });
        const handleHeroT1 = heroT1 => setAttributes({ heroT1 });
        const handleHeroT2 = heroT2 => setAttributes({ heroT2 });
        const handleBtnText1 = btnText1 => setAttributes({ btnText1 });
        const handleBtnText2 = btnText2 => setAttributes({ btnText2 });
        const handleBtnLink1 = btnLink1 => setAttributes({ btnLink1 });
        const handleBtnLink2 = btnLink2 => setAttributes({ btnLink2 });
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
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
        const handleText13 = text13 => setAttributes({ text13 });
        const handleText14 = text14 => setAttributes({ text14 });
        const handleText15 = text15 => setAttributes({ text15 });
        const handleText16 = text16 => setAttributes({ text16 });
        const handleText17 = text17 => setAttributes({ text17 });
        const handleText18 = text18 => setAttributes({ text18 });
        const handleText19 = text19 => setAttributes({ text19 });
        const handleText20 = text20 => setAttributes({ text20 });
        const handleText21 = text21 => setAttributes({ text21 });
        const handleText22 = text22 => setAttributes({ text22 });
        const handleText23 = text23 => setAttributes({ text23 });
        const handleText24 = text24 => setAttributes({ text24 });
        const handleText25 = text25 => setAttributes({ text25 });
        const handleText26 = text26 => setAttributes({ text26 });
        const handleText27 = text27 => setAttributes({ text27 });
        const handleText28 = text28 => setAttributes({ text28 });
        const handleText29 = text29 => setAttributes({ text29 });
        const handleText30 = text30 => setAttributes({ text30 });
        const handleText31 = text31 => setAttributes({ text31 });
        const handleText32 = text32 => setAttributes({ text32 });
        const handleText33 = text33 => setAttributes({ text33 });
        const handleText34 = text34 => setAttributes({ text34 });
        const handleText35 = text35 => setAttributes({ text35 });
        const handleBtnText3 = btnText3 => setAttributes({ btnText3 });
        const handleBtnLink3 = btnLink3 => setAttributes({ btnLink3 });
        const handleBtnText4 = btnText4 => setAttributes({ btnText4 });
        const handleBtnLink4 = btnLink4 => setAttributes({ btnLink4 });
        const handleBtnText5 = btnText5 => setAttributes({ btnText5 });
        const handleBtnLink5 = btnLink5 => setAttributes({ btnLink5 });
        const handleBtnText6 = btnText6 => setAttributes({ btnText6 });
        const handleBtnLink6 = btnLink6 => setAttributes({ btnLink6 });
        const handleImg2 = obj => setAttributes({ img2: obj.sizes.full.url });
        const handleImg3 = obj => setAttributes({ img3: obj.sizes.full.url });
        const handleImg4 = obj => setAttributes({ img4: obj.sizes.full.url });
        const handleImg5 = obj => setAttributes({ img5: obj.sizes.full.url });
        const handleImg6 = obj => setAttributes({ img6: obj.sizes.full.url });
        const handleImg7 = obj => setAttributes({ img7: obj.sizes.full.url });
        const handleImg8 = obj => setAttributes({ img8: obj.sizes.full.url });
        const handleImg9 = obj => setAttributes({ img9: obj.sizes.full.url });
        const handleImg10 = obj => setAttributes({ img10: obj.sizes.full.url });
        const handleImg11 = obj => setAttributes({ img11: obj.sizes.full.url });
        const handleImg12 = obj => setAttributes({ img12: obj.sizes.full.url });
        const handleImg13 = obj => setAttributes({ img13: obj.sizes.full.url });
        const handleImg14 = obj => setAttributes({ img14: obj.sizes.full.url });

        return (
            <div>
                <InspectorControls>
                    <div>
                        <strong>Title 1</strong>
                        <TextareaControl value={text5} onChange={handleText5} />
                    </div>
                    <hr/>
                    <div>
                        <strong>Title 2</strong>
                        <TextareaControl value={text8} onChange={handleText8} />
                    </div>
                    <hr/>
                    <div>
                        <strong>Title 3</strong>
                        <TextareaControl value={text10} onChange={handleText10} />
                    </div>
                    <hr/>
                    <div>
                        <strong>Title 4</strong>
                        <TextareaControl value={text35} onChange={handleText35} />
                    </div>
                </InspectorControls>

                <section id="bps-hero" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <h2 className="title--big">
                                    <RichText value={heroT1} onchange={handleHeroT1} />
                                </h2>
                                <p className="para para--subt">
                                    <RichText value={heroT2} onchange={handleHeroT2} />
                                </p>
                                <div className="cta">
                                    <span className="btn">
                                        <RichText value={btnText1} onchange={handleBtnText1} />
                                    </span>
                                    <URLInputButton
                                        url={btnLink1}
                                        onChange={handleBtnLink1}
                                    />
                                    <span className="btn btn--outline-dark">
                                        <RichText value={btnText2} onchange={handleBtnText2} />
                                    </span>

                                    <URLInputButton url={btnLink2} onChange={handleBtnLink2} />
                                </div>
                            </div>

                            <div className="right-col">
                                <img
                                    src={heroImg}
                                    className="img-responsive"
                                />
                                <MediaUpload
                                    onSelect={handleHeroImg}
                                    type="image"
                                    value={heroImg}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="bps-2">
                    <div className="container">
                        <div className="row center">
                            <p className="para para--subt w-100">
                                <RichText value={text1} onchange={handleText1} />
                            </p>
                        </div>
                    </div>
                </section>
                <section id="bps-hero-2" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <h2 className="title--big">
                                    <RichText value={text2} onchange={handleText2} />
                                </h2>
                                <p className="para para--subt">
                                    <RichText value={text3} onchange={handleText3} />
                                </p>
                                <div className="cta">
                                    <span className="btn btn--outline-dark">
                                        <RichText value={btnText3} onchange={handleBtnText3} />
                                    </span>
                                    <URLInputButton url={btnLink3} onChange={handleBtnLink3}/>
                                </div>
                            </div>

                            <div className="right-col">
                                <img src={img2} className="img-responsive"/>

                                <MediaUpload
                                    onSelect={handleImg2}
                                    type="image"
                                    value={img2}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="bps-3" className="section">
                    <div className="container">
                        <div className="row">
                            <p className="para para--subt w-100">
                                <RichText value={text4} onchange={handleText4} />
                            </p>
                            <h2 className="title--big w-100">
                                <RichText.Content value={text5} />
                            </h2>
                            <p className="para w-100">
                                <RichText value={text6} onchange={handleText6} />
                            </p>
                        </div>
                    </div>
                </section>
                <section id="bps-4" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <p className="para para--subt w-100">
                                    <RichText value={text7} onchange={handleText7} />
                                </p>
                                <h2 className="title--big w-100">
                                    <RichText.Content value={text8} />
                                </h2>
                                <p className="para w-100">
                                    <RichText value={text9} onchange={handleText9} />
                                </p>
                                <span className="btn">
                                    <RichText value={btnText4} onchange={handleBtnText4} />
                                </span>
                                <URLInputButton url={btnLink4} onChange={handleBtnLink4}/>
                            </div>
                            <div className="right-col">
                                <img src={img3} className="img-responsive"/>
                                <MediaUpload
                                    onSelect={handleImg3}
                                    type="image"
                                    value={img3}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="bps-5" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <img src={img4} />

                                <MediaUpload
                                    onSelect={handleImg4}
                                    type="image"
                                    value={img3}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />

                                <h2 className="title--big">
                                    <RichText.Content value={text10} />
                                </h2>
                            </div>
                            <div className="right-col">
                                <p className="para para--subt">
                                    <RichText value={text11} onchange={handleText11} />
                                </p>
                                <p className="para">
                                    <RichText value={text12} onchange={handleText12} />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="bps-app" className="section">
                    <div className="container">
                        <div className="row">
                            <p className="para para--subt">
                                <RichText value={text13} onchange={handleText13} />
                            </p>
                            <h2 className="title--big">
                                <RichText value={text14} onchange={handleText14} />
                            </h2>
                            <p className="para">
                                <RichText value={text15} onchange={handleText15} />
                            </p>
                        </div>
                    </div>
                </section>
                <section id="bps-app-btns" className="section">
                    <div className="container">
                        <div className="row">
                            <a className="download-btn" href="#">
                                <img src={img5} alt="download from playstore"/>
                                <MediaUpload
                                    onSelect={handleImg5}
                                    type="image"
                                    value={img5}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                                <p><RichText value={text16} onchange={handleText16} /></p>
                            </a>
                            <a className="download-btn" href="#">
                                <img src={img6} alt="download from iphone appstore"/>
                                <MediaUpload
                                    onSelect={handleImg6}
                                    type="image"
                                    value={img6}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                                <p><RichText value={text17} onchange={handleText17} /></p>
                            </a>
                            <a className="download-btn" href="#">
                                <img src={img7} alt="download for pc"/>
                                <MediaUpload
                                    onSelect={handleImg7}
                                    type="image"
                                    value={img7}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                                <p><RichText value={text18} onchange={handleText18} /></p>
                            </a>
                            <a className="download-btn" href="#">
                                <img src={img8} alt="download for mac"/>
                                <MediaUpload
                                    onSelect={handleImg8}
                                    type="image"
                                    value={img8}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                                <p><RichText value={text19} onchange={handleText19} /></p>
                            </a>
                        </div>
                    </div>
                </section>
                <section id="bps-6" className="section">
                    <div className="container">
                        <div className="row top">
                            <p className="para w-100">
                                <RichText value={text20} onchange={handleText20} />
                            </p>
                            <span className="btn">
                                <RichText value={btnText5} onchange={handleBtnText5} />
                            </span>
                            <URLInputButton value={btnLink5} onChange={handleBtnLink5}/>
                        </div>
                        <div className="row title">
                            <h2 className="title--big">
                                <RichText value={text21} onchange={handleText21} />
                            </h2>
                        </div>
                        <div className="row features">
                            {/* item */}
                            <div className="features__item">
                                <img src={img9} alt className="icon"/>
                                <MediaUpload
                                    onSelect={handleImg9}
                                    type="image"
                                    value={img9}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                                <h2 className="title--sec">
                                    <RichText value={text22} onchange={handleText22} />
                                </h2>
                                <p className="para">
                                    <RichText value={text23} onchange={handleText23} />
                                </p>
                            </div>
                            {/* item end */}
                            {/* item */}
                            <div className="features__item">
                                <img src={img10} alt className="icon"/>
                                <MediaUpload
                                    onSelect={handleImg10}
                                    type="image"
                                    value={img10}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                                <h2 className="title--sec">
                                    <RichText value={text24} onchange={handleText24} />
                                </h2>
                                <p className="para">
                                    <RichText value={text25} onchange={handleText25} />
                                </p>
                            </div>
                            {/* item end */}
                            {/* item */}
                            <div className="features__item">
                                <img src={img11} className="icon"/>
                                <MediaUpload
                                    onSelect={handleImg11}
                                    type="image"
                                    value={img11}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                                <h2 className="title--sec">
                                    <RichText value={text26} onchange={handleText26} />
                                </h2>
                                <p className="para">
                                    <RichText value={text27} onchange={handleText27} />
                                </p>
                            </div>
                            {/* item end */}
                            {/* item */}
                            <div className="features__item">
                                <img src={img12} className="icon"/>
                                <MediaUpload
                                    onSelect={handleImg12}
                                    type="image"
                                    value={img12}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                                <h2 className="title--sec">
                                    <RichText value={text28} onchange={handleText28} />
                                </h2>
                                <p className="para">
                                    <RichText value={text29} onchange={handleText29} />
                                </p>
                            </div>
                            {/* item end */}
                            {/* item */}
                            <div className="features__item">
                                <img src={img13} className="icon"/>
                                <MediaUpload
                                    onSelect={handleImg13}
                                    type="image"
                                    value={img13}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                                <h2 className="title--sec">
                                    <RichText value={text30} onchange={handleText30} />
                                </h2>
                                <p className="para">
                                    <RichText value={text31} onchange={handleText31} />
                                </p>
                            </div>
                            {/* item end */}
                            {/* item */}
                            <div className="features__item">
                                <img src={img14} className="icon"/>
                                <MediaUpload
                                    onSelect={handleImg14}
                                    type="image"
                                    value={img14}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">Change Image!</button>
                                    )}
                                />
                                <h2 className="title--sec">
                                    <RichText value={text32} onchange={handleText32} />
                                </h2>
                                <p className="para">
                                    <RichText value={text33} onchange={handleText33} />
                                </p>
                            </div>
                            {/* item end */}
                        </div>
                        <div className="row bottom">
                            <h2 className="title--sec">
                                <RichText value={text34} onchange={handleText34} />
                            </h2>
                            <div className="cta">
                                <span className="btn">
                                    <RichText value={btnText6} onchange={handleBtnText6} />
                                </span>
                                <URLInputButton value={btnLink6} onchange={handleBtnLink6} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    },

    save: props => {
        const {
            heroImg, heroT1, heroT2, btnText1, btnText2, btnLink1, btnLink2,
            text1, text2, text3, btnText3, btnLink3, img2, text4, text5, text6,
            text7, text8, text9, btnText4, btnLink4, img3, img4, text10, text11,
            text12, text13, text14, text15, img5, img6, img7, img8, text16, text17,
            text18, text19, text20, btnText5, btnLink5, text21, img9, img10, img11,
            img12, img13, img14, text22, text23, text24, text25, text26, text27, text28,
            text29, text30, text31, text32, text33, text34, text35, btnText6, btnLink6
        } = props.attributes;

        return (
            <div>
                <section id="bps-hero" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <h2 className="title--big">
                                    <RichText.Content value={heroT1} />
                                </h2>
                                <p className="para para--subt">
                                    <RichText.Content value={heroT2} />
                                </p>
                                <div className="cta">
                                    <a href={btnLink1} className="btn">
                                        <RichText.Content value={btnText1} />
                                    </a>
                                    <a href={btnLink2} className="btn btn--outline-dark">
                                        <RichText.Content value={btnText2} />
                                    </a>
                                </div>
                            </div>
                            <div className="right-col">
                                <img src={heroImg} alt="business phone service app" className="img-responsive"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="bps-2">
                    <div className="container">
                        <div className="row center">
                            <p className="para para--subt w-100">
                                <RichText.Content value={text1} />
                            </p>
                        </div>
                    </div>
                </section>
                <section id="bps-hero-2" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <h2 className="title--big">
                                    <RichText.Content value={text2} />
                                </h2>
                                <p className="para para--subt">
                                    <RichText.Content value={text3} />
                                </p>
                                <div className="cta">
                                    <a href={btnLink3} className="btn btn--outline-dark">
                                        <RichText.Content value={btnText3} />
                                    </a>
                                </div>
                            </div>
                            <div className="right-col">
                                <img src={img2} alt="business phone service app" className="img-responsive"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="bps-3" className="section">
                    <div className="container">
                        <div className="row">
                            <p className="para para--subt w-100">
                                <RichText.Content value={text4} />
                            </p>
                            <h2 className="title--big w-100">
                                <RichText.Content value={text5} />
                            </h2>
                            <p className="para w-100">
                                <RichText.Content value={text6} />
                            </p>
                        </div>
                    </div>
                </section>
                <section id="bps-4" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <p className="para para--subt w-100">
                                    <RichText.Content value={text7} />
                                </p>
                                <h2 className="title--big w-100">
                                    <RichText.Content value={text8} />
                                </h2>
                                <p className="para w-100">
                                    <RichText.Content value={text9} />
                                </p>
                                <a href={btnLink4} className="btn">
                                    <RichText.Content value={btnText4} />
                                </a>
                            </div>
                            <div className="right-col">
                                <img src={img3} className="img-responsive"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="bps-5" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <img src={img4} />
                                <h2 className="title--big">
                                    <RichText.Content value={text10} />
                                </h2>
                            </div>
                            <div className="right-col">
                                <p className="para para--subt">
                                    <RichText.Content value={text11} />
                                </p>
                                <p className="para">
                                    <RichText.Content value={text12} />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="bps-app" className="section">
                    <div className="container">
                        <div className="row">
                            <p className="para para--subt">
                                <RichText.Content value={text13} />
                            </p>
                            <h2 className="title--big">
                                <RichText.Content value={text14} />
                            </h2>
                            <p className="para">
                                <RichText.Content value={text15} />
                            </p>
                        </div>
                    </div>
                </section>
                <section id="bps-app-btns" className="section">
                    <div className="container">
                        <div className="row">
                            <a className="download-btn" href="#">
                                <img src={img5} alt="download from playstore"/>
                                <p><RichText.Content value={text16} /></p>
                            </a>
                            <a className="download-btn" href="#">
                                <img src={img6} alt="download from iphone appstore"/>
                                <p><RichText.Content value={text17} /></p>
                            </a>
                            <a className="download-btn" href="#">
                                <img src={img7} alt="download for pc"/>
                                <p><RichText.Content value={text18} /></p>
                            </a>
                            <a className="download-btn" href="#">
                                <img src={img8} alt="download for mac"/>
                                <p><RichText.Content value={text19} /></p>
                            </a>
                        </div>
                    </div>
                </section>
                <section id="bps-6" className="section">
                    <div className="container">
                        <div className="row top">
                            <p className="para w-100">
                                <RichText.Content value={text20} />
                            </p>
                            <a href={btnLink5} className="btn">
                                <RichText.Content value={btnText5} />
                            </a>
                        </div>
                        <div className="row title">
                            <h2 className="title--big">
                                <RichText.Content value={text21} />
                            </h2>
                        </div>
                        <div className="row features">
                            {/* item */}
                            <div className="features__item">
                                <img src={img9} alt className="icon"/>
                                <h2 className="title--sec"><RichText.Content value={text22} /></h2>
                                <p className="para">
                                    <RichText.Content value={text23} />
                                </p>
                            </div>
                            {/* item end */}
                            {/* item */}
                            <div className="features__item">
                                <img src={img10} alt className="icon"/>
                                <h2 className="title--sec"><RichText.Content value={text24} /></h2>
                                <p className="para">
                                    <RichText.Content value={text25} />
                                </p>
                            </div>
                            {/* item end */}
                            {/* item */}
                            <div className="features__item">
                                <img src={img11} alt className="icon"/>
                                <h2 className="title--sec"><RichText.Content value={text26} /></h2>
                                <p className="para">
                                    <RichText.Content value={text27} />
                                </p>
                            </div>
                            {/* item end */}
                            {/* item */}
                            <div className="features__item">
                                <img src={img12} className="icon"/>
                                <h2 className="title--sec">
                                    <RichText.Content value={text28} />
                                </h2>
                                <p className="para">
                                    <RichText.Content value={text29} />
                                </p>
                            </div>
                            {/* item end */}
                            {/* item */}
                            <div className="features__item">
                                <img src={img13} className="icon"/>
                                <h2 className="title--sec"><RichText.Content value={text30} /></h2>
                                <p className="para">
                                    <RichText.Content value={text31} />
                                </p>
                            </div>
                            {/* item end */}
                            {/* item */}
                            <div className="features__item">
                                <img src={img14} className="icon"/>
                                <h2 className="title--sec">
                                    <RichText.Content value={text32} />
                                </h2>
                                <p className="para">
                                    <RichText.Content value={text33} />
                                </p>
                            </div>
                            {/* item end */}
                        </div>
                        <div className="row bottom">
                            <h2 className="title--sec">
                                <RichText.Content value={text34} />
                            </h2>
                            <div className="cta">
                                <a href={btnLink6} className="btn">
                                    <RichText.Content value={btnText6} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});
