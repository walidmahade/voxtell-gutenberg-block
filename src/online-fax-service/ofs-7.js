const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, URLInput } = wp.editor;

registerBlockType("cgb/osf-7", {
    title: __("Online Fax Service 7"),
    icon: "edit",
    category: "online-fax",
    keywords: [__("Online"), __("Fax"), __("Service"),__("ofs"), __("7")],
    attributes: {
        text1: {
            type: "string",
            default: "Save big when you switch to Voxtell vFAX."
        },
        text2: {
            type: "string",
            default: "Reduce your monthly fax expenses by up to 80%. Voxtell plans start at just $4.95 per month for up to 500 fax pages. No setup fees, upfront costs or contracts required."
        },
        text3: {
            type: "string",
            default: "$0.00"
        },
        text4: {
            type: "string",
            default: "Start your free 30-day trial"
        },
        text5: {
            type: "string",
            default: "See the difference for yourself. We're offering a full 30-day trial of our vFAX service. No contract required. Cancel anytime."
        },
        text6: {
            type: "string",
            default: "Try Us Free"
        },
        text7: {
            type: "string",
            default: "Get started in minutes, no pressure to buy."
        },
        link1: {
            type: "string",
            default: "#"
        }
    },

    edit: props => {
        const { text1, text2, text3, text4, text5,  text6,  text7, link1 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleText5 = text5 => setAttributes({ text5 });
        const handleText6 = text6 => setAttributes({ text6 });
        const handleText7 = text7 => setAttributes({ text7 });
        const handleLink1 = link1 => setAttributes({ link1 });

        return (
            <section id="ofs-cta" className="section">
                <div className="container">
                    <div className="row">
                        <h2 className="title--big">
                            <RichText value={text1} onChange={handleText1}/>
                        </h2>
                        <p className="para">
                            <RichText value={text2} onChange={handleText2}/>
                        </p>
                        <div className="box">
                            <div className="price">
                                <RichText value={text3} onChange={handleText3}/>
                            </div>
                            <h3 className="title--sec">
                                <RichText value={text4} onChange={handleText4}/>
                            </h3>
                            <p className="para">
                                <RichText value={text5} onChange={handleText5}/>
                            </p>
                            <span className="btn">
                                <RichText value={text6} onChange={handleText6}/>
                            </span>
                            <URLInput value={link1} onChange={handleLink1} />
                            <p className="para para--subt">
                                <RichText value={text7} onChange={handleText7} />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { text1, text2, text3, text4, text5,  text6,  text7, link1 } = props.attributes;

        return (
            <section id="ofs-cta" className="section">
                <div className="container">
                    <div className="row">
                        <h2 className="title--big">
                            <RichText.Content value={text1}/>
                        </h2>
                        <p className="para">
                            <RichText.Content value={text2}/>
                        </p>
                        <div className="box">
                            <div className="price">
                                <RichText.Content value={text3}/>
                            </div>
                            <h3 className="title--sec">
                                <RichText.Content value={text4}/>
                            </h3>
                            <p className="para">
                                <RichText.Content value={text5}/>
                            </p>
                            <a href={link1} className="btn">
                                <RichText.Content value={text6}/>
                            </a>
                            <p className="para para--subt">
                                <RichText.Content value={text7} />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
