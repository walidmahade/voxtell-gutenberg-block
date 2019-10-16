const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType("cgb/careers-apply-form", {
    title: __("Apply Form"),
    icon: "edit",
    category: "careers-page-blocks",
    keywords: [__("Careers"), __("Apply"), __("Form")],
    attributes: {},

    edit: props => {
        return (
            <section id="careers-apply">
                <div class="container">
                    <div class="row">
                        <h2 class="title--sec">Apply</h2>
                        <p class="para">
                            Fill out the form below with your information. If we
                            believe you may be a good match, we will be in
                            contact shortly.
                        </p>

                        <div className="careers-form-wrap">
                            <InnerBlocks />
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        return (
            <section id="careers-apply">
                <div class="container">
                    <div class="row">
                        <h2 class="title--sec">Apply</h2>
                        <p class="para">
                            Fill out the form below with your information. If we
                            believe you may be a good match, we will be in
                            contact shortly.
                        </p>

                        <div class="careers-form-wrap">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
