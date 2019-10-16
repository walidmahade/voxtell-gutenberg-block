const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/team-member", {
    title: __("Why voxtell team member"),
    icon: "edit",
    category: "why-voxtell",
    keywords: [__("voxtell"), __("team"), __("member")],
    attributes: {
        text1: {
            type: "string",
            default: "Junior Smizmaul"
        },
        text2: {
            type: "string",
            default: "Director of Operations"
        },
        text3: {
            type: "string",
            default: "jr@voxtell.com<br/>407.288.8142 Ext. 101"
        },
        memberImg: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/js.jpg"
        }
    },

    edit: props => {
        const {memberImg, text1, text2, text3} = props.attributes;
        const { setAttributes } = props;
        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleImg = o => setAttributes({ memberImg: o.sizes.full.url });

        return (
            <div className="ib__item">
                <img src={memberImg} alt="make great first impression" />

                <MediaUpload
                    onSelect={handleImg}
                    type="image"
                    value={memberImg}
                    render={({ open }) => (
                        <button onClick={open} className="btn-editor">
                            Change Image!
                        </button>
                    )}
                />

                <h3 className="title--alt">
                    <RichText value={text1} onChange={handleText1} />
                </h3>
                <p className="para">
                    <RichText value={text2} onChange={handleText2} />
                </p>
                <div className="divider" />
                <p className="phone">
                    <RichText value={text3} onChange={handleText3} />
                </p>
            </div>
        );
    },

    save: props => {
        const {memberImg, text1, text2, text3} = props.attributes;

        return (
            <div className="ib__item">
                <img src={memberImg} alt="make great first impression" />
                <h3 className="title--alt">
                    <RichText.Content value={text1} />
                </h3>
                <p className="para">
                    <RichText.Content value={text2} />
                </p>
                <div className="divider" />
                <p className="phone">
                    <RichText.Content value={text3} />
                </p>
            </div>
        );
    }
});
