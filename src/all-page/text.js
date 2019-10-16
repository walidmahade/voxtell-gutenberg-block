const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType("cgb/general-text", {
    title: __("Normal Text"),
    icon: "edit",
    category: "common",
    keywords: [__("Normal"), __("Text"), __("Html")],
    attributes: {
        text1: {
            type: "string",
            default: "Enter Text Here"
        }
    },

    edit: props => {
        const { text1 } = props.attributes;
        const { setAttributes } = props;
        const handleText1 = text1 => setAttributes({ text1 });

        return (
            <div className="container">
                <div className="row">
                    <RichText value={text1} onChange={handleText1} />
                </div>
            </div>
        );
    },

    save: props => {
        const { text1 } = props.attributes;

        return (
            <div className="container">
                <div className="row">
                    <RichText.Content value={text1} />
                </div>
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
