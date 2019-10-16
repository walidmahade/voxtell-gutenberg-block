const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/happy-clients", {
  title: __("Home Happy Clients"),
  icon: "edit",
  category: "home-page-blocks",
  keywords: [__("Home"), __("how"), __("it"), __("works")],
  attributes: {
    secTitle: {
      type: "string",
      default: "Some Of Our Happy Customers"
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
    }
  },

  edit: props => {
    const {
      secTitle,
      image1,
      image2,
      image3,
      image4,
      image5
    } = props.attributes;

    const { setAttributes } = props;

    const onSecTitleChange = secTitle => setAttributes({ secTitle });

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
      <section id="happy-clients">
        <div className="container">
          <div className="row clients">
            <h2 className="title--sec w-100 light">
              <RichText value={secTitle} onChange={onSecTitleChange} />
            </h2>

            <div className="icons w-100">
              <div className="icons__item">
                <img src={image1} alt="illustratedproperties" />

                <MediaUpload
                  onSelect={onImage1Change}
                  type="image"
                  value={image1}
                  render={({ open }) => (
                    <button onClick={open} className="btn-editor">
                      <span className="dashicons dashicons-format-image" />
                    </button>
                  )}
                />
              </div>

              <div className="icons__item">
                <img src={image2} alt="Full-Logo-Clear" />

                <MediaUpload
                  onSelect={onImage2Change}
                  type="image"
                  value={image2}
                  render={({ open }) => (
                    <button onClick={open} className="btn-editor">
                      <span className="dashicons dashicons-format-image" />
                    </button>
                  )}
                />
              </div>

              <div className="icons__item">
                <img src={image3} alt="cavas" />

                <MediaUpload
                  onSelect={onImage3Change}
                  type="image"
                  value={image3}
                  render={({ open }) => (
                    <button onClick={open} className="btn-editor">
                      <span className="dashicons dashicons-format-image" />
                    </button>
                  )}
                />
              </div>

              <div className="icons__item">
                <img src={image4} alt="firespring-fund" />

                <MediaUpload
                  onSelect={onImage4Change}
                  type="image"
                  value={image4}
                  render={({ open }) => (
                    <button onClick={open} className="btn-editor">
                      <span className="dashicons dashicons-format-image" />
                    </button>
                  )}
                />
              </div>

              <div className="icons__item">
                <img src={image5} alt="fattmerchant" />

                <MediaUpload
                  onSelect={onImage5Change}
                  type="image"
                  value={image5}
                  render={({ open }) => (
                    <button onClick={open} className="btn-editor">
                      <span className="dashicons dashicons-format-image" />
                    </button>
                  )}
                />
              </div>
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
      image4,
      image5
    } = props.attributes;

    return (
      <section id="happy-clients">
        <div className="container">
          <div className="row clients">
            <h2 className="title--sec w-100 light">
              <RichText.Content value={secTitle} />
            </h2>

            <div className="icons w-100">
              <div className="icons__item">
                <img src={image1} alt="illustratedproperties" />
              </div>

              <div className="icons__item">
                <img src={image2} alt="Full-Logo-Clear" />
              </div>

              <div className="icons__item">
                <img src={image3} alt="cavas" />
              </div>

              <div className="icons__item">
                <img src={image4} alt="firespring-fund" />
              </div>

              <div className="icons__item">
                <img src={image5} alt="fattmerchant" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});
