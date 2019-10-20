const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType("cgb/pricing-new-hero", {
    title: __( "Pricing new page Hero" ),
    icon: "edit",
    category: "new-pricing",
    keywords: [ __( "Pricing" ), __( "New" ),__( "Hero" ) ],
    attributes: {
        text1: {
            type: "string",
            default: "Voxtell Pricing"
        },
        text2: {
            type: "string",
            default: "Honest. Affordable. Simple."
        },
    },

    edit: props => {
        const { text1, text2 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });

        return (
            <div className="new-pricing-page">
                <section id="np-hero" className="section">
                    <div className="container">
                        <div className="row center">
                            <h2 className="title--big w-100 center">
                                <RichText value={text1} onChange={handleText1} />
                            </h2>
                            <h2 className="title--big w-100 center">
                                <RichText value={text2} onChange={handleText2} />
                            </h2>
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
                <section id="np-hero" className="section">
                    <div className="container">
                        <div className="row center">
                            <h2 className="title--big w-100 center">
                                <RichText.Content value={text1} />
                            </h2>
                            <h2 className="title--big w-100 center">
                                <RichText.Content value={text2} />
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});
