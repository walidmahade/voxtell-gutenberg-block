const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks, InspectorControls } = wp.editor;
const { TextareaControl } = wp.components;

registerBlockType("cgb/pricing-new-4-cols-item", {
    title: __( "Pricing new page 4 cols Item" ),
    icon: "edit",
    category: "new-pricing",
    keywords: [ __( "Pricing" ), __( "New" ), __( "cols" ), __( "item" ) ],
    attributes: {
        text1: {
            type: "string",
            default: "Call Pop"
        },
        text2: {
            type: "string",
            default: "Get an instant on-screen pop-up withthe caller's account, contacts,sales, and cases."
        }
    },

    edit: props => {
        const { text1, text2 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });

        return (
            <div className="sf__item">
                <InspectorControls>
                    <div>
                        <h4>Title</h4>
                        <div>
                            <RichText value={text1} onChange={handleText1} />
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h4>Popup Text(show on hover)</h4>
                        <div>
                            <RichText value={text2} onChange={handleText2} />
                        </div>
                    </div>
                </InspectorControls>

                <h4 className="para title">
                    <RichText.Content value={text1} />
                </h4>
                <div className="tooltip-trigger">
                    <svg x="0px" y="0px" width={30} height={30} viewBox="0 0 172 172" {...props}><g fill="none" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0 172V0h172v172z" /><path d="M70.838 17.2l2.464 91.733h25.307l2.553-91.733zm15.207 108.933c-9.42 0-15.297 5.469-15.297 14.378 0 8.83 5.883 14.289 15.297 14.289 9.414 0 15.218-5.46 15.218-14.289 0-8.91-5.798-14.378-15.218-14.378z" fill="#fff"/></g></svg>
                </div>
                <div className="tooltip-content">
                    <span>
                        <img src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg" alt={"icon"}/>
                    </span>

                    <span className="tt-txt">
                        <RichText.Content value={text2} />
                    </span>
                </div>
            </div>
        )
    },

    save: props => {
        const { text1, text2, serial } = props.attributes;

        return (
            <div className="sf__item">
                <h4 className="para title">
                    <RichText.Content value={text1} />
                </h4>
                <div className="tooltip-trigger">
                    <svg x="0px" y="0px" width={30} height={30} viewBox="0 0 172 172" {...props}><g fill="none" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0 172V0h172v172z" /><path d="M70.838 17.2l2.464 91.733h25.307l2.553-91.733zm15.207 108.933c-9.42 0-15.297 5.469-15.297 14.378 0 8.83 5.883 14.289 15.297 14.289 9.414 0 15.218-5.46 15.218-14.289 0-8.91-5.798-14.378-15.218-14.378z" fill="#fff"/></g></svg>
                </div>
                <div className="tooltip-content">
                    <span>
                        <img src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg" alt={"icon"}/>
                    </span>

                    <span className="tt-txt">
                        <RichText.Content value={text2} />
                    </span>
                </div>
            </div>
        )
    }
});
