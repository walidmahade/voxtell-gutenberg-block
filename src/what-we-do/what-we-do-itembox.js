const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, URLInput } = wp.editor;

registerBlockType("cgb/what-we-do-sec-4-inner", {
    title: __("What we do section itembox"),
    icon: "edit",
    category: "what-we-do",
    keywords: [__("What"), __("We"), __("Do"), __("itembox")],
    attributes: {
        text1: {
            type: "string",
            default: "Voxtell Business"
        },
        text2: {
            type: "string",
            default: "Your complete business phone solution."
        },
        text3: {
            type: "string",
            default: "Key Features:"
        },
        text4: {
            type: "string",
            default: "1. Fully Flexible and Scalable\n" +
                "\n" +
                "2. Unified Communications\n" +
                "\n" +
                "3. Security and Monitoring"
        },
        btnText1: {
            type: "string",
            default: "Learn More"
        },
        btnLink1: {
            type: "string",
            default: "#"
        },
        btnText2: {
            type: "string",
            default: "Learn More"
        },
        btnLink2: {
            type: "string",
            default: "#"
        },
        btnText3: {
            type: "string",
            default: "Learn More"
        },
        btnLink3: {
            type: "string",
            default: "#"
        },
    },

    edit: props => {
        const { text1,text2,text3,text4, btnText1, btnLink1 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleBtnText1 = btnText1 => setAttributes({ btnText1 });
        const handleBtnLink1 = btnLink1 => setAttributes({ btnLink1 });


        return (
            <div className="item">
                <div className="left">
                    <h2 className="title--sec">
                        <RichText value={text1} onChange={handleText1}/>
                    </h2>
                    <p className="para">
                        <RichText value={text2} onChange={handleText2}/>
                    </p>
                    <span className="btn">
                        <RichText value={btnText1} onChange={handleBtnText1}/>
                    </span>
                    <URLInput value={btnLink1} onChange={handleBtnLink1}/>
                </div>
                <div className="right box">
                    <h3 className="title--alt">
                        <RichText value={text3} onChange={handleText3}/>
                    </h3>
                    <p className="para">
                        <RichText value={text4} onChange={handleText4}/>
                    </p>
                </div>
            </div>
        );
    },

    save: props => {
        const { text1,text2,text3,text4, btnText1, btnLink1 } = props.attributes;

        return (
            <div className="item">
                <div className="left">
                    <h2 className="title--sec">
                        <RichText.Content value={text1}/>
                    </h2>
                    <p className="para">
                        <RichText.Content value={text2}/>
                    </p>
                    <a href={btnLink1} className="btn">
                        <RichText.Content value={btnText1}/>
                    </a>
                </div>
                <div className="right box">
                    <h3 className="title--alt">
                        <RichText.Content value={text3}/>
                    </h3>
                    <p className="para">
                        <RichText.Content value={text4}/>
                    </p>
                </div>
            </div>
        );
    }
});
