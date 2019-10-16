const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload } = wp.editor;
import { ImgDimension } from "../global";

registerBlockType("cgb/home-voxtell-advantage", {
    title: __("Home Voxtell Advantage"),
    icon: "edit",
    category: "home-page-blocks",
    keywords: [__("Home"), __("voxtell"), __("advantage")],
    attributes: {
        text1: {
            type: "string",
            default: "The voxtell Advantage"
        },
        text2: {
            type: "string",
            default:
                "From clear pricing and easy installation, to regular check-ins and knowledgeable support, we are committed to being there for you. What’s more, we guarantee that our phone system is the best solution for your business."
        },
        image1: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/voxtell-quality.png"
        },
        bgImgDesktop: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/thevox-tell-advantage.jpg"
        },
        bgImgMobile: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/voxtell-advantage-bg-tablet.png"
        }
    },

    /**
     * Editor View
     */
    edit: props => {
        const { text1, text2, image1, bgImgDesktop, bgImgMobile } = props.attributes;
        const { setAttributes } = props;

        const handleText1Change = text1 => setAttributes({ text1 });
        const handleText2Change = text2 => setAttributes({ text2 });
        const onImage1Change = imgObj => setAttributes({ image1: imgObj.sizes.full.url });
        const onImageSelect = imgObj => setAttributes({ bgImgDesktop: imgObj.sizes.full.url });
        const onImageSelect2 = imgObj => setAttributes({ bgImgMobile: imgObj.sizes.full.url });

        return (
            <div>
                <InspectorControls>
                    <div>
                        <strong>Select a background image:(Desktop)</strong>
                        { bgImgDesktop ? <img className="editor-background-preview" src={ bgImgDesktop }/> : "" }
                        { bgImgDesktop ? <ImgDimension src={bgImgDesktop} /> : "" }

                        <MediaUpload
                            onSelect={ onImageSelect }
                            type="image"
                            value={ bgImgDesktop }
                            render={ ( { open } ) => (
                                <button onClick={ open } className="btn-editor">
                                    Upload Image!
                                </button>
                            ) }
                        />
                    </div>

                    <div>
                        <strong>Select a background image:(mobile)</strong>
                        { bgImgMobile ? <img className="editor-background-preview" src={ bgImgMobile }/> : "" }
                        { bgImgMobile ? <ImgDimension src={bgImgMobile} /> : "" }
                        <MediaUpload
                            onSelect={ onImageSelect2 }
                            type="image"
                            value={ bgImgMobile }
                            render={ ( { open } ) => (
                                <button onClick={ open } className="btn-editor">Upload Image!</button>
                            ) }
                        />
                    </div>
                </InspectorControls>

                <section id="the-advantage">
                    <style>
                        {`
                            #the-advantage {
                                background-image: url(${bgImgMobile});
                            }
                            
                            @media screen and (min-width: 992px) {
                                #the-advantage {
                                    background-image: url(${bgImgDesktop});
                                }
                            }
                        `}
                    </style>

                    <div class="container">
                        <div class="col-left">
                            <h2 class="title--sec w-100">
                                <RichText
                                    value={text1}
                                    onChange={handleText1Change}
                                />
                            </h2>
                            <p class="para w-100">
                                <RichText
                                    value={text2}
                                    onChange={handleText2Change}
                                />
                            </p>
                        </div>

                        <div class="col-right">
                            <img src={image1} />

                            <MediaUpload
                                onSelect={onImage1Change}
                                type="image"
                                value={image1}
                                render={({ open }) => (
                                    <button
                                        onClick={open}
                                        className="btn-editor"
                                    >
                                        <span class="dashicons dashicons-format-image"></span>
                                    </button>
                                )}
                            />
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
        const { text1, text2, image1, bgImgMobile, bgImgDesktop } = props.attributes;

        return (
            <section id="the-advantage">
                <style>
                    {`
                        #the-advantage {
                            background-image: url(${bgImgMobile});
                        }
                        
                        @media screen and (min-width: 992px) {
                            #the-advantage {
                                background-image: url(${bgImgDesktop});
                            }
                        }
                    `}
                </style>

                <div class="container">
                    <div class="col-left">
                        <h2 class="title--sec w-100">
                            <RichText.Content value={text1} />
                        </h2>
                        <p class="para w-100">
                            <RichText.Content value={text2} />
                        </p>
                    </div>

                    <div class="col-right">
                        <img
                            src={image1}
                            alt="voxtell_high_quality_guranteed"
                        />
                    </div>
                </div>
            </section>
        );
    }
});
