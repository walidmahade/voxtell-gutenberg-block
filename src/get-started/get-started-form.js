const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload, InnerBlocks } = wp.editor;

registerBlockType("cgb/get-started-form", {
    title: __("Get started form"),
    icon: "edit",
    category: "get-started",
    keywords: [__("Get"), __("Started"), __("Form")],
    attributes: {
        bgImg: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/get-started-bg.png"
        }
    },

    edit: props => {
        const { bgImg } = props.attributes;
        const { setAttributes } = props;

        const handleBgImg = obj => setAttributes({ bgImg: obj.sizes.full.url });

        return (
            <section
                id="get-started-form"
                style={{
                    backgroundImage: `url(${bgImg})`
                }}
            >
                <InspectorControls>
                    <strong>Select a background image:</strong>

                    {bgImg ? (
                        <img
                            class="editor-background-preview"
                            src={bgImg}
                            alt=""
                        />
                    ) : (
                        ""
                    )}

                    <MediaUpload
                        onSelect={handleBgImg}
                        type="image"
                        value={bgImg}
                        render={({ open }) => (
                            <button onClick={open} className="btn-editor">
                                Upload Image!
                            </button>
                        )}
                    />
                </InspectorControls>

                <div class="container">
                    <div class="row">
                        <div class="form-wrap w-100">
                            <InnerBlocks />
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { bgImg } = props.attributes;

        return (
            <section
                id="get-started-form"
                style={{
                    backgroundImage: `url(${bgImg})`
                }}
            >
                <div class="container">
                    <div class="row">
                        <div class="form-wrap w-100">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
