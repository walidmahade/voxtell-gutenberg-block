const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/btn-hero", {
    title: __( "Business Test Messaging" ),
    icon: "edit",
    category: "business-text-messaging",
    keywords: [ __( "Business" ), __( "Text" ), __( "Messaging" ), __( "Hero" ), __( "btm" ) ],
    attributes: {
        text1: {
            type: 'string',
            default: 'yo yo yo'
        }
    },

    edit: props => {
        const { text1 } = props.attributes;
        const { setAttributes } = props;
        const handleText1 = text1 => setAttributes({ text1 });

        return (
            <section id="btm-hero" className="section section-btm-lr-50">
                <div className="container">
                    <div className="row">
                        <div className="left-col">
                            <h2 className="title--big">
                                Business Text Messaging Made Easy.
                            </h2>
                            <p className="para">
                                Send unlimited text messages to customers
                                and employees from your business phone
                                number.
                            </p>
                            <a href="#" className="btn">
                                Get started
                            </a>
                        </div>
                        <div className="right-col">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/SMS-hero-img.png"
                                alt="send sms"
                                className="img-responsive"
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    },

    save: props => {
        return (
            <section id="btm-hero" className="section section-btm-lr-50">
                <div className="container">
                    <div className="row">
                        <div className="left-col">
                            <h2 className="title--big">
                                Business Text Messaging Made Easy.
                            </h2>
                            <p className="para">
                                Send unlimited text messages to customers
                                and employees from your business phone
                                number.
                            </p>
                            <a href="#" className="btn">
                                Get started
                            </a>
                        </div>
                        <div className="right-col">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/SMS-hero-img.png"
                                alt="send sms"
                                className="img-responsive"
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
});
