const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
// const { RichText, InspectorControls, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/pricing-new", {
    title: __("Pricing new page"),
    icon: "edit",
    category: "common",
    keywords: [__("Pricing"), __("New")],
    attributes: {},

    edit: props => {
        // const {} = props.attributes;
        // const { setAttributes } = props;

        return (
            <div className="new-pricing-page">
                <section id="np-hero" className="section">
                    <div className="container">
                        <div className="row center">
                            <h2 className="title--big w-100 center">
                                Voxtell Pricing
                            </h2>
                            <h2 className="title--big w-100 center">
                                Honest. Affordable. Simple.
                            </h2>
                        </div>
                    </div>
                </section>

                <section id="pricing-tables" className="section">
                    <div className="container">

                        <div className="row">
                            <div className="tab-nav w-100">
                                <button className="tab-btn active" data-id={1}>
                                    Communication
                                </button>
                                <button className="tab-btn" data-id={2}>
                                    Customer Relationship
                                </button>
                                <button className="tab-btn" data-id={3}>
                                    Team Collaboration
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="tab-contents w-100">
                                {/* START tab content */}
                                <div id={1} className="tab-content-item active">
                                    <div className="price-cards-wrap">
                                        {/* price box item */}
                                        <div className="card price-card">
                                            <div className="header light">
                                                <h3 className="title--sub">
                                                    Basic
                                                </h3>
                                                <div className="showboat">
                                                    Business Phone Service
                                                </div>
                                                <div className="price">
                                                    <div className="top-text">
                                                        As low as
                                                    </div>
                                                    <div className="detail-price">
                                                        <div className="num">
                                                            $8
                                                        </div>
                                                        <div className="price-table-trigger">
                                                            <img
                                                                src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg"
                                                                alt
                                                            />
                                                        </div>
                                                        <div className="tt-ct-pricing">
                                                            <div className="priceTop">
                                                                <div className="columnFirst">
                                                                    &nbsp;
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        Monthly
                                                                    </span>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        36 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <span>
                                                                        <strong>
                                                                            PREPAY
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        12 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* end priceTop */}
                                                            <div className="priceBottom">
                                                                <div className="columnFirst">
                                                                    <div className="rowFirst">
                                                                        1-4
                                                                        users
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        5-19
                                                                        users
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        20-99
                                                                        users
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        100+
                                                                        users
                                                                    </div>
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $35
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $33
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $28
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $20
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end priceBottom */}
                                                        </div>
                                                        {/* end price table */}
                                                    </div>
                                                    <div className="bottom-text">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <p className="para para--subt">
                                                    Includes
                                                </p>
                                                <h4 className="title--sub">
                                                    Business Phone Service &amp;
                                                    Customer Relationship Suite
                                                </h4>
                                                <p className="para para-item">
                                                    Communicate
                                                </p>
                                                <p className="para para-item">
                                                    Manage Prospects
                                                </p>
                                                <p className="para para-item">
                                                    Service Customers
                                                </p>
                                                <p className="para para-item">
                                                    Collaborate with Teams
                                                </p>
                                                <p className="para-item-divider" />
                                                <p className="para-item-divider" />
                                                <p className="para-item-divider" />
                                                <a
                                                    href="#compare-acc"
                                                    className="compare center"
                                                >
                                                    <span>
                                                        Compare All Features
                                                    </span>
                                                    <img
                                                        src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg"
                                                        alt
                                                    />
                                                </a>
                                                <div className="cta">
                                                    <a href="#" className="btn">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* price box item end */}
                                        {/* price box item */}
                                        <div className="card price-card">
                                            <div className="most-popular">
                                                Our most popular package
                                            </div>
                                            <div className="header light">
                                                <h3 className="title--sub">
                                                    Basic
                                                </h3>
                                                <div className="showboat">
                                                    Business Phone Service
                                                </div>
                                                <div className="price">
                                                    <div className="top-text">
                                                        As low as
                                                    </div>
                                                    <div className="detail-price">
                                                        <div className="num">
                                                            $17
                                                        </div>
                                                        <div className="price-table-trigger">
                                                            <img
                                                                src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg"
                                                                alt
                                                            />
                                                        </div>
                                                        <div className="tt-ct-pricing">
                                                            <div className="priceTop">
                                                                <div className="columnFirst">
                                                                    &nbsp;
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        Monthly
                                                                    </span>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        36 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <span>
                                                                        <strong>
                                                                            PREPAY
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        12 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* end priceTop */}
                                                            <div className="priceBottom">
                                                                <div className="columnFirst">
                                                                    <div className="rowFirst">
                                                                        1-4
                                                                        users
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        5-19
                                                                        users
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        20-99
                                                                        users
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        100+
                                                                        users
                                                                    </div>
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $35
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $33
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $28
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $20
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end priceBottom */}
                                                        </div>
                                                        {/* end price table */}
                                                    </div>
                                                    <div className="bottom-text">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <p className="para para--subt">
                                                    Includes
                                                </p>
                                                <h4 className="title--sub">
                                                    Business Phone Service &amp;
                                                    Customer Relationship Suite
                                                </h4>
                                                <p className="para para-item">
                                                    Communicate
                                                </p>
                                                <p className="para para-item">
                                                    Manage Prospects
                                                </p>
                                                <p className="para para-item">
                                                    Service Customers
                                                </p>
                                                <p className="para para-item">
                                                    Collaborate with Teams
                                                </p>
                                                <p className="para para-item">
                                                    Survey Customers
                                                </p>
                                                <p className="para-item-divider" />
                                                <p className="para-item-divider" />
                                                <a
                                                    href="#compare-acc"
                                                    className="compare center"
                                                >
                                                    <span>
                                                        Compare All Features
                                                    </span>
                                                    <img
                                                        src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg"
                                                        alt
                                                    />
                                                </a>
                                                <div className="cta">
                                                    <a href="#" className="btn">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* price box item end */}
                                        {/* price box item */}
                                        <div className="card price-card">
                                            <div className="header light">
                                                <h3 className="title--sub">
                                                    Basic
                                                </h3>
                                                <div className="showboat">
                                                    Business Phone Service
                                                </div>
                                                <div className="price">
                                                    <div className="top-text">
                                                        As low as
                                                    </div>
                                                    <div className="detail-price">
                                                        <div className="num">
                                                            $24
                                                        </div>
                                                        <div className="price-table-trigger">
                                                            <img
                                                                src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg"
                                                                alt
                                                            />
                                                        </div>
                                                        <div className="tt-ct-pricing">
                                                            <div className="priceTop">
                                                                <div className="columnFirst">
                                                                    &nbsp;
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        Monthly
                                                                    </span>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        36 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <span>
                                                                        <strong>
                                                                            PREPAY
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        12 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* end priceTop */}
                                                            <div className="priceBottom">
                                                                <div className="columnFirst">
                                                                    <div className="rowFirst">
                                                                        1-4
                                                                        users
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        5-19
                                                                        users
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        20-99
                                                                        users
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        100+
                                                                        users
                                                                    </div>
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $35
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $33
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $28
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $20
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end priceBottom */}
                                                        </div>
                                                        {/* end price table */}
                                                    </div>
                                                    <div className="bottom-text">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <p className="para para--subt">
                                                    Includes
                                                </p>
                                                <h4 className="title--sub">
                                                    Business Phone Service &amp;
                                                    Customer Relationship Suite
                                                </h4>
                                                <p className="para para-item">
                                                    Communicate
                                                </p>
                                                <p className="para para-item">
                                                    Manage Prospects
                                                </p>
                                                <p className="para para-item">
                                                    Service Customers
                                                </p>
                                                <p className="para para-item">
                                                    Collaborate with Teams
                                                </p>
                                                <p className="para para-item">
                                                    Survey Customers
                                                </p>
                                                <p className="para para-item">
                                                    Analyze Your Business
                                                </p>
                                                <p className="para para-item">
                                                    Chat Live on Your Website
                                                </p>
                                                <a
                                                    href="#compare-acc"
                                                    className="compare center"
                                                >
                                                    <span>
                                                        Compare All Features
                                                    </span>
                                                    <img
                                                        src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg"
                                                        alt
                                                    />
                                                </a>
                                                <div className="cta">
                                                    <a href="#" className="btn">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* price box item end */}
                                    </div>
                                </div>
                                {/* END tab content */}
                                {/* START tab content */}
                                <div id={2} className="tab-content-item">
                                    <h2 className="title--icon">Testing</h2>
                                </div>
                                {/* END tab content */}
                                {/* START tab content */}
                                <div id={3} className="tab-content-item">
                                    <div className="price-cards-wrap">
                                        {/* price box item */}
                                        <div className="card price-card">
                                            <div className="header light">
                                                <h3 className="title--sub">
                                                    Basic
                                                </h3>
                                                <div className="showboat">
                                                    Business Phone Service
                                                </div>
                                                <div className="price">
                                                    <div className="top-text">
                                                        As low as
                                                    </div>
                                                    <div className="detail-price">
                                                        <div className="num">
                                                            $8
                                                        </div>
                                                        <div className="price-table-trigger">
                                                            <img
                                                                src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg"
                                                                alt
                                                            />
                                                        </div>
                                                        <div className="tt-ct-pricing">
                                                            <div className="priceTop">
                                                                <div className="columnFirst">
                                                                    &nbsp;
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        Monthly
                                                                    </span>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        36 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <span>
                                                                        <strong>
                                                                            PREPAY
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        12 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* end priceTop */}
                                                            <div className="priceBottom">
                                                                <div className="columnFirst">
                                                                    <div className="rowFirst">
                                                                        1-4
                                                                        users
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        5-19
                                                                        users
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        20-99
                                                                        users
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        100+
                                                                        users
                                                                    </div>
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $35
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $33
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $28
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $20
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end priceBottom */}
                                                        </div>
                                                        {/* end price table */}
                                                    </div>
                                                    <div className="bottom-text">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <p className="para para--subt">
                                                    Includes
                                                </p>
                                                <h4 className="title--sub">
                                                    Business Phone Service &amp;
                                                    Customer Relationship Suite
                                                </h4>
                                                <p className="para para-item">
                                                    Communicate
                                                </p>
                                                <p className="para para-item">
                                                    Manage Prospects
                                                </p>
                                                <p className="para para-item">
                                                    Service Customers
                                                </p>
                                                <p className="para para-item">
                                                    Collaborate with Teams
                                                </p>
                                                <p className="para-item-divider" />
                                                <p className="para-item-divider" />
                                                <p className="para-item-divider" />
                                                <a
                                                    href="#compare-acc"
                                                    className="compare center"
                                                >
                                                    <span>
                                                        Compare All Features
                                                    </span>
                                                    <img
                                                        src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg"
                                                        alt
                                                    />
                                                </a>
                                                <div className="cta">
                                                    <a href="#" className="btn">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* price box item end */}
                                        {/* price box item */}
                                        <div className="card price-card">
                                            <div className="most-popular">
                                                Our most popular package
                                            </div>
                                            <div className="header light">
                                                <h3 className="title--sub">
                                                    Basic
                                                </h3>
                                                <div className="showboat">
                                                    Business Phone Service
                                                </div>
                                                <div className="price">
                                                    <div className="top-text">
                                                        As low as
                                                    </div>
                                                    <div className="detail-price">
                                                        <div className="num">
                                                            $17
                                                        </div>
                                                        <div className="price-table-trigger">
                                                            <img
                                                                src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg"
                                                                alt
                                                            />
                                                        </div>
                                                        <div className="tt-ct-pricing">
                                                            <div className="priceTop">
                                                                <div className="columnFirst">
                                                                    &nbsp;
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        Monthly
                                                                    </span>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        36 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <span>
                                                                        <strong>
                                                                            PREPAY
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        12 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* end priceTop */}
                                                            <div className="priceBottom">
                                                                <div className="columnFirst">
                                                                    <div className="rowFirst">
                                                                        1-4
                                                                        users
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        5-19
                                                                        users
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        20-99
                                                                        users
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        100+
                                                                        users
                                                                    </div>
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $35
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $33
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $28
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $20
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end priceBottom */}
                                                        </div>
                                                        {/* end price table */}
                                                    </div>
                                                    <div className="bottom-text">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <p className="para para--subt">
                                                    Includes
                                                </p>
                                                <h4 className="title--sub">
                                                    Business Phone Service &amp;
                                                    Customer Relationship Suite
                                                </h4>
                                                <p className="para para-item">
                                                    Communicate
                                                </p>
                                                <p className="para para-item">
                                                    Manage Prospects
                                                </p>
                                                <p className="para para-item">
                                                    Service Customers
                                                </p>
                                                <p className="para para-item">
                                                    Collaborate with Teams
                                                </p>
                                                <p className="para para-item">
                                                    Survey Customers
                                                </p>
                                                <p className="para-item-divider" />
                                                <p className="para-item-divider" />
                                                <a
                                                    href="#compare-acc"
                                                    className="compare center"
                                                >
                                                    <span>
                                                        Compare All Features
                                                    </span>
                                                    <img
                                                        src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg"
                                                        alt
                                                    />
                                                </a>
                                                <div className="cta">
                                                    <a href="#" className="btn">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* price box item end */}
                                        {/* price box item */}
                                        <div className="card price-card">
                                            <div className="header light">
                                                <h3 className="title--sub">
                                                    Basic
                                                </h3>
                                                <div className="showboat">
                                                    Business Phone Service
                                                </div>
                                                <div className="price">
                                                    <div className="top-text">
                                                        As low as
                                                    </div>
                                                    <div className="detail-price">
                                                        <div className="num">
                                                            $24
                                                        </div>
                                                        <div className="price-table-trigger">
                                                            <img
                                                                src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg"
                                                                alt
                                                            />
                                                        </div>
                                                        <div className="tt-ct-pricing">
                                                            <div className="priceTop">
                                                                <div className="columnFirst">
                                                                    &nbsp;
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        Monthly
                                                                    </span>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        36 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <span>
                                                                        <strong>
                                                                            PREPAY
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        12 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* end priceTop */}
                                                            <div className="priceBottom">
                                                                <div className="columnFirst">
                                                                    <div className="rowFirst">
                                                                        1-4
                                                                        users
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        5-19
                                                                        users
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        20-99
                                                                        users
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        100+
                                                                        users
                                                                    </div>
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $35
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $33
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $28
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $20
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end priceBottom */}
                                                        </div>
                                                        {/* end price table */}
                                                    </div>
                                                    <div className="bottom-text">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <p className="para para--subt">
                                                    Includes
                                                </p>
                                                <h4 className="title--sub">
                                                    Business Phone Service &amp;
                                                    Customer Relationship Suite
                                                </h4>
                                                <p className="para para-item">
                                                    Communicate
                                                </p>
                                                <p className="para para-item">
                                                    Manage Prospects
                                                </p>
                                                <p className="para para-item">
                                                    Service Customers
                                                </p>
                                                <p className="para para-item">
                                                    Collaborate with Teams
                                                </p>
                                                <p className="para para-item">
                                                    Survey Customers
                                                </p>
                                                <p className="para para-item">
                                                    Analyze Your Business
                                                </p>
                                                <p className="para para-item">
                                                    Chat Live on Your Website
                                                </p>
                                                <a
                                                    href="#compare-acc"
                                                    className="compare center"
                                                >
                                                    <span>
                                                        Compare All Features
                                                    </span>
                                                    <img
                                                        src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg"
                                                        alt
                                                    />
                                                </a>
                                                <div className="cta">
                                                    <a href="#" className="btn">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* price box item end */}
                                    </div>
                                </div>
                                {/* END tab content */}
                            </div>
                            {/* END tab-content wrap */}
                        </div>
                    </div>
                </section>

                <section id="compare-acc" className="section">
                    <div className="container">
                        <div className="row">
                            {/* START compare acc */}
                            <div className="compare-acc-item active" data-acc-id={1}>
                                <div className="header w-100">
                                    <h3 className="title--sec w-100 center">
                                        Compare our most popular features
                                    </h3>
                                    <p className="para--subt w-100 center">
                                        Includes everything in the Customer
                                        Relationship Suite
                                    </p>
                                </div>
                                <div className="acc-col">
                                    <h3 className="title--alt">
                                        Communication Basic
                                    </h3>
                                    <div className="acc-mw">
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={1}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={2}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                    </div>
                                    {/* END acc-mw */}
                                </div>
                                {/* END col */}
                                <div className="acc-col">
                                    <h3 className="title--alt">
                                        Communication Pro
                                    </h3>
                                    <div className="acc-mw">
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={1}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={2}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                    </div>
                                    {/* END acc-mw */}
                                </div>
                                {/* END col */}
                                <div className="acc-col">
                                    <h3 className="title--alt">
                                        Communication Enterprise
                                    </h3>
                                    <div className="acc-mw">
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={1}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={2}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                    </div>
                                    {/* END acc-mw */}
                                </div>
                                {/* END col */}
                            </div>
                            {/* END compare acc */}
                            {/* START compare acc */}
                            <div className="compare-acc-item" data-acc-id={2}>
                                <div className="header w-100">
                                    <h3 className="title--sec w-100 center">
                                        Compare our most popular features
                                    </h3>
                                    <p className="para--subt w-100 center">
                                        Includes everything in the Customer
                                        Relationship Suite
                                    </p>
                                </div>
                                <p className="para--subt">TESTING</p>
                            </div>
                            {/* END compare acc */}
                            {/* START compare acc */}
                            <div className="compare-acc-item" data-acc-id={3}>
                                <div className="header w-100">
                                    <h3 className="title--sec w-100 center">
                                        Compare our most popular features
                                    </h3>
                                    <p className="para--subt w-100 center">
                                        Includes everything in the Customer
                                        Relationship Suite
                                    </p>
                                </div>
                                <div className="acc-col">
                                    <h3 className="title--alt">
                                        Communication Basic
                                    </h3>
                                    <div className="acc-mw">
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={1}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={2}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                    </div>
                                    {/* END acc-mw */}
                                </div>
                                {/* END col */}
                                <div className="acc-col">
                                    <h3 className="title--alt">
                                        Communication Pro
                                    </h3>
                                    <div className="acc-mw">
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={1}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={2}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                    </div>
                                    {/* END acc-mw */}
                                </div>
                                {/* END col */}
                                <div className="acc-col">
                                    <h3 className="title--alt">
                                        Communication Enterprise
                                    </h3>
                                    <div className="acc-mw">
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={1}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={2}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                    </div>
                                    {/* END acc-mw */}
                                </div>
                                {/* END col */}
                            </div>
                            {/* END compare acc */}
                        </div>
                        <div className="row cta">
                            <a href="#" className="btn">
                                Get Started
                            </a>
                        </div>
                    </div>
                </section>

                <section id="np-all-suite">
                    <div className="container">
                        <div className="row header">
                            <h2 className="title--sec w-100">
                                All suites include features powered by NextOS, a
                                single unified business platform.
                            </h2>
                        </div>
                        <div className="row features">
                            {/* START col */}
                            <div className="col">
                                <h3 className="title--alt">Productivity</h3>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12"><path id="Path_5126" data-name="Path 5126" d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z" transform="translate(-5 -5.405)" fill="#E97514" fillRule="evenodd"/></svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* END col */}
                            {/* START col */}
                            <div className="col">
                                <h3 className="title--alt">Intelligence</h3>
                                <div className="sf__item">
                                    <h4 className="para title">
                                        Customer Journey Mapping
                                    </h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">
                                        Customer Experience Score
                                    </h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">
                                        Customer Sentiment
                                    </h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* END col */}
                            {/* START col */}
                            <div className="col">
                                <h3 className="title--alt">Automation</h3>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* END col */}
                        </div>
                    </div>
                </section>
                <section id="pricing-faq-header" className="section">
                    <div className="container">
                        <div className="row">
                            <h1 className="title--big center w-100 center">
                                Any questions?
                            </h1>
                        </div>
                    </div>
                </section>
                {/* section careers faq */}
                <section id="careers-faq">
                    <div className="container">
                        <div className="row">
                            {/* accordion-start */}
                            <div className="accdn">
                                {/* accordion item start */}
                                <div className="accdn__item accdn__item--active">
                                    <h3 className="accdn__title">
                                        <span>Technology</span>
                                        <span className="icon icon--closed">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        y1="13.65"
                                                        x2="47.09"
                                                        y2="13.65"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 2</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M47.09,3.07,43.94,0,23.55,21,3.16,0,0,3.07,23.55,27.31Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="icon icon--open">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        x1={-1220}
                                                        y1="13.65"
                                                        x2="-1172.91"
                                                        y2="13.65"
                                                        gradientTransform="translate(-1172.91 27.31) rotate(180)"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 3</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M0,24.24l3.15,3.07,20.39-21,20.39,21,3.16-3.07L23.54,0Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </h3>
                                    <div className="accdn__body">
                                        <div className="accdn__body__wrap">
                                            <p className="para">
                                                We’re always looking for someone
                                                who is ambitious, honest,
                                                proactive, positive, innovative,
                                                and has an insatiable appetite
                                                for success to join our team.
                                                Send us your info and we will
                                                get back to you. 🙂 Good Luck!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* accordion item end */}
                                {/* accordion item start */}
                                <div className="accdn__item">
                                    <h3 className="accdn__title">
                                        <span>Sales</span>
                                        <span className="icon icon--closed">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        y1="13.65"
                                                        x2="47.09"
                                                        y2="13.65"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 2</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M47.09,3.07,43.94,0,23.55,21,3.16,0,0,3.07,23.55,27.31Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="icon icon--open">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                {" "}
                                                <defs>
                                                    {" "}
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                " .cls-1 { fill: url(#linear-gradient); } "
                                                        }}
                                                    />{" "}
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        x1={-1220}
                                                        y1="13.65"
                                                        x2="-1172.91"
                                                        y2="13.65"
                                                        gradientTransform="translate(-1172.91 27.31) rotate(180)"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        {" "}
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />{" "}
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />{" "}
                                                    </linearGradient>{" "}
                                                </defs>{" "}
                                                <title>Asset 3</title>{" "}
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    {" "}
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        {" "}
                                                        <path
                                                            className="cls-1"
                                                            d="M0,24.24l3.15,3.07,20.39-21,20.39,21,3.16-3.07L23.54,0Z"
                                                        />{" "}
                                                    </g>{" "}
                                                </g>{" "}
                                            </svg>
                                        </span>
                                    </h3>
                                    <div className="accdn__body center">
                                        <div className="accdn__body__wrap">
                                            <p className="para">
                                                Looking to work on a great sales
                                                team with uncapped commission
                                                and fun galore? We’re looking
                                                for individuals who share our
                                                values and vision to join our
                                                inside sales department. We
                                                provide extensive training so
                                                our sales team can become
                                                experts in their craft. Our
                                                comprehensive training program,
                                                plus ongoing coaching and
                                                workshops, will transform you
                                                into the ultimate sales machine.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* accordion item end */}
                                {/* accordion item start */}
                                <div className="accdn__item">
                                    <h3 className="accdn__title">
                                        <span>Marketing &amp; graphics</span>
                                        <span className="icon icon--closed">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        y1="13.65"
                                                        x2="47.09"
                                                        y2="13.65"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 2</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M47.09,3.07,43.94,0,23.55,21,3.16,0,0,3.07,23.55,27.31Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="icon icon--open">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        x1={-1220}
                                                        y1="13.65"
                                                        x2="-1172.91"
                                                        y2="13.65"
                                                        gradientTransform="translate(-1172.91 27.31) rotate(180)"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 3</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M0,24.24l3.15,3.07,20.39-21,20.39,21,3.16-3.07L23.54,0Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </h3>
                                    <div className="accdn__body center">
                                        <div className="accdn__body__wrap">
                                            <p className="para">
                                                Marketing &amp; Graphics We’re
                                                always looking for someone who
                                                is ambitious, honest, proactive,
                                                positive, innovative, and has an
                                                insatiable appetite for success
                                                to join our team. Send us your
                                                info and we will get back to
                                                you. 🙂 Good Luck!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* accordion item end */}
                                {/* accordion item start */}
                                <div className="accdn__item">
                                    <h3 className="accdn__title">
                                        <span>Finance</span>
                                        <span className="icon icon--closed">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        y1="13.65"
                                                        x2="47.09"
                                                        y2="13.65"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 2</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M47.09,3.07,43.94,0,23.55,21,3.16,0,0,3.07,23.55,27.31Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="icon icon--open">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        x1={-1220}
                                                        y1="13.65"
                                                        x2="-1172.91"
                                                        y2="13.65"
                                                        gradientTransform="translate(-1172.91 27.31) rotate(180)"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 3</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M0,24.24l3.15,3.07,20.39-21,20.39,21,3.16-3.07L23.54,0Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </h3>
                                    <div className="accdn__body center">
                                        <div className="accdn__body__wrap">
                                            <p className="para">
                                                We’re always looking for someone
                                                who is ambitious, honest,
                                                proactive, positive, innovative,
                                                and has an insatiable appetite
                                                for success to join our team.
                                                Send us your info and we will
                                                get back to you. 🙂 Good Luck!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* accordion item end */}
                            </div>
                            {/* accordion-end */}
                        </div>
                    </div>
                </section>
                {/* section careers faq end */}
                <section id="pricing-faq-header-2" className="section--last">
                    <div className="container">
                        <div className="row">
                            <h1 className="title--big center w-100 center">
                                Start growing fearlessly today.
                            </h1>
                            <div className="cta center">
                                <a href="#" className="btn">
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    },

    save: props => {
        // const {} = props.attributes;
        // const { setAttributes } = props;

        return (
            <div className="new-pricing-page">
                <section id="np-hero" className="section">
                    <div className="container">
                        <div className="row center">
                            <h2 className="title--big w-100 center">
                                Voxtell Pricing
                            </h2>
                            <h2 className="title--big w-100 center">
                                Honest. Affordable. Simple.
                            </h2>
                        </div>
                    </div>
                </section>
                <section id="pricing-tables" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="tab-nav w-100">
                                <button className="tab-btn active" data-id={1}>
                                    Communication
                                </button>
                                <button className="tab-btn" data-id={2}>
                                    Customer Relationship
                                </button>
                                <button className="tab-btn" data-id={3}>
                                    Team Collaboration
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="tab-contents w-100">
                                {/* START tab content */}
                                <div id={1} className="tab-content-item active">
                                    <div className="price-cards-wrap">
                                        {/* price box item */}
                                        <div className="card price-card">
                                            <div className="header light">
                                                <h3 className="title--sub">
                                                    Basic
                                                </h3>
                                                <div className="showboat">
                                                    Business Phone Service
                                                </div>
                                                <div className="price">
                                                    <div className="top-text">
                                                        As low as
                                                    </div>
                                                    <div className="detail-price">
                                                        <div className="num">
                                                            $8
                                                        </div>
                                                        <div className="price-table-trigger">
                                                            <img
                                                                src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg"
                                                                alt
                                                            />
                                                        </div>
                                                        <div className="tt-ct-pricing">
                                                            <div className="priceTop">
                                                                <div className="columnFirst">
                                                                    &nbsp;
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        Monthly
                                                                    </span>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        36 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <span>
                                                                        <strong>
                                                                            PREPAY
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        12 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* end priceTop */}
                                                            <div className="priceBottom">
                                                                <div className="columnFirst">
                                                                    <div className="rowFirst">
                                                                        1-4
                                                                        users
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        5-19
                                                                        users
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        20-99
                                                                        users
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        100+
                                                                        users
                                                                    </div>
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $35
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $33
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $28
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $20
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end priceBottom */}
                                                        </div>
                                                        {/* end price table */}
                                                    </div>
                                                    <div className="bottom-text">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <p className="para para--subt">
                                                    Includes
                                                </p>
                                                <h4 className="title--sub">
                                                    Business Phone Service &amp;
                                                    Customer Relationship Suite
                                                </h4>
                                                <p className="para para-item">
                                                    Communicate
                                                </p>
                                                <p className="para para-item">
                                                    Manage Prospects
                                                </p>
                                                <p className="para para-item">
                                                    Service Customers
                                                </p>
                                                <p className="para para-item">
                                                    Collaborate with Teams
                                                </p>
                                                <p className="para-item-divider" />
                                                <p className="para-item-divider" />
                                                <p className="para-item-divider" />
                                                <a
                                                    href="#compare-acc"
                                                    className="compare center"
                                                >
                                                    <span>
                                                        Compare All Features
                                                    </span>
                                                    <img
                                                        src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg"
                                                        alt
                                                    />
                                                </a>
                                                <div className="cta">
                                                    <a href="#" className="btn">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* price box item end */}
                                        {/* price box item */}
                                        <div className="card price-card">
                                            <div className="most-popular">
                                                Our most popular package
                                            </div>
                                            <div className="header light">
                                                <h3 className="title--sub">
                                                    Basic
                                                </h3>
                                                <div className="showboat">
                                                    Business Phone Service
                                                </div>
                                                <div className="price">
                                                    <div className="top-text">
                                                        As low as
                                                    </div>
                                                    <div className="detail-price">
                                                        <div className="num">
                                                            $17
                                                        </div>
                                                        <div className="price-table-trigger">
                                                            <img
                                                                src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg"
                                                                alt
                                                            />
                                                        </div>
                                                        <div className="tt-ct-pricing">
                                                            <div className="priceTop">
                                                                <div className="columnFirst">
                                                                    &nbsp;
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        Monthly
                                                                    </span>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        36 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <span>
                                                                        <strong>
                                                                            PREPAY
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        12 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* end priceTop */}
                                                            <div className="priceBottom">
                                                                <div className="columnFirst">
                                                                    <div className="rowFirst">
                                                                        1-4
                                                                        users
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        5-19
                                                                        users
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        20-99
                                                                        users
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        100+
                                                                        users
                                                                    </div>
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $35
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $33
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $28
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $20
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end priceBottom */}
                                                        </div>
                                                        {/* end price table */}
                                                    </div>
                                                    <div className="bottom-text">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <p className="para para--subt">
                                                    Includes
                                                </p>
                                                <h4 className="title--sub">
                                                    Business Phone Service &amp;
                                                    Customer Relationship Suite
                                                </h4>
                                                <p className="para para-item">
                                                    Communicate
                                                </p>
                                                <p className="para para-item">
                                                    Manage Prospects
                                                </p>
                                                <p className="para para-item">
                                                    Service Customers
                                                </p>
                                                <p className="para para-item">
                                                    Collaborate with Teams
                                                </p>
                                                <p className="para para-item">
                                                    Survey Customers
                                                </p>
                                                <p className="para-item-divider" />
                                                <p className="para-item-divider" />
                                                <a
                                                    href="#compare-acc"
                                                    className="compare center"
                                                >
                                                    <span>
                                                        Compare All Features
                                                    </span>
                                                    <img
                                                        src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg"
                                                        alt
                                                    />
                                                </a>
                                                <div className="cta">
                                                    <a href="#" className="btn">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* price box item end */}
                                        {/* price box item */}
                                        <div className="card price-card">
                                            <div className="header light">
                                                <h3 className="title--sub">
                                                    Basic
                                                </h3>
                                                <div className="showboat">
                                                    Business Phone Service
                                                </div>
                                                <div className="price">
                                                    <div className="top-text">
                                                        As low as
                                                    </div>
                                                    <div className="detail-price">
                                                        <div className="num">
                                                            $24
                                                        </div>
                                                        <div className="price-table-trigger">
                                                            <img
                                                                src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg"
                                                                alt
                                                            />
                                                        </div>
                                                        <div className="tt-ct-pricing">
                                                            <div className="priceTop">
                                                                <div className="columnFirst">
                                                                    &nbsp;
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        Monthly
                                                                    </span>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        36 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <span>
                                                                        <strong>
                                                                            PREPAY
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        12 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* end priceTop */}
                                                            <div className="priceBottom">
                                                                <div className="columnFirst">
                                                                    <div className="rowFirst">
                                                                        1-4
                                                                        users
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        5-19
                                                                        users
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        20-99
                                                                        users
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        100+
                                                                        users
                                                                    </div>
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $35
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $33
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $28
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $20
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end priceBottom */}
                                                        </div>
                                                        {/* end price table */}
                                                    </div>
                                                    <div className="bottom-text">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <p className="para para--subt">
                                                    Includes
                                                </p>
                                                <h4 className="title--sub">
                                                    Business Phone Service &amp;
                                                    Customer Relationship Suite
                                                </h4>
                                                <p className="para para-item">
                                                    Communicate
                                                </p>
                                                <p className="para para-item">
                                                    Manage Prospects
                                                </p>
                                                <p className="para para-item">
                                                    Service Customers
                                                </p>
                                                <p className="para para-item">
                                                    Collaborate with Teams
                                                </p>
                                                <p className="para para-item">
                                                    Survey Customers
                                                </p>
                                                <p className="para para-item">
                                                    Analyze Your Business
                                                </p>
                                                <p className="para para-item">
                                                    Chat Live on Your Website
                                                </p>
                                                <a
                                                    href="#compare-acc"
                                                    className="compare center"
                                                >
                                                    <span>
                                                        Compare All Features
                                                    </span>
                                                    <img
                                                        src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg"
                                                        alt
                                                    />
                                                </a>
                                                <div className="cta">
                                                    <a href="#" className="btn">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* price box item end */}
                                    </div>
                                </div>
                                {/* END tab content */}
                                {/* START tab content */}
                                <div id={2} className="tab-content-item">
                                    <h2 className="title--icon">Testing</h2>
                                </div>
                                {/* END tab content */}
                                {/* START tab content */}
                                <div id={3} className="tab-content-item">
                                    <div className="price-cards-wrap">
                                        {/* price box item */}
                                        <div className="card price-card">
                                            <div className="header light">
                                                <h3 className="title--sub">
                                                    Basic
                                                </h3>
                                                <div className="showboat">
                                                    Business Phone Service
                                                </div>
                                                <div className="price">
                                                    <div className="top-text">
                                                        As low as
                                                    </div>
                                                    <div className="detail-price">
                                                        <div className="num">
                                                            $8
                                                        </div>
                                                        <div className="price-table-trigger">
                                                            <img
                                                                src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg"
                                                                alt
                                                            />
                                                        </div>
                                                        <div className="tt-ct-pricing">
                                                            <div className="priceTop">
                                                                <div className="columnFirst">
                                                                    &nbsp;
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        Monthly
                                                                    </span>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        36 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <span>
                                                                        <strong>
                                                                            PREPAY
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        12 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* end priceTop */}
                                                            <div className="priceBottom">
                                                                <div className="columnFirst">
                                                                    <div className="rowFirst">
                                                                        1-4
                                                                        users
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        5-19
                                                                        users
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        20-99
                                                                        users
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        100+
                                                                        users
                                                                    </div>
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $35
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $33
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $28
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $20
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end priceBottom */}
                                                        </div>
                                                        {/* end price table */}
                                                    </div>
                                                    <div className="bottom-text">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <p className="para para--subt">
                                                    Includes
                                                </p>
                                                <h4 className="title--sub">
                                                    Business Phone Service &amp;
                                                    Customer Relationship Suite
                                                </h4>
                                                <p className="para para-item">
                                                    Communicate
                                                </p>
                                                <p className="para para-item">
                                                    Manage Prospects
                                                </p>
                                                <p className="para para-item">
                                                    Service Customers
                                                </p>
                                                <p className="para para-item">
                                                    Collaborate with Teams
                                                </p>
                                                <p className="para-item-divider" />
                                                <p className="para-item-divider" />
                                                <p className="para-item-divider" />
                                                <a
                                                    href="#compare-acc"
                                                    className="compare center"
                                                >
                                                    <span>
                                                        Compare All Features
                                                    </span>
                                                    <img
                                                        src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg"
                                                        alt
                                                    />
                                                </a>
                                                <div className="cta">
                                                    <a href="#" className="btn">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* price box item end */}
                                        {/* price box item */}
                                        <div className="card price-card">
                                            <div className="most-popular">
                                                Our most popular package
                                            </div>
                                            <div className="header light">
                                                <h3 className="title--sub">
                                                    Basic
                                                </h3>
                                                <div className="showboat">
                                                    Business Phone Service
                                                </div>
                                                <div className="price">
                                                    <div className="top-text">
                                                        As low as
                                                    </div>
                                                    <div className="detail-price">
                                                        <div className="num">
                                                            $17
                                                        </div>
                                                        <div className="price-table-trigger">
                                                            <img
                                                                src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg"
                                                                alt
                                                            />
                                                        </div>
                                                        <div className="tt-ct-pricing">
                                                            <div className="priceTop">
                                                                <div className="columnFirst">
                                                                    &nbsp;
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        Monthly
                                                                    </span>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        36 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <span>
                                                                        <strong>
                                                                            PREPAY
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        12 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* end priceTop */}
                                                            <div className="priceBottom">
                                                                <div className="columnFirst">
                                                                    <div className="rowFirst">
                                                                        1-4
                                                                        users
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        5-19
                                                                        users
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        20-99
                                                                        users
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        100+
                                                                        users
                                                                    </div>
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $35
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $33
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $28
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $20
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end priceBottom */}
                                                        </div>
                                                        {/* end price table */}
                                                    </div>
                                                    <div className="bottom-text">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <p className="para para--subt">
                                                    Includes
                                                </p>
                                                <h4 className="title--sub">
                                                    Business Phone Service &amp;
                                                    Customer Relationship Suite
                                                </h4>
                                                <p className="para para-item">
                                                    Communicate
                                                </p>
                                                <p className="para para-item">
                                                    Manage Prospects
                                                </p>
                                                <p className="para para-item">
                                                    Service Customers
                                                </p>
                                                <p className="para para-item">
                                                    Collaborate with Teams
                                                </p>
                                                <p className="para para-item">
                                                    Survey Customers
                                                </p>
                                                <p className="para-item-divider" />
                                                <p className="para-item-divider" />
                                                <a
                                                    href="#compare-acc"
                                                    className="compare center"
                                                >
                                                    <span>
                                                        Compare All Features
                                                    </span>
                                                    <img
                                                        src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg"
                                                        alt
                                                    />
                                                </a>
                                                <div className="cta">
                                                    <a href="#" className="btn">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* price box item end */}
                                        {/* price box item */}
                                        <div className="card price-card">
                                            <div className="header light">
                                                <h3 className="title--sub">
                                                    Basic
                                                </h3>
                                                <div className="showboat">
                                                    Business Phone Service
                                                </div>
                                                <div className="price">
                                                    <div className="top-text">
                                                        As low as
                                                    </div>
                                                    <div className="detail-price">
                                                        <div className="num">
                                                            $24
                                                        </div>
                                                        <div className="price-table-trigger">
                                                            <img
                                                                src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg"
                                                                alt
                                                            />
                                                        </div>
                                                        <div className="tt-ct-pricing">
                                                            <div className="priceTop">
                                                                <div className="columnFirst">
                                                                    &nbsp;
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        Monthly
                                                                    </span>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <span>
                                                                        <strong>
                                                                            BASIC
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        36 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <span>
                                                                        <strong>
                                                                            PREPAY
                                                                        </strong>
                                                                    </span>
                                                                    <span className="monthDetails">
                                                                        12 mo.
                                                                        agreement
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* end priceTop */}
                                                            <div className="priceBottom">
                                                                <div className="columnFirst">
                                                                    <div className="rowFirst">
                                                                        1-4
                                                                        users
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        5-19
                                                                        users
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        20-99
                                                                        users
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        100+
                                                                        users
                                                                    </div>
                                                                </div>
                                                                <div className="columnSecond">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $35
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnThird">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $33
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $28
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $24
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                                <div className="columnFourth">
                                                                    <div className="rowFirst">
                                                                        <strong>
                                                                            $30
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowSecond">
                                                                        <strong>
                                                                            $26
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowThird">
                                                                        <strong>
                                                                            $22
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                    <div className="rowFourth">
                                                                        <strong>
                                                                            $20
                                                                        </strong>
                                                                        /mo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end priceBottom */}
                                                        </div>
                                                        {/* end price table */}
                                                    </div>
                                                    <div className="bottom-text">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <p className="para para--subt">
                                                    Includes
                                                </p>
                                                <h4 className="title--sub">
                                                    Business Phone Service &amp;
                                                    Customer Relationship Suite
                                                </h4>
                                                <p className="para para-item">
                                                    Communicate
                                                </p>
                                                <p className="para para-item">
                                                    Manage Prospects
                                                </p>
                                                <p className="para para-item">
                                                    Service Customers
                                                </p>
                                                <p className="para para-item">
                                                    Collaborate with Teams
                                                </p>
                                                <p className="para para-item">
                                                    Survey Customers
                                                </p>
                                                <p className="para para-item">
                                                    Analyze Your Business
                                                </p>
                                                <p className="para para-item">
                                                    Chat Live on Your Website
                                                </p>
                                                <a
                                                    href="#compare-acc"
                                                    className="compare center"
                                                >
                                                    <span>
                                                        Compare All Features
                                                    </span>
                                                    <img
                                                        src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg"
                                                        alt
                                                    />
                                                </a>
                                                <div className="cta">
                                                    <a href="#" className="btn">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* price box item end */}
                                    </div>
                                </div>
                                {/* END tab content */}
                            </div>
                            {/* END tab-content wrap */}
                        </div>
                    </div>
                </section>
                <section id="compare-acc" className="section">
                    <div className="container">
                        <div className="row">
                            {/* START compare acc */}
                            <div
                                className="compare-acc-item active"
                                data-acc-id={1}
                            >
                                <div className="header w-100">
                                    <h3 className="title--sec w-100 center">
                                        Compare our most popular features
                                    </h3>
                                    <p className="para--subt w-100 center">
                                        Includes everything in the Customer
                                        Relationship Suite
                                    </p>
                                </div>
                                <div className="acc-col">
                                    <h3 className="title--alt">
                                        Communication Basic
                                    </h3>
                                    <div className="acc-mw">
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={1}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={2}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                    </div>
                                    {/* END acc-mw */}
                                </div>
                                {/* END col */}
                                <div className="acc-col">
                                    <h3 className="title--alt">
                                        Communication Pro
                                    </h3>
                                    <div className="acc-mw">
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={1}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={2}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                    </div>
                                    {/* END acc-mw */}
                                </div>
                                {/* END col */}
                                <div className="acc-col">
                                    <h3 className="title--alt">
                                        Communication Enterprise
                                    </h3>
                                    <div className="acc-mw">
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={1}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={2}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                    </div>
                                    {/* END acc-mw */}
                                </div>
                                {/* END col */}
                            </div>
                            {/* END compare acc */}
                            {/* START compare acc */}
                            <div className="compare-acc-item" data-acc-id={2}>
                                <div className="header w-100">
                                    <h3 className="title--sec w-100 center">
                                        Compare our most popular features
                                    </h3>
                                    <p className="para--subt w-100 center">
                                        Includes everything in the Customer
                                        Relationship Suite
                                    </p>
                                </div>
                                <p className="para--subt">TESTING</p>
                            </div>
                            {/* END compare acc */}
                            {/* START compare acc */}
                            <div className="compare-acc-item" data-acc-id={3}>
                                <div className="header w-100">
                                    <h3 className="title--sec w-100 center">
                                        Compare our most popular features
                                    </h3>
                                    <p className="para--subt w-100 center">
                                        Includes everything in the Customer
                                        Relationship Suite
                                    </p>
                                </div>
                                <div className="acc-col">
                                    <h3 className="title--alt">
                                        Communication Basic
                                    </h3>
                                    <div className="acc-mw">
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={1}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={2}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                    </div>
                                    {/* END acc-mw */}
                                </div>
                                {/* END col */}
                                <div className="acc-col">
                                    <h3 className="title--alt">
                                        Communication Pro
                                    </h3>
                                    <div className="acc-mw">
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={1}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={2}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                    </div>
                                    {/* END acc-mw */}
                                </div>
                                {/* END col */}
                                <div className="acc-col">
                                    <h3 className="title--alt">
                                        Communication Enterprise
                                    </h3>
                                    <div className="acc-mw">
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={1}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                        <div
                                            className="acc-mw__item"
                                            data-acc-open-id={2}
                                        >
                                            <div className="acc-mw__head">
                                                <span className="acc-mw__icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={7}
                                                        height="10.818"
                                                        viewBox="0 0 7 10.818"
                                                    >
                                                        <g
                                                            id="Group_4167"
                                                            data-name="Group 4167"
                                                            transform="translate(0 10.818) rotate(-90)"
                                                        >
                                                            <path
                                                                id="Path_14"
                                                                data-name="Path 14"
                                                                d="M5.409,7,0,1.909,1.909,0l3.5,3.5L8.909,0l1.909,1.909Z"
                                                                fill="#E97514"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div className="para acc-mw__title">
                                                    Included with All Plans
                                                </div>
                                            </div>
                                            <div className="para acc-mw__body">
                                                <ul>
                                                    <li>Unlimited calling</li>
                                                    <li>
                                                        Unlimited Internet
                                                        faxing
                                                    </li>
                                                    <li>
                                                        Voicemail with email
                                                        delivery
                                                    </li>
                                                    <li>
                                                        Free local phone number
                                                    </li>
                                                    <li>
                                                        Free toll free number
                                                    </li>
                                                    <li>
                                                        Keep your existing
                                                        number
                                                    </li>
                                                    <li>
                                                        Advanced call management
                                                    </li>
                                                    <li>Auto attendant</li>
                                                    <li>Call logs</li>
                                                    <li>Multi-site support</li>
                                                </ul>
                                            </div>
                                            {/* END acc-mw__body */}
                                        </div>
                                        {/* END acc-mw__item */}
                                    </div>
                                    {/* END acc-mw */}
                                </div>
                                {/* END col */}
                            </div>
                            {/* END compare acc */}
                        </div>
                        <div className="row cta">
                            <a href="#" className="btn">
                                Get Started
                            </a>
                        </div>
                    </div>
                </section>
                <section id="np-all-suite">
                    <div className="container">
                        <div className="row header">
                            <h2 className="title--sec w-100">
                                All suites include features powered by NextOS, a
                                single unified business platform.
                            </h2>
                        </div>
                        <div className="row features">
                            {/* START col */}
                            <div className="col">
                                <h3 className="title--alt">Productivity</h3>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* END col */}
                            {/* START col */}
                            <div className="col">
                                <h3 className="title--alt">Intelligence</h3>
                                <div className="sf__item">
                                    <h4 className="para title">
                                        Customer Journey Mapping
                                    </h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">
                                        Customer Experience Score
                                    </h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">
                                        Customer Sentiment
                                    </h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* END col */}
                            {/* START col */}
                            <div className="col">
                                <h3 className="title--alt">Automation</h3>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                                <div className="sf__item">
                                    <h4 className="para title">Call Pop</h4>
                                    <div className="tooltip-trigger">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                        >
                                            <path
                                                id="Path_5126"
                                                data-name="Path 5126"
                                                d="M11,5.406a6,6,0,1,1-6,6A5.994,5.994,0,0,1,11,5.406ZM10.25,10.7h1.544v3.838H10.25Zm0-.882h1.544V8.273H10.25Z"
                                                transform="translate(-5 -5.405)"
                                                fill="#E97514"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="tooltip-content">
                                        <span>
                                            <img
                                                src="/wp-content/themes/voxtell-custom/img/new-pages/XBert-Tooltip-icon_gray.svg"
                                                alt
                                            />
                                        </span>
                                        <span className="tt-txt">
                                            Get an instant on-screen pop-up with
                                            the caller's account, contacts,
                                            sales, and cases.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* END col */}
                        </div>
                    </div>
                </section>
                <section id="pricing-faq-header" className="section">
                    <div className="container">
                        <div className="row">
                            <h1 className="title--big center w-100 center">
                                Any questions?
                            </h1>
                        </div>
                    </div>
                </section>
                {/* section careers faq */}
                <section id="careers-faq">
                    <div className="container">
                        <div className="row">
                            {/* accordion-start */}
                            <div className="accdn">
                                {/* accordion item start */}
                                <div className="accdn__item accdn__item--active">
                                    <h3 className="accdn__title">
                                        <span>Technology</span>
                                        <span className="icon icon--closed">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        y1="13.65"
                                                        x2="47.09"
                                                        y2="13.65"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 2</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M47.09,3.07,43.94,0,23.55,21,3.16,0,0,3.07,23.55,27.31Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="icon icon--open">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        x1={-1220}
                                                        y1="13.65"
                                                        x2="-1172.91"
                                                        y2="13.65"
                                                        gradientTransform="translate(-1172.91 27.31) rotate(180)"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 3</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M0,24.24l3.15,3.07,20.39-21,20.39,21,3.16-3.07L23.54,0Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </h3>
                                    <div className="accdn__body">
                                        <div className="accdn__body__wrap">
                                            <p className="para">
                                                We’re always looking for someone
                                                who is ambitious, honest,
                                                proactive, positive, innovative,
                                                and has an insatiable appetite
                                                for success to join our team.
                                                Send us your info and we will
                                                get back to you. 🙂 Good Luck!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* accordion item end */}
                                {/* accordion item start */}
                                <div className="accdn__item">
                                    <h3 className="accdn__title">
                                        <span>Sales</span>
                                        <span className="icon icon--closed">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        y1="13.65"
                                                        x2="47.09"
                                                        y2="13.65"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 2</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M47.09,3.07,43.94,0,23.55,21,3.16,0,0,3.07,23.55,27.31Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="icon icon--open">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                {" "}
                                                <defs>
                                                    {" "}
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                " .cls-1 { fill: url(#linear-gradient); } "
                                                        }}
                                                    />{" "}
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        x1={-1220}
                                                        y1="13.65"
                                                        x2="-1172.91"
                                                        y2="13.65"
                                                        gradientTransform="translate(-1172.91 27.31) rotate(180)"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        {" "}
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />{" "}
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />{" "}
                                                    </linearGradient>{" "}
                                                </defs>{" "}
                                                <title>Asset 3</title>{" "}
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    {" "}
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        {" "}
                                                        <path
                                                            className="cls-1"
                                                            d="M0,24.24l3.15,3.07,20.39-21,20.39,21,3.16-3.07L23.54,0Z"
                                                        />{" "}
                                                    </g>{" "}
                                                </g>{" "}
                                            </svg>
                                        </span>
                                    </h3>
                                    <div className="accdn__body center">
                                        <div className="accdn__body__wrap">
                                            <p className="para">
                                                Looking to work on a great sales
                                                team with uncapped commission
                                                and fun galore? We’re looking
                                                for individuals who share our
                                                values and vision to join our
                                                inside sales department. We
                                                provide extensive training so
                                                our sales team can become
                                                experts in their craft. Our
                                                comprehensive training program,
                                                plus ongoing coaching and
                                                workshops, will transform you
                                                into the ultimate sales machine.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* accordion item end */}
                                {/* accordion item start */}
                                <div className="accdn__item">
                                    <h3 className="accdn__title">
                                        <span>Marketing &amp; graphics</span>
                                        <span className="icon icon--closed">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        y1="13.65"
                                                        x2="47.09"
                                                        y2="13.65"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 2</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M47.09,3.07,43.94,0,23.55,21,3.16,0,0,3.07,23.55,27.31Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="icon icon--open">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        x1={-1220}
                                                        y1="13.65"
                                                        x2="-1172.91"
                                                        y2="13.65"
                                                        gradientTransform="translate(-1172.91 27.31) rotate(180)"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 3</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M0,24.24l3.15,3.07,20.39-21,20.39,21,3.16-3.07L23.54,0Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </h3>
                                    <div className="accdn__body center">
                                        <div className="accdn__body__wrap">
                                            <p className="para">
                                                Marketing &amp; Graphics We’re
                                                always looking for someone who
                                                is ambitious, honest, proactive,
                                                positive, innovative, and has an
                                                insatiable appetite for success
                                                to join our team. Send us your
                                                info and we will get back to
                                                you. 🙂 Good Luck!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* accordion item end */}
                                {/* accordion item start */}
                                <div className="accdn__item">
                                    <h3 className="accdn__title">
                                        <span>Finance</span>
                                        <span className="icon icon--closed">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        y1="13.65"
                                                        x2="47.09"
                                                        y2="13.65"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 2</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M47.09,3.07,43.94,0,23.55,21,3.16,0,0,3.07,23.55,27.31Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="icon icon--open">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 47.09 27.31"
                                            >
                                                <defs>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                "\n                                            .cls-1 {\n                                                fill: url(#linear-gradient);\n                                            }\n                                        "
                                                        }}
                                                    />
                                                    <linearGradient
                                                        id="linear-gradient"
                                                        x1={-1220}
                                                        y1="13.65"
                                                        x2="-1172.91"
                                                        y2="13.65"
                                                        gradientTransform="translate(-1172.91 27.31) rotate(180)"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop
                                                            offset={0}
                                                            stopColor="#fbb615"
                                                        />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#cb2d2c"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <title>Asset 3</title>
                                                <g
                                                    id="Layer_2"
                                                    data-name="Layer 2"
                                                >
                                                    <g
                                                        id="Layer_1-2"
                                                        data-name="Layer 1"
                                                    >
                                                        <path
                                                            className="cls-1"
                                                            d="M0,24.24l3.15,3.07,20.39-21,20.39,21,3.16-3.07L23.54,0Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </h3>
                                    <div className="accdn__body center">
                                        <div className="accdn__body__wrap">
                                            <p className="para">
                                                We’re always looking for someone
                                                who is ambitious, honest,
                                                proactive, positive, innovative,
                                                and has an insatiable appetite
                                                for success to join our team.
                                                Send us your info and we will
                                                get back to you. 🙂 Good Luck!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* accordion item end */}
                            </div>
                            {/* accordion-end */}
                        </div>
                    </div>
                </section>
                {/* section careers faq end */}
                <section id="pricing-faq-header-2" className="section--last">
                    <div className="container">
                        <div className="row">
                            <h1 className="title--big center w-100 center">
                                Start growing fearlessly today.
                            </h1>
                            <div className="cta center">
                                <a href="#" className="btn">
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});
