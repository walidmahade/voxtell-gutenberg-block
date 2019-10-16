const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType("cgb/what-we-do-sec-4", {
    title: __("What we do section 4"),
    icon: "edit",
    category: "what-we-do",
    keywords: [__("What"), __("We"), __("Do")],
    attributes: {
        text1: {
            type: "string",
            default: "Voxtell Business"
        },
        text2: {
            type: "string",
            default: "Your complete business phone solution."
        },
        text3: {
            type: "string",
            default: "Key Features:"
        },
        text4: {
            type: "string",
            default: "1. Fully Flexible and Scalable\n" +
                "\n" +
                "2. Unified Communications\n" +
                "\n" +
                "3. Security and Monitoring"
        },
        btnText1: {
            type: "string",
            default: "Learn More"
        },
        btnLink1: {
            type: "string",
            default: "#"
        },
        btnText2: {
            type: "string",
            default: "Learn More"
        },
        btnLink2: {
            type: "string",
            default: "#"
        },
        btnText3: {
            type: "string",
            default: "Learn More"
        },
        btnLink3: {
            type: "string",
            default: "#"
        },
    },

    edit: props => {
        return (
            <section id="key-features" className="section">
                <div className="container">
                    <div className="row">
                        <InnerBlocks allowedBlocks={['cgb/what-we-do-sec-4-inner']} />
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        return (
            <section id="key-features" className="section">
                <div className="container">
                    <div className="row">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </section>
        );
    }
});
