const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, InspectorControls } = wp.editor;

registerBlockType("cgb/home-testimonials", {
    title: __("Home Testimonials"),
    icon: "edit",
    category: "home-page-blocks",
    keywords: [__("Home"), __("Testimonials")],
    attributes: {
        testimonial: {
            type: "string",
            default:
                "Our network and phones “just plain work” – the services don’t go down or flake out for periods of time and we rarely even have to think about the network. I couldn’t be more pleased!"
        },
        authorName: {
            type: "string",
            default: "Rob Sullivan"
        },
        authorProf: {
            type: "string",
            default: "CEO at Real Estate Law"
        },
        authorImg: {
            type: "string",
            default: "https://via.placeholder.com/80/09f/fff.png"
        },
        backgroundImage: {
            type: "string",
            default: "https://placehold.it/1200x500"
        }
    },

    edit: props => {
        const { testimonial, authorName, authorImg, authorProf, backgroundImage } = props.attributes;

        const { setAttributes } = props;

        const handleT1 = testimonial => setAttributes({ testimonial });
        const handleT2 = authorName => setAttributes({ authorName });
        const handleT3 = authorProf => setAttributes({ authorProf });

        const handleAuthImg = imgObj => setAttributes({ authorImg: imgObj.sizes.full.url });

        const onImageSelect = imageObject => {
            setAttributes({
                backgroundImage: imageObject.sizes.full.url
            });
        };

        return (
            <section
                id="testimonials"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            >
                <InspectorControls>
                    <strong>Select a background image:</strong>

                    {backgroundImage ? <img class="editor-background-preview" src={backgroundImage} alt="" /> : ""}

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

                <div class="container">
                    <div class="row testimonial">
                        <div class="testimonial__item">
                            <p class="testimonial__item__body para">
                                <RichText value={testimonial} onChange={handleT1} />
                            </p>

                            <div class="testimonial__item__foot">
                                <div class="info">
                                    <h3 class="name">
                                        <RichText value={authorName} onChange={handleT2} />
                                    </h3>

                                    <p class="para">
                                        <RichText value={authorProf} onChange={handleT3} />
                                    </p>
                                </div>

                                <div class="img">
                                    <img src={authorImg} />

                                    <MediaUpload
                                        onSelect={handleAuthImg}
                                        type="image"
                                        value={authorImg}
                                        render={({ open }) => (
                                            <button onClick={open} className="btn-editor">
                                                <span class="dashicons dashicons-format-image"></span>
                                            </button>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { testimonial, authorName, authorImg, authorProf, backgroundImage } = props.attributes;

        return (
            <section
                id="testimonials"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            >
                <div class="container">
                    <div class="row testimonial">
                        <div class="testimonial__item">
                            <p class="testimonial__item__body para">
                                <RichText.Content value={testimonial} />
                            </p>

                            <div class="testimonial__item__foot">
                                <div class="info">
                                    <h3 class="name">
                                        <RichText.Content value={authorName} />
                                    </h3>

                                    <p class="para">
                                        <RichText.Content value={authorProf} />
                                    </p>
                                </div>

                                <div class="img">
                                    <img src={authorImg} alt={authorName} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
