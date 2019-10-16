const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType("cgb/get-started-hero", {
    title: __("Get started hero"),
    icon: "edit",
    category: "get-started",
    keywords: [__("Get"), __("Started")],
    attributes: {
        secTitle: {
            type: "string",
            default: "Get Started"
        },
        subTitle: {
            type: "string",
            default: "Contact us to learn how voxtell’s solutions can move your business forward."
        }
    },

    edit: props => {
        const { secTitle, subTitle } = props.attributes;
        const { setAttributes } = props;

        const secTitleChange = secTitle => setAttributes({ secTitle });
        const subTitleChange = subTitle => setAttributes({ subTitle });

        return (
            <div className="page-get-started">
                <section id="page-title" class="w-100">
                    <div class="container">
                        <div class="row">
                            <h1 class="title--big">
                                <RichText value={secTitle} onChange={secTitleChange} />
                            </h1>
                            <p class="para left">
                                <RichText value={subTitle} onChange={subTitleChange} />
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    },

    save: props => {
        const { secTitle, subTitle } = props.attributes;

        return (
            <div className="page-get-started">
                <section id="page-title" class="w-100">
                    <div class="container">
                        <div class="row">
                            <h1 class="title--big">
                                <RichText.Content value={secTitle} />
                            </h1>
                            <p class="para left">
                                <RichText.Content value={subTitle} />
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});
