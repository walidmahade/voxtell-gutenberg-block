const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, URLInput } = wp.editor;

registerBlockType("cgb/voxtell-business-button", {
    title: __("Voxtell Business Button"),
    icon: "edit",
    category: "what-we-do",
    keywords: [__("Voxtell"), __("Business"), __("Button")],
    attributes: {
        text: {
            type: "string",
            default: "view full list of phones & devices"
        },
        link: {
            type: "string",
            default: "#"
        }
    },

    edit: props => {
        const { text, link } = props.attributes;
        const { setAttributes } = props;

        const handleBtnText = text => setAttributes({ text });
        const handleBtnLink = link => setAttributes({ link });

        return (
            <section className="center section--last">
                <span className="btn">
                    <RichText value={text} onChange={handleBtnText}/>
                </span>
                <URLInput value={link} onChange={handleBtnLink} />
            </section>
        );
    },

    save: props => {
        const { text, link } = props.attributes;

        return (
            <section className="center section--last">
                <a href={link} className="btn">
                    <RichText.Content value={text}/>
                </a>
            </section>
        );
    }
});
