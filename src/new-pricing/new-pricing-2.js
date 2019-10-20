const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;

registerBlockType("cgb/pricing-new-2", {
    title: __( "Pricing new page 2" ),
    icon: "edit",
    category: "new-pricing",
    keywords: [ __( "Pricing" ), __( "New" ),__( "2" ) ],
    attributes: {
        text1: {
            type: "string",
            default: "Communication"
        },
        text2: {
            type: "string",
            default: "Customer Relationship"
        },
        text3: {
            type: "string",
            default: "Team Collaboration"
        },
    },

    edit: props => {
        const { text1, text2, text3 } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = text2 => setAttributes({ text2 });
        const handleText3 = text3 => setAttributes({ text3 });

        const handleTabChange = (e) => {
            let elem = e.currentTarget;
            // handle btn active class
            let tabBtns = document.querySelectorAll('.tab-nav .tab-btn');

            for (let i = 0; i < tabBtns.length; i++) {
                tabBtns[i].classList.remove('active');
            }
            e.currentTarget.classList.add('active');

            // get clicked id
            let getID = elem.getAttribute("data-id");

            // get corresponding content
            let currentContent = document.querySelector(".tab-contents #" + getID);

            // get corresponding acc-content
            let CompareAccItem = document.querySelector(
                ".compare-acc-item[data-acc-id='" + getID + "']"
            );

            // show hide tab content
            let allTabContents = document.querySelectorAll('.tab-contents .tab-content-item');

            for (let i = 0; i < allTabContents.length; i++) {
                if (allTabContents[i].getAttribute('id') !== getID) {
                    allTabContents[i].classList.remove('active');
                }
            }
            currentContent.classList.add('active');

            // show hide acc item row
            // let allAccSections = document.querySelectorAll('.compare-acc-item');
            // for (let i = 0; i < allAccSections.length; i++) {
            //     if (!allAccSections[i].getAttribute('id') === getID) {
            //         allAccSections[i].classList.remove('active');
            //     }
            // }
            // CompareAccItem.classList.add("active");
        };

        return (
            <div className="new-pricing-page">
                <section id="pricing-tables" className="section">
                    <div className="container">

                        <div className="row">
                            <div className="tab-nav w-100">
                                <button className="tab-btn active" data-id="tab-1" onClick={handleTabChange}>
                                    <RichText value={text1} onChange={handleText1} />
                                </button>
                                <button className="tab-btn" data-id="tab-2" onClick={handleTabChange}>
                                    <RichText value={text2} onChange={handleText2} />
                                </button>
                                <button className="tab-btn" data-id="tab-3" onClick={handleTabChange}>
                                    <RichText value={text3} onChange={handleText3} />
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="tab-contents w-100">
                                <InnerBlocks allowedBlocks={['cgb/new-pricing-tables']} />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    },

    save: props => {
        const { text1, text2, text3 } = props.attributes;

        return (
            <div className="new-pricing-page">
                <section id="pricing-tables" className="section">
                    <div className="container">

                        <div className="row">
                            <div className="tab-nav w-100">
                                <button className="tab-btn active" data-id="tab-1">
                                    <RichText.Content value={text1} />
                                </button>
                                <button className="tab-btn" data-id="tab-2">
                                    <RichText.Content value={text2} />
                                </button>
                                <button className="tab-btn" data-id="tab-3">
                                    <RichText.Content value={text3} />
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="tab-contents w-100">
                                <InnerBlocks.Content />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
});
