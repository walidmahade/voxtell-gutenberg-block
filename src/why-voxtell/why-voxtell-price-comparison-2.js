const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, URLInput } = wp.editor;
const { TextareaControl  } = wp.components;

registerBlockType("cgb/why-voxtell-price-compare", {
    title: __("why voxtell price compare"),
    icon: "edit",
    category: "why-voxtell",
    keywords: [__("why"), __("voxtell"), __("price")],
    attributes: {
        text1: {
            type: "string",
            default: "How We Compare to the Other Guys"
        },
        text2: {
            type: "string",
            default: "Our transparent pricing is competitive - our plans come pre-loaded <br/> with features that other service providers charge extra for."
        },
        text3: {
            type: "string",
            default: "Traditional Phone Line"
        },
        text4: {
            type: "string",
            default: '<p class="pi"> Equipment &amp; Setup plus per line fees </p>\n' +
                '<p class="pi">$1,000-40,000 initial investment </p>\n' +
                '<p class="pi">Huge initial investment &amp; various contracts</p>\n' +
                '<p class="pi">4.5 to 9 cents per minute</p>\n' +
                '<p class="pi">$2-5 per number, per month</p>\n' +
                '<p class="pi">Not available on all (Additional charge)</p>\n' +
                '<p class="pi">As low as 3 included (additional charge)</p>\n' +
                '<p class="pi">Unavailable for most systems</p>\n' +
                '<p class="pi">Up to $400 per month (Additional charge)</p>\n' +
                '<p class="pi">Adds up to $40,000 plus $400 per month and $40 per line per month</p>'
        },
        text5: {
            type: "string",
            default: "Voxtell Business Unlimited"
        },
        text6: {
            type: "string",
            default: '<p class="pi">\n' +
                '  <span class="ppi__title">$20 per user, per month</span>\n' +
                '  <span>Only pay for as many as you need</span>\n' +
                '</p>\n' +
                '<p class="pi">\n' +
                '  <span class="ppi__title">No Setup Fee</span>\n' +
                '  <span>Included in the price</span>\n' +
                '</p>\n' +
                '<p class="pi">\n' +
                '  <span class="ppi__title">No Contracts</span>\n' +
                '  <span>No risk or bait and switch here</span>\n' +
                '</p>\n' +
                '<p class="pi">\n' +
                '  <span class="ppi__title">Nationwide Local &amp; Long Distance</span>\n' +
                '  <span>Included in the price</span>\n' +
                '</p>\n' +
                '<p class="pi">\n' +
                '  <span class="ppi__title">2 FREE Phone Numbers</span>\n' +
                '  <span>$1 per month each additional</span>\n' +
                '</p>\n' +
                '<p class="pi">\n' +
                '  <span class="ppi__title">Ulimited Auto-Attendants</span>\n' +
                '  <span>Included in the price</span>\n' +
                '</p>\n' +
                '<p class="pi">\n' +
                '  <span class="ppi__title">Unlimited Call Groups</span>\n' +
                '  <span>Included in the price</span>\n' +
                '</p>\n' +
                '<p class="pi">\n' +
                '  <span class="ppi__title">Unlimited Voicemail Transcriptions</span>\n' +
                '  <span>Included in the price</span>\n' +
                '</p>\n' +
                '<p class="pi">\n' +
                '  <span class="ppi__title">Unlimited Group Conferencing</span>\n' +
                '  <span>2 FREE Bridges included</span>\n' +
                '</p>\n' +
                '<p class="pi">\n' +
                '  <span class="ppi__title">All features included, $20 per user!</span>\n' +
                '  <span>Start saving today</span>\n' +
                '</p>'
        },
        text7: {
            type: "string",
            default: "Business VoIP Competitors"
        },
        text8: {
            type: "string",
            default: '<p class="pi">$25 – $50 per user, per month</p>\n' +
                '<p class="pi">Up to $500 setup fee</p>\n' +
                '<p class="pi">1 to 3 year contracts with termination fees</p>\n' +
                '<p class="pi">Up to $50 per month and/or per minute fee</p>\n' +
                '<p class="pi">$2-5 per number, per month</p>\n' +
                '<p class="pi">Additional charge</p>\n' +
                '<p class="pi">As low as 3 included (additional charge)</p>\n' +
                '<p class="pi">25-40 cents per message or $5-30 for packages</p>\n' +
                '<p class="pi">2-4 cents per minute or $10-40 per month</p>\n' +
                '<p class="pi">Adds up to $500 plus $70 per month and $100 per line per month</p>'
        },
        btnText1: {
            type: "string",
            default: "get started"
        },
        btnLink1: {
            type: "string",
            default: "#"
        },
    },

    edit: props => {
        const {text1, text2, text3, text4, text5, text6, text7, text8, btnText1, btnLink1} = props.attributes;
        const { setAttributes } = props;
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleText5 = text5 => setAttributes({ text5 });
        const handleText6 = text6 => setAttributes({ text6 });
        const handleText7 = text7 => setAttributes({ text7 });
        const handleText8 = text8 => setAttributes({ text8 });

        const handleBtnText1 = btnText1 => setAttributes({ btnText1 });
        const handleBtnLink1 = btnLink1 => setAttributes({ btnLink1 });

        return (
            <section id="price-comparison">
                <div className="bg-overlay dots-left" />
                <div className="container">
                    <div className="row">
                        <div className="header">
                            <h2 className="title--sec">
                                <RichText value={text1} onChange={handleText1} />
                            </h2>
                            <p className="para">
                                <RichText value={text2} onChange={handleText2} />
                            </p>
                        </div>
                        <div className="price-compare pc">
                            {/* left */}
                            <div className="pc__left">
                                <p className="heading">
                                    <RichText value={text3} onChange={handleText3} />
                                </p>
                                <div className="pricing-item-wrap">
                                    <RichText.Content value={text4} />
                                </div>
                            </div>
                            {/* left */}
                            {/* center */}
                            <div className="pc__center">
                                <p className="heading">
                                    <RichText value={text5} onChange={handleText5} />
                                </p>
                                <div className="pricing-item-wrap">
                                    <RichText.Content value={text6} />
                                </div>
                            </div>
                            {/* center */}
                            {/* right */}
                            <div className="pc__right">
                                <p className="heading">
                                    <RichText value={text7} onChange={handleText7} />
                                </p>
                                <div className="pricing-item-wrap">
                                    <RichText.Content value={text8} />
                                </div>
                            </div>
                            {/* right */}
                        </div>
                    </div>
                    <div className="row cta">
                        <span className="btn btn--dark">
                            <RichText value={btnText1} onChange={handleBtnText1} />
                        </span>
                        <URLInput value={btnLink1} onChange={handleBtnLink1} />
                    </div>
                </div>

                <InspectorControls>
                    <div>
                        <strong>Price list 1</strong>
                        <TextareaControl value={text4} onChange={handleText4} />
                    </div>
                    <br/><hr/><br/>
                    <div>
                        <strong>Price list 1</strong>
                        <TextareaControl value={text6} onChange={handleText6} />
                    </div>
                    <br/><hr/><br/>
                    <div>
                        <strong>Price list 1</strong>
                        <TextareaControl value={text8} onChange={handleText8} />
                    </div>
                </InspectorControls>

            </section>
        );
    },

    save: props => {
        const {text1, text2, text3, text4, text5, text6, text7, text8, btnText1, btnLink1} = props.attributes;

        return (
            <section id="price-comparison">
                <div className="bg-overlay dots-left" />
                <div className="container">
                    <div className="row">
                        <div className="header">
                            <h2 className="title--sec">
                                <RichText.Content value={text1} />
                            </h2>
                            <p className="para">
                                <RichText.Content value={text2} />
                            </p>
                        </div>
                        <div className="price-compare pc">
                            {/* left */}
                            <div className="pc__left">
                                <p className="heading">
                                    <RichText.Content value={text3} />
                                </p>
                                <div className="pricing-item-wrap">
                                    <RichText.Content value={text4} />
                                </div>
                            </div>
                            {/* left */}
                            {/* center */}
                            <div className="pc__center">
                                <p className="heading">
                                    <RichText.Content value={text5} />
                                </p>
                                <div className="pricing-item-wrap">
                                    <RichText.Content value={text6} />
                                </div>
                            </div>
                            {/* center */}
                            {/* right */}
                            <div className="pc__right">
                                <p className="heading">
                                    <RichText.Content value={text7} />
                                </p>
                                <div className="pricing-item-wrap">
                                    <RichText.Content value={text8} />
                                </div>
                            </div>
                            {/* right */}
                        </div>
                    </div>
                    <div className="row cta">
                        <a href={btnLink1} className="btn btn--dark">
                            <RichText.Content value={btnText1} />
                        </a>
                    </div>
                </div>
            </section>
        );
    }
});
