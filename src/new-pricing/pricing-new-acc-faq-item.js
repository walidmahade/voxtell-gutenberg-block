const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks, InspectorControls } = wp.editor;
const { TextareaControl } = wp.components;

registerBlockType("cgb/pricing-new-acc-faq-item", {
    title: __( "Pricing new page Acc Faq Item" ),
    icon: "edit",
    category: "new-pricing",
    keywords: [ __( "Pricing" ), __( "New" ),__( "acc" ), __( "faq" ), __( "Item" ) ],
    attributes: {
        text1: {
            type: "string",
            default: "Included with All Plans"
        },
        text2: {
            type: "string",
            default: "<li>Unlimited calling</li><li>Unlimited Internet faxing</li><li>Voicemail with email delivery</li><li>Free local phone number</li><li>Free toll free number</li><li>Keep your existing number</li><li>Advanced call management</li><li>Auto attendant</li><li>Call logs</li><li>Multi-site support</li>"
        },
        serial: {
            type: "string",
            default: ""
        }
    },

    edit: props => {
        const { text1, text2, serial } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = serial => setAttributes({ serial });

        return (
            <div className="acc-mw__item" data-acc-open-id={serial}>
                <InspectorControls>
                    <div>
                        <h4>Serial No</h4>
                        <div>
                            <RichText value={serial} onChange={handleText3} />
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h4>Item title</h4>
                        <div>
                            <RichText value={text1} onChange={handleText1} />
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h4>Item offers/benefits</h4>
                        <div>
                            <TextareaControl value={text2} onChange={handleText2} />
                        </div>
                    </div>
                </InspectorControls>

                <div className="acc-mw__head">
                    <span className="acc-mw__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={7} height="10.818" viewBox="0 0 7 10.818"><g id="Group_4167" data-name="Group 4167" transform="translate(0 10.818) rotate(-90)"><path id="Path_14" data-name="Path 14" d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z" fill="#E97514"/></g></svg>
                    </span>
                    <div className="para acc-mw__title">
                        <RichText.Content value={text1} />
                    </div>
                </div>

                <div className="para acc-mw__body">
                    <ul>
                        <RichText.Content value={text2} />
                    </ul>
                </div>
            </div>
        )
    },

    save: props => {
        const { text1, text2, serial } = props.attributes;

        return (
            <div className="acc-mw__item" data-acc-open-id={serial}>
                <div className="acc-mw__head">
                    <span className="acc-mw__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={7} height="10.818" viewBox="0 0 7 10.818"><g id="Group_4167" data-name="Group 4167" transform="translate(0 10.818) rotate(-90)"><path id="Path_14" data-name="Path 14" d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z" fill="#E97514"/></g></svg>
                    </span>
                    <div className="para acc-mw__title">
                        <RichText.Content value={text1} />
                    </div>
                </div>

                <div className="para acc-mw__body">
                    <ul>
                        <RichText.Content value={text2} />
                    </ul>
                </div>
            </div>
        )
    }
});
