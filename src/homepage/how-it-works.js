const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, URLInput, MediaUpload } = wp.editor;

registerBlockType("cgb/how-it-works", {
  title: __("Home How It Works"),
  icon: "edit",
  category: "home-page-blocks",
  keywords: [__("Home"), __("how"), __("it"), __("works")],
  attributes: {
    secTitle: {
      type: "string",
      default: "How It Works"
    },
    text1: {
      type: "string",
      default: "Contact us for a quote"
    },
    text2: {
      type: "string",
      default: "We will design a phone solution perfect for your business needs"
    },
    text3: {
      type: "string",
      default: "Installation and integration is simple and seamless"
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
      image1,
      image2,
      image3,
      text1,
      text2,
      text3,
      btnText,
      btnLink
    } = props.attributes;

    const { setAttributes } = props;

    const onSecTitleChange = secTitle => setAttributes({ secTitle });
    const onText1Change = text1 => setAttributes({ text1 });
    const onText2Change = text2 => setAttributes({ text2 });
    const onText3Change = text3 => setAttributes({ text3 });

    const onImage1Change = imgObj =>
      setAttributes({ image1: imgObj.sizes.full.url });
    const onImage2Change = imgObj =>
      setAttributes({ image2: imgObj.sizes.full.url });
    const onImage3Change = imgObj =>
      setAttributes({ image3: imgObj.sizes.full.url });

    const setBtnUrl = btnLink => setAttributes({ btnLink });
    const updateBtnText = btnText => setAttributes({ btnText });

    return (
      <section id="how-we-work">
        <div class="container">
          <div class="row">
            <h2 class="title--sec w-100 center">
              <RichText value={secTitle} onChange={onSecTitleChange} />
            </h2>

            <div class="icons">
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

                <h3 class="para">
                  <span class="num">1</span>
                  <span>
                    <RichText value={text1} onChange={onText1Change} />
                  </span>
                </h3>
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

                <h3 class="para">
                  <span class="num">2</span>
                  <span>
                    <RichText value={text2} onChange={onText2Change} />
                  </span>
                </h3>
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

                <h3 class="para">
                  <span class="num">3</span>
                  <span>
                    <RichText value={text3} onChange={onText3Change} />
                  </span>
                </h3>
              </div>
            </div>

            <div class="cta w-100 center">
              <button class="btn mlra">
                <RichText
                  placeholder={btnText}
                  value={btnText}
                  onChange={updateBtnText}
                />
              </button>

              <URLInput value={btnLink} onChange={setBtnUrl} />
            </div>
          </div>
        </div>
      </section>
    );
  },

  save: props => {
    const {
      secTitle,
      image1,
      image2,
      image3,
      text1,
      text2,
      text3,
      btnText,
      btnLink
    } = props.attributes;

    return (
      <section id="how-we-work">
        <div class="container">
          <div class="row">
            <h2 class="title--sec w-100 center">
              <RichText.Content value={secTitle} />
            </h2>

            <div class="icons">
              <div class="icons__item">
                <img src={image1} alt="Voxtell Contact us for a quote" />
                <h3 class="para">
                  <span class="num">1</span>
                  <span>
                    <RichText.Content value={text1} />
                  </span>
                </h3>
              </div>

              <div class="icons__item">
                <img
                  src={image2}
                  alt="Voxtell We will design a phone solution perfect for your business needs"
                />
                <h3 class="para">
                  <span class="num">2</span>
                  <span>
                    <RichText.Content value={text2} />
                  </span>
                </h3>
              </div>

              <div class="icons__item">
                <img
                  src={image3}
                  alt="Voxtell Installation and integration is simple and seamless"
                />
                <h3 class="para">
                  <span class="num">3</span>
                  <span>
                    <RichText.Content value={text3} />
                  </span>
                </h3>
              </div>
            </div>

            <div class="cta w-100 center">
              <a href={btnLink} class="btn">
                <RichText.Content value={btnText} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
});
