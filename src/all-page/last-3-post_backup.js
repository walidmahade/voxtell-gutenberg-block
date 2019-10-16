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
        return (
            <section id="bps-posts" className="section">
                <div className="container">
                    <div className="row center">
                        <h2 className="title--big w-100">
                            <RichText.Content value={text35} />
                        </h2>
                    </div>
                    <div className="row posts-cards">
                        <a href="#" className="box">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/Nextiva-CRM.svg"
                                alt
                            />
                            <div className="category">Category</div>
                            <div className="title--sec">
                                Turn leads into customers. And customers
                                into fans.
                            </div>
                            <div className="para">
                                Manage sales, service, and customer
                                relationships with ease. We've redefined
                                what a good CRM is.
                            </div>
                        </a>
                        <a href="#" className="box">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/Nextiva-CRM.svg"
                                alt
                            />
                            <div className="category">Category</div>
                            <div className="title--sec">
                                Turn leads into customers. And customers
                                into fans.
                            </div>
                            <div className="para">
                                Manage sales, service, and customer
                                relationships with ease. We've redefined
                                what a good CRM is.
                            </div>
                        </a>
                        <a href="#" className="box">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/Nextiva-CRM.svg"
                                alt
                            />
                            <div className="category">Category</div>
                            <div className="title--sec">
                                Turn leads into customers. And customers
                                into fans.
                            </div>
                            <div className="para">
                                Manage sales, service, and customer
                                relationships with ease. We've redefined
                                what a good CRM is.
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        return (
            <section id="bps-posts" className="section">
                <div className="container">
                    <div className="row center">
                        <h2 className="title--big w-100">
                            <RichText.Content value={text35} />
                        </h2>
                    </div>
                    <div className="row posts-cards">
                        <a href="#" className="box">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/Nextiva-CRM.svg"
                                alt
                            />
                            <div className="category">Category</div>
                            <div className="title--sec">
                                Turn leads into customers. And customers
                                into fans.
                            </div>
                            <div className="para">
                                Manage sales, service, and customer
                                relationships with ease. We've redefined
                                what a good CRM is.
                            </div>
                        </a>
                        <a href="#" className="box">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/Nextiva-CRM.svg"
                                alt
                            />
                            <div className="category">Category</div>
                            <div className="title--sec">
                                Turn leads into customers. And customers
                                into fans.
                            </div>
                            <div className="para">
                                Manage sales, service, and customer
                                relationships with ease. We've redefined
                                what a good CRM is.
                            </div>
                        </a>
                        <a href="#" className="box">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/Nextiva-CRM.svg"
                                alt
                            />
                            <div className="category">Category</div>
                            <div className="title--sec">
                                Turn leads into customers. And customers
                                into fans.
                            </div>
                            <div className="para">
                                Manage sales, service, and customer
                                relationships with ease. We've redefined
                                what a good CRM is.
                            </div>
                        </a>
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
