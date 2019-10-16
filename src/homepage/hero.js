const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload, URLInput } = wp.editor;
import { ImgDimension } from "../global";

registerBlockType("cgb/hero-home", {
    title: __("Home Hero"),
    icon: "edit",
    category: "home-page-blocks",
    keywords: [__("Home"), __("Hero")],
    attributes: {
        secTitle: {
            type: "string",
            source: "html",
            selector: "#hero-home .title--big",
            default: "Transform Communication for your Business"
        },
        secSubTitle: {
            type: "string",
            source: "html",
            selector: "#hero-home .col-left .para",
            default: "Our phone solution will help your company grow."
        },
        backgroundImage: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/hero-bg-dotslg.jpg"
        },
        heroRightImage: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/homebanner-image.png"
        },
        btnText: {
            type: "string",
            default: "Request Demo"
        },
        btnLink: {
            type: "string",
            default: "#"
        }
    },

    /**
     * Editor View
     */
    edit: props => {
        const { setAttributes } = props;
        const onSecTitleChange = secTitle => {setAttributes({ secTitle });};
        const onSecSubTitleChange = secSubTitle => {setAttributes({ secSubTitle });};
        const onImageSelect = imageObject => {setAttributes({ backgroundImage: imageObject.sizes.full.url });};
        const onImageSelect2 = imageObject => {setAttributes({ heroRightImage: imageObject.sizes.full.url });};
        const setBtnUrl = btnLink => {setAttributes({ btnLink });};
        const updateBtnText = btnText => {setAttributes({ btnText });};

        const {
            secTitle,
            secSubTitle,
            backgroundImage,
            heroRightImage,
            btnText,
            btnLink
        } = props.attributes;

        return (
            <div>
                <InspectorControls>
                    <strong>Select a background image:</strong>

                    {backgroundImage ? <img class="editor-background-preview" src={backgroundImage} /> : "" }

                    <MediaUpload
                        onSelect={onImageSelect}
                        type="image"
                        value={backgroundImage}
                        render={({ open }) => (
                            <button onClick={open} className="btn-editor">
                                Upload Image!
                            </button>
                        )}
                    />
                </InspectorControls>

                <section
                    id="hero-home"
                    style={{
                        backgroundImage: `url(${backgroundImage})`
                    }}
                >
                    <div class="container">
                        <div class="row">
                            <div class="col-left">
                                <h2 class="title--big">
                                    <RichText
                                        placeholder={
                                            "Transform Communication for your Business"
                                        }
                                        value={secTitle}
                                        onChange={onSecTitleChange}
                                    />
                                </h2>
                                <p class="para">
                                    <RichText
                                        placeholder={
                                            "Our phone solution will help your company grow."
                                        }
                                        value={secSubTitle}
                                        onChange={onSecSubTitleChange}
                                    />
                                </p>

                                <button class="btn">
                                    <RichText
                                        placeholder={btnText}
                                        value={btnText}
                                        onChange={updateBtnText}
                                    />
                                </button>

                                <URLInput
                                    value={btnLink}
                                    onChange={setBtnUrl}
                                />
                            </div>

                            <div class="col-right">
                                <img
                                    class="hero-right-img"
                                    src={heroRightImage}
                                    alt="voxtell_phone"
                                />
                                <MediaUpload
                                    onSelect={onImageSelect2}
                                    type="image"
                                    value={heroRightImage}
                                    render={({ open }) => (
                                        <button
                                            onClick={open}
                                            className="btn-editor"
                                        >
                                            Change Image!
                                        </button>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    },

    /**
     * save the content + frontend view
     */
    save: props => {
        const {
            secTitle,
            secSubTitle,
            backgroundImage,
            heroRightImage,
            btnText,
            btnLink
        } = props.attributes;

        return (
            <section
                id="hero-home"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            >
                <div class="container">
                    <div class="row">
                        <div class="col-left">
                            <h2 class="title--big">
                                <RichText.Content value={secTitle} />
                            </h2>
                            <p class="para">
                                <RichText.Content value={secSubTitle} />
                            </p>

                            <a href={btnLink} class="btn">
                                <RichText.Content value={btnText} />
                            </a>
                        </div>

                        <div class="col-right">
                            <img
                                class="hero-right-img"
                                src={heroRightImage}
                                alt="voxtell_phone"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
