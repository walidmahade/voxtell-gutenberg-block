const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;

registerBlockType("cgb/refer-business-form", {
    title: __("Refer Business Apply Form"),
    icon: "edit",
    category: "refer-business",
    keywords: [__("Refer"), __("Business"), __("Apply"), __("Form")],
    attributes: {},

    edit: props => {
        // const { text1, text2 } = props.attributes;
        // const { setAttributes } = props;

        // const handleText1 = text1 => setAttributes({ text1 });
        // const handleText2 = text2 => setAttributes({ text2 });

        return (
            <section id="pp-apply-form" class="referb-forms">
                <div class="bg-overlay dots-right"></div>

                <div class="container">
                    <div class="row center">
                        <div class="form-wrap">
                            <InnerBlocks />
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        // const { text1, text2 } = props.attributes;

        return (
            <section id="pp-apply-form" class="referb-forms">
                <div class="bg-overlay dots-right"></div>

                <div class="container">
                    <div class="row center">
                        <div className="form-wrap">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
