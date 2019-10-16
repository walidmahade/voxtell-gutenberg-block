const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, InnerBlocks, MediaUpload } = wp.editor;

registerBlockType("cgb/why-voxtell-team-3", {
    title: __("Why voxtell team 3"),
    icon: "edit",
    category: "why-voxtell",
    keywords: [__("Our"), __("Solutions"), __("Listing")],
    attributes: {
        text1: {
            type: "string",
            default: "Meet the Team"
        },
        text2: {
            type: "string",
            default: "We may be small, but we are mighty! We are passionate about working with you to find the best phone solution to fit your business - we will never try to sell you something you don’t need. Based in Orlando, Florida, we love sharing our passion for communication and want to help you find the product that’s right for you."
        },
        bgImg: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/team-why-voxtell-2.jpg"
        }
    },

    edit: props => {
        const {bgImg, text1, text2} = props.attributes;
        const { setAttributes } = props;
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleBgImg = o => setAttributes({ bgImg: o.sizes.full.url });

        return (
            <div>
                <section id="whyv-team-photo" style={{ backgroundImage: `url(${bgImg})` }}/>

                <InspectorControls>
                    <strong>Select a background image:</strong>

                    {bgImg ? <img class="editor-background-preview" src={bgImg} /> : "" }

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

                <section id="whyv-team" className="section">
                    <div className="container">

                        <div className="row">
                            <div className="section__header">
                                <h2 className="title--sec">
                                    <RichText value={text1} onChange={handleText1} />
                                </h2>
                                <p className="para">
                                    <RichText value={text2} onChange={handleText2} />
                                </p>
                            </div>
                        </div>

                        <div className="row ib">
                            <InnerBlocks allowedBlocks={["cgb/team-member"]} />
                        </div>
                    </div>
                </section>
            </div>
        );
    },

    save: props => {
        const {bgImg, text1, text2} = props.attributes;

        return (
            <div>
                <section id="whyv-team-photo" style={ { backgroundImage: `url(${ bgImg })` } }/>

                <section id="whyv-team" className="section">
                    <div className="container">

                        <div className="row">
                            <div className="section__header">
                                <h2 className="title--sec">
                                    <RichText.Content value={ text1 } />
                                </h2>
                                <p className="para">
                                    <RichText.Content value={ text2 } />
                                </p>
                            </div>
                        </div>

                        <div className="row ib">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </section>
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
