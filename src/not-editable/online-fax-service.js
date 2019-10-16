const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
// const { RichText, InspectorControls, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/online-fax-service", {
    title: __("Online Fax Service"),
    icon: "edit",
    category: "common",
    keywords: [__("Online"), __("Fax"), __("Service")],
    attributes: {},

    edit: props => {
        // const { } = props.attributes;
        // const { setAttributes } = props;

        return (
            <div>
                {/*START hero*/}
                <section className="section" id="ofs-hero">
                    <div className="bg-overlay dots-right" />
                    <div className="container">
                        <div className="row">
                            <h3 className="title--alt w-100">Voxtell vFax</h3>
                            <h2 className="title--big w-100">
                                Online fax service simplified.
                            </h2>
                            <p className="para para--subt w-100">
                                Send and receive secure electronic faxes from
                                anywhere on any device. You're finally free from
                                the fax machine.
                            </p>
                            <div className="hero-cta">
                                <a href="#" className="btn btn--dark">
                                    Start Your Trial
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*END hero*/}
                {/*START Online Fax Pricing*/}
                <section id="ofs-pricing" className="section plans--annually">
                    <div className="container">
                        <h2 className="title--big center">
                            Online Fax Pricing
                        </h2>
                        {/* START switch*/}
                        <div className="switch">
                            <span className="annually">
                                Annually
                                {/* <span class="save">*(Save 15%)</span> */}
                            </span>
                            <input type="checkbox" className="custom-switch" />
                            <span className="monthly">Monthly</span>
                        </div>
                        {/* END switch*/}
                        <div className="row">
                            {/* price box item */}
                            <div className="card price-card">
                                <div className="header light">
                                    <h3 className="title--sub">Basic</h3>
                                    <div className="showboat">Voxtell vFax</div>
                                    <div className="price price--monthly">
                                        <div className="top-text">
                                            As low as
                                        </div>
                                        <div className="num">
                                            $8<sub>.95</sub>
                                        </div>
                                        <div className="bottom-text">
                                            per month
                                        </div>
                                    </div>
                                    <div className="price price--yearly">
                                        <div className="top-text">
                                            As low as
                                        </div>
                                        <div className="num">
                                            $4<sub>.95</sub>
                                        </div>
                                        <div className="bottom-text">
                                            per month
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <p className="para">500 pages/month</p>
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
                                    <h3 className="title--sub">Pro</h3>
                                    <div className="showboat">Voxtell vFax</div>
                                    <div className="price price--monthly">
                                        <div className="top-text">
                                            As low as
                                        </div>
                                        <div className="num">
                                            $17<sub>.95</sub>
                                        </div>
                                        <div className="bottom-text">
                                            per month
                                        </div>
                                    </div>
                                    <div className="price price--yearly">
                                        <div className="top-text">
                                            As low as
                                        </div>
                                        <div className="num">
                                            $12<sub>.95</sub>
                                        </div>
                                        <div className="bottom-text">
                                            per month
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <p className="para">1000 pages/month</p>
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
                                    <h3 className="title--sub">Enterprise</h3>
                                    <div className="showboat">Voxtell vFax</div>
                                    <div className="price price--monthly">
                                        <div className="top-text">
                                            As low as
                                        </div>
                                        <div className="num">
                                            $34<sub>.95</sub>
                                        </div>
                                        <div className="bottom-text">
                                            per month
                                        </div>
                                    </div>
                                    <div className="price price--yearly">
                                        <div className="top-text">
                                            As low as
                                        </div>
                                        <div className="num">
                                            $29<sub>.95</sub>
                                        </div>
                                        <div className="bottom-text">
                                            per month
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <p className="para">3000 pages/month</p>
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
                </section>
                {/*END Online Fax Pricing*/}
                {/* START ofs section-3*/}
                <section id="ofs-3" className="section">
                    <div className="container">
                        <div className="row">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/Online-Fax-Service.png"
                                alt=""
                                className="img-responsive"
                            />
                            <h2 className="title--big">
                                Online faxing built for how you work.
                            </h2>
                            <div className="para para--subt">
                                Whether you're going full digital or you plan to
                                continue using your fax machine—we'll help
                                simplify the entire faxing process. We make
                                faxing more secure, more convenient, and easily
                                managed.
                            </div>
                        </div>
                    </div>
                </section>
                {/* END ofs section-3*/}
                {/* START ofs section-3*/}
                <section id="ofs-features" className="section">
                    <div className="row">
                        <div className="left-col">
                            {/* START item */}
                            <div className="feature-item security">
                                <div className="content">
                                    <h3 className="title--sec">
                                        World-class security.
                                    </h3>
                                    <p className="para">
                                        Every fax you send or receive uses
                                        256-bit SSL encryption to keep your
                                        sensitive information secure. There's no
                                        paper to lose and everything is
                                        delivered directly to your inbox.
                                    </p>
                                </div>
                            </div>
                            {/* END item */}
                            {/* START item */}
                            <div className="feature-item manage">
                                <div className="content">
                                    <img
                                        src="/wp-content/themes/voxtell-custom/img/new-pages/easily-managed-icon.svg"
                                        alt=""
                                    />
                                    <h3 className="title--big">
                                        Easily managed.
                                    </h3>
                                    <p className="para">
                                        All of your faxes are managed in one
                                        place, so it's easy to keep up with
                                        everything. Use a secure portal accessed
                                        through any authorized browser enabled
                                        device. You'll never lose a fax again.
                                    </p>
                                </div>
                            </div>
                            {/* END item */}
                        </div>
                        {/* END left col */}
                        <div className="right-col">
                            {/* START item */}
                            <div className="feature-item device">
                                <div className="content">
                                    <img
                                        src="/wp-content/themes/voxtell-custom/img/new-pages/any-device-icon.svg"
                                        alt=""
                                    />
                                    <h3 className="title--big">
                                        Use any device.
                                    </h3>
                                    <p className="para">
                                        Use your existing PC, tablet, fax
                                        machine or mobile device to send and
                                        receive faxes. We don't make you buy any
                                        new expensive equipment.
                                    </p>
                                </div>
                            </div>
                            {/* END item */}
                            {/* START item */}
                            <div className="feature-item number">
                                <div className="content">
                                    <h3 className="title--sec">
                                        Keep your current number.
                                    </h3>
                                    <p className="para">
                                        The transition to Voxtell vFAX is
                                        seamless. You'll keep all of your
                                        current information and your fax service
                                        will never be disrupted during the
                                        process.
                                    </p>
                                </div>
                            </div>
                            {/* END item */}
                        </div>
                        {/* END right col */}
                    </div>
                    {/* END row */}
                </section>
                {/* END ofs section-3*/}
                {/* START ofs section-4*/}
                <section id="ofs-5" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <h2 className="title--big">
                                    Get faxes directly to your inbox.
                                </h2>
                                <p className="para">
                                    Get all of your faxes securely delivered to
                                    your inbox of choice. Know exactly when a
                                    fax arrives with text alerts for new faxes.
                                    No sensitive papers to lose and no security
                                    risks. See our
                                    <a href="#" className="dark">
                                        fax to email hardware
                                    </a>{" "}
                                    to get your business securely delivering
                                    faxes online.
                                </p>
                            </div>
                            {/* END left col */}
                            <div className="right-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/vfax-phone.png"
                                    alt="vfax phone image"
                                />
                            </div>
                            {/* END right col */}
                        </div>
                        {/* END row */}
                    </div>
                    {/* END container */}
                </section>
                {/* END ofs section-4*/}
                {/*START ofs section 6*/}
                <section id="ofs-6" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/deploy-route-icon.svg"
                                    alt="deploy route icon"
                                />
                                <h3 className="title--sec">
                                    Deploy, route, and scale.
                                </h3>
                                <p className="para">
                                    Make sure faxes get where you want them with
                                    our intuitive routing tools. Add more lines
                                    instantly with no infrastructure
                                    adjustments. Scale up within minutes if your
                                    fax volume grows.
                                </p>
                            </div>
                            {/* END left col */}
                            <div className="right-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/deploy-route-icon.svg"
                                    alt="deploy route icon"
                                />
                                <h3 className="title--sec">
                                    We make it easy to switch.
                                </h3>
                                <p className="para">
                                    Make sure faxes get where you want them with
                                    our intuitive routing tools. Add more lines
                                    instantly with no infrastructure
                                    adjustments. Scale up within minutes if your
                                    fax volume grows.
                                </p>
                            </div>
                            {/* END right col */}
                        </div>
                        {/* END row */}
                    </div>
                    {/* END container */}
                </section>
                {/*END ofs section 6*/}
                {/* START ofs section 7 */}
                <section id="ofs-cta" className="section">
                    <div className="container">
                        <div className="row">
                            <h2 className="title--big">
                                Save big when you switch to Voxtell vFAX.
                            </h2>
                            <p className="para">
                                Reduce your monthly fax expenses by up to 80%.
                                Voxtell plans start at just $4.95 per month for
                                up to 500 fax pages. No setup fees, upfront
                                costs or contracts required.
                            </p>
                            <div className="box">
                                <div className="price">$0.00</div>
                                <h3 className="title--sec">
                                    Start your free 30-day trial
                                </h3>
                                <p className="para">
                                    See the difference for yourself. We're
                                    offering a full 30-day trial of our vFAX
                                    service. No contract required. Cancel
                                    anytime.
                                </p>
                                <a href="#" className="btn">
                                    Try Us Free
                                </a>
                                <p className="para para--subt">
                                    Get started in minutes, no pressure to buy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END ofs section 7 */}
                <section id="team-members-v2" className="section--last">
                    <div className="container">
                        <div className="row header">
                            <h2 className="title--big">We've got your back.</h2>
                            <p className="para">
                                We don’t call it “Amazing Service” for nothing.
                                Our award-winning, friendly, support HUMANS are
                                all based in-house and ready to help you and
                                your growing business.
                            </p>
                        </div>
                        <div className="row members">
                            {/* START member item */}
                            <div className="members__item">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/CallUs-1.jpg"
                                    alt=""
                                />
                                <div className="info">
                                    <strong>Mark C.</strong> | with Nextiva
                                    since 2018
                                </div>
                                <h3 className="title--sec">Call Us</h3>
                                <a href="#" className="btn">
                                    (100) 000-0000
                                </a>
                            </div>
                            {/* END member item */}
                            {/* START member item */}
                            <div className="members__item">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/CallUs-1.jpg"
                                    alt=""
                                />
                                <div className="info">
                                    <strong>Mark C.</strong> | with Nextiva
                                    since 2018
                                </div>
                                <h3 className="title--sec">Email Us</h3>
                                <a href="#" className="btn">
                                    Fill out a short form
                                </a>
                            </div>
                            {/* END member item */}
                            {/* START member item */}
                            <div className="members__item">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/CallUs-1.jpg"
                                    alt=""
                                />
                                <div className="info">
                                    <strong>Mark C.</strong> | with Nextiva
                                    since 2018
                                </div>
                                <h3 className="title--sec">Live Chat</h3>
                                <a href="#" className="btn">
                                    Chat Now
                                </a>
                            </div>
                            {/* END member item */}
                        </div>
                        <div className="row footer">
                            <p className="para">
                                We're committed to your growth and empowering
                                you to run a successful business. We promise to
                                back you up and be there when you need us. No
                                pressure to purchase anything.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    },

    save: props => {
        // const {  } = props.attributes;

        return (
            <div>
                {/*START hero*/}
                <section className="section" id="ofs-hero">
                    <div className="bg-overlay dots-right" />
                    <div className="container">
                        <div className="row">
                            <h3 className="title--alt w-100">Voxtell vFax</h3>
                            <h2 className="title--big w-100">
                                Online fax service simplified.
                            </h2>
                            <p className="para para--subt w-100">
                                Send and receive secure electronic faxes from
                                anywhere on any device. You're finally free from
                                the fax machine.
                            </p>
                            <div className="hero-cta">
                                <a href="#" className="btn btn--dark">
                                    Start Your Trial
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*END hero*/}
                {/*START Online Fax Pricing*/}
                <section id="ofs-pricing" className="section plans--annually">
                    <div className="container">
                        <h2 className="title--big center">
                            Online Fax Pricing
                        </h2>
                        {/* START switch*/}
                        <div className="switch">
                            <span className="annually">
                                Annually
                                {/* <span class="save">*(Save 15%)</span> */}
                            </span>
                            <input type="checkbox" className="custom-switch" />
                            <span className="monthly">Monthly</span>
                        </div>
                        {/* END switch*/}
                        <div className="row">
                            {/* price box item */}
                            <div className="card price-card">
                                <div className="header light">
                                    <h3 className="title--sub">Basic</h3>
                                    <div className="showboat">Voxtell vFax</div>
                                    <div className="price price--monthly">
                                        <div className="top-text">
                                            As low as
                                        </div>
                                        <div className="num">
                                            $8<sub>.95</sub>
                                        </div>
                                        <div className="bottom-text">
                                            per month
                                        </div>
                                    </div>
                                    <div className="price price--yearly">
                                        <div className="top-text">
                                            As low as
                                        </div>
                                        <div className="num">
                                            $4<sub>.95</sub>
                                        </div>
                                        <div className="bottom-text">
                                            per month
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <p className="para">500 pages/month</p>
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
                                    <h3 className="title--sub">Pro</h3>
                                    <div className="showboat">Voxtell vFax</div>
                                    <div className="price price--monthly">
                                        <div className="top-text">
                                            As low as
                                        </div>
                                        <div className="num">
                                            $17<sub>.95</sub>
                                        </div>
                                        <div className="bottom-text">
                                            per month
                                        </div>
                                    </div>
                                    <div className="price price--yearly">
                                        <div className="top-text">
                                            As low as
                                        </div>
                                        <div className="num">
                                            $12<sub>.95</sub>
                                        </div>
                                        <div className="bottom-text">
                                            per month
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <p className="para">1000 pages/month</p>
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
                                    <h3 className="title--sub">Enterprise</h3>
                                    <div className="showboat">Voxtell vFax</div>
                                    <div className="price price--monthly">
                                        <div className="top-text">
                                            As low as
                                        </div>
                                        <div className="num">
                                            $34<sub>.95</sub>
                                        </div>
                                        <div className="bottom-text">
                                            per month
                                        </div>
                                    </div>
                                    <div className="price price--yearly">
                                        <div className="top-text">
                                            As low as
                                        </div>
                                        <div className="num">
                                            $29<sub>.95</sub>
                                        </div>
                                        <div className="bottom-text">
                                            per month
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <p className="para">3000 pages/month</p>
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
                </section>
                {/*END Online Fax Pricing*/}
                {/* START ofs section-3*/}
                <section id="ofs-3" className="section">
                    <div className="container">
                        <div className="row">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/Online-Fax-Service.png"
                                alt=""
                                className="img-responsive"
                            />
                            <h2 className="title--big">
                                Online faxing built for how you work.
                            </h2>
                            <div className="para para--subt">
                                Whether you're going full digital or you plan to
                                continue using your fax machine—we'll help
                                simplify the entire faxing process. We make
                                faxing more secure, more convenient, and easily
                                managed.
                            </div>
                        </div>
                    </div>
                </section>
                {/* END ofs section-3*/}
                {/* START ofs section-3*/}
                <section id="ofs-features" className="section">
                    <div className="row">
                        <div className="left-col">
                            {/* START item */}
                            <div className="feature-item security">
                                <div className="content">
                                    <h3 className="title--sec">
                                        World-class security.
                                    </h3>
                                    <p className="para">
                                        Every fax you send or receive uses
                                        256-bit SSL encryption to keep your
                                        sensitive information secure. There's no
                                        paper to lose and everything is
                                        delivered directly to your inbox.
                                    </p>
                                </div>
                            </div>
                            {/* END item */}
                            {/* START item */}
                            <div className="feature-item manage">
                                <div className="content">
                                    <img
                                        src="/wp-content/themes/voxtell-custom/img/new-pages/easily-managed-icon.svg"
                                        alt=""
                                    />
                                    <h3 className="title--big">
                                        Easily managed.
                                    </h3>
                                    <p className="para">
                                        All of your faxes are managed in one
                                        place, so it's easy to keep up with
                                        everything. Use a secure portal accessed
                                        through any authorized browser enabled
                                        device. You'll never lose a fax again.
                                    </p>
                                </div>
                            </div>
                            {/* END item */}
                        </div>
                        {/* END left col */}
                        <div className="right-col">
                            {/* START item */}
                            <div className="feature-item device">
                                <div className="content">
                                    <img
                                        src="/wp-content/themes/voxtell-custom/img/new-pages/any-device-icon.svg"
                                        alt=""
                                    />
                                    <h3 className="title--big">
                                        Use any device.
                                    </h3>
                                    <p className="para">
                                        Use your existing PC, tablet, fax
                                        machine or mobile device to send and
                                        receive faxes. We don't make you buy any
                                        new expensive equipment.
                                    </p>
                                </div>
                            </div>
                            {/* END item */}
                            {/* START item */}
                            <div className="feature-item number">
                                <div className="content">
                                    <h3 className="title--sec">
                                        Keep your current number.
                                    </h3>
                                    <p className="para">
                                        The transition to Voxtell vFAX is
                                        seamless. You'll keep all of your
                                        current information and your fax service
                                        will never be disrupted during the
                                        process.
                                    </p>
                                </div>
                            </div>
                            {/* END item */}
                        </div>
                        {/* END right col */}
                    </div>
                    {/* END row */}
                </section>
                {/* END ofs section-3*/}
                {/* START ofs section-4*/}
                <section id="ofs-5" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <h2 className="title--big">
                                    Get faxes directly to your inbox.
                                </h2>
                                <p className="para">
                                    Get all of your faxes securely delivered to
                                    your inbox of choice. Know exactly when a
                                    fax arrives with text alerts for new faxes.
                                    No sensitive papers to lose and no security
                                    risks. See our
                                    <a href="#" className="dark">
                                        fax to email hardware
                                    </a>{" "}
                                    to get your business securely delivering
                                    faxes online.
                                </p>
                            </div>
                            {/* END left col */}
                            <div className="right-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/vfax-phone.png"
                                    alt="vfax phone image"
                                />
                            </div>
                            {/* END right col */}
                        </div>
                        {/* END row */}
                    </div>
                    {/* END container */}
                </section>
                {/* END ofs section-4*/}
                {/*START ofs section 6*/}
                <section id="ofs-6" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/deploy-route-icon.svg"
                                    alt="deploy route icon"
                                />
                                <h3 className="title--sec">
                                    Deploy, route, and scale.
                                </h3>
                                <p className="para">
                                    Make sure faxes get where you want them with
                                    our intuitive routing tools. Add more lines
                                    instantly with no infrastructure
                                    adjustments. Scale up within minutes if your
                                    fax volume grows.
                                </p>
                            </div>
                            {/* END left col */}
                            <div className="right-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/deploy-route-icon.svg"
                                    alt="deploy route icon"
                                />
                                <h3 className="title--sec">
                                    We make it easy to switch.
                                </h3>
                                <p className="para">
                                    Make sure faxes get where you want them with
                                    our intuitive routing tools. Add more lines
                                    instantly with no infrastructure
                                    adjustments. Scale up within minutes if your
                                    fax volume grows.
                                </p>
                            </div>
                            {/* END right col */}
                        </div>
                        {/* END row */}
                    </div>
                    {/* END container */}
                </section>
                {/*END ofs section 6*/}
                {/* START ofs section 7 */}
                <section id="ofs-cta" className="section">
                    <div className="container">
                        <div className="row">
                            <h2 className="title--big">
                                Save big when you switch to Voxtell vFAX.
                            </h2>
                            <p className="para">
                                Reduce your monthly fax expenses by up to 80%.
                                Voxtell plans start at just $4.95 per month for
                                up to 500 fax pages. No setup fees, upfront
                                costs or contracts required.
                            </p>
                            <div className="box">
                                <div className="price">$0.00</div>
                                <h3 className="title--sec">
                                    Start your free 30-day trial
                                </h3>
                                <p className="para">
                                    See the difference for yourself. We're
                                    offering a full 30-day trial of our vFAX
                                    service. No contract required. Cancel
                                    anytime.
                                </p>
                                <a href="#" className="btn">
                                    Try Us Free
                                </a>
                                <p className="para para--subt">
                                    Get started in minutes, no pressure to buy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END ofs section 7 */}
                <section id="team-members-v2" className="section--last">
                    <div className="container">
                        <div className="row header">
                            <h2 className="title--big">We've got your back.</h2>
                            <p className="para">
                                We don’t call it “Amazing Service” for nothing.
                                Our award-winning, friendly, support HUMANS are
                                all based in-house and ready to help you and
                                your growing business.
                            </p>
                        </div>
                        <div className="row members">
                            {/* START member item */}
                            <div className="members__item">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/CallUs-1.jpg"
                                    alt=""
                                />
                                <div className="info">
                                    <strong>Mark C.</strong> | with Nextiva
                                    since 2018
                                </div>
                                <h3 className="title--sec">Call Us</h3>
                                <a href="#" className="btn">
                                    (100) 000-0000
                                </a>
                            </div>
                            {/* END member item */}
                            {/* START member item */}
                            <div className="members__item">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/CallUs-1.jpg"
                                    alt=""
                                />
                                <div className="info">
                                    <strong>Mark C.</strong> | with Nextiva
                                    since 2018
                                </div>
                                <h3 className="title--sec">Email Us</h3>
                                <a href="#" className="btn">
                                    Fill out a short form
                                </a>
                            </div>
                            {/* END member item */}
                            {/* START member item */}
                            <div className="members__item">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/CallUs-1.jpg"
                                    alt=""
                                />
                                <div className="info">
                                    <strong>Mark C.</strong> | with Nextiva
                                    since 2018
                                </div>
                                <h3 className="title--sec">Live Chat</h3>
                                <a href="#" className="btn">
                                    Chat Now
                                </a>
                            </div>
                            {/* END member item */}
                        </div>
                        <div className="row footer">
                            <p className="para">
                                We're committed to your growth and empowering
                                you to run a successful business. We promise to
                                back you up and be there when you need us. No
                                pressure to purchase anything.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});
