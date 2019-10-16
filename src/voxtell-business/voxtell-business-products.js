const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, RadioControl } = wp.editor;
const { withSelect } = wp.data;

registerBlockType("cgb/products", {
    title: __( "VoxTell Business Products" ),
    icon: "edit",
    category: "common",
    keywords: [ __( "Products" ), __("Product") ],
    attributes: {
        option: {
            type: "string",
            default: false
        }
    },
    edit: withSelect( select => {
        return {
            posts: select( 'core' ).getEntityRecords( 'postType', 'our_products', {
                per_page: 5,
                order: 'asc'
            })
        };
        }) ( ({ posts }) => {
        if ( ! posts ) {
            return "Loading...";
        }

        if ( posts && posts.length === 0 ) {
            return "No posts";
        }

        // let post = posts[ 0 ];
        // console.info(posts);

        return (
            <div className="voxtell-business">
                <section className="products-grid section">
                    <div className="container">
                        <div className="header center w-100">
                            <h2 className="title--sec">
                                Voxtell Certified Phones &amp; Devices
                            </h2>
                            <p className="para--subt">(Recommended)</p>
                        </div>
                        {/* product start */}
                        {
                            posts.map((product, index) => {
                                return (
                                    <div className="product" data-key={index}>
                                        <div className="product__img">
                                            <img src={product.attachment_url} alt="prod__title"/>
                                        </div>
                                        <div className="product__title">
                                            <h2 className="title--sec">{product.title.rendered}</h2>
                                            <button className="video-modal-trigger">
                                                <img width={16} height={16} src="/wp-content/themes/voxtell-custom/img/play-icon.png" className alt=""/>
                                            </button>
                                        </div>
                                        <div className="product__info">
                                            <p className="title--sub">
                                                {product.tag_line}
                                            </p>
                                            <p className="para info">
                                                <RichText.Content value={product.content.rendered} />
                                            </p>
                                            <button className="info-modal-trigger text-link">
                                                Read More
                                            </button>
                                        </div>
                                        <div className="product__price">
                                            <div className="product__price__fixed">
                                                <div className="old-price">{product.original_price}</div>
                                                <div className="sale-price">{product.offer_price}</div>
                                            </div>
                                            <div className="product__price__monthly">
                                                <span className="or">or</span>
                                                <span className="num">{product.monthly_rent}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </section>
            </div>
        );
    }),

    save: props => {
        return null;
    }
});
