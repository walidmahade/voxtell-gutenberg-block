const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType("cgb/list-feature-items", {
    title: __("List Feature Items Wrapper"),
    icon: "edit",
    category: "list-feature",
    keywords: [__("List"), __("Feature")],
    attributes: {
        text1: {
            type: "string",
            default: "Real Estate"
        }
    },

    edit: props => {
        return (
            <section id="all-features">
                <div class="container">
                    <div class="row">
                        <div class="main-col">
                            <InnerBlocks allowedBlocks={["cgb/feature-item-single"]} />
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        return (
            <section id="all-features">
                <div class="container">
                    <div class="row">
                        <div class="main-col">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
