const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload, URLInput } = wp.editor;

import { ArrowRight } from "../icons/Icons"; // get svg-icons

registerBlockType("cgb/resources-list", {
    title: __("Resources List"),
    icon: "edit",
    category: "our-solutions",
    keywords: [__("resources"), __("Listing")],
    attributes: {
        bgImgDesktop: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/Resources-bg.jpg"
        },
        bgImgMobile: {
            type: "string",
            default: "/wp-content/themes/voxtell-custom/img/bg-resources.jpg"
        },
        link1: {
            type: "string",
            default: "#"
        },
        link2: {
            type: "string",
            default: "#"
        },
        link3: {
            type: "string",
            default: "#"
        },
        link4: {
            type: "string",
            default: "#"
        },
        link5: {
            type: "string",
            default: "#"
        },
        link6: {
            type: "string",
            default: "#"
        },
        link7: {
            type: "string",
            default: "#"
        },
        link8: {
            type: "string",
            default: "#"
        }
    },

    edit: props => {
        const {
            bgImgDesktop,
            bgImgMobile,
            link1,
            link2,
            link3,
            link4
        } = props.attributes;

        const { setAttributes } = props;

        const handleLink1 = link1 => setAttributes({ link1 });
        const handleLink2 = link2 => setAttributes({ link2 });
        const handleLink3 = link3 => setAttributes({ link3 });
        const handleLink4 = link4 => setAttributes({ link4 });

        const onImageSelectDes = imgObj =>
            setAttributes({ bgImgDesktop: imgObj.sizes.full.url });

        const onImageSelectMob = imgObj =>
            setAttributes({ bgImgMobile: imgObj.sizes.full.url });

        return (
            <section class="subpages-list">
                {/* prettier-ignore */}
                <style>
                {`
                    .subpages-list .col-right {
                        background-image: url(${bgImgMobile});
                    }
                    
                    @media screen and (min-width: 992px) {
                        .subpages-list .col-right {
                            background-image: url(${bgImgDesktop});
                        }
                    }
                `}
                </style>

                <InspectorControls>
                    <div data-info="Mobile Image">
                        <strong>Select a background image:(mobile)</strong>

                        {bgImgMobile ? (
                            <img
                                class="editor-background-preview"
                                src={bgImgMobile}
                            />
                        ) : (
                            ""
                        )}

                        <MediaUpload
                            onSelect={onImageSelectMob}
                            type="image"
                            value={bgImgMobile}
                            render={({ open }) => (
                                <button onClick={open} className="btn-editor">
                                    Upload Image!
                                </button>
                            )}
                        />
                    </div>

                    <hr />

                    <div data-info="Desktop Image">
                        <strong>Select a background image(Desktop):</strong>

                        {bgImgDesktop ? (
                            <img
                                class="editor-background-preview"
                                src={bgImgDesktop}
                            />
                        ) : (
                            ""
                        )}

                        <MediaUpload
                            onSelect={onImageSelectDes}
                            type="image"
                            value={bgImgDesktop}
                            render={({ open }) => (
                                <button onClick={open} className="btn-editor">
                                    Upload Image!
                                </button>
                            )}
                        />
                    </div>

                    <hr />

                    <div>
                        <p>Link 1</p>
                        <URLInput value={link1} onChange={handleLink1} />
                    </div>
                    <div>
                        <p>Link 2</p>
                        <URLInput value={link2} onChange={handleLink2} />
                    </div>
                    <div>
                        <p>Link 3</p>
                        <URLInput value={link3} onChange={handleLink3} />
                    </div>
                    <div>
                        <p>Link 4</p>
                        <URLInput value={link4} onChange={handleLink4} />
                    </div>
                </InspectorControls>

                <div class="col-left">
                    <a href="#" class="subpages-list__item">
                        <div class="icon">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/resources-logo/book-1.png"
                                alt=""
                            />
                        </div>
                        <h3 class="title--sec">Blog</h3>
                        <p class="subpages-list__link">
                            <span>Go To Page</span>
                            <span class="icon">
                                <ArrowRight />
                            </span>
                        </p>
                    </a>

                    <a href="#" class="subpages-list__item">
                        <div class="icon">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/resources-logo/doubt.png"
                                alt=""
                            />
                        </div>
                        <h3 class="title--sec">FAQ</h3>
                        <p class="subpages-list__link">
                            <span>Go To Page</span>
                            <span class="icon">
                                <ArrowRight />
                            </span>
                        </p>
                    </a>

                    <a href="#" class="subpages-list__item">
                        <div class="icon">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/resources-logo/handshake-3.png"
                                alt=""
                            />
                        </div>
                        <h3 class="title--sec">Partner Program</h3>
                        <p class="subpages-list__link">
                            <span>Go To Page</span>
                            <span class="icon">
                                <ArrowRight />
                            </span>
                        </p>
                    </a>

                    <a href="#" class="subpages-list__item">
                        <div class="icon">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/resources-logo/export.png"
                                alt=""
                            />
                        </div>
                        <h3 class="title--sec">Refer a Business</h3>
                        <p class="subpages-list__link">
                            <span>Go To Page</span>
                            <span class="icon">
                                <ArrowRight />
                            </span>
                        </p>
                    </a>
                </div>

                <div class="col-right" />
            </section>
        );
    },

    save: props => {
        const {
            bgImgDesktop,
            bgImgMobile,
            link1,
            link2,
            link3,
            link4
        } = props.attributes;

        return (
            <section class="subpages-list">
                {/* prettier-ignore */}
                <style>
                {`
                    .subpages-list .col-right {
                        background-image: url(${bgImgMobile});
                    }
                    
                    @media screen and (min-width: 992px) {
                        .subpages-list .col-right {
                            background-image: url(${bgImgDesktop});
                        }
                    }
                `}
                </style>

                <div class="col-left">
                    <a href={link1} class="subpages-list__item">
                        <div class="icon">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/resources-logo/book-1.png"
                                alt=""
                            />
                        </div>
                        <h3 class="title--sec">Blog</h3>
                        <p class="subpages-list__link">
                            <span>Go To Page</span>
                            <span class="icon">
                                <ArrowRight />
                            </span>
                        </p>
                    </a>

                    <a href={link2} class="subpages-list__item">
                        <div class="icon">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/resources-logo/doubt.png"
                                alt=""
                            />
                        </div>
                        <h3 class="title--sec">FAQ</h3>
                        <p class="subpages-list__link">
                            <span>Go To Page</span>
                            <span class="icon">
                                <ArrowRight />
                            </span>
                        </p>
                    </a>

                    <a href={link3} class="subpages-list__item">
                        <div class="icon">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/resources-logo/handshake-3.png"
                                alt=""
                            />
                        </div>
                        <h3 class="title--sec">Partner Program</h3>
                        <p class="subpages-list__link">
                            <span>Go To Page</span>
                            <span class="icon">
                                <ArrowRight />
                            </span>
                        </p>
                    </a>

                    <a href={link4} class="subpages-list__item">
                        <div class="icon">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/resources-logo/export.png"
                                alt=""
                            />
                        </div>
                        <h3 class="title--sec">Refer a Business</h3>
                        <p class="subpages-list__link">
                            <span>Go To Page</span>
                            <span class="icon">
                                <ArrowRight />
                            </span>
                        </p>
                    </a>
                </div>

                <div class="col-right" />
            </section>
        );
    }
});
