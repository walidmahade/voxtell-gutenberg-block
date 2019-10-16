const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/partner-program-hero", {
    title: __("Partner Program Hero"),
    icon: "edit",
    category: "partner-program",
    keywords: [__("Partner"), __("Program"), __("Hero")],
    attributes: {
        text1: {
            type: "string",
            default: "Partner Program"
        },
        text2: {
            type: "string",
            default: "Set your clients up for success with voxtell!"
        },
        text3: {
            type: "string",
            default: "Why should you partner with us? We offer:"
        },
        text4: {
            type: "string",
            default: `<li>Simple plans with bundled services that are easy for customers to understand</li>
            <li> Services that are ideal for small and midsized businesses with multiple locations or remote employees</li>
            <li>Tailored solutions for insurance, technology, real estate, professional, education, legal, healthcare and nonprofit industries</li>
            <li>Short sales and installation cycles that translate into quick payoffs for resellers</li>
            <li>Any and all marketing collateral you need to effectively sell our products</li>
            <li>Top quality customer service for you and your clients</li>`
        },
        imgRight: {
            type: "string",
            default:
                "/wp-content/themes/voxtell-custom/img/partner-program-hero.png"
        }
    },

    edit: props => {
        const { imgRight, text1, text2, text3, text4 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });
        const handleText4 = text4 => setAttributes({ text4 });
        const handleImgRight = obj =>
            setAttributes({ imgRight: obj.sizes.full.url });

        return (
            <div>
                <section id="page-title" class="w-100">
                    <h1 class="title--big center">
                        <RichText value={text1} onChange={handleText1} />
                    </h1>
                    <p class="para center">
                        <RichText value={text2} onChange={handleText2} />
                    </p>
                </section>

                <section id="pp-why-us">
                    <div class="left-col">
                        <h2 class="title--sec">
                            <RichText value={text3} onChange={handleText3} />
                        </h2>

                        <ul class="para">
                            <RichText value={text4} onChange={handleText4} />
                        </ul>
                    </div>

                    <div class="right-col">
                        <img src={imgRight} />

                        <MediaUpload
                            onSelect={handleImgRight}
                            type="image"
                            value={imgRight}
                            render={({ open }) => (
                                <button onClick={open} className="btn-editor">
                                    Change Image!
                                </button>
                            )}
                        />
                    </div>
                </section>
            </div>
        );
    },

    save: props => {
        const { imgRight, text1, text2, text3, text4 } = props.attributes;

        return (
            <div>
                <section id="page-title" class="w-100">
                    <h1 class="title--big center">
                        <RichText.Content value={text1} />
                    </h1>
                    <p class="para center">
                        <RichText.Content value={text2} />
                    </p>
                </section>

                <section id="pp-why-us">
                    <div class="left-col">
                        <h2 class="title--sec">
                            <RichText.Content value={text3} />
                        </h2>

                        <ul class="para">
                            <RichText.Content value={text4} />
                        </ul>
                    </div>

                    <div class="right-col">
                        <img src={imgRight} alt={"partner-program"} />
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
