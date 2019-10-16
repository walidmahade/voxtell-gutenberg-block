const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType("cgb/section-title", {
    title: __("Section Title"),
    icon: "edit",
    category: "all-page-blocks",
    keywords: [__("Section"), __("Title")],
    attributes: {
        secTitle: {
            type: "string",
            default: "Careers"
        }
    },

    edit: props => {
        const { className, secTitle } = props.attributes;

        const onSecTitleChange = secTitle => props.setAttributes({ secTitle });

        return (
            <section id="page-title" class={"w-100" + " " + className}>
                <div className="container">
                    <div className="row">
                        <h1 class="title--big w-100">
                            <RichText
                                value={secTitle}
                                onChange={onSecTitleChange}
                            />
                        </h1>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { className, secTitle } = props.attributes;

        return (
            <section id="page-title" class={"w-100" + " " + className}>
                <div className="container">
                    <div className="row">
                        <h1 class="title--big w-100">
                            <RichText.Content value={secTitle} />
                        </h1>
                    </div>
                </div>
            </section>
        );
    }
});
