const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
// const { RichText, InspectorControls, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/our-solution-subpage", {
    title: __("Our Solutions List"),
    icon: "edit",
    category: "common",
    keywords: [__("Our"), __("Solutions"), __("Listing")],
    attributes: {
        text1: {
            type: "string",
            default: "Real Estate"
        }
    },

    edit: props => {
        const {} = props.attributes;
        const { setAttributes } = props;

        return (
            <div>
                <p>Hello World</p>
            </div>
        );
    },

    save: props => {
        const {} = props.attributes;

        return (
            <div>
                <p>Hello World</p>
            </div>
        );
    }
});

/*=======================================
            example elements
=======================================

-------------------mediaupload

<MediaUpload
    onSelect={onImageSelect2}
    type="image"
    value={heroRightImage}
    render={({ open }) => (
        <button onClick={open} className="btn-editor">
            Change Image!
        </button>
    )}
/>

-------------------richtext

<RichText value={btnText} onChange={updateBtnText} />

-------------------urlinput

<URLInput value={btnLink} onChange={setBtnUrl} />

==================================================*/
