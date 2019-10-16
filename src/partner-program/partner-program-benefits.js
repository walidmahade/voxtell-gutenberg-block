const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/partner-program-benefits", {
    title: __("Partner Program Benefits"),
    icon: "edit",
    category: "partner-program",
    keywords: [__("Partner"), __("Program"), __("Benefits")],
    attributes: {
        text1: {
            type: "string",
            default:
                "Your partnership with voxtell comes with many benefits, including the most straight forward commission structure in the industry."
        },
        text2: {
            type: "string",
            default: "Our technicians handle all on-site installations"
        },
        text3: {
            type: "string",
            default: "Automatic, simple commission paid monthly for a year"
        },
        text4: {
            type: "string",
            default: "Reliable and local customer service at your fingertips"
        },
        text5: {
            type: "string",
            default: "Commitment to your success and customer satisfaction"
        },
        icon1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/install.png"
        },
        icon2: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/money.png"
        },
        icon3: {
            type: "string",
            default:
                "/wp-content/themes/voxtell-custom/img/customer-service.png"
        },
        icon4: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/hands.png"
        }
    },

    edit: props => {
        const {
            text1,
            text2,
            text3,
            text4,
            text5,
            icon1,
            icon2,
            icon3,
            icon4
        } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleText5 = text5 => setAttributes({ text5 });

        const handleIcon1 = o => setAttributes({ icon1: o.sizes.full.url });
        const handleIcon2 = o => setAttributes({ icon2: o.sizes.full.url });
        const handleIcon3 = o => setAttributes({ icon3: o.sizes.full.url });
        const handleIcon4 = o => setAttributes({ icon4: o.sizes.full.url });

        return (
            <section id="pp-benefits">
                <div class="container">
                    <div class="row">
                        <h2 class="title--sec w-100">
                            <RichText value={text1} onChange={handleText1} />
                        </h2>

                        <div class="benefits">
                            <div class="benefits__item">
                                <div class="benefits__icon">
                                    <img src={icon1} alt="" />

                                    <MediaUpload
                                        onSelect={handleIcon1}
                                        type="image"
                                        value={icon1}
                                        render={({ open }) => (
                                            <button onClick={open} className="btn-editor">
                                                Change Image!
                                            </button>
                                        )}
                                    />
                                </div>
                                <h4 class="benefits__title title--alt">
                                    <RichText value={text2} onChange={handleText2}/>
                                </h4>
                            </div>
                            <div class="benefits__item">
                                <div class="benefits__icon">
                                    <img src={icon2} alt="" />

                                    <MediaUpload
                                        onSelect={handleIcon2}
                                        type="image"
                                        value={icon2}
                                        render={({ open }) => (
                                            <button
                                                onClick={open}
                                                className="btn-editor"
                                            >
                                                Change Image!
                                            </button>
                                        )}
                                    />
                                </div>
                                <h4 class="benefits__title title--alt">
                                    <RichText
                                        value={text3}
                                        onChange={handleText3}
                                    />
                                </h4>
                            </div>
                            <div class="benefits__item">
                                <div class="benefits__icon">
                                    <img src={icon3} alt="" />

                                    <MediaUpload
                                        onSelect={handleIcon3}
                                        type="image"
                                        value={icon3}
                                        render={({ open }) => (
                                            <button
                                                onClick={open}
                                                className="btn-editor"
                                            >
                                                Change Image!
                                            </button>
                                        )}
                                    />
                                </div>
                                <h4 class="benefits__title title--alt">
                                    <RichText
                                        value={text4}
                                        onChange={handleText4}
                                    />
                                </h4>
                            </div>
                            <div class="benefits__item">
                                <div class="benefits__icon">
                                    <img src={icon4} alt="" />

                                    <MediaUpload
                                        onSelect={handleIcon4}
                                        type="image"
                                        value={icon3}
                                        render={({ open }) => (
                                            <button
                                                onClick={open}
                                                className="btn-editor"
                                            >
                                                Change Image!
                                            </button>
                                        )}
                                    />
                                </div>
                                <h4 class="benefits__title title--alt">
                                    <RichText
                                        value={text5}
                                        onChange={handleText5}
                                    />
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
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
            icon1,
            icon2,
            icon3,
            icon4
        } = props.attributes;

        return (
            <section id="pp-benefits">
                <div class="container">
                    <div class="row">
                        <h2 class="title--sec w-100">
                            <RichText.Content value={text1} />
                        </h2>

                        <div class="benefits">
                            <div class="benefits__item">
                                <div class="benefits__icon">
                                    <img src={icon1} alt={text2} />
                                </div>
                                <h4 class="benefits__title title--alt">
                                    <RichText.Content value={text2} />
                                </h4>
                            </div>
                            <div class="benefits__item">
                                <div class="benefits__icon">
                                    <img src={icon2} alt={text3} />
                                </div>
                                <h4 class="benefits__title title--alt">
                                    <RichText.Content value={text3} />
                                </h4>
                            </div>
                            <div class="benefits__item">
                                <div class="benefits__icon">
                                    <img src={icon3} alt={text4} />
                                </div>
                                <h4 class="benefits__title title--alt">
                                    <RichText.Content value={text4} />
                                </h4>
                            </div>
                            <div class="benefits__item">
                                <div class="benefits__icon">
                                    <img src={icon4} alt={text5} />
                                </div>
                                <h4 class="benefits__title title--alt">
                                    <RichText.Content value={text5} />
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
