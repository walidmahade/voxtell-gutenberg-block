const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload } = wp.editor;

registerBlockType("cgb/get-started-form", {
    title: __("Get started form"),
    icon: "edit",
    category: "get-started",
    keywords: [__("Get"), __("Started"), __("Form")],
    attributes: {
        bgImg: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/get-started-bg.png"
        }
    },

    edit: props => {
        const { bgImg } = props.attributes;
        const { setAttributes } = props;

        const handleBgImg = obj => setAttributes({ bgImg: obj.sizes.full.url });

        return (
            <section
                id="get-started-form"
                style={{
                    backgroundImage: `url(${bgImg})`
                }}
            >
                <InspectorControls>
                    <strong>Select a background image:</strong>

                    {bgImg ? (
                        <img
                            class="editor-background-preview"
                            src={bgImg}
                            alt=""
                        />
                    ) : (
                        ""
                    )}

                    <MediaUpload
                        onSelect={handleBgImg}
                        type="image"
                        value={bgImg}
                        render={({ open }) => (
                            <button onClick={open} className="btn-editor">
                                Upload Image!
                            </button>
                        )}
                    />
                </InspectorControls>

                <div class="container">
                    <div class="row">
                        <div class="form-wrap">
                            <div class="field field--half">
                                <input
                                    type="text"
                                    class="styled"
                                    placeholder="First Name"
                                />
                            </div>

                            <div class="field field--half">
                                <input
                                    type="text"
                                    class="styled"
                                    placeholder="Last Name"
                                />
                            </div>

                            <div class="field field--half">
                                <input
                                    type="tel"
                                    class="styled"
                                    placeholder="Phone Number"
                                />
                            </div>

                            <div class="field field--half">
                                <input
                                    type="email"
                                    class="styled"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div class="field field--half">
                                <input
                                    type="text"
                                    class="styled"
                                    placeholder="Company Name"
                                />
                            </div>

                            <div class="field field--half">
                                <select
                                    name="position"
                                    id="select-position"
                                    class="styled"
                                >
                                    <option value="Company Size">
                                        Company Size
                                    </option>
                                    <option value="1-4 Employees">
                                        1-4 Employees
                                    </option>
                                    <option value="5-19 Employees">
                                        5-19 Employees
                                    </option>
                                    <option value="20-99 Employees">
                                        20-99 Employees
                                    </option>
                                    <option value="100+ Employees">
                                        100+ Employees
                                    </option>
                                </select>
                            </div>

                            <div class="field left">
                                <button class="btn" type="submit">
                                    Get A Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { bgImg } = props.attributes;

        return (
            <section
                id="get-started-form"
                style={{
                    backgroundImage: `url(${bgImg})`
                }}
            >
                <div class="container">
                    <div class="row">
                        <div class="form-wrap">
                            <div class="field field--half">
                                <input
                                    type="text"
                                    class="styled"
                                    placeholder="First Name"
                                />
                            </div>

                            <div class="field field--half">
                                <input
                                    type="text"
                                    class="styled"
                                    placeholder="Last Name"
                                />
                            </div>

                            <div class="field field--half">
                                <input
                                    type="tel"
                                    class="styled"
                                    placeholder="Phone Number"
                                />
                            </div>

                            <div class="field field--half">
                                <input
                                    type="email"
                                    class="styled"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div class="field field--half">
                                <input
                                    type="text"
                                    class="styled"
                                    placeholder="Conpany Name"
                                />
                            </div>

                            <div class="field field--half">
                                <select
                                    name="position"
                                    id="select-position"
                                    class="styled"
                                >
                                    <option value="Company Size">
                                        Company Size
                                    </option>
                                    <option value="1-4 Employees">
                                        1-4 Employees
                                    </option>
                                    <option value="5-19 Employees">
                                        5-19 Employees
                                    </option>
                                    <option value="20-99 Employees">
                                        20-99 Employees
                                    </option>
                                    <option value="100+ Employees">
                                        100+ Employees
                                    </option>
                                </select>
                            </div>

                            <div class="field left">
                                <button class="btn" type="submit">
                                    Get A Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
