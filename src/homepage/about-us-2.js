const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, URLInput } = wp.editor;

registerBlockType("cgb/about-us-2", {
	title: __("Home About Us 2"),
	icon: "edit",
	category: "home-page-blocks",
	keywords: [__("Home"), __("about"), __("us")],
	attributes: {
		btnText: {
			type: "string",
			default: "Learn More"
		},
		btnLink: {
			type: "string",
			default: "#"
		}
	},

	edit: props => {
		const { btnText, btnLink } = props.attributes;
		const { setAttributes } = props;

		const setBtnUrl = btnLink => {
			setAttributes({ btnLink });
		};

		const updateBtnText = btnText => {
			setAttributes({ btnText });
		};

		return (
			<section id="about-us-2" class="center">
				<button class="btn mlra">
					<RichText
						placeholder={btnText}
						value={btnText}
						onChange={updateBtnText}
					/>
				</button>

				<URLInput value={btnLink} onChange={setBtnUrl} />
			</section>
		);
	},

	save: props => {
		const { btnText, btnLink } = props.attributes;

		return (
			<section id="about-us-2" class="center">
				<a href={btnLink} class="btn mlra">
					<RichText.Content value={btnText} />
				</a>
			</section>
		);
	}
});
