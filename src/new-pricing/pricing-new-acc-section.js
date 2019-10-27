const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks, URLInput, InspectorControls } = wp.editor;

registerBlockType("cgb/pricing-new-acc-section", {
    title: __( "Pricing new page Acc section" ),
    icon: "edit",
    category: "new-pricing",
    keywords: [ __( "Pricing" ), __( "New" ),__( "acc" ), __( "Section" ) ],
    attributes: {
        text1: {
            type: "string",
            default: "Compare our most popular features"
        },
        text2: {
            type: "string",
            default: "Includes everything in the Customer Relationship Suite"
        },
        text3: {
            type: "string",
            default: ""
        },
        text4: {
            type: "string",
            default: ""
        },
    },

    edit: props => {
        const { text1, text2, text3, text4 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });

        return (
            <div className={" compare-acc-item " + " " + text4} data-acc-id={"tab-" + text3}>
                <InspectorControls>
                    <div>
                        <h4>Serial No</h4>
                        <div>
                            <RichText value={text3} onChange={handleText3}/>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h4>Class (add 'active' for no 1 item)</h4>
                        <div>
                            <RichText value={text4} onChange={handleText4}/>
                        </div>
                    </div>
                </InspectorControls>

                <div className="header w-100">
                    <h3 className="title--sec w-100 center">
                        <RichText value={text1} onChange={handleText1} />
                    </h3>
                    <p className="para--subt w-100 center">
                        <RichText value={text2} onChange={handleText2} />
                    </p>
                </div>

                <InnerBlocks allowedBlocks={['cgb/pricing-new-acc-faq-col']} />
            </div>
        )
    },

    save: props => {
        const { text1, text2, text3, text4 } = props.attributes;

        return (
            <div className={" compare-acc-item " + " " + text4} data-acc-id={"tab-" + text3}>

                <div className="header w-100">
                    <h3 className="title--sec w-100 center">
                        <RichText.Content value={text1} />
                    </h3>
                    <p className="para--subt w-100 center">
                        <RichText.Content value={text2} />
                    </p>
                </div>

                <InnerBlocks.Content />
            </div>
        )
    }
});
