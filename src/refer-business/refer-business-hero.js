const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType("cgb/refer-business-hero", {
    title: __("Refer Business Hero"),
    icon: "edit",
    category: "refer-business",
    keywords: [__("Refer"), __("Business"), __("Hero")],
    attributes: {
        text1: {
            type: "string",
            default: "Refer a Business"
        },
        text2: {
            type: "string",
            default:
                "Are you a happy voxtell customer? Share the love with a friend and you can earn <br /> up to $1,000 when they sign up! It’s easy – fill out the form below to get started."
        }
    },

    edit: props => {
        const { text1, text2 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });

        return (
            <section id="page-title" class="w-100">
                <div class="container">
                    <div class="row center">
                        <h1 class="title--big center w-100">
                            <RichText value={text1} onChange={handleText1} />
                        </h1>
                        <p class="para w-100">
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
            <section id="page-title" class="w-100">
                <div class="container">
                    <div class="row center">
                        <h1 class="title--big center w-100">
                            <RichText.Content value={text1} />
                        </h1>
                        <p class="para w-100">
                            <RichText.Content value={text2} />
                        </p>
                    </div>
                </div>
            </section>
        );
    }
});
