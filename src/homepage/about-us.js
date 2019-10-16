const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

registerBlockType( 'cgb/about-us', {
	title: __( 'Home About Us' ),
	icon: 'edit',
	category: 'home-page-blocks',
	keywords: [ __( 'Home' ), __( 'about' ), __( 'us' ) ],
	attributes: {
		// icon 1
		text1: {
			type: 'string',
			default: 'international   Numbers',
		},
		image1: {
			type: 'string',
			default: 'https://via.placeholder.com/100/09f/fff.png',
		},
		// icon 2
		text2: {
			type: 'string',
			default: 'Call Recording',
		},
		image2: {
			type: 'string',
			default: 'https://via.placeholder.com/100/09f/fff.png',
		},
		// icon 3
		text3: {
			type: 'string',
			default: 'Extensions & Transferring',
		},
		image3: {
			type: 'string',
			default: 'https://via.placeholder.com/100/09f/fff.png',
		},
		// icon 4
		text4: {
			type: 'string',
			default: 'Call Statistics',
		},
		image4: {
			type: 'string',
			default: 'https://via.placeholder.com/100/09f/fff.png',
		},
		// icon 5
		text5: {
			type: 'string',
			default: 'Personalized Greetings',
		},
		image5: {
			type: 'string',
			default: 'https://via.placeholder.com/100/09f/fff.png',
		},
		// icon 6
		text6: {
			type: 'string',
			default: 'Voicemail to Email',
		},
		image6: {
			type: 'string',
			default: 'https://via.placeholder.com/100/09f/fff.png',
		},
	},

	edit: props => {
		const { setAttributes } = props;
		const {
			text1,
			image1,
			text2,
			image2,
			text3,
			image3,
			text4,
			image4,
			text5,
			image5,
			text6,
			image6,
		} = props.attributes;

		const handleText1Change = text1 => setAttributes( { text1 } );
		const handleText2Change = text2 => setAttributes( { text2 } );
		const handleText3Change = text3 => setAttributes( { text3 } );
		const handleText4Change = text4 => setAttributes( { text4 } );
		const handleText5Change = text5 => setAttributes( { text5 } );
		const handleText6Change = text6 => setAttributes( { text6 } );

		const handleImage1Change = imgObj =>
			setAttributes( { image1: imgObj.sizes.full.url } );
		const handleImage2Change = imgObj =>
			setAttributes( { image2: imgObj.sizes.full.url } );
		const handleImage3Change = imgObj =>
			setAttributes( { image3: imgObj.sizes.full.url } );
		const handleImage4Change = imgObj =>
			setAttributes( { image4: imgObj.sizes.full.url } );
		const handleImage5Change = imgObj =>
			setAttributes( { image5: imgObj.sizes.full.url } );
		const handleImage6Change = imgObj =>
			setAttributes( { image6: imgObj.sizes.full.url } );

		return (
			<section id="about-us">
				<div className="container">
					<div className="row row--icons">
						<div className="icons">
							{ /* icon item */ }
							<div className="icons__item">
								<img src={ image1 } alt="voxtell_phone" />
								<MediaUpload
									onSelect={ handleImage1Change }
									type="image"
									value={ image1 }
									render={ ( { open } ) => (
										<button onClick={ open } className="btn-editor">
											<span className="dashicons dashicons-format-image" />
										</button>
									) }
								/>
								<h3 className="title--icon">
									<RichText value={ text1 } onChange={ handleText1Change } />
								</h3>
							</div>
							{ /* icon item end */ }
							{ /* icon item */ }
							<div className="icons__item">
								<img src={ image2 } alt="voxtell_phone" />
								<MediaUpload
									onSelect={ handleImage2Change }
									type="image"
									value={ image2 }
									render={ ( { open } ) => (
										<button onClick={ open } className="btn-editor">
											<span className="dashicons dashicons-format-image" />
										</button>
									) }
								/>
								<h3 className="title--icon">
									<RichText value={ text2 } onChange={ handleText2Change } />
								</h3>
							</div>
							{ /* icon item end */ }
							{ /* icon item */ }
							<div className="icons__item">
								<img src={ image3 } alt="voxtell_phone" />
								<MediaUpload
									onSelect={ handleImage3Change }
									type="image"
									value={ image3 }
									render={ ( { open } ) => (
										<button onClick={ open } className="btn-editor">
											<span className="dashicons dashicons-format-image" />
										</button>
									) }
								/>
								<h3 className="title--icon">
									<RichText value={ text3 } onChange={ handleText3Change } />
								</h3>
							</div>
							{ /* icon item end */ }
							{ /* icon item */ }
							<div className="icons__item">
								<img src={ image4 } alt="voxtell_phone" />
								<MediaUpload
									onSelect={ handleImage4Change }
									type="image"
									value={ image4 }
									render={ ( { open } ) => (
										<button onClick={ open } className="btn-editor">
											<span className="dashicons dashicons-format-image" />
										</button>
									) }
								/>
								<h3 className="title--icon">
									<RichText value={ text4 } onChange={ handleText4Change } />
								</h3>
							</div>
							{ /* icon item end */ }
							{ /* icon item */ }
							<div className="icons__item">
								<img src={ image5 } alt="voxtell_phone" />
								<MediaUpload
									onSelect={ handleImage5Change }
									type="image"
									value={ image5 }
									render={ ( { open } ) => (
										<button onClick={ open } className="btn-editor">
											<span className="dashicons dashicons-format-image" />
										</button>
									) }
								/>
								<h3 className="title--icon">
									<RichText value={ text5 } onChange={ handleText5Change } />
								</h3>
							</div>
							{ /* icon item end */ }
							{ /* icon item */ }
							<div className="icons__item">
								<img src={ image6 } alt="voxtell_phone" />
								<MediaUpload
									onSelect={ handleImage6Change }
									type="image"
									value={ image6 }
									render={ ( { open } ) => (
										<button onClick={ open } className="btn-editor">
											<span className="dashicons dashicons-format-image" />
										</button>
									) }
								/>
								<h3 className="title--icon">
									<RichText value={ text6 } onChange={ handleText6Change } />
								</h3>
							</div>
							{ /* icon item end */ }
						</div>
					</div>
				</div>
			</section>
		);
	},

	save: props => {
		const {
			text1,
			image1,
			text2,
			image2,
			text3,
			image3,
			text4,
			image4,
			text5,
			image5,
			text6,
			image6,
		} = props.attributes;

		return (
			<section id="about-us">
				<div className="container">
					<div className="row row--icons">
						<div className="icons">
							<div className="icons__item">
								<img src={ image1 } alt="voxtell international presence" />
								<h3 className="title--icon">
									<RichText.Content value={ text1 } />
								</h3>
							</div>
							<div className="icons__item">
								<img src={ image2 } alt="voxtell international presence" />
								<h3 className="title--icon">
									<RichText.Content value={ text2 } />
								</h3>
							</div>
							<div className="icons__item">
								<img src={ image3 } alt="voxtell international presence" />
								<h3 className="title--icon">
									<RichText.Content value={ text3 } />
								</h3>
							</div>
							<div className="icons__item">
								<img src={ image4 } alt="voxtell international presence" />
								<h3 className="title--icon">
									<RichText.Content value={ text4 } />
								</h3>
							</div>
							<div className="icons__item">
								<img src={ image5 } alt="voxtell international presence" />
								<h3 className="title--icon">
									<RichText.Content value={ text5 } />
								</h3>
							</div>
							<div className="icons__item">
								<img src={ image6 } alt="voxtell international presence" />
								<h3 className="title--icon">
									<RichText.Content value={ text6 } />
								</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	},
} );
