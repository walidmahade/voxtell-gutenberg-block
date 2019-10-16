const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;

registerBlockType("cgb/partner-program-apply", {
    title: __("Partner Program Apply Form"),
    icon: "edit",
    category: "partner-program",
    keywords: [__("Partner"), __("Program"), __("Apply"), __("Form")],
    attributes: {
        text1: {
            type: "string",
            default: "Interested?"
        },
        text2: {
            type: "string",
            default: "Fill out the form below to get started:"
        }
    },

    edit: props => {
        const { text1, text2 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });

        return (
            <section id="pp-apply-form">
                <div class="bg-overlay dots-left"></div>

                <div class="container">
                    <div class="row center">
                        <h2 class="title--sec w-100 light">
                            <RichText value={text1} onChange={handleText1} />
                        </h2>

                        <p class="para w-100 light">
                            <RichText value={text2} onChange={handleText2} />
                        </p>

                        <div class="form-wrap">
                            <InnerBlocks />
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { text1, text2 } = props.attributes;

        return (
            <section id="pp-apply-form">
                <div class="bg-overlay dots-left"></div>

                <div class="container">
                    <div class="row center">
                        <h2 class="title--sec w-100 light">
                            <RichText.Content value={text1} />
                        </h2>

                        <p class="para w-100 light">
                            <RichText.Content value={text2} />
                        </p>

                        <div class="form-wrap">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
