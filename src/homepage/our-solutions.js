const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload } = wp.editor;
import { ImgDimension } from "../global";

registerBlockType("cgb/home-our-sol", {
    title: __("Home Our Sol"),
    icon: "edit",
    category: "home-page-blocks",
    keywords: [__("Home"), __("our"), __("solutions")],
    attributes: {
        text1: {
            type: "string",
            default: "One Solution, One Price"
        },
        text2: {
            type: "string",
            default: "Tired of complicated phone systems and hidden fees?"
        },
        text3: {
            type: "string",
            default: "Our simple and inclusive plan includes all of the hardware and features you need to increase productivity, mobility and success for your business."
        },
        bgImgDesktop: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/one-solution-bg-desktop.jpg"
        },
        bgImgMobile: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/one-solution-bg-mobile.jpg"
        }
    },

    /**
     * Editor View
     */
    edit: props => {
        const { text1, text2, text3, bgImgDesktop, bgImgMobile } = props.attributes;
        const { setAttributes } = props;

        const handleText1Change = text1 => {setAttributes({ text1 });};
        const handleText2Change = text2 => {setAttributes({ text2 });};
        const handleText3Change = text3 => {setAttributes({ text3 });};

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

                <section id="one-solution">
                    <style>
                        {`
                            #one-solution {
                                background-image: url(${bgImgMobile});
                            }
                            
                            @media screen and (min-width: 992px) {
                                #one-solution {
                                    background-image: url(${bgImgDesktop});
                                }
                            }
                        `}
                    </style>

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h2 class="title--sec">
                                    <RichText
                                        value={text1}
                                        onChange={handleText1Change}
                                    />
                                </h2>
                                <p class="para--subt">
                                    <RichText
                                        value={text2}
                                        onChange={handleText2Change}
                                    />
                                </p>
                                <p class="para">
                                    <RichText
                                        value={text3}
                                        onChange={handleText3Change}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    },


    /**
     * save the content + frontend view
     */
    save: props => {
        const { text1, text2, text3, bgImgDesktop, bgImgMobile } = props.attributes;

        return (
            <section id="one-solution">
                <style>
                    {`
                        #one-solution {
                            background-image: url(${bgImgMobile});
                        }
                        
                        @media screen and (min-width: 992px) {
                            #one-solution {
                                background-image: url(${bgImgDesktop});
                            }
                        }
                    `}
                </style>

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h2 class="title--sec">
                                <RichText.Content
                                    value={text1}
                                />
                            </h2>
                            <p class="para--subt">
                                <RichText.Content
                                    value={text2}
                                />
                            </p>
                            <p class="para">
                                <RichText.Content
                                    value={text3}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
});
