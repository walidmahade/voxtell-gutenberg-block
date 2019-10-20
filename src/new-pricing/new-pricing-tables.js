const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks, InspectorControls, URLInput } = wp.editor;
const { TextareaControl } = wp.components;

registerBlockType("cgb/new-pricing-tables", {
    title: __( "Pricing new Tables" ),
    icon: "edit",
    category: "new-pricing",
    keywords: [ __( "Pricing" ), __( "New" ),__( "tables" ) ],
    attributes: {
        text1: {
            type: "string",
            default: "Communication"
        },
        text2: {
            type: "string",
            default: ""
        },
        // card one stuff
        c1t1: {
            type: "string",
            default: "Basic"
        },
        c1t2: {
            type: "string",
            default: "Business Phone Service"
        },
        c1t3: {
            type: "string",
            default: "As low as"
        },
        c1t4: {
            type: "string",
            default: "$17"
        },
        c1t5: {
            type: "string",
            default: "per month"
        },
        c1t6: {
            type: "string",
            default: "Business Phone Service &amp; Customer Relationship Suite"
        },
        c1t7: {
            type: "string",
            default: "Communicate<br/>Manage Prospects<br/>Service Customers<br/> Collaborate with Teams<br/>Survey Customers"
        },
        c1t8: {
            type: "string",
            default: "Compare All Features"
        },
        c1t9: {
            type: "string",
            default: "Get Started"
        },
        c1t10: {
            type: "string",
            default: "#"
        },
        // card two stuff
        c2t0: {
            type: "string",
            default: "Our most popular package"
        },
        c2t1: {
            type: "string",
            default: "Pro"
        },
        c2t2: {
            type: "string",
            default: "Business Phone Service"
        },
        c2t3: {
            type: "string",
            default: "As low as"
        },
        c2t4: {
            type: "string",
            default: "$17"
        },
        c2t5: {
            type: "string",
            default: "per month"
        },
        c2t6: {
            type: "string",
            default: "Business Phone Service &amp; Customer Relationship Suite"
        },
        c2t7: {
            type: "string",
            default: "Communicate<br/>Manage Prospects<br/>Service Customers<br/> Collaborate with Teams<br/>Survey Customers"
        },
        c2t8: {
            type: "string",
            default: "Compare All Features"
        },
        c2t9: {
            type: "string",
            default: "Get Started"
        },
        c2t10: {
            type: "string",
            default: "#"
        },
        //card three tuff
        c3t1: {
            type: "string",
            default: "Enterprise"
        },
        c3t2: {
            type: "string",
            default: "Business Phone Service"
        },
        c3t3: {
            type: "string",
            default: "As low as"
        },
        c3t4: {
            type: "string",
            default: "$17"
        },
        c3t5: {
            type: "string",
            default: "per month"
        },
        c3t6: {
            type: "string",
            default: "Business Phone Service &amp; Customer Relationship Suite"
        },
        c3t7: {
            type: "string",
            default: "Communicate<br/>Manage Prospects<br/>Service Customers<br/> Collaborate with Teams<br/>Survey Customers"
        },
        c3t8: {
            type: "string",
            default: "Compare All Features"
        },
        c3t9: {
            type: "string",
            default: "Get Started"
        },
        c3t10: {
            type: "string",
            default: "#"
        },
        // small price tables
        priceT1: {
            type: "string",
            default: '<div class="priceTop">\n' + '<div class="columnFirst">\n' + '&nbsp;\n' + '</div>\n' + '<div class="columnSecond">\n' + '<span>\n' + '<strong>BASIC</strong>\n' + '</span>\n' + '<span class="monthDetails">\n' + 'Monthly\n' + '</span>\n' + '</div>\n' + '<div class="columnThird">\n' + '<span>\n' + '<strong>BASIC</strong>\n' + '</span>\n' + '<span class="monthDetails">\n' + '36 mo.agreement\n' + '</span>\n' + '</div>\n' + '<div class="columnFourth">\n' + '<span>\n' + '<strong>PREPAY</strong>\n' + '</span>\n' + '<span class="monthDetails">\n' + '12 mo.agreement\n' + '</span>\n' + '</div>\n' + '</div>\n' + '<div class="priceBottom">\n' + '<div class="columnFirst">\n' + '<div class="rowFirst">\n' + '1-4 users\n' + '</div>\n' + '<div class="rowSecond">\n' + '5-19 users\n' + '</div>\n' + '<div class="rowThird">\n' + '20-99 users\n' + '</div>\n' + '<div class="rowFourth">\n' + '100+ users\n' + '</div>\n' + '</div>\n' + '<div class="columnSecond">\n' + '<div class="rowFirst">\n' + '<strong>$35</strong>/mo\n' + '</div>\n' + '<div class="rowSecond">\n' + '<strong>$30</strong>/mo\n' + '</div>\n' + '<div class="rowThird">\n' + '<strong>$26</strong>/mo\n' + '</div>\n' + '<div class="rowFourth">\n' + '<strong>$24</strong>/mo\n' + '</div>\n' + '</div>\n' + '<div class="columnThird">\n' + '<div class="rowFirst">\n' + '<strong>$33</strong>/mo\n' + '</div>\n' + '<div class="rowSecond">\n' + '<strong>$28</strong>/mo\n' + '</div>\n' + '<div class="rowThird">\n' + '<strong>$24</strong>/mo\n' + '</div>\n' + '<div class="rowFourth">\n' + '<strong>$22</strong>/mo\n' + '</div>\n' + '</div>\n' + '<div class="columnFourth">\n' + '<div class="rowFirst">\n' + '<strong>$30</strong>/mo\n' + '</div>\n' + '<div class="rowSecond">\n' + '<strong>$26</strong>/mo\n' + '</div>\n' + '<div class="rowThird">\n' + '<strong>$22</strong>/mo\n' + '</div>\n' + '<div class="rowFourth">\n' + '<strong>$20</strong>/mo\n' + '</div>\n' + '</div>\n' + '</div>'
        },
        priceT2: {
            type: "string",
            default: '<div class="priceTop">\n' + '<div class="columnFirst">\n' + '&nbsp;\n' + '</div>\n' + '<div class="columnSecond">\n' + '<span>\n' + '<strong>BASIC</strong>\n' + '</span>\n' + '<span class="monthDetails">\n' + 'Monthly\n' + '</span>\n' + '</div>\n' + '<div class="columnThird">\n' + '<span>\n' + '<strong>BASIC</strong>\n' + '</span>\n' + '<span class="monthDetails">\n' + '36 mo.agreement\n' + '</span>\n' + '</div>\n' + '<div class="columnFourth">\n' + '<span>\n' + '<strong>PREPAY</strong>\n' + '</span>\n' + '<span class="monthDetails">\n' + '12 mo.agreement\n' + '</span>\n' + '</div>\n' + '</div>\n' + '<div class="priceBottom">\n' + '<div class="columnFirst">\n' + '<div class="rowFirst">\n' + '1-4 users\n' + '</div>\n' + '<div class="rowSecond">\n' + '5-19 users\n' + '</div>\n' + '<div class="rowThird">\n' + '20-99 users\n' + '</div>\n' + '<div class="rowFourth">\n' + '100+ users\n' + '</div>\n' + '</div>\n' + '<div class="columnSecond">\n' + '<div class="rowFirst">\n' + '<strong>$35</strong>/mo\n' + '</div>\n' + '<div class="rowSecond">\n' + '<strong>$30</strong>/mo\n' + '</div>\n' + '<div class="rowThird">\n' + '<strong>$26</strong>/mo\n' + '</div>\n' + '<div class="rowFourth">\n' + '<strong>$24</strong>/mo\n' + '</div>\n' + '</div>\n' + '<div class="columnThird">\n' + '<div class="rowFirst">\n' + '<strong>$33</strong>/mo\n' + '</div>\n' + '<div class="rowSecond">\n' + '<strong>$28</strong>/mo\n' + '</div>\n' + '<div class="rowThird">\n' + '<strong>$24</strong>/mo\n' + '</div>\n' + '<div class="rowFourth">\n' + '<strong>$22</strong>/mo\n' + '</div>\n' + '</div>\n' + '<div class="columnFourth">\n' + '<div class="rowFirst">\n' + '<strong>$30</strong>/mo\n' + '</div>\n' + '<div class="rowSecond">\n' + '<strong>$26</strong>/mo\n' + '</div>\n' + '<div class="rowThird">\n' + '<strong>$22</strong>/mo\n' + '</div>\n' + '<div class="rowFourth">\n' + '<strong>$20</strong>/mo\n' + '</div>\n' + '</div>\n' + '</div>'
        },
        priceT3: {
            type: "string",
            default: '<div class="priceTop">\n' + '<div class="columnFirst">\n' + '&nbsp;\n' + '</div>\n' + '<div class="columnSecond">\n' + '<span>\n' + '<strong>BASIC</strong>\n' + '</span>\n' + '<span class="monthDetails">\n' + 'Monthly\n' + '</span>\n' + '</div>\n' + '<div class="columnThird">\n' + '<span>\n' + '<strong>BASIC</strong>\n' + '</span>\n' + '<span class="monthDetails">\n' + '36 mo.agreement\n' + '</span>\n' + '</div>\n' + '<div class="columnFourth">\n' + '<span>\n' + '<strong>PREPAY</strong>\n' + '</span>\n' + '<span class="monthDetails">\n' + '12 mo.agreement\n' + '</span>\n' + '</div>\n' + '</div>\n' + '<div class="priceBottom">\n' + '<div class="columnFirst">\n' + '<div class="rowFirst">\n' + '1-4 users\n' + '</div>\n' + '<div class="rowSecond">\n' + '5-19 users\n' + '</div>\n' + '<div class="rowThird">\n' + '20-99 users\n' + '</div>\n' + '<div class="rowFourth">\n' + '100+ users\n' + '</div>\n' + '</div>\n' + '<div class="columnSecond">\n' + '<div class="rowFirst">\n' + '<strong>$35</strong>/mo\n' + '</div>\n' + '<div class="rowSecond">\n' + '<strong>$30</strong>/mo\n' + '</div>\n' + '<div class="rowThird">\n' + '<strong>$26</strong>/mo\n' + '</div>\n' + '<div class="rowFourth">\n' + '<strong>$24</strong>/mo\n' + '</div>\n' + '</div>\n' + '<div class="columnThird">\n' + '<div class="rowFirst">\n' + '<strong>$33</strong>/mo\n' + '</div>\n' + '<div class="rowSecond">\n' + '<strong>$28</strong>/mo\n' + '</div>\n' + '<div class="rowThird">\n' + '<strong>$24</strong>/mo\n' + '</div>\n' + '<div class="rowFourth">\n' + '<strong>$22</strong>/mo\n' + '</div>\n' + '</div>\n' + '<div class="columnFourth">\n' + '<div class="rowFirst">\n' + '<strong>$30</strong>/mo\n' + '</div>\n' + '<div class="rowSecond">\n' + '<strong>$26</strong>/mo\n' + '</div>\n' + '<div class="rowThird">\n' + '<strong>$22</strong>/mo\n' + '</div>\n' + '<div class="rowFourth">\n' + '<strong>$20</strong>/mo\n' + '</div>\n' + '</div>\n' + '</div>'
        },
    },

    edit: props => {
        const {
            text1, text2, priceT1, priceT2, priceT3,
            c1t1, c1t2, c1t3, c1t4, c1t5, c1t6, c1t7, c1t8, c1t9, c1t10,
            c2t0, c2t1, c2t2, c2t3, c2t4, c2t5, c2t6, c2t7, c2t8, c2t9, c2t10,
            c3t1, c3t2, c3t3, c3t4, c3t5, c3t6, c3t7, c3t8, c3t9, c3t10,
        } = props.attributes;
        const { setAttributes } = props;

        const handleText1 = text1 => setAttributes({ text1 });
        const handleText2 = clsName => setAttributes({ text2: " " + clsName });
        // handle card 1
        const handlec1t1 = c1t1 => setAttributes({ c1t1 });
        const handlec1t2 = c1t2 => setAttributes({ c1t2 });
        const handlec1t3 = c1t3 => setAttributes({ c1t3 });
        const handlec1t4 = c1t4 => setAttributes({ c1t4 });
        const handlec1t5 = c1t5 => setAttributes({ c1t5 });
        const handlec1t6 = c1t6 => setAttributes({ c1t6 });
        const handlec1t7 = c1t7 => setAttributes({ c1t7 });
        const handlec1t8 = c1t8 => setAttributes({ c1t8 });
        const handlec1t9 = c1t9 => setAttributes({ c1t9 });
        const handlec1t10 = c1t10 => setAttributes({ c1t10 });
        // handle card 2
        const handlec2t0 = c2t0 => setAttributes({ c2t0 });
        const handlec2t1 = c2t1 => setAttributes({ c2t1 });
        const handlec2t2 = c2t2 => setAttributes({ c2t2 });
        const handlec2t3 = c2t3 => setAttributes({ c2t3 });
        const handlec2t4 = c2t4 => setAttributes({ c2t4 });
        const handlec2t5 = c2t5 => setAttributes({ c2t5 });
        const handlec2t6 = c2t6 => setAttributes({ c2t6 });
        const handlec2t7 = c2t7 => setAttributes({ c2t7 });
        const handlec2t8 = c2t8 => setAttributes({ c2t8 });
        const handlec2t9 = c2t9 => setAttributes({ c2t9 });
        const handlec2t10 = c2t10 => setAttributes({ c2t10 });
        // handle card 3
        const handlec3t1 = c3t1 => setAttributes({ c3t1 });
        const handlec3t2 = c3t2 => setAttributes({ c3t2 });
        const handlec3t3 = c3t3 => setAttributes({ c3t3 });
        const handlec3t4 = c3t4 => setAttributes({ c3t4 });
        const handlec3t5 = c3t5 => setAttributes({ c3t5 });
        const handlec3t6 = c3t6 => setAttributes({ c3t6 });
        const handlec3t7 = c3t7 => setAttributes({ c3t7 });
        const handlec3t8 = c3t8 => setAttributes({ c3t8 });
        const handlec3t9 = c3t9 => setAttributes({ c3t9 });
        const handlec3t10 = c3t10 => setAttributes({ c3t10 });

        // small price tables
        const handlePriceT1 = priceT1 => setAttributes({ priceT1 });
        const handlePriceT2 = priceT2 => setAttributes({ priceT2 });
        const handlePriceT3 = priceT3 => setAttributes({ priceT3 });

        const handlePtOn = e => {
            let el = e.currentTarget;

            for (let sibling of el.parentNode.children) {
                if (sibling.classList.contains('tt-ct-pricing')) {
                    sibling.classList.add('show')
                }
            }
        };
        const handlePtOff = e => {
            let el = e.currentTarget;

            for (let sibling of el.parentNode.children) {
                if (sibling.classList.contains('tt-ct-pricing')) {
                    sibling.classList.remove('show')
                }
            }
        };


        return (
            <div id={"tab-" + text1} className={`tab-content-item ${text2}`}>
                <InspectorControls>
                    <div>
                        <h4>Serial No</h4>
                        <div>
                            <RichText value={text1} onChange={handleText1}/>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h4>Class (add 'active' for no 1 item)</h4>
                        <div>
                            <RichText value={text2} onChange={handleText2}/>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h4>Table 1</h4>
                        <TextareaControl
                            help="copy the html to a text editor, make your changes, paste back html with you change"
                            value={ priceT1 }
                            onChange={ handlePriceT1 }
                        />
                    </div>
                    <hr/>
                    <div>
                        <h4>Table 2</h4>
                        <TextareaControl
                            help="copy the html to a text editor, make your changes, paste back html with you change"
                            value={ priceT2 }
                            onChange={ handlePriceT2 }
                        />
                    </div>
                    <hr/>
                    <div>
                        <h4>Table 3</h4>
                        <TextareaControl
                            help="copy the html to a text editor, make your changes, paste back html with you change"
                            value={ priceT3 }
                            onChange={ handlePriceT3 }
                        />
                    </div>
                </InspectorControls>

                <div className="price-cards-wrap">
                    {/* price box item */}
                    <div className="card price-card">
                        <div className="header light">
                            <h3 className="title--sub">
                                <RichText value={c1t1} onChange={handlec1t1} />
                            </h3>
                            <div className="showboat">
                                <RichText value={c1t2} onChange={handlec1t2} />
                            </div>
                            <div className="price">
                                <div className="top-text">
                                    <RichText value={c1t3} onChange={handlec1t3} />
                                </div>
                                <div className="detail-price">
                                    <div className="num">
                                        <RichText value={c1t4} onChange={handlec1t4} />
                                    </div>
                                    <div className="price-table-trigger" onMouseEnter={handlePtOn} onMouseLeave={handlePtOff}>
                                        <img src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg" alt/>
                                    </div>
                                    <div className="tt-ct-pricing">
                                        {/* Start price small table */ }
                                        <RichText.Content value={priceT1} />
                                        {/* End price small table */ }
                                    </div>
                                </div>
                                <div className="bottom-text">
                                    <RichText value={c1t5} onChange={handlec1t5} />
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <p className="para para--subt">
                                Includes
                            </p>
                            <h4 className="title--sub">
                                <RichText value={c1t6} onChange={handlec1t6} />
                            </h4>
                            <div className="para para-item">
                                <RichText value={c1t7} onChange={handlec1t7} />
                            </div>

                            <p className="para-item-divider"/>
                            <p className="para-item-divider"/>

                            <a href="#compare-acc" className="compare center">
                                <span>
                                    <RichText value={c1t8} onChange={handlec1t8} />
                                </span>
                                <img src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg" alt/>
                            </a>
                            <div className="cta">
                                <span className="btn">
                                    <RichText value={c1t9} onChange={handlec1t9} />
                                </span>
                                <URLInput value={c1t10} onChange={handlec1t10} />
                            </div>
                        </div>
                    </div>
                    {/* price box item end */}
                    {/* price box item */}
                    <div className="card price-card">
                        <div className="most-popular">
                            <RichText value={c2t0} onChange={handlec2t0} />
                        </div>
                        <div className="header light">
                            <h3 className="title--sub">
                                <RichText value={c2t1} onChange={handlec2t1} />
                            </h3>
                            <div className="showboat">
                                <RichText value={c2t2} onChange={handlec2t2} />
                            </div>
                            <div className="price">
                                <div className="top-text">
                                    <RichText value={c2t3} onChange={handlec2t3} />
                                </div>
                                <div className="detail-price">
                                    <div className="num">
                                        <RichText value={c2t4} onChange={handlec2t4} />
                                    </div>
                                    <div className="price-table-trigger" onMouseEnter={handlePtOn} onMouseLeave={handlePtOff}>
                                        <img src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg" alt/>
                                    </div>
                                    <div className="tt-ct-pricing">
                                        {/* Start price small table */ }
                                        <RichText.Content value={priceT2} />
                                        {/* End price small table */ }
                                    </div>
                                </div>
                                <div className="bottom-text">
                                    <RichText value={c2t5} onChange={handlec2t5} />
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <p className="para para--subt">
                                Includes
                            </p>
                            <h4 className="title--sub">
                                <RichText value={c2t6} onChange={handlec2t6} />
                            </h4>
                            <div className="para para-item">
                                <RichText value={c2t7} onChange={handlec2t7} />
                            </div>

                            <p className="para-item-divider"/>
                            <p className="para-item-divider"/>

                            <a href="#compare-acc" className="compare center">
                                <span>
                                    <RichText value={c2t8} onChange={handlec2t8} />
                                </span>
                                <img src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg" alt/>
                            </a>
                            <div className="cta">
                                <span className="btn">
                                    <RichText value={c2t9} onChange={handlec2t9} />
                                </span>
                                <URLInput value={c2t10} onChange={handlec2t10} />
                            </div>
                        </div>
                    </div>
                    {/* price box item end */}
                    {/* price box item */}
                    <div className="card price-card">
                        <div className="header light">
                            <h3 className="title--sub">
                                <RichText value={c3t1} onChange={handlec3t1} />
                            </h3>
                            <div className="showboat">
                                <RichText value={c3t2} onChange={handlec3t2} />
                            </div>
                            <div className="price">
                                <div className="top-text">
                                    <RichText value={c3t3} onChange={handlec3t3} />
                                </div>
                                <div className="detail-price">
                                    <div className="num">
                                        <RichText value={c3t4} onChange={handlec3t4} />
                                    </div>
                                    <div className="price-table-trigger" onMouseEnter={handlePtOn} onMouseLeave={handlePtOff}>
                                        <img src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg" alt/>
                                    </div>
                                    <div className="tt-ct-pricing">
                                        {/* Start price small table */ }
                                        <RichText.Content value={priceT3} />
                                        {/* End price small table */ }
                                    </div>
                                </div>
                                <div className="bottom-text">
                                    <RichText value={c3t5} onChange={handlec3t5} />
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <p className="para para--subt">
                                Includes
                            </p>
                            <h4 className="title--sub">
                                <RichText value={c3t6} onChange={handlec3t6} />
                            </h4>
                            <div className="para para-item">
                                <RichText value={c3t7} onChange={handlec3t7} />
                            </div>

                            <p className="para-item-divider"/>
                            <p className="para-item-divider"/>

                            <a href="#compare-acc" className="compare center">
                                <span>
                                    <RichText value={c3t8} onChange={handlec3t8} />
                                </span>
                                <img src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg" alt/>
                            </a>
                            <div className="cta">
                                <span className="btn">
                                    <RichText value={c3t9} onChange={handlec3t9} />
                                </span>
                                <URLInput value={c3t10} onChange={handlec3t10} />
                            </div>
                        </div>
                    </div>
                    {/* price box item end */}
                </div>
            </div>
        )
    },

    save: props => {
        const {
            text1, text2, priceT1, priceT2, priceT3,
            c1t1, c1t2, c1t3, c1t4, c1t5, c1t6, c1t7, c1t8, c1t9, c1t10,
            c2t0, c2t1, c2t2, c2t3, c2t4, c2t5, c2t6, c2t7, c2t8, c2t9, c2t10,
            c3t1, c3t2, c3t3, c3t4, c3t5, c3t6, c3t7, c3t8, c3t9, c3t10,
        } = props.attributes;

        return (
            <div id={"tab-" + text1} className={`tab-content-item ${text2}`}>
                <div className="price-cards-wrap">
                    {/* price box item */}
                    <div className="card price-card">
                        <div className="header light">
                            <h3 className="title--sub">
                                <RichText.Content value={c1t1} />
                            </h3>
                            <div className="showboat">
                                <RichText.Content value={c1t2} />
                            </div>
                            <div className="price">
                                <div className="top-text">
                                    <RichText.Content value={c1t3} />
                                </div>
                                <div className="detail-price">
                                    <div className="num">
                                        <RichText.Content value={c1t4} />
                                    </div>
                                    <div className="price-table-trigger">
                                        <img src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg" alt/>
                                    </div>
                                    <div className="tt-ct-pricing">
                                        {/* Start price small table */ }
                                        <RichText.Content value={priceT1} />
                                        {/* End price small table */ }
                                    </div>
                                </div>
                                <div className="bottom-text">
                                    <RichText.Content value={c1t5} />
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <p className="para para--subt">
                                Includes
                            </p>
                            <h4 className="title--sub">
                                <RichText.Content value={c1t6} />
                            </h4>
                            <div className="para para-item">
                                <RichText.Content value={c1t7} />
                            </div>

                            <p className="para-item-divider"/>
                            <p className="para-item-divider"/>

                            <a href="#compare-acc" className="compare center">
                                <span>
                                    <RichText.Content value={c1t8} />
                                </span>
                                <img src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg" alt/>
                            </a>
                            <div className="cta">
                                <a href={c1t10} className="btn">
                                    <RichText.Content value={c1t9} />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* price box item end */}
                    {/* price box item */}
                    <div className="card price-card">
                        <div className="most-popular">
                            <RichText.Content value={c2t0} />
                        </div>
                        <div className="header light">
                            <h3 className="title--sub">
                                <RichText.Content value={c2t1} />
                            </h3>
                            <div className="showboat">
                                <RichText.Content value={c2t2} />
                            </div>
                            <div className="price">
                                <div className="top-text">
                                    <RichText.Content value={c2t3} />
                                </div>
                                <div className="detail-price">
                                    <div className="num">
                                        <RichText.Content value={c2t4} />
                                    </div>
                                    <div className="price-table-trigger">
                                        <img src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg" alt/>
                                    </div>
                                    <div className="tt-ct-pricing">
                                        {/* Start price small table */ }
                                        <RichText.Content value={priceT2} />
                                        {/* End price small table */ }
                                    </div>
                                </div>
                                <div className="bottom-text">
                                    <RichText.Content value={c2t5} />
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <p className="para para--subt">
                                Includes
                            </p>
                            <h4 className="title--sub">
                                <RichText.Content value={c2t6} />
                            </h4>
                            <div className="para para-item">
                                <RichText.Content value={c2t7} />
                            </div>

                            <p className="para-item-divider"/>
                            <p className="para-item-divider"/>

                            <a href="#compare-acc" className="compare center">
                                <span>
                                    <RichText.Content value={c2t8} />
                                </span>
                                <img src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg" alt/>
                            </a>
                            <div className="cta">
                                <a href={c2t10} className="btn">
                                    <RichText.Content value={c2t9} />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* price box item end */}
                    {/* price box item */}
                    <div className="card price-card">
                        <div className="header light">
                            <h3 className="title--sub">
                                <RichText.Content value={c3t1} />
                            </h3>
                            <div className="showboat">
                                <RichText.Content value={c3t2} />
                            </div>
                            <div className="price">
                                <div className="top-text">
                                    <RichText.Content value={c3t3} />
                                </div>
                                <div className="detail-price">
                                    <div className="num">
                                        <RichText.Content value={c3t4} />
                                    </div>
                                    <div className="price-table-trigger">
                                        <img src="/wp-content/themes/voxtell-custom/img/new-pages/pricing-info-icon.svg" alt/>
                                    </div>
                                    <div className="tt-ct-pricing">
                                        {/* Start price small table */ }
                                        <RichText.Content value={priceT3} />
                                        {/* End price small table */ }
                                    </div>
                                </div>
                                <div className="bottom-text">
                                    <RichText.Content value={c3t5} />
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <p className="para para--subt">
                                Includes
                            </p>
                            <h4 className="title--sub">
                                <RichText.Content value={c3t6} />
                            </h4>
                            <div className="para para-item">
                                <RichText.Content value={c3t7} />
                            </div>

                            <p className="para-item-divider"/>
                            <p className="para-item-divider"/>

                            <a href="#compare-acc" className="compare center">
                                <span>
                                    <RichText.Content value={c3t8} />
                                </span>
                                <img src="/wp-content/themes/voxtell-custom/img/new-pages/Home-Hero-More.svg" alt/>
                            </a>
                            <div className="cta">
                                <a href={c3t10} className="btn">
                                    <RichText.Content value={c3t9} />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* price box item end */}
                </div>
            </div>
        )
    }
});
