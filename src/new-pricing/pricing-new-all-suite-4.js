const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks, InspectorControls } = wp.editor;
const { TextareaControl } = wp.components;

registerBlockType("cgb/pricing-new-4", {
    title: __( "Pricing new page 4" ),
    icon: "edit",
    category: "new-pricing",
    keywords: [ __( "Pricing" ), __( "New" ), __( "4" ) ],
    attributes: {
        text1: {
            type: "string",
            default: "All suites include features powered by NextOS, a single unified business platform."
        }
    },

    edit: props => {
        const { text1, text2, serial } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });

        return (
            <section id="np-all-suite">
                <div className="container">
                    <div className="row header">
                        <h2 className="title--sec w-100">
                            <RichText value={text1} onChange={handleText1} />
                        </h2>
                    </div>
                    <div className="row features">
                        {/* START col */}
                        <InnerBlocks allowedBlocks={['cgb/pricing-new-4-cols']}/>
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        const { text1, text2, serial } = props.attributes;

        return (
            <section id="np-all-suite">
                <div className="container">
                    <div className="row header">
                        <h2 className="title--sec w-100">
                            <RichText.Content value={text1}/>
                        </h2>
                    </div>
                    <div className="row features">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </section>
        )
    }
});
