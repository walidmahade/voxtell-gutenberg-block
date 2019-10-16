const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload, URLInput } = wp.editor;
const { TextareaControl  } = wp.components;

registerBlockType("cgb/voxtell-business-pricing", {
    title: __( "VoxTell Business Pricing" ),
    icon: "edit",
    category: "what-we-do",
    keywords: [ __( "Business" ), __( "Voxtell" ), __("Pricing") ],
    attributes: {
        text1: {
            type: "string",
            default: "Plans And pricing"
        },
        text2: {
            type: "string",
            default: "Most popular"
        },
        text3: {
            type: "string",
            default: "Voxtell Busines Unlimited"
        },
        text4: {
            type: "string",
            default: "<li>Professional call-center features</li> <li>Unlimited inbound calls</li> <li>Helpdesk integrations and API</li> <li>Smart queuing</li> <li>Phone support</li>"
        },
        text5: {
            type: "string",
            default: "per user per month"
        },
        text6: {
            type: "string",
            default: "Voxtell Business Metere"
        },
        text7: {
            type: "string",
            default: "<li>All Features of Premium Plan</li><li>Salesforce integration</li><li>Advanced analytics and reporting</li><li>Unlimited concurrent calls</li><li>Account manager and 7/7 hotline</li>"
        },
        text8: {
            type: "string",
            default: "per user per month"
        },
        price1: {
            type: "string",
            default: "$29"
        },
        price2: {
            type: "string",
            default: "$29"
        },
        btnText1: {
            type: "string",
            default: "Get Pricing"
        },
        btnText2: {
            type: "string",
            default: "Get Pricing"
        },
        btnLink1: {
            type: "string",
            default: "#"
        },
        btnLink2: {
            type: "string",
            default: "#"
        },
    },
    edit: props => {
        const { text1, text2, text3, text4, text5, text6, text7, text8, price1, price2, btnText1, btnText2, btnLink1, btnLink2 } = props.attributes;
        const {setAttributes} = props;
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleText5 = text5 => setAttributes({ text5 });
        const handleText6 = text6 => setAttributes({ text6 });
        const handleText7 = text7 => setAttributes({ text7 });
        const handleText8 = text8 => setAttributes({ text8 });
        const handlePrice1 = price1 => setAttributes({ price1 });
        const handlePrice2 = price2 => setAttributes({ price2 });
        const handleBtnText1 = btnText1 => setAttributes({ btnText1 });
        const handleBtnText2 = btnText2 => setAttributes({ btnText2 });
        const handleBtnLink1 = btnLink1 => setAttributes({ btnLink1 });
        const handleBtnLink2 = btnLink2 => setAttributes({ btnLink2 });

        return(
            <section id="vb-price-plans" className="section">
                <InspectorControls>
                    <div>
                        <strong>Price list 1</strong>
                        <TextareaControl value={text4} onChange={handleText4} />
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div>
                        <strong>Price list 2</strong>
                        <TextareaControl value={text7} onChange={handleText7} />
                    </div>
                </InspectorControls>

                <div className="bg-overlay dots-left" />
                <div className="container">
                    <div className="row">
                        <h2 className="title--sec">
                            <RichText value={text1} onChange={handleText1} />
                        </h2>
                    </div>
                    <div className="row vb-price-boxes-row">
                        <div className="vb-price-box">
                            <div className="badge btn btn--dark">
                                <RichText value={text2} onChange={handleText2} />
                            </div>
                            <div className="box">
                                <h4 className="title--alt">
                                    <RichText value={text3} onChange={handleText3} />
                                </h4>
                                <ul className="list-checkmark">
                                    <RichText.Content value={text4} />
                                </ul>
                                <div className="cta">
                                    <div className="price">
                                        <span className="num">
                                            <RichText value={price1} onChange={handlePrice1} />
                                        </span>
                                        <span className="info">
                                            <RichText value={text5} onChange={handleText5} />
                                        </span>
                                    </div>
                                    {/* price */}
                                    <span className="btn btn--dark">
                                        <RichText value={btnText1} onChange={handleBtnText1}/>
                                    </span>
                                    <URLInput value={btnLink1} onChange={handleBtnLink1} />
                                </div>
                                {/* cta */}
                            </div>
                            {/* box */}
                        </div>
                        {/* vb-box-price */}
                        <div className="vb-price-box">
                            <div className="box">
                                <h4 className="title--alt">
                                    <RichText value={text6} onChange={handleText6}/>
                                </h4>
                                <ul className="list-checkmark">
                                    <RichText.Content value={text7} />
                                </ul>
                                <div className="cta">
                                    <div className="price">
                                        <span className="num">
                                            <RichText value={price2} onChange={handlePrice2} />
                                        </span>
                                        <span className="info">
                                            <RichText value={text8} onChange={handleText8}/>
                                        </span>
                                    </div>
                                    {/* price */}
                                    <span className="btn btn--dark">
                                        <RichText value={btnText2} onChange={handleBtnText2}/>
                                    </span>
                                    <URLInput value={btnLink2} onChange={handleBtnLink2} />
                                </div>
                                {/* cta */}
                            </div>
                            {/* box */}
                        </div>
                        {/* vb-box-price */}
                    </div>
                </div>
            </section>
        );
    },
    save: props => {
        const { text1, text2, text3, text4, text5, text6, text7, text8, price1, price2, btnText1, btnText2, btnLink1, btnLink2 } = props.attributes;

        return(
            <section id="vb-price-plans" className="section">
                <div className="bg-overlay dots-left" />
                <div className="container">
                    <div className="row">
                        <h2 className="title--sec">
                            <RichText.Content value={text1}  />
                        </h2>
                    </div>
                    <div className="row vb-price-boxes-row">
                        <div className="vb-price-box">
                            <div className="badge btn btn--dark">
                                <RichText.Content value={text2}  />
                            </div>
                            <div className="box">
                                <h4 className="title--alt">
                                    <RichText.Content value={text3}  />
                                </h4>
                                <ul className="list-checkmark">
                                    <RichText.Content value={text4}  />
                                </ul>
                                <div className="cta">
                                    <div className="price">
                                        <span className="num">
                                            <RichText.Content value={price1}  />
                                        </span>
                                        <span className="info">
                                            <RichText.Content value={text5}  />
                                        </span>
                                    </div>
                                    {/* price */}
                                    <a href={btnLink1} className="btn btn--dark">
                                        <RichText.Content value={btnText1} />
                                    </a>
                                </div>
                                {/* cta */}
                            </div>
                            {/* box */}
                        </div>
                        {/* vb-box-price */}
                        <div className="vb-price-box">
                            <div className="box">
                                <h4 className="title--alt">
                                    <RichText.Content value={text6} />
                                </h4>
                                <ul className="list-checkmark">
                                    <RichText.Content value={text7} />
                                </ul>
                                <div className="cta">
                                    <div className="price">
                                        <span className="num">
                                            <RichText.Content value={price2}  />
                                        </span>
                                        <span className="info">
                                            <RichText.Content value={text8} />
                                        </span>
                                    </div>
                                    {/* price */}
                                    <a href={btnLink2} className="btn btn--dark">
                                        <RichText.Content value={btnText2} />
                                    </a>
                                </div>
                                {/* cta */}
                            </div>
                            {/* box */}
                        </div>
                        {/* vb-box-price */}
                    </div>
                </div>
            </section>
        );
    }
});
