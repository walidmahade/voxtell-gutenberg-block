const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, URLInput } = wp.editor;
const { TextareaControl } = wp.components;

registerBlockType("cgb/ofs-price-table", {
    title: __("Online Fax Service Price Table"),
    icon: "edit",
    category: "online-fax",
    keywords: [__("Online"), __("Fax"), __("Service"), __("ofs"), __("Price"), __("Table")],
    attributes: {
        text1: {
            type: "string",
            default: "Basic"
        },
        text2: {
            type: "string",
            default: "Voxtell vFax"
        },
        text3: {
            type: "string",
            default: "As low as"
        },
        text4: {
            type: "string",
            default: ""
        },
        text5: {
            type: "string",
            default: ""
        },
        text6: {
            type: "string",
            default: "500 pages/month"
        },
        text7: {
            type: "string",
            default: "Get Started"
        },
        priceMonthly: {
            type: "string",
            default: "$8<sub>.95</sub>"
        },
        priceAnnually: {
            type: "string",
            default: "$5<sub>.95</sub>"
        },
        link: {
            type: "string",
            default: "#"
        }
    },

    edit: props => {
        const {
            text1, text2, text3, text4, text5, text6, text7, link, priceMonthly, priceAnnually
        } = props.attributes;
        const { setAttributes } = props;
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        // const handleText4 = text4 => setAttributes({ text4 });
        // const handleText5 = text5 => setAttributes({ text5 });
        const handleText6 = text6 => setAttributes({ text6 });
        const handleText7 = text7 => setAttributes({ text7 });
        const handleLink = link => setAttributes({ link });
        const handleText4 = val => {
            let priceArr = val.split(".");
            let priceHtml = '$' + priceArr[0] + '<sub>.' + priceArr[1] + '</sub>';
            setAttributes({ text4: val });
            setAttributes({ priceMonthly: priceHtml });
        };
        const handleText5 = val => {
            let priceArr = val.split(".");
            let priceHtml = '$' + priceArr[0] + '<sub>.' + priceArr[1] + '</sub>';
            setAttributes({ text5: val });
            setAttributes({ priceAnnually: priceHtml });
        };

        return (
            <div className="card price-card">

                <InspectorControls>
                    <div>
                        <h4>Plan Title</h4>
                        <div>
                            <RichText value={text1} onChange={handleText1} />
                        </div>
                        <hr/>
                    </div>

                    <div>
                        <h4>Plan Subtitle</h4>
                        <div>
                            <RichText value={text2} onChange={handleText2} />
                        </div>
                        <hr/>
                    </div>

                    <div>
                        <h4>Price Title</h4>
                        <div>
                            <RichText value={text3} onChange={handleText3} />
                        </div>
                        <br/>
                    </div>
                    <div>
                        <h4>Plan Price Monthly</h4>
                        <div>
                            <RichText value={text4} onChange={handleText4} />
                        </div>
                        <br/>
                    </div>
                    <div>
                        <h4>Plan Price Annually</h4>
                        <div>
                            <RichText value={text5} onChange={handleText5} />
                        </div>
                        <hr/>
                    </div>
                    <div>
                        <h4>Benefits</h4>
                        <div>
                            <TextareaControl value={text6} onChange={handleText6} />
                        </div>
                        <hr/>
                    </div>
                    <div>
                        <h4>Button Text</h4>
                        <div>
                            <RichText value={text7} onChange={handleText7} />
                        </div>
                        <hr/>
                        <br/>
                        <h4>Button Link</h4>
                        <div>
                            <URLInput value={link} onChange={handleLink} />
                        </div>
                    </div>
                </InspectorControls>

                <div className="header light">
                    <h3 className="title--sub">
                        <RichText.Content value={text1} />
                    </h3>
                    <div className="showboat">
                        <RichText.Content value={text2} />
                    </div>
                    <div className="price price--monthly">
                        <div className="top-text">
                            <RichText.Content value={text3} />
                        </div>
                        <div className="num">
                            <RichText.Content value={priceMonthly} />
                        </div>
                        <div className="bottom-text">
                            per month
                        </div>
                    </div>
                    <div className="price price--yearly">
                        <div className="top-text">
                            As low as
                        </div>
                        <div className="num">
                            <RichText.Content value={priceAnnually} />
                        </div>
                        <div className="bottom-text">
                            per month
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p className="para">
                        <RichText.Content value={text6} />
                    </p>
                    <div className="cta">
                        <a href={link} className="btn">
                            <RichText.Content value={text7} />
                        </a>
                    </div>
                </div>
            </div>
        );
    },

    save: props => {
        const {
            text1, text2, text3, text4, text5, text6, text7, link, priceMonthly, priceAnnually
        } = props.attributes;

        return (
            <div className="card price-card">
                <div className="header light">
                    <h3 className="title--sub">
                        <RichText.Content value={text1} />
                    </h3>
                    <div className="showboat">
                        <RichText.Content value={text2} />
                    </div>
                    <div className="price price--monthly">
                        <div className="top-text">
                            <RichText.Content value={text3} />
                        </div>
                        <div className="num">
                            <RichText.Content value={priceMonthly} />
                        </div>
                        <div className="bottom-text">
                            per month
                        </div>
                    </div>
                    <div className="price price--yearly">
                        <div className="top-text">
                            As low as
                        </div>
                        <div className="num">
                            <RichText.Content value={priceAnnually} />
                        </div>
                        <div className="bottom-text">
                            per month
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p className="para">
                        <RichText.Content value={text6} />
                    </p>
                    <div className="cta">
                        <a href={link} className="btn">
                            <RichText.Content value={text7} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});
