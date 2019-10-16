const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload } = wp.editor;

registerBlockType("cgb/feature-item-single", {
    title: __("Feature Item"),
    icon: "edit",
    category: "list-feature",
    keywords: [__("Feature"), __("Item")],
    attributes: {
        text1: {
            type: "string",
            default: "Title"
        },
        text2: {
            type: "string",
            default: "More details about the above title."
        },
        icon: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/house-icon-big.png"
        },
        iconWidth: { type: "string", default: "auto" },
        iconHeight: { type: "string", default: "auto" }
    },

    edit: props => {
        const { text1, text2, icon, iconWidth, iconHeight } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleIcon = obj => setAttributes({ icon: obj.sizes.full.url });
        const handleIconWidth = iconWidth => setAttributes({ iconWidth });
        const handleIconHeight = iconHeight => setAttributes({ iconHeight });

        return (
            <div class="feature-item">
                <InspectorControls>
                    <div>
                        <strong>Icon Width</strong>
                        <RichText value={iconWidth} onChange={handleIconWidth} />
                    </div>

                    <hr />

                    <div>
                        <strong>Icon Height</strong>
                        <RichText value={iconHeight} onChange={handleIconHeight} />
                    </div>
                </InspectorControls>

                <span class="icon">
                    <img width={iconWidth} height={iconHeight} src={icon} alt={text1} />
                    <MediaUpload
                        onSelect={handleIcon}
                        type="image"
                        value={icon}
                        render={({ open }) => (
                            <button onClick={open} className="btn-editor">
                                <span class="dashicons dashicons-format-image"></span>
                            </button>
                        )}
                    />
                </span>
                <span class="info">
                    <span class="title">
                        <RichText value={text1} onChange={handleText1} />
                    </span>
                    <span class="para">
                        <RichText value={text2} onChange={handleText2} />
                    </span>
                </span>
            </div>
        );
    },

    save: props => {
        const { text1, text2, icon, iconWidth, iconHeight } = props.attributes;

        return (
            <div class="feature-item">
                <span class="icon">
                    <img width={iconWidth} height={iconHeight} src={icon} alt={text1} />
                </span>
                <span class="info">
                    <span class="title">
                        <RichText.Content value={text1} />
                    </span>
                    <span class="para">
                        <RichText.Content value={text2} />
                    </span>
                </span>
            </div>
        );
    }
});
