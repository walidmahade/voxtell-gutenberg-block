const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/pbxst-2", {
    title: __( "PBX sip trunk 2" ),
    icon: "edit",
    category: "pbx-sip-trunk",
    keywords: [ __( "Pbx" ), __( "Sip" ), __( "Trunk" ), __("pbxst"), __("2") ],
    attributes: {
        text1: {
            type: "string",
            default: "Enterprise SIP Trunking"
        },
        text2: {
            type: "string",
            default: "More control. Happier customers."
        },
        text3: {
            type: "string",
            default: "Solve customer issues on the first call with a powerful cloud based phone system. Empower your agents with more tools, optimized call flows, and award-winning support."
        },
        img1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/new-pages/more-control.svg"
        }
    },

    edit: props => {
        const { text1, text2, text3, img1 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleImg1 = obj => setAttributes({ img1: obj.sizes.full.url });

        return (
            <section id="pst-2" className="section">
                <div className="container">
                    <div className="row">
                        <img src={img1} alt="stars"/>
                        <MediaUpload
                            onSelect={handleImg1}
                            type="image"
                            value={img1}
                            render={({ open }) => (
                                <button onClick={open} className="btn-editor">
                                    Change Image!
                                </button>
                            )}
                        />

                        <p className="para para--subt">
                            <RichText value={text1} onChange={handleText1} />
                        </p>
                        <h2 className="title--big">
                            <RichText value={text2} onChange={handleText2} />
                        </h2>
                        <p className="para">
                            <RichText value={text3} onChange={handleText3} />
                        </p>
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        const { text1, text2, text3, img1 } = props.attributes;

        return (
            <section id="pst-2" className="section">
                <div className="container">
                    <div className="row">
                        <img src={img1} alt="stars"/>

                        <p className="para para--subt">
                            <RichText.Content value={text1} />
                        </p>
                        <h2 className="title--big">
                            <RichText.Content value={text2} />
                        </h2>
                        <p className="para">
                            <RichText.Content value={text3} />
                        </p>
                    </div>
                </div>
            </section>
        )
    },
});
