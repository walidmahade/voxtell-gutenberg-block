const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;

registerBlockType("cgb/pricing-new-acc-faq-col", {
    title: __( "Pricing new page Acc Faq col" ),
    icon: "edit",
    category: "new-pricing",
    keywords: [ __( "Pricing" ), __( "New" ),__( "acc" ), __( "faq" ), __( "col" ) ],
    attributes: {
        text1: {
            type: "string",
            default: "Communication Basic"
        }
    },

    edit: props => {
        const { text1 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });

        return (
            <div className="acc-col">
                <h3 className="title--alt">
                    <RichText value={text1} onChange={handleText1} />
                </h3>
                <div className="acc-mw">
                    <InnerBlocks allowedBlocks={['cgb/pricing-new-acc-faq-item']} />
                </div>
            </div>
        )
    },

    save: props => {
        const { text1 } = props.attributes;

        return (
            <div className="acc-col">
                <h3 className="title--alt">
                    <RichText.Content value={text1} />
                </h3>
                <div className="acc-mw">
                    <InnerBlocks.Content />
                </div>
            </div>
        )
    }
});
