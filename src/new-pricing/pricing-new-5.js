const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks, URLInput } = wp.editor;

registerBlockType("cgb/pricing-new-5", {
    title: __( "Pricing new page 5" ),
    icon: "edit",
    category: "new-pricing",
    keywords: [ __( "Pricing" ), __( "New" ), __( "5" ) ],
    attributes: {
        text1: {
            type: "string",
            default: "Any questions?"
        },
        text2: {
            type: "string",
            default: "Start growing fearlessly today."
        },
        text3: {
            type: "string",
            default: "Get started"
        },
        text4: {
            type: "string",
            default: "#"
        }
    },

    edit: props => {
        const { text1, text2, text3, text4 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });

        return (
            <div className="new-pricing-page">
                <section id="pricing-faq-header" className="section">
                    <div className="container">
                        <div className="row">
                            <h1 className="title--big center w-100 center">
                                <RichText value={text1} onChange={handleText1} />
                            </h1>
                        </div>
                    </div>
                </section>

                <InnerBlocks allowedBlocks={['cgb/faq']} />

                <section id="pricing-faq-header-2" className="section--last">
                    <div className="container">
                        <div className="row">
                            <h1 className="title--big center w-100 center">
                                <RichText value={text2} onChange={handleText2} />
                            </h1>
                            <div className="cta center">
                                <span className="btn">
                                    <RichText value={text3} onChange={handleText3} />
                                </span>
                                <URLInput value={text4} onChange={handleText4} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    },

    save: props => {
        const { text1, text2, text3, text4 } = props.attributes;

        return (
            <div className="new-pricing-page">

                <section id="pricing-faq-header" className="section">
                    <div className="container">
                        <div className="row">
                            <h1 className="title--big center w-100 center">
                                <RichText.Content value={text1} />
                            </h1>
                        </div>
                    </div>
                </section>

                <InnerBlocks.Content />

                <section id="pricing-faq-header-2" className="section--last">
                    <div className="container">
                        <div className="row">
                            <h1 className="title--big center w-100 center">
                                <RichText.Content value={text2} />
                            </h1>
                            <div className="cta center">
                                <a href={text4} className="btn">
                                    <RichText.Content value={text3} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
});
