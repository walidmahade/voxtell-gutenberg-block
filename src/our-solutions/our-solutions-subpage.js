const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/our-solution-subpage", {
    title: __("Our Solutions Subpage"),
    icon: "edit",
    category: "our-solutions",
    keywords: [__("Our"), __("Solutions"), __("Subpage")],
    attributes: {
        text1: { type: "string", default: "Real Estate" },
        text2: {
            type: "string",
            default:
                "No matter the size of your real estate firm, our phone solution will give your business the professional edge. Give your agents the flexibility they need, and equip yourself with all the tools you need to grow."
        },
        textTestimonial: {
            type: "string",
            default:
                "Our network and phones “just plain work” – the services don’t go down or flake out for periods of time and we rarely even have to think about the network. I couldn’t be more pleased!"
        },
        icon: { type: "string", default: "/wp-content/themes/voxtell-custom/img/house-icon-big.png" },
        bgImg: { type: "string", default: "/wp-content/themes/voxtell-custom/img/our-solution-hero-bg.png" },
        authorImg: { type: "string", default: "/wp-content/themes/voxtell-custom/img/client-person.png" },
        authorTitle: { type: "string", default: "Rob Sullivan" },
        authorProff: { type: "string", default: "CEO at Real Estate Law" },
        featureImg1: { type: "string", default: "/wp-content/themes/voxtell-custom/img/camera-icon.png" },
        featureImg2: { type: "string", default: "/wp-content/themes/voxtell-custom/img/work-from-anywhere.png" },
        featureImg3: { type: "string", default: "/wp-content/themes/voxtell-custom/img/easy-to-use.png" },
        featureTitle1: { type: "string", default: "Make a Great First Impression" },
        featureTitle2: { type: "string", default: "Work from Anywhere " },
        featureTitle3: { type: "string", default: "Easy to Use" },
        featureInfo1: {
            type: "string",
            default:
                "Impress your potential clients! Use the Auto Attendant feature to record a bespoke message and create a phone system that directs calls to the right place every time."
        },
        featureInfo2: {
            type: "string",
            default:
                "With the Voxtell mobile app, you can handle calls just the same as if you were in the office. You can also have an international number to receive calls from clients overseas."
        },
        featureInfo3: {
            type: "string",
            default:
                "Our portal is completely intuitive, so you have all the tools you need right at your fingertips. Transform Communication For Your Business."
        }
    },

    edit: props => {
        const {
            icon,
            bgImg,
            text1,
            text2,
            textTestimonial,
            authorImg,
            authorTitle,
            authorProff,
            featureImg1,
            featureImg2,
            featureImg3,
            featureTitle1,
            featureTitle2,
            featureTitle3,
            featureInfo1,
            featureInfo2,
            featureInfo3
        } = props.attributes;

        const { setAttributes } = props;

        const onImageSelect = imgObj => setAttributes({ bgImg: imgObj.sizes.full.url });

        const handleIcon = imgObj => setAttributes({ icon: imgObj.sizes.full.url });
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleTextTestimonial = textTestimonial => setAttributes({ textTestimonial });
        const handleAuthorImg = imgObj => setAttributes({ authorImg: imgObj.sizes.full.url });
        const handleAuthorTitle = authorTitle => setAttributes({ authorTitle });
        const handleAuthorProff = authorProff => setAttributes({ authorProff });
        // features 3 box
        const handleFeatureImg1 = obj => setAttributes({ featureImg1: obj.sizes.full.url });
        const handleFeatureImg2 = obj => setAttributes({ featureImg2: obj.sizes.full.url });
        const handleFeatureImg3 = obj => setAttributes({ featureImg3: obj.sizes.full.url });

        const handleFeatureTitle1 = featureTitle1 => setAttributes({ featureTitle1 });
        const handleFeatureTitle2 = featureTitle2 => setAttributes({ featureTitle2 });
        const handleFeatureTitle3 = featureTitle3 => setAttributes({ featureTitle3 });
        const handleFeatureInfo1 = featureInfo1 => setAttributes({ featureInfo1 });
        const handleFeatureInfo2 = featureInfo2 => setAttributes({ featureInfo2 });
        const handleFeatureInfo3 = featureInfo3 => setAttributes({ featureInfo3 });

        return (
            <div>
                <InspectorControls>
                    <strong>Select Hero background image:</strong>

                    {bgImg ? <img class="editor-background-preview" src={bgImg} /> : ""}

                    <MediaUpload
                        onSelect={onImageSelect}
                        type="image"
                        value={bgImg}
                        render={({ open }) => (
                            <button onClick={open} className="btn-editor">
                                Upload Image!
                            </button>
                        )}
                    />
                </InspectorControls>

                <section id="our-sol-header" class="w-100">
                    <div class="left-col" style={{ backgroundImage: `url(${bgImg})` }} />

                    <div class="right-col">
                        <div class="title w-100">
                            <div class="icon">
                                <img src={icon} alt="" />
                                <MediaUpload
                                    onSelect={handleIcon}
                                    type="image"
                                    value={icon}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">
                                            Add Icon
                                        </button>
                                    )}
                                />
                            </div>
                            <h2 class="title--sec">
                                <RichText value={text1} onChange={handleText1} />
                            </h2>
                        </div>

                        <p class="para w-100">
                            <RichText value={text2} onChange={handleText2} />
                        </p>
                    </div>
                </section>

                <section id="our-sol-reviews">
                    <div class="container">
                        <div class="row testimonial">
                            <div class="testimonial__item">
                                <p class="testimonial__item__body para">
                                    <RichText value={textTestimonial} onChange={handleTextTestimonial} />
                                </p>

                                <div class="testimonial__item__foot">
                                    <div class="info">
                                        <h3 class="name">
                                            <RichText value={authorTitle} onChange={handleAuthorTitle} />
                                        </h3>
                                        <p class="para">
                                            <RichText value={authorProff} onChange={handleAuthorProff} />
                                        </p>
                                    </div>
                                    <div class="img">
                                        <img src={authorImg} alt="" />

                                        <MediaUpload
                                            onSelect={handleAuthorImg}
                                            type="image"
                                            value={authorImg}
                                            render={({ open }) => (
                                                <button onClick={open} className="btn-editor">
                                                    Add Image
                                                </button>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="our-sol-icon-box">
                    <div class="container">
                        <div class="row ib">
                            <div class="ib__item">
                                <img src={featureImg1} alt="make great first impression" />

                                <MediaUpload
                                    onSelect={handleFeatureImg1}
                                    type="image"
                                    value={featureImg1}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">
                                            Change Image!
                                        </button>
                                    )}
                                />

                                <h3 class="title--alt">
                                    <RichText value={featureTitle1} onChange={handleFeatureTitle1} />
                                </h3>
                                <p class="para">
                                    <RichText value={featureInfo1} onChange={handleFeatureInfo1} />
                                </p>
                            </div>

                            <div class="ib__item">
                                <img src={featureImg2} alt="work from anywhere" />

                                <MediaUpload
                                    onSelect={handleFeatureImg2}
                                    type="image"
                                    value={featureImg2}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">
                                            Change Image!
                                        </button>
                                    )}
                                />

                                <h3 class="title--alt">
                                    <RichText value={featureTitle2} onChange={handleFeatureTitle2} />
                                </h3>
                                <p class="para">
                                    <RichText value={featureInfo2} onChange={handleFeatureInfo2} />
                                </p>
                            </div>

                            <div class="ib__item">
                                <img src={featureImg3} alt="easy to use" />

                                <MediaUpload
                                    onSelect={handleFeatureImg3}
                                    type="image"
                                    value={featureImg3}
                                    render={({ open }) => (
                                        <button onClick={open} className="btn-editor">
                                            Change Image!
                                        </button>
                                    )}
                                />

                                <h3 class="title--alt">
                                    <RichText value={featureTitle3} onChange={handleFeatureTitle3} />
                                </h3>
                                <p class="para">
                                    <RichText value={featureInfo3} onChange={handleFeatureInfo3} />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="our-sol-cta">
                    <div class="container">
                        <div class="row light">
                            <h2 class="title--sec">Transform Communication For Your Business.</h2>
                            <a href="/request-a-demo/" class="btn btn--outline-light">
                                Request a demo
                            </a>
                        </div>
                    </div>
                </section>

                <section id="our-sol-diff">
                    <h2 class="title--sec center">The Voxtell Difference</h2>

                    <div class="container">
                        <div class="row">
                            <div class="osd__item">
                                <div class="icon">
                                    <img src="/wp-content/themes/voxtell-custom/img/building.png" alt="" />
                                </div>
                                <div class="info">
                                    <h3 class="title--alt">1. Request a free on-site visit</h3>
                                    <p class="para">
                                        Our specialized team will come to you and analyze your unique business needs. We will advise you on the
                                        features you need and give you a proposal at the end of the visit.
                                    </p>
                                </div>
                            </div>

                            <div class="osd__item">
                                <div class="icon">
                                    <img src="/wp-content/themes/voxtell-custom/img/telephone_(4).png" alt="" />
                                </div>
                                <div class="info">
                                    <h3 class="title--alt">2. Build your customized plan</h3>
                                    <p class="para">
                                        We will work with you to create a personalized phone solution that is the perfect fit for your business. You
                                        can trust us to recommend only the services you need.
                                    </p>
                                </div>
                            </div>

                            <div class="osd__item">
                                <div class="icon">
                                    <img src="/wp-content/themes/voxtell-custom/img/calendar_(2).png" alt="" />
                                </div>
                                <div class="info">
                                    <h3 class="title--alt">3. Schedule your installation</h3>
                                    <p class="para">
                                        Our qualified technicians will install everything as promised and make sure you have everything you need to
                                        start using your new phone solution straightaway. We will help with any integrations you may have. With our
                                        24/7 customer support, you have complete peace of mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    },

    save: props => {
        const {
            icon,
            bgImg,
            text1,
            text2,
            textTestimonial,
            authorImg,
            authorTitle,
            authorProff,
            featureImg1,
            featureImg2,
            featureImg3,
            featureTitle1,
            featureTitle2,
            featureTitle3,
            featureInfo1,
            featureInfo2,
            featureInfo3
        } = props.attributes;

        return (
            <div>
                <section id="our-sol-header" class="w-100">
                    <div class="left-col" style={{ backgroundImage: `url(${bgImg})` }} />

                    <div class="right-col">
                        <div class="title w-100">
                            <div class="icon">
                                <img src={icon} alt="" />
                            </div>
                            <h2 class="title--sec">
                                <RichText.Content value={text1} />
                            </h2>
                        </div>

                        <p class="para w-100">
                            <RichText.Content value={text2} />
                        </p>
                    </div>
                </section>

                <section id="our-sol-reviews">
                    <div class="container">
                        <div class="row testimonial">
                            <div class="testimonial__item">
                                <p class="testimonial__item__body para">
                                    <RichText.Content value={textTestimonial} />
                                </p>

                                <div class="testimonial__item__foot">
                                    <div class="info">
                                        <h3 class="name">
                                            <RichText.Content value={authorTitle} />
                                        </h3>
                                        <p class="para">
                                            <RichText.Content value={authorProff} />
                                        </p>
                                    </div>
                                    <div class="img">
                                        <img src={authorImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="our-sol-icon-box">
                    <div class="container">
                        <div class="row ib">
                            <div class="ib__item">
                                <img src={featureImg1} alt="make great first impression" />

                                <h3 class="title--alt">
                                    <RichText.Content value={featureTitle1} />
                                </h3>
                                <p class="para">
                                    <RichText.Content value={featureInfo1} />
                                </p>
                            </div>

                            <div class="ib__item">
                                <img src={featureImg2} alt="work from anywhere" />

                                <h3 class="title--alt">
                                    <RichText.Content value={featureTitle2} />
                                </h3>
                                <p class="para">
                                    <RichText.Content value={featureInfo2} />
                                </p>
                            </div>

                            <div class="ib__item">
                                <img src={featureImg3} alt="easy to use" />

                                <h3 class="title--alt">
                                    <RichText.Content value={featureTitle3} />
                                </h3>
                                <p class="para">
                                    <RichText.Content value={featureInfo3} />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="our-sol-cta">
                    <div class="container">
                        <div class="row light">
                            <h2 class="title--sec">Transform Communication For Your Business.</h2>
                            <a href="/request-a-demo/" class="btn btn--outline-light">
                                Request a demo
                            </a>
                        </div>
                    </div>
                </section>

                <section id="our-sol-diff">
                    <h2 class="title--sec center">The Voxtell Difference</h2>

                    <div class="container">
                        <div class="row">
                            <div class="osd__item">
                                <div class="icon">
                                    <img src="/wp-content/themes/voxtell-custom/img/building.png" alt="" />
                                </div>
                                <div class="info">
                                    <h3 class="title--alt">1. Request a free on-site visit</h3>
                                    <p class="para">
                                        Our specialized team will come to you and analyze your unique business needs. We will advise you on the
                                        features you need and give you a proposal at the end of the visit.
                                    </p>
                                </div>
                            </div>

                            <div class="osd__item">
                                <div class="icon">
                                    <img src="/wp-content/themes/voxtell-custom/img/telephone_(4).png" alt="" />
                                </div>
                                <div class="info">
                                    <h3 class="title--alt">2. Build your customized plan</h3>
                                    <p class="para">
                                        We will work with you to create a personalized phone solution that is the perfect fit for your business. You
                                        can trust us to recommend only the services you need.
                                    </p>
                                </div>
                            </div>

                            <div class="osd__item">
                                <div class="icon">
                                    <img src="/wp-content/themes/voxtell-custom/img/calendar_(2).png" alt="" />
                                </div>
                                <div class="info">
                                    <h3 class="title--alt">3. Schedule your installation</h3>
                                    <p class="para">
                                        Our qualified technicians will install everything as promised and make sure you have everything you need to
                                        start using your new phone solution straightaway. We will help with any integrations you may have. With our
                                        24/7 customer support, you have complete peace of mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});
