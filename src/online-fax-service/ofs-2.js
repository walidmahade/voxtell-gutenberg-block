const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;

registerBlockType("cgb/osf-2", {
    title: __("Online Fax Service 2"),
    icon: "edit",
    category: "online-fax",
    keywords: [__("Online"), __("Fax"), __("Service"),__("ofs"), __("2")],
    attributes: {
        text1: {
            type: "string",
            default: "Online Fax Pricing"
        }
    },

    edit: props => {
        const { text1 } = props.attributes;
        const { setAttributes } = props;
        const handleText1 = text1 => setAttributes({ text1 });

        return (
            <section id="ofs-pricing" className="section plans--annually">
                <div className="container">
                    <h2 className="title--big center">
                        <RichText value={text1} onChange={handleText1} />
                    </h2>
                    {/* START switch*/}
                    <div className="switch">
                            <span className="annually">
                                Annually
                                {/* <span class="save">*(Save 15%)</span> */}
                            </span>
                        <input type="checkbox" className="custom-switch" />
                        <span className="monthly">Monthly</span>
                    </div>
                    {/* END switch*/}
                    <div className="row">
                        <InnerBlocks />
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { text1 } = props.attributes;

        return (
            <section id="ofs-pricing" className="section plans--annually">
                <div className="container">
                    <h2 className="title--big center">
                        <RichText.Content value={text1} />
                    </h2>
                    {/* START switch*/}
                    <div className="switch">
                            <span className="annually">
                                Annually
                                {/* <span class="save">*(Save 15%)</span> */}
                            </span>
                        <input type="checkbox" className="custom-switch" />
                        <span className="monthly">Monthly</span>
                    </div>
                    {/* END switch*/}
                    <div className="row">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </section>
        );
    }
});
