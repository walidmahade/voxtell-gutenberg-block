const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, URLInput } = wp.editor;

registerBlockType("cgb/pbxst-hero", {
    title: __( "PBX sip trunk Hero" ),
    icon: "edit",
    category: "pbx-sip-trunk",
    keywords: [ __( "Pbx" ), __( "Sip" ), __( "Trunk" ), __("pbxst"), __("hero") ],
    attributes: {
        text1: {
            type: "string",
            default: "Enterprise SIP Trunking"
        },
        text2: {
            type: "string",
            default: "Bring your PBX system into<br/>the next-generation."
        },
        text3: {
            type: "string",
            default: "Seamlessly transition your legacy PBX system into a powerful cloud system with no new equipment or service disruptions."
        },
        text4: {
            type: "string",
            default: "Start Your Trial"
        },
        link1: {
            type: "string",
            default: "#"
        }
    },

    edit: props => {
        const { text1, text2, text3, text4, link1 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleLink1 = link1 => setAttributes({ link1 });

        return (
            <section className="section" id="ofs-hero">
                <div className="bg-overlay dots-right"/>
                <div className="container">
                    <div className="row">
                        <h3 className="title--alt w-100">
                            <RichText value={text1} onChange={handleText1} />
                        </h3>
                        <h2 className="title--big w-100">
                            <RichText value={text2} onChange={handleText2} />
                        </h2>
                        <p className="para para--subt w-100">
                            <RichText value={text3} onChange={handleText3} />
                        </p>
                        <div className="hero-cta">
                            <span className="btn btn--dark">
                                <RichText value={text4} onChange={handleText4} />
                            </span>
                            <URLInput value={link1} onChange={handleLink1}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        const { text1, text2, text3, text4, link1 } = props.attributes;

        return (
            <section className="section" id="ofs-hero">
                <div className="bg-overlay dots-right"/>
                <div className="container">
                    <div className="row">
                        <h3 className="title--alt w-100">
                            <RichText.Content value={text1} />
                        </h3>
                        <h2 className="title--big w-100">
                            <RichText.Content value={text2} />
                        </h2>
                        <p className="para para--subt w-100">
                            <RichText.Content value={text3} />
                        </p>
                        <div className="hero-cta">
                            <a href="#" className="btn btn--dark">
                                <RichText.Content value={text4} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    },
});
