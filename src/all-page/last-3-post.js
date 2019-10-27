const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType("cgb/last-3-posts", {
    title: __("Last 3 Posts"),
    icon: "edit",
    category: "common",
    keywords: [__("Last"), __("3"), __("Posts")],
    attributes: {
        text1: {
            type: "string",
            default: "Build Amazing<span class=\"orange\">Companies</span>"
        }
    },

    edit: props => {
        const { text1 } = props.attributes;
        const { setAttributes } = props;
        const handleText1 = text1 => setAttributes({ text1 });

        return (
            <section id="bps-posts" className="section">
                <div className="container">
                    <div className="row center">
                        <h2 className="title--big w-100">
                            <RichText value={text1} onChange={handleText1}/>
                        </h2>
                    </div>
                    <div className="row posts-cards">
                        {/* insert post dinamically here */}
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        const { text1 } = props.attributes;

        return (
            <section id="bps-posts" className="section">
                <div className="container">
                    <div className="row center">
                        <h2 className="title--big w-100">
                            <RichText.Content value={text1} />
                        </h2>
                    </div>
                    <div className="row posts-cards">
                        {/* insert post dinamically here */}
                    </div>
                </div>
            </section>
        )
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
