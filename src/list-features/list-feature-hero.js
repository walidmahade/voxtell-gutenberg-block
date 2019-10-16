const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType("cgb/list-feature-hero", {
    title: __("List Feature Hero"),
    icon: "edit",
    category: "list-feature",
    keywords: [__("List"), __("Feature"), __("Hero")],
    attributes: {
        text1: {
            type: "string",
            default: "A Complete Phone Service Package Without The Hassle"
        },
        text2: {
            type: "string",
            default: "Discover all the features that will make your life easier and your customers happier"
        }
    },

    edit: props => {
        const { text1, text2 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });

        return (
            <section id="list-features-header">
                <div class="bg-overlay dots-left"></div>
                <div class="container">
                    <div class="row">
                        <h2 class="title--sec">
                            <RichText value={text1} onChange={handleText1} />
                        </h2>
                        <p class="para">
                            <RichText value={text2} onChange={handleText2} />
                        </p>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { text1, text2 } = props.attributes;

        return (
            <section id="list-features-header">
                <div class="bg-overlay dots-left"></div>
                <div class="container">
                    <div class="row">
                        <h2 class="title--sec">
                            <RichText.Content value={text1} />
                        </h2>
                        <p class="para">
                            <RichText.Content value={text2} />
                        </p>
                    </div>
                </div>
            </section>
        );
    }
});
