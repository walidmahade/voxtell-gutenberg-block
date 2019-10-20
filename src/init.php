<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function my_block_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'my_block-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'my_block-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-data' ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'my_block-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'my_block-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'cgb/block-my-block', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'my_block-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'my_block-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'my_block-cgb-block-editor-css',
		)
	);
	/**
	* Register dynamic block
	*/
	register_block_type(
        'cgb/products', array(
            'style'         => 'my_block-cgb-style-css',
            'editor_script' => 'my_block-cgb-block-js',
            'editor_style'  => 'my_block-cgb-block-editor-css',
            'render_callback' => 'products_dynamic_render_callback'
        )
    );
}

// Hook: Block assets.
add_action( 'init', 'my_block_cgb_block_assets' );
// get feature dimage
function get_featured_img( $post ) {
    $img_url = get_the_post_thumbnail_url( $post, 'large' );
    if ( empty( $img_url ) ) {
        $img_url = '';
    }
    return $img_url;
}
/**
*   Fetch products for grotnend
*/
function products_dynamic_render_callback ($attributes, $content) {
    // get products last 5
    $recent_products = get_posts(array(
        'post_type' => 'our_products',
        'numberposts'      => 5
    ));

//    echo "<pre>";
//    var_dump($recent_products[0]);
//    echo "</pre>";

    if (count($recent_products) === 0) {
        return "No Products Found";
    }

    $products_markup = '';

    foreach ($recent_products as $product) {
        $products_markup .= (
            '<div class="product">
                <div class="product__img">
                    <img src="' .  get_featured_img($product) . ' " alt="prod__title"/>
                </div>
                <div class="product__title">
                    <h2 class="title--sec"> ' .  get_the_title($product) . ' </h2>
                    <button class="video-modal-trigger">
                        <img width={16} height={16} src="/wp-content/themes/voxtell-custom/img/play-icon.png" class alt=""/>
                    </button>
                </div>
                <div class="product__info">
                    <div class="title--sub">
                        ' . get_field("tag_line", $product->ID) . '
                    </div>
                    <div class="para info">
                        ' . ( $product->post_content) . '
                    </div>
                    <button class="info-modal-trigger text-link">
                        Read More
                    </button>
                </div>
                <div class="product__price">
                    <div class="product__price__fixed">
                        <div class="old-price">' . get_field('original_price', $product->ID) . '</div>
                        <div class="sale-price">' . get_field('offer_price', $product->ID) . '</div>
                    </div>
                    <div class="product__price__monthly">
                        <span class="or">or</span>
                        <span class="num">' . get_field('monthly_rent', $product->ID) . '</span>
                    </div>
                </div>
                <div class="modal_content" hidden>
                    ' . get_field('modal_content', $product->ID) . '
                </div>
                <div class="video-url" hidden>
                    ' . get_field('video_url', $product->ID) . '
                </div>
            </div>'
        );
    }
    // reset post data to avoid conflict
    wp_reset_postdata();

    $block_content = sprintf(
        '<div class="voxtell-business">
                <section class="products-grid section">
                    <div class="container">
                        <div class="header center w-100">
                            <h2 class="title--sec">
                                Voxtell Certified Phones &amp; Devices
                            </h2>
                            <p class="para--subt">(Recommended)</p>
                        </div>

                        %1$s
                    </div>
                </section>
            </div>',
        $products_markup
    );

    return $block_content;
}

/*
* Create custom block categories
* Category according to pages
*/
function mw_page_block_categories( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'home-page-blocks',
				'title' => __( 'Homepage', 'home-page-blocks' ),
			),
			array(
				'slug' => 'our-solutions-page-blocks',
				'title' => __( 'Our Solutions', 'our-solutions-page-blocks' ),
			),
			array(
				'slug' => 'all-page-blocks',
				'title' => __( 'All Page Blocks', 'all-page-blocks' ),
			),
			array(
				'slug' => 'careers-page-blocks',
				'title' => __( 'Careers Page Blocks', 'careers-page-blocks' ),
			),
			array(
				'slug' => 'our-solutions',
				'title' => __( 'Our Solutions', 'our-solutions' ),
			),
			array(
				'slug' => 'faq',
				'title' => __( 'FAQ', 'faq' ),
			),
			array(
				'slug' => 'list-feature',
				'title' => __( 'Features List Page', 'list-feature' ),
			),
			array(
				'slug' => 'get-started',
				'title' => __( 'Get Started', 'get-started' ),
			),
			array(
				'slug' => 'partner-program',
				'title' => __( 'Partner Program', 'partner-program' ),
			),
			array(
				'slug' => 'refer-business',
				'title' => __( 'Refer Business', 'refer-business' ),
			),
			array(
                'slug' => 'what-we-do',
                'title' => __( 'What We Do', 'what-we-do' ),
            ),
			array(
                'slug' => 'why-voxtell',
                'title' => __( 'Why Voxtell', 'why-voxtell' ),
            ),
            array(
                'slug' => 'online-fax',
                'title' => __( 'Online Fax Service', 'online-fax' ),
            ),
            array(
                'slug' => 'business-text-messaging',
                'title' => __( 'Business Test Messaging', 'business-text-messaging' ),
            ),
            array(
                'slug' => 'pbx-sip-trunk',
                'title' => __( 'PBX sip trunk', 'pbx-sip-trunk' ),
            ),
            array(
                'slug' => 'new-pricing',
                'title' => __( 'New pricing', 'new-pricing' ),
            )
		)
	);
}

// add block categories
add_filter( 'block_categories', 'mw_page_block_categories', 10, 2);
