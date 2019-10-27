const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks, InspectorControls } = wp.editor;
const { TextareaControl } = wp.components;

registerBlockType("cgb/pricing-new-4-cols", {
    title: __( "Pricing new page 4 cols" ),
    icon: "edit",
    category: "new-pricing",
    keywords: [ __( "Pricing" ), __( "New" ), __( "cols" ) ],
    attributes: {
        text1: {
            type: "string",
            default: "Productivity"
        }
    },

    edit: props => {
        const { text1 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });

        return (
            <div className="col">
                <h3 className="title--alt">
                    <RichText value={text1} onChange={handleText1}/>
                </h3>
                <InnerBlocks allowedBlocks={['cgb/pricing-new-4-cols-item']}/>
            </div>
        )
    },

    save: props => {
        const { text1 } = props.attributes;

        return (
            <div className="col">
                <h3 className="title--alt">
                    <RichText.Content value={text1} />
                </h3>
                <InnerBlocks.Content />
            </div>
        )
    }
});
