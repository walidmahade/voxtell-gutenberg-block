const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload } = wp.editor;

registerBlockType("cgb/carers-team-photo", {
    title: __("Careers Team Photo"),
    icon: "edit",
    category: "careers-page-blocks",
    keywords: [__("Careers"), __("team")],
    attributes: {
        backgroundImage: {
            type: "string",
            default: "https://placehold.it/1280x600"
        }
    },

    edit: props => {
        const onImageSelect = imageObject => {
            props.setAttributes({
                backgroundImage: imageObject.sizes.full.url
            });
        };

        return (
            <section id="team-photo">
                <img
                    src={props.attributes.backgroundImage}
                    alt="Voxtell team photo"
                    class="img-responsive"
                />

                <MediaUpload
                    onSelect={onImageSelect}
                    type="image"
                    value={props.attributes.backgroundImage}
                    render={({ open }) => (
                        <button onClick={open} className="btn-editor">
                            Upload Image!
                        </button>
                    )}
                />
            </section>
        );
    },

    save: props => {
        return (
            <section id="team-photo">
                <img
                    src={props.attributes.backgroundImage}
                    alt="Voxtell team photo"
                    class="img-responsive"
                />
            </section>
        );
    }
});
