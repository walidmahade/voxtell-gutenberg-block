const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/btm-5", {
    title: __( "Business Test Messaging 5" ),
    icon: "edit",
    category: "business-text-messaging",
    keywords: [ __( "Business" ), __( "Text" ), __( "Messaging" ), __( "5" ), __( "btm" ) ],
    attributes: {
        text1: {
            type: 'string',
            default: "Start using business text<br />messaging & SMS today."
        },
        text2: {
            type: 'string',
            default: "Send and receive text messages from your business phone number, directly from your iPhone or Android with the Voxtell App."
        },
        text3: {
            type: 'string',
            default: "Get Started"
        },
        text4: {
            type: 'string',
            default: "Have questions about the Business Communication Suite?"
        },
        text5: {
            type: 'string',
            default: "Get started"
        },
        link1: {
            type: 'string',
            default: "#"
        },
        link2: {
            type: 'string',
            default: "#"
        }
    },

    edit: props => {
        const {
            text1, text2, text3, text4, text5, link1, link2
        } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleText5 = text5 => setAttributes({ text5 });
        const handleLink1 = link1 => setAttributes({ link1 });
        const handleLink2 = link2 => setAttributes({ link2 });

        return (
            <section id="btm-5" className="section">
                <div className="container">
                    <div className="row center">
                        <h2 className="title--big">
                            <RichText value={text1} onChange={handleText1} />
                        </h2>
                        <p className="para">
                            <RichText value={text2} onChange={handleText2} />
                        </p>
                        <div className="cta w-100">
                            <span className="btn">
                                <RichText value={text3} onChange={handleText3} />
                            </span>
                            <URLInput value={link1} onChange={handleLink1} />
                        </div>
                    </div>
                    <div className="row bottom">
                        <h2 className="title--sec">
                            <RichText value={text4} onChange={handleText4} />
                        </h2>
                        <div className="cta">
                            <span className="btn">
                                <RichText value={text5} onChange={handleText5} />
                            </span>
                            <URLInput value={link2} onChange={handleLink2} />
                        </div>
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        const {
            text1, text2, text3, text4, text5, link1, link2
        } = props.attributes;

        return (
            <section id="btm-5" className="section">
                <div className="container">

                    <div className="row center">
                        <h2 className="title--big">
                            <RichText.Content value={text1} />
                        </h2>
                        <p className="para">
                            <RichText.Content value={text2} />
                        </p>
                        <div className="cta w-100">
                            <a href={link1} className="btn">
                                <RichText.Content value={text3} />
                            </a>
                        </div>
                    </div>

                    <div className="row bottom">
                        <h2 className="title--sec">
                            <RichText.Content value={text4} />
                        </h2>
                        <a href={link2} className="btn">
                            <RichText.Content value={text5} />
                        </a>
                    </div>

                </div>
            </section>
        )
    }
});
