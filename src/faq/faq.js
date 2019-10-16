const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks, URLInput } = wp.editor;

registerBlockType("cgb/faq", {
    title: __("Accordion"),
    icon: "edit",
    category: "all-page-blocks",
    keywords: [__("Accordion"), __("FAQ")],
    attributes: {
        text1: {
            type: "string",
            default: "Marketing & graphics"
        },
        text2: {
            type: "string",
            default:
                "Marketing & Graphics We’re always looking for someone who is ambitious, honest, proactive, positive, innovative, and has an insatiable appetite for success to join our team.Send us your info and we will get back to you.🙂 Good Luck!"
        }
    },

    edit: props => {
        const { text1, text2 } = props.attributes;
        const { setAttributes } = props;

        const handleT1 = text1 => setAttributes({ text1 });
        const handleT2 = text2 => setAttributes({ text2 });

        const handleAccdnToggle = e => {
            const accdnTitle = document.querySelectorAll(".accdn__title");

            e.currentTarget.parentNode.classList.toggle("accdn__item--active");

            accdnTitle.forEach(function(item) {
                if (item != e.currentTarget) {
                    item.parentNode.classList.remove("accdn__item--active");
                }
            });
        };

        return (
            <section id="careers-faq">
                <div class="container">
                    <div class="row">
                        <div class="accdn">
                            <div class="accdn__item accdn__item--active">
                                <h3 class="accdn__title" onClick={handleAccdnToggle}>
                                    <span>
                                        <RichText value={text1} onChange={handleT1} />
                                    </span>
                                    <span class="icon icon--closed">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.09 27.31">
                                            <defs>
                                                <style>
                                                    {`.cls-1 {
                                                    fill: url(#linear-gradient);
                                            }`}
                                                </style>
                                                <linearGradient id="linear-gradient" y1="13.65" x2="47.09" y2="13.65" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stop-color="#fbb615"></stop>
                                                    <stop offset="1" stop-color="#cb2d2c"></stop>
                                                </linearGradient>
                                            </defs>
                                            <title>Asset 2</title>
                                            <g id="Layer_2" data-name="Layer 2">
                                                <g id="Layer_1-2" data-name="Layer 1">
                                                    <path className="cls-1" d="M47.09,3.07,43.94,0,23.55,21,3.16,0,0,3.07,23.55,27.31Z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <span class="icon icon--open">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.09 27.31">
                                            <defs>
                                                <style>
                                                    {`.cls-1 {
                                                    fill: url(#linear-gradient);
                                                }`}
                                                </style>
                                                <linearGradient
                                                    id="linear-gradient"
                                                    x1="-1220"
                                                    y1="13.65"
                                                    x2="-1172.91"
                                                    y2="13.65"
                                                    gradientTransform="translate(-1172.91 27.31) rotate(180)"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop offset="0" stop-color="#fbb615"></stop>
                                                    <stop offset="1" stop-color="#cb2d2c"></stop>
                                                </linearGradient>
                                            </defs>
                                            <title>Asset 3</title>
                                            <g id="Layer_2" data-name="Layer 2">
                                                <g id="Layer_1-2" data-name="Layer 1">
                                                    <path className="cls-1" d="M0,24.24l3.15,3.07,20.39-21,20.39,21,3.16-3.07L23.54,0Z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </h3>

                                <div class="accdn__body">
                                    <div class="accdn__body__wrap">
                                        <p class="para">
                                            <RichText value={text2} onChange={handleT2} />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <InnerBlocks allowedBlocks={["cgb/faq-item-no-button"]} />
                        </div>
                    </div>
                </div>
            </section>
        );
    },

    save: props => {
        const { text1, text2, btnText, btnLink } = props.attributes;

        return (
            <section id="careers-faq">
                <div class="container">
                    <div class="row">
                        <div class="accdn">
                            <div class="accdn__item accdn__item--active">
                                <h3 class="accdn__title">
                                    <span>
                                        <RichText.Content value={text1} />
                                    </span>
                                    <span class="icon icon--closed">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.09 27.31">
                                            <defs>
                                                <style>
                                                    {`.cls-1 {
                                                    fill: url(#linear-gradient);
                                            }`}
                                                </style>
                                                <linearGradient id="linear-gradient" y1="13.65" x2="47.09" y2="13.65" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stop-color="#fbb615"></stop>
                                                    <stop offset="1" stop-color="#cb2d2c"></stop>
                                                </linearGradient>
                                            </defs>
                                            <title>Asset 2</title>
                                            <g id="Layer_2" data-name="Layer 2">
                                                <g id="Layer_1-2" data-name="Layer 1">
                                                    <path className="cls-1" d="M47.09,3.07,43.94,0,23.55,21,3.16,0,0,3.07,23.55,27.31Z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <span class="icon icon--open">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.09 27.31">
                                            <defs>
                                                <style>
                                                    {`.cls-1 {
                                                    fill: url(#linear-gradient);
                                                }`}
                                                </style>
                                                <linearGradient
                                                    id="linear-gradient"
                                                    x1="-1220"
                                                    y1="13.65"
                                                    x2="-1172.91"
                                                    y2="13.65"
                                                    gradientTransform="translate(-1172.91 27.31) rotate(180)"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop offset="0" stop-color="#fbb615"></stop>
                                                    <stop offset="1" stop-color="#cb2d2c"></stop>
                                                </linearGradient>
                                            </defs>
                                            <title>Asset 3</title>
                                            <g id="Layer_2" data-name="Layer 2">
                                                <g id="Layer_1-2" data-name="Layer 1">
                                                    <path className="cls-1" d="M0,24.24l3.15,3.07,20.39-21,20.39,21,3.16-3.07L23.54,0Z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </h3>

                                <div class="accdn__body center">
                                    <div class="accdn__body__wrap">
                                        <p class="para">
                                            <RichText.Content value={text2} />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
