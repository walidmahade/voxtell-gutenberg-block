const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType("cgb/lead-capture", {
  title: __("Home Lead Capture"),
  icon: "edit",
  category: "home-page-blocks",
  keywords: [__("Home"), __("how"), __("it"), __("works")],
  attributes: {
    text1: {
      type: "string",
      default:
        "Get the Resource: 7 Secrets to Successful Business Communications"
    },
    text2: {
      type: "string",
      default:
        "Learn how making simple changes to the way you communicate can mean big differences for your company. Increase your productivity and sales now!"
    },
    text3: {
      type: "string",
      default: "Download the free Pdf"
    },
    image1: {
      type: "string",
      default: "https://via.placeholder.com/80/09f/fff.png"
    }
  },

  edit: props => {
    const { text1, text2, text3, image1 } = props.attributes;
    const { setAttributes } = props;

    const handleT1 = text1 => setAttributes({ text1 });
    const handleT2 = text2 => setAttributes({ text2 });
    const handleT3 = text3 => setAttributes({ text3 });
    const handleImg1 = obj => setAttributes({ image1: obj.sizes.full.url });

    return (
      <section id="lead-capture">
        <div class="container">
          <div class="row">
            <div class="col-left">
              <img src={image1} alt="resource-people" />
              <MediaUpload
                onSelect={handleImg1}
                type="image"
                value={image1}
                render={({ open }) => (
                  <button onClick={open} className="btn-editor">
                    <span class="dashicons dashicons-format-image"></span>
                  </button>
                )}
              />
            </div>

            <div class="col-right">
              <h2 class="title--sec">
                <RichText value={text1} onChange={handleT1} />
              </h2>
              <p class="para">
                <RichText value={text2} onChange={handleT2} />
              </p>
              <div class="lead-capture-cta">
                <input type="email" required placeholder="Email Address" />
                <button class="btn" type="submit">
                  <RichText value={text3} onChange={handleT3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },

  save: props => {
    const { text1, text2, text3, image1 } = props.attributes;

    return (
      <section id="lead-capture">
        <div class="container">
          <div class="row">
            <div class="col-left">
              <img src={image1} alt="resource-people" />
            </div>

            <div class="col-right">
              <h2 class="title--sec">
                <RichText.Content value={text1} />
              </h2>

              <p class="para">
                <RichText.Content value={text2} />
              </p>

              <div class="lead-capture-cta">
                <input type="email" required placeholder="Email Address" />
                <button class="btn" type="submit">
                  <RichText.Content value={text3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});
