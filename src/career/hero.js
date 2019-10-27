const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType("cgb/careers-hero", {
    title: __("Careers Hero"),
    icon: "edit",
    category: "careers-page-blocks",
    keywords: [__("Careers"), __("Hero")],
    attributes: {
        secTitle: {
            type: "string",
            default: "Available Opportunities"
        },
        subTitle: {
            type: "string",
            default:
                "Don’t see an opportunity that fits your amazing skill set? We still want to hear from you! Apply here."
        }
    },

    edit: props => {
        const onSecTitleChange = secTitle => props.setAttributes({ secTitle });
        const subTitleChange = subTitle => props.setAttributes({ subTitle });

        return (
            <section id="careers-hero">
                <div className="bg-overlay dots-right" />
                <div className="content">
                    <h2 className="title--sec">
                        <RichText value={props.attributes.secTitle} onChange={onSecTitleChange}/>
                    </h2>
                    <p className="para">
                        <RichText value={props.attributes.subTitle} onChange={subTitleChange}/>
                    </p>
                </div>
            </section>
        );
    },

    save: props => {
        return (
            <section id="careers-hero">
                <div className="bg-overlay dots-right" />
                <div className="content">
                    <h2 className="title--sec">
                        <RichText.Content value={ props.attributes.secTitle }/>
                    </h2>
                    <p className="para">
                        <RichText.Content value={ props.attributes.subTitle }/>
                    </p>
                </div>
            </section>
        );
    }
});
