const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks, URLInput } = wp.editor;

registerBlockType("cgb/pricing-new-3", {
    title: __( "Pricing new page 3" ),
    icon: "edit",
    category: "new-pricing",
    keywords: [ __( "Pricing" ), __( "New" ),__( "3" ) ],
    attributes: {
        text1: {
            type: "string",
            default: "Get Started"
        },
        text2: {
            type: "string",
            default: "#"
        },
    },

    edit: props => {
        const { text1, text2 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });

        return (
            <div className="new-pricing-page">
                <section id="compare-acc" className="section">
                    <div className="container">
                        <div className="row">
                            {/* START compare acc */}
                            <InnerBlocks allowedBlocks={['cgb/pricing-new-acc-section']} />
                        </div>
                        <div className="row cta">
                            <span className="btn">
                                <RichText value={text1} onChange={handleText1} />
                            </span>
                            <URLInput value={text2} onChange={handleText2} />
                        </div>
                    </div>
                </section>
            </div>
        )
    },

    save: props => {
        const { text1, text2 } = props.attributes;

        return (
            <div className="new-pricing-page">
                <section id="compare-acc" className="section">
                    <div className="container">
                        <div className="row">
                            {/* START compare acc */}
                            <InnerBlocks.Content />
                            {/* END compare acc */}
                        </div>
                        <div className="row cta">
                            <a href={text2} className="btn">
                                <RichText.Content value={text1} />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});
