const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
// const { RichText, InspectorControls, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/pbx-sip-trunk", {
    title: __("PBX sip trunk new"),
    icon: "edit",
    category: "common",
    keywords: [__("Pbx"), __("Sip"), __("Trunk")],
    attributes: {
        text1: {
            type: "string",
            default: "Real Estate"
        }
    },

    edit: props => {
        // const {} = props.attributes;
        // const { setAttributes } = props;

        return (
            <div>
                {/*START hero*/}
                <section className="section" id="ofs-hero">
                    <div className="bg-overlay dots-right" />
                    <div className="container">
                        <div className="row">
                            <h3 className="title--alt w-100">
                                Enterprise SIP Trunking
                            </h3>
                            <h2 className="title--big w-100">
                                Bring your PBX system into
                                <br />
                                the next-generation.
                            </h2>
                            <p className="para para--subt w-100">
                                Seamlessly transition your legacy PBX system
                                into a powerful cloud system with no new
                                equipment or service disruptions.
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
                <section id="pst-2" className="section">
                    <div className="container">
                        <div className="row">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/more-control.svg"
                                alt
                            />
                            <p className="para para--subt">
                                Enterprise SIP Trunking
                            </p>
                            <h2 className="title--big">
                                More control. Happier customers.
                            </h2>
                            <p className="para">
                                Solve customer issues on the first call with a
                                powerful cloud based phone system. Empower your
                                agents with more tools, optimized call flows,
                                and award-winning support.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="pst-3" className="section">
                    <div className="bg-overlay dots-right" />
                    <div className="container">
                        <div className="row">
                            {/* START box */}
                            <div className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/cost-reduction-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h3 className="title--sec">
                                    Significant service cost reductions.
                                </h3>
                                <div className="divider" />
                                <p className="para">
                                    Reduce your current PBX bill by up to 70%.
                                    Get local, toll-free, and international
                                    calls. No more per-minute charges. It's all
                                    included.
                                </p>
                            </div>
                            {/* END box */}
                            {/* START box */}
                            <div className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/no-disruptions-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h3 className="title--sec">
                                    No disruptions to your service.
                                </h3>
                                <div className="divider" />
                                <p className="para">
                                    Maintain your current level of customer
                                    service and growth while we strategically
                                    transition your system to the cloud.
                                </p>
                            </div>
                            {/* END box */}
                            {/* START box */}
                            <div className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/current-equipment-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h3 className="title--sec">
                                    Keep your current equipment.
                                </h3>
                                <div className="divider" />
                                <p className="para">
                                    Instantly convert traditional phone systems
                                    to a feature rich IP-based set up. You avoid
                                    new equipment costs while getting better
                                    service.
                                </p>
                            </div>
                            {/* END box */}
                        </div>
                    </div>
                </section>
                <section id="pst-4" className="section">
                    <div className="row">
                        {/* big card left */}
                        <a href="#" className="card-left">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/More-Power@2x.png"
                                alt="More-Power"
                            />
                            <h2 className="title--big">Get more power.</h2>
                            <p className="para">
                                Your existing phones and devices get crisp HD
                                audio, messaging, and video capabilities.
                                Manage, administer, and monitor your entire
                                system from one place—the NextOS dashboard.
                            </p>
                            <p className="para text-link">
                                <span>Get Started</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={13}
                                    height="14.182"
                                    viewBox="0 0 13 14.182"
                                >
                                    {" "}
                                    <path
                                        id="Path_1256"
                                        data-name="Path 1256"
                                        d="M13,6.739,5.909,13.83,3.545,11.467,7.091,8.512H0V4.967H7.091L3.545,2.012,5.909-.352Z"
                                        transform="translate(0 0.352)"
                                        fill="#FFFFFF"
                                    />{" "}
                                </svg>
                            </p>
                        </a>
                        {/* big card left end */}
                        {/* big card right */}
                        <a href="#" className="card-right">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/PBX-SIP-Trunking.png"
                                alt
                            />
                            <h2 className="title--big">Any PBX works.</h2>
                            <p className="para">
                                We use a hardware solution which creates a
                                blended SIP trunking environment. You'll get
                                TLS, SRTP, HTTPS, SSH client/server encryption
                                and authentication. We'll do the hard work for
                                you.
                            </p>
                            <p className="para text-link">
                                <span>Get started</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={13}
                                    height="14.182"
                                    viewBox="0 0 13 14.182"
                                >
                                    {" "}
                                    <path
                                        id="Path_1256"
                                        data-name="Path 1256"
                                        d="M13,6.739,5.909,13.83,3.545,11.467,7.091,8.512H0V4.967H7.091L3.545,2.012,5.909-.352Z"
                                        transform="translate(0 0.352)"
                                        fill="#FFFFFF"
                                    />{" "}
                                </svg>
                            </p>
                        </a>
                        {/* big card right end */}
                    </div>
                </section>
                <section id="pst-5" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/easily-scale-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h2 className="title--sec">
                                    Easily scale as you grow.
                                </h2>
                                <p className="para">
                                    Our system allows you to quickly respond to
                                    growing customer call volumes and see
                                    exactly where your bottlenecks are. You can
                                    add more lines within minutes with no
                                    complex set up.
                                </p>
                            </div>
                            <div className="right-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/deploy-in-days-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h2 className="title--sec">
                                    Deploy in days, not weeks.
                                </h2>
                                <p className="para">
                                    We'll introduce you to our strategic
                                    deployment strategy. Our goal is to get your
                                    system upgraded and running as fast as we
                                    can. We'll support you the whole way.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="pst-6" className="section">
                    <div className="container">
                        <div className="row center">
                            <div className="col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/hands-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h2 className="title--big">
                                    Keep your existing number and info.
                                </h2>
                                <p className="para">
                                    We'll help you easily port your number and
                                    information from your previous provider. So
                                    you'll keep everything intact.
                                </p>
                                <a href="#" className="btn">
                                    Talk to an expert
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="pst-other-products" className="section">
                    <div className="container">
                        <div className="row center header">
                            <div className="col w-100 center">
                                <h4 className="title--icon">
                                    Our other enterprise products
                                </h4>
                                <h2 className="title--big">
                                    Make your whole company happy.
                                </h2>
                            </div>
                        </div>
                        <div className="row cards">
                            {/* START box */}
                            <div className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/voice-platform-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h3 className="title--sec">
                                    Enterprise Phone Service
                                </h3>
                                <div className="divider" />
                                <p className="para">
                                    Get the leading voice platform. Crisp HD
                                    audio and reliable global collaboration on
                                    any device.
                                </p>
                                <a href="#" className="btn">
                                    Learn more
                                </a>
                            </div>
                            {/* END box */}
                            {/* START box */}
                            <div className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/contact-center-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h3 className="title--sec">
                                    Cloud Contact Center
                                </h3>
                                <div className="divider" />
                                <p className="para">
                                    Start resolving calls on the first try and
                                    manage it all with a simple and intuitive
                                    dashboard with analytics.
                                </p>
                                <a href="#" className="btn">
                                    Learn more
                                </a>
                            </div>
                            {/* END box */}
                        </div>
                        {/* END row cards */}
                        <div className="row small-cards">
                            <a href="#" className="box">
                                <div className="left">
                                    <img
                                        src="/wp-content/themes/voxtell-custom/img/new-pages/simple-to-use-icon.svg"
                                        alt
                                        className="icon"
                                    />
                                    <p className="para para--subt">
                                        Simple to Use &amp; Train
                                    </p>
                                </div>
                                <div className="right">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={34}
                                        viewBox="0 0 22 34"
                                    >
                                        <path
                                            d="M17,22,0,6,6,0,17,11,28,0l6,6Z"
                                            transform="translate(0 34) rotate(-90)"
                                            fill="#dedfe5"
                                        />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="left">
                                    <img
                                        src="/wp-content/themes/voxtell-custom/img/new-pages/ultra-secure-icon.svg"
                                        alt
                                        className="icon"
                                    />
                                    <p className="para para--subt">
                                        Ultra Secure Network
                                    </p>
                                </div>
                                <div className="right">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={34}
                                        viewBox="0 0 22 34"
                                    >
                                        <path
                                            d="M17,22,0,6,6,0,17,11,28,0l6,6Z"
                                            transform="translate(0 34) rotate(-90)"
                                            fill="#dedfe5"
                                        />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="left">
                                    <img
                                        src="/wp-content/themes/voxtell-custom/img/new-pages/service-and-support-icon.svg"
                                        alt
                                        className="icon"
                                    />
                                    <p className="para para--subt">
                                        Reliable Service <br />
                                        &amp; Support
                                    </p>
                                </div>
                                <div className="right">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={34}
                                        viewBox="0 0 22 34"
                                    >
                                        <path
                                            d="M17,22,0,6,6,0,17,11,28,0l6,6Z"
                                            transform="translate(0 34) rotate(-90)"
                                            fill="#dedfe5"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                        {/* END row boxes */}
                        <div className="row cta center">
                            <h1 className="title--big w-100">
                                Talk to an expert today.
                            </h1>
                            <a href="#" className="btn">
                                Get started
                            </a>
                        </div>
                    </div>
                </section>
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
                                    alt
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
                                    alt
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
                                    alt
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
        // const {} = props.attributes;
        // const { setAttributes } = props;

        return (
            <div>
                {/*START hero*/}
                <section className="section" id="ofs-hero">
                    <div className="bg-overlay dots-right" />
                    <div className="container">
                        <div className="row">
                            <h3 className="title--alt w-100">
                                Enterprise SIP Trunking
                            </h3>
                            <h2 className="title--big w-100">
                                Bring your PBX system into
                                <br />
                                the next-generation.
                            </h2>
                            <p className="para para--subt w-100">
                                Seamlessly transition your legacy PBX system
                                into a powerful cloud system with no new
                                equipment or service disruptions.
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
                <section id="pst-2" className="section">
                    <div className="container">
                        <div className="row">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/more-control.svg"
                                alt
                            />
                            <p className="para para--subt">
                                Enterprise SIP Trunking
                            </p>
                            <h2 className="title--big">
                                More control. Happier customers.
                            </h2>
                            <p className="para">
                                Solve customer issues on the first call with a
                                powerful cloud based phone system. Empower your
                                agents with more tools, optimized call flows,
                                and award-winning support.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="pst-3" className="section">
                    <div className="bg-overlay dots-right" />
                    <div className="container">
                        <div className="row">
                            {/* START box */}
                            <div className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/cost-reduction-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h3 className="title--sec">
                                    Significant service cost reductions.
                                </h3>
                                <div className="divider" />
                                <p className="para">
                                    Reduce your current PBX bill by up to 70%.
                                    Get local, toll-free, and international
                                    calls. No more per-minute charges. It's all
                                    included.
                                </p>
                            </div>
                            {/* END box */}
                            {/* START box */}
                            <div className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/no-disruptions-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h3 className="title--sec">
                                    No disruptions to your service.
                                </h3>
                                <div className="divider" />
                                <p className="para">
                                    Maintain your current level of customer
                                    service and growth while we strategically
                                    transition your system to the cloud.
                                </p>
                            </div>
                            {/* END box */}
                            {/* START box */}
                            <div className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/current-equipment-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h3 className="title--sec">
                                    Keep your current equipment.
                                </h3>
                                <div className="divider" />
                                <p className="para">
                                    Instantly convert traditional phone systems
                                    to a feature rich IP-based set up. You avoid
                                    new equipment costs while getting better
                                    service.
                                </p>
                            </div>
                            {/* END box */}
                        </div>
                    </div>
                </section>
                <section id="pst-4" className="section">
                    <div className="row">
                        {/* big card left */}
                        <a href="#" className="card-left">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/More-Power@2x.png"
                                alt="More-Power"
                            />
                            <h2 className="title--big">Get more power.</h2>
                            <p className="para">
                                Your existing phones and devices get crisp HD
                                audio, messaging, and video capabilities.
                                Manage, administer, and monitor your entire
                                system from one place—the NextOS dashboard.
                            </p>
                            <p className="para text-link">
                                <span>Get Started</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={13}
                                    height="14.182"
                                    viewBox="0 0 13 14.182"
                                >
                                    {" "}
                                    <path
                                        id="Path_1256"
                                        data-name="Path 1256"
                                        d="M13,6.739,5.909,13.83,3.545,11.467,7.091,8.512H0V4.967H7.091L3.545,2.012,5.909-.352Z"
                                        transform="translate(0 0.352)"
                                        fill="#FFFFFF"
                                    />{" "}
                                </svg>
                            </p>
                        </a>
                        {/* big card left end */}
                        {/* big card right */}
                        <a href="#" className="card-right">
                            <img
                                src="/wp-content/themes/voxtell-custom/img/new-pages/PBX-SIP-Trunking.png"
                                alt
                            />
                            <h2 className="title--big">Any PBX works.</h2>
                            <p className="para">
                                We use a hardware solution which creates a
                                blended SIP trunking environment. You'll get
                                TLS, SRTP, HTTPS, SSH client/server encryption
                                and authentication. We'll do the hard work for
                                you.
                            </p>
                            <p className="para text-link">
                                <span>Get started</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={13}
                                    height="14.182"
                                    viewBox="0 0 13 14.182"
                                >
                                    {" "}
                                    <path
                                        id="Path_1256"
                                        data-name="Path 1256"
                                        d="M13,6.739,5.909,13.83,3.545,11.467,7.091,8.512H0V4.967H7.091L3.545,2.012,5.909-.352Z"
                                        transform="translate(0 0.352)"
                                        fill="#FFFFFF"
                                    />{" "}
                                </svg>
                            </p>
                        </a>
                        {/* big card right end */}
                    </div>
                </section>
                <section id="pst-5" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/easily-scale-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h2 className="title--sec">
                                    Easily scale as you grow.
                                </h2>
                                <p className="para">
                                    Our system allows you to quickly respond to
                                    growing customer call volumes and see
                                    exactly where your bottlenecks are. You can
                                    add more lines within minutes with no
                                    complex set up.
                                </p>
                            </div>
                            <div className="right-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/deploy-in-days-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h2 className="title--sec">
                                    Deploy in days, not weeks.
                                </h2>
                                <p className="para">
                                    We'll introduce you to our strategic
                                    deployment strategy. Our goal is to get your
                                    system upgraded and running as fast as we
                                    can. We'll support you the whole way.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="pst-6" className="section">
                    <div className="container">
                        <div className="row center">
                            <div className="col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/hands-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h2 className="title--big">
                                    Keep your existing number and info.
                                </h2>
                                <p className="para">
                                    We'll help you easily port your number and
                                    information from your previous provider. So
                                    you'll keep everything intact.
                                </p>
                                <a href="#" className="btn">
                                    Talk to an expert
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="pst-other-products" className="section">
                    <div className="container">
                        <div className="row center header">
                            <div className="col w-100 center">
                                <h4 className="title--icon">
                                    Our other enterprise products
                                </h4>
                                <h2 className="title--big">
                                    Make your whole company happy.
                                </h2>
                            </div>
                        </div>
                        <div className="row cards">
                            {/* START box */}
                            <div className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/voice-platform-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h3 className="title--sec">
                                    Enterprise Phone Service
                                </h3>
                                <div className="divider" />
                                <p className="para">
                                    Get the leading voice platform. Crisp HD
                                    audio and reliable global collaboration on
                                    any device.
                                </p>
                                <a href="#" className="btn">
                                    Learn more
                                </a>
                            </div>
                            {/* END box */}
                            {/* START box */}
                            <div className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/contact-center-icon.svg"
                                    alt
                                    className="icon"
                                />
                                <h3 className="title--sec">
                                    Cloud Contact Center
                                </h3>
                                <div className="divider" />
                                <p className="para">
                                    Start resolving calls on the first try and
                                    manage it all with a simple and intuitive
                                    dashboard with analytics.
                                </p>
                                <a href="#" className="btn">
                                    Learn more
                                </a>
                            </div>
                            {/* END box */}
                        </div>
                        {/* END row cards */}
                        <div className="row small-cards">
                            <a href="#" className="box">
                                <div className="left">
                                    <img
                                        src="/wp-content/themes/voxtell-custom/img/new-pages/simple-to-use-icon.svg"
                                        alt
                                        className="icon"
                                    />
                                    <p className="para para--subt">
                                        Simple to Use &amp; Train
                                    </p>
                                </div>
                                <div className="right">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={34}
                                        viewBox="0 0 22 34"
                                    >
                                        <path
                                            d="M17,22,0,6,6,0,17,11,28,0l6,6Z"
                                            transform="translate(0 34) rotate(-90)"
                                            fill="#dedfe5"
                                        />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="left">
                                    <img
                                        src="/wp-content/themes/voxtell-custom/img/new-pages/ultra-secure-icon.svg"
                                        alt
                                        className="icon"
                                    />
                                    <p className="para para--subt">
                                        Ultra Secure Network
                                    </p>
                                </div>
                                <div className="right">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={34}
                                        viewBox="0 0 22 34"
                                    >
                                        <path
                                            d="M17,22,0,6,6,0,17,11,28,0l6,6Z"
                                            transform="translate(0 34) rotate(-90)"
                                            fill="#dedfe5"
                                        />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="box">
                                <div className="left">
                                    <img
                                        src="/wp-content/themes/voxtell-custom/img/new-pages/service-and-support-icon.svg"
                                        alt
                                        className="icon"
                                    />
                                    <p className="para para--subt">
                                        Reliable Service <br />
                                        &amp; Support
                                    </p>
                                </div>
                                <div className="right">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={34}
                                        viewBox="0 0 22 34"
                                    >
                                        <path
                                            d="M17,22,0,6,6,0,17,11,28,0l6,6Z"
                                            transform="translate(0 34) rotate(-90)"
                                            fill="#dedfe5"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                        {/* END row boxes */}
                        <div className="row cta center">
                            <h1 className="title--big w-100">
                                Talk to an expert today.
                            </h1>
                            <a href="#" className="btn">
                                Get started
                            </a>
                        </div>
                    </div>
                </section>
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
                                    alt
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
                                    alt
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
                                    alt
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
