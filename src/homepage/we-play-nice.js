const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/we-play-nice", {
  title: __("Home We Play Nice"),
  icon: "edit",
  category: "home-page-blocks",
  keywords: [__("Home"), __("we"), __("paly"), __("nice")],
  attributes: {
    secTitle: {
      type: "string",
      default: "We Play Nice"
    },
    text1: {
      type: "string",
      default: "Our solutions integrate seamlessly with your other systems."
    },
    text2: {
      type: "string",
      default:
        "Don’t see the app that you looking for? Contact us so we can customize one for you."
    },
    image1: {
      type: "string",
      default: "https://via.placeholder.com/80/09f/fff.png"
    },
    image2: {
      type: "string",
      default: "https://via.placeholder.com/80/09f/fff.png"
    },
    image3: {
      type: "string",
      default: "https://via.placeholder.com/80/09f/fff.png"
    },
    image4: {
      type: "string",
      default: "https://via.placeholder.com/80/09f/fff.png"
    },
    image5: {
      type: "string",
      default: "https://via.placeholder.com/80/09f/fff.png"
    },
    btnText: {
      type: "string",
      default: "Get Started"
    },
    btnLink: {
      type: "string",
      default: "#"
    }
  },

  edit: props => {
    const {
      secTitle,
      text1,
      text2,
      image1,
      image2,
      image3,
      image4,
      image5
    } = props.attributes;

    const { setAttributes } = props;

    const onSecTitleChange = secTitle => setAttributes({ secTitle });
    const onText1Change = text1 => setAttributes({ text1 });
    const onText2Change = text2 => setAttributes({ text2 });

    const onImage1Change = imgObj =>
      setAttributes({ image1: imgObj.sizes.full.url });
    const onImage2Change = imgObj =>
      setAttributes({ image2: imgObj.sizes.full.url });
    const onImage3Change = imgObj =>
      setAttributes({ image3: imgObj.sizes.full.url });
    const onImage4Change = imgObj =>
      setAttributes({ image4: imgObj.sizes.full.url });
    const onImage5Change = imgObj =>
      setAttributes({ image5: imgObj.sizes.full.url });

    return (
      <section id="we-play-nice">
        <div class="bg-overlay dots-right"></div>

        <div class="container">
          <div class="row light">
            <h2 class="title--sec w-100 center">
              <RichText value={secTitle} onChange={onSecTitleChange} />
            </h2>
            <p class="para center w-100">
              <RichText value={text1} onChange={onText1Change} />
            </p>
          </div>

          <div class="row icons">
            <div class="icons__item">
              <img src={image1} />
              <MediaUpload
                onSelect={onImage1Change}
                type="image"
                value={image1}
                render={({ open }) => (
                  <button onClick={open} className="btn-editor">
                    <span class="dashicons dashicons-format-image"></span>
                  </button>
                )}
              />
            </div>

            <div class="icons__item">
              <img src={image2} />
              <MediaUpload
                onSelect={onImage2Change}
                type="image"
                value={image2}
                render={({ open }) => (
                  <button onClick={open} className="btn-editor">
                    <span class="dashicons dashicons-format-image"></span>
                  </button>
                )}
              />
            </div>

            <div class="icons__item">
              <img src={image3} />
              <MediaUpload
                onSelect={onImage3Change}
                type="image"
                value={image3}
                render={({ open }) => (
                  <button onClick={open} className="btn-editor">
                    <span class="dashicons dashicons-format-image"></span>
                  </button>
                )}
              />
            </div>

            <div class="icons__item">
              <img src={image4} />
              <MediaUpload
                onSelect={onImage4Change}
                type="image"
                value={image4}
                render={({ open }) => (
                  <button onClick={open} className="btn-editor">
                    <span class="dashicons dashicons-format-image"></span>
                  </button>
                )}
              />
            </div>

            <div class="icons__item">
              <img src={image5} />
              <MediaUpload
                onSelect={onImage5Change}
                type="image"
                value={image5}
                render={({ open }) => (
                  <button onClick={open} className="btn-editor">
                    <span class="dashicons dashicons-format-image"></span>
                  </button>
                )}
              />
            </div>
          </div>

          <div class="row light">
            <p class="para center w-100">
              <RichText value={text2} onChange={onText2Change} />
            </p>
          </div>
        </div>
      </section>
    );
  },

  save: props => {
    const {
      secTitle,
      text1,
      text2,
      image1,
      image2,
      image3,
      image4,
      image5
    } = props.attributes;

    return (
      <section id="we-play-nice">
        <div class="bg-overlay dots-right"></div>

        <div class="container">
          <div class="row light">
            <h2 class="title--sec w-100 center light">
              <RichText.Content value={secTitle} />
            </h2>
            <p class="para center w-100">
              <RichText.Content value={text1} />
            </p>
          </div>

          <div class="row icons">
            <div class="icons__item">
              <img src={image1} alt="salesforce_logo" />
            </div>

            <div class="icons__item">
              <img src={image2} alt="zendesk-medium" />
            </div>

            <div class="icons__item">
              <img src={image3} alt="Slack_RGB" />
            </div>

            <div class="icons__item">
              <img src={image4} alt="oracle_clr_rgb" />
            </div>

            <div class="icons__item">
              <img src={image5} alt="outlook-logo-vector" />
            </div>
          </div>

          <div class="row light">
            <p class="para center w-100">
              <RichText.Content value={text2} />
            </p>
          </div>
        </div>
      </section>
    );
  }
});
