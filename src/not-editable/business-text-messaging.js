const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
// const { RichText, InspectorControls, MediaUpload, URLInput } = wp.editor;

registerBlockType("cgb/business-text-messaging", {
    title: __("Business Test Messaging"),
    icon: "edit",
    category: "common",
    keywords: [__("Business"), __("Text"), __("Messaging")],
    attributes: {},

    edit: props => {
        // const {} = props.attributes;
        // const { setAttributes } = props;
        return (
            <div>
                <section id="btm-hero" className="section section-btm-lr-50">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <h2 className="title--big">
                                    Business Text Messaging Made Easy.
                                </h2>
                                <p className="para">
                                    Send unlimited text messages to customers
                                    and employees from your business phone
                                    number.
                                </p>
                                <a href="#" className="btn">
                                    Get started
                                </a>
                            </div>
                            <div className="right-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/SMS-hero-img.png"
                                    alt="send sms"
                                    className="img-responsive"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="btm-2" className="section section-btm-lr-50">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <h2 className="title--big">
                                    Business Text Messaging Made Easy.
                                </h2>
                                <p className="para">
                                    Send unlimited text messages to customers
                                    and employees from your business phone
                                    number.
                                </p>
                                <a href="#" className="btn">
                                    Get started
                                </a>
                            </div>
                            <div className="right-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/What-Is-Business-Text-Messaging.svg"
                                    alt="send sms"
                                    className="img-responsive"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="btm-3" className="section">
                    <div className="container">
                        <div className="row header">
                            <h2 className="title--big">
                                How Business Text Messaging Works:
                            </h2>
                            <p className="para para--subt">
                                Send business text messages easily with the
                                Nextiva platform.
                            </p>
                        </div>
                        <div className="row icon-box">
                            <div className="icon-box__item">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Local-Business-Numbers.svg"
                                    alt
                                />
                                <h3 className="title--sec">
                                    Local Business Numbers
                                </h3>
                                <p className="para">
                                    Use your current business phone number or
                                    get a new local or toll-free number.
                                </p>
                            </div>
                            <div className="icon-box__item">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Unlimited-Send-and-Receive.svg"
                                    alt
                                />
                                <h3 className="title--sec">
                                    Unlimited Send &amp; Receive
                                </h3>
                                <p className="para">
                                    Send and receive unlimited text messages
                                    from your business phone number.
                                </p>
                            </div>
                            <div className="icon-box__item">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Use-the-App.svg"
                                    alt
                                />
                                <h3 className="title--sec">Use the App</h3>
                                <p className="para">
                                    Use the Nextiva App to send and receive
                                    texts from your desktop and mobile device.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="btm-4" className="section">
                    <div className="container">
                        <div className="row">
                            <h2 className="title--big w-100 center">
                                Benefits of business text messaging.
                            </h2>
                        </div>
                        <div className="row bottom">
                            <div className="left">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Business-Text-Messaging-Benefits.png"
                                    alt
                                    className="img-responsive"
                                />
                                <a href="#" className="btn">
                                    Get started
                                </a>
                            </div>
                            <div className="right">
                                <div className="item">
                                    <p className="para">
                                        Create a new communication channel
                                        customers love to use.
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="para">
                                        Send and receive business text messages
                                        from app or platform.
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="para">
                                        Send appointment confirmations via text
                                        message.
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="para">
                                        Answer business calls with texting via
                                        the Nextiva platform.
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="para">
                                        Respond to missed calls discreetly and
                                        easily when you can't talk on the phone.
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="para">
                                        Supplement phone, email, and social
                                        outreach with text message
                                        conversations.
                                    </p>
                                </div>
                            </div>{" "}
                            {/* END right */}
                        </div>
                    </div>
                </section>
                <section id="btm-5" className="section">
                    <div className="container">
                        <div className="row center">
                            <h2 className="title--big">
                                Start using business text
                                <br />
                                messaging &amp; SMS today.
                            </h2>
                            <p className="para">
                                Send and receive text messages from your
                                business phone number, directly from your iPhone
                                or Android with the Nextiva App.
                            </p>
                            <div className="cta w-100">
                                <a href="#" className="btn">
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="row bottom">
                            <h2 className="title--sec">
                                Have questions about the Business Communication
                                Suite?
                            </h2>
                            <div className="cta">
                                <a href="#" className="btn">
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="bps-posts" className="section">
                    <div className="container">
                        <div className="row center">
                            <h2 className="title--big w-100">
                                See what else you can do
                                <br />
                                better with Nextiva.
                            </h2>
                        </div>
                        <div className="row posts-cards">
                            <a href="#" className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Nextiva-CRM.svg"
                                    alt
                                />
                                <div className="category">Category</div>
                                <div className="title--sec">
                                    Turn leads into customers. And customers
                                    into fans.
                                </div>
                                <div className="para">
                                    Manage sales, service, and customer
                                    relationships with ease. We've redefined
                                    what a good CRM is.
                                </div>
                            </a>
                            <a href="#" className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Nextiva-CRM.svg"
                                    alt
                                />
                                <div className="category">Category</div>
                                <div className="title--sec">
                                    Turn leads into customers. And customers
                                    into fans.
                                </div>
                                <div className="para">
                                    Manage sales, service, and customer
                                    relationships with ease. We've redefined
                                    what a good CRM is.
                                </div>
                            </a>
                            <a href="#" className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Nextiva-CRM.svg"
                                    alt
                                />
                                <div className="category">Category</div>
                                <div className="title--sec">
                                    Turn leads into customers. And customers
                                    into fans.
                                </div>
                                <div className="para">
                                    Manage sales, service, and customer
                                    relationships with ease. We've redefined
                                    what a good CRM is.
                                </div>
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
                <section id="btm-hero" className="section section-btm-lr-50">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <h2 className="title--big">
                                    Business Text Messaging Made Easy.
                                </h2>
                                <p className="para">
                                    Send unlimited text messages to customers
                                    and employees from your business phone
                                    number.
                                </p>
                                <a href="#" className="btn">
                                    Get started
                                </a>
                            </div>
                            <div className="right-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/SMS-hero-img.png"
                                    alt="send sms"
                                    className="img-responsive"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="btm-2" className="section section-btm-lr-50">
                    <div className="container">
                        <div className="row">
                            <div className="left-col">
                                <h2 className="title--big">
                                    Business Text Messaging Made Easy.
                                </h2>
                                <p className="para">
                                    Send unlimited text messages to customers
                                    and employees from your business phone
                                    number.
                                </p>
                                <a href="#" className="btn">
                                    Get started
                                </a>
                            </div>
                            <div className="right-col">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/What-Is-Business-Text-Messaging.svg"
                                    alt="send sms"
                                    className="img-responsive"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="btm-3" className="section">
                    <div className="container">
                        <div className="row header">
                            <h2 className="title--big">
                                How Business Text Messaging Works:
                            </h2>
                            <p className="para para--subt">
                                Send business text messages easily with the
                                Nextiva platform.
                            </p>
                        </div>
                        <div className="row icon-box">
                            <div className="icon-box__item">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Local-Business-Numbers.svg"
                                    alt
                                />
                                <h3 className="title--sec">
                                    Local Business Numbers
                                </h3>
                                <p className="para">
                                    Use your current business phone number or
                                    get a new local or toll-free number.
                                </p>
                            </div>
                            <div className="icon-box__item">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Unlimited-Send-and-Receive.svg"
                                    alt
                                />
                                <h3 className="title--sec">
                                    Unlimited Send &amp; Receive
                                </h3>
                                <p className="para">
                                    Send and receive unlimited text messages
                                    from your business phone number.
                                </p>
                            </div>
                            <div className="icon-box__item">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Use-the-App.svg"
                                    alt
                                />
                                <h3 className="title--sec">Use the App</h3>
                                <p className="para">
                                    Use the Nextiva App to send and receive
                                    texts from your desktop and mobile device.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="btm-4" className="section">
                    <div className="container">
                        <div className="row">
                            <h2 className="title--big w-100 center">
                                Benefits of business text messaging.
                            </h2>
                        </div>
                        <div className="row bottom">
                            <div className="left">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Business-Text-Messaging-Benefits.png"
                                    alt
                                    className="img-responsive"
                                />
                                <a href="#" className="btn">
                                    Get started
                                </a>
                            </div>
                            <div className="right">
                                <div className="item">
                                    <p className="para">
                                        Create a new communication channel
                                        customers love to use.
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="para">
                                        Send and receive business text messages
                                        from app or platform.
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="para">
                                        Send appointment confirmations via text
                                        message.
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="para">
                                        Answer business calls with texting via
                                        the Nextiva platform.
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="para">
                                        Respond to missed calls discreetly and
                                        easily when you can't talk on the phone.
                                    </p>
                                </div>
                                <div className="item">
                                    <p className="para">
                                        Supplement phone, email, and social
                                        outreach with text message
                                        conversations.
                                    </p>
                                </div>
                            </div>{" "}
                            {/* END right */}
                        </div>
                    </div>
                </section>
                <section id="btm-5" className="section">
                    <div className="container">
                        <div className="row center">
                            <h2 className="title--big">
                                Start using business text
                                <br />
                                messaging &amp; SMS today.
                            </h2>
                            <p className="para">
                                Send and receive text messages from your
                                business phone number, directly from your iPhone
                                or Android with the Nextiva App.
                            </p>
                            <div className="cta w-100">
                                <a href="#" className="btn">
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="row bottom">
                            <h2 className="title--sec">
                                Have questions about the Business Communication
                                Suite?
                            </h2>
                            <div className="cta">
                                <a href="#" className="btn">
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="bps-posts" className="section">
                    <div className="container">
                        <div className="row center">
                            <h2 className="title--big w-100">
                                See what else you can do
                                <br />
                                better with Nextiva.
                            </h2>
                        </div>
                        <div className="row posts-cards">
                            <a href="#" className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Nextiva-CRM.svg"
                                    alt
                                />
                                <div className="category">Category</div>
                                <div className="title--sec">
                                    Turn leads into customers. And customers
                                    into fans.
                                </div>
                                <div className="para">
                                    Manage sales, service, and customer
                                    relationships with ease. We've redefined
                                    what a good CRM is.
                                </div>
                            </a>
                            <a href="#" className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Nextiva-CRM.svg"
                                    alt
                                />
                                <div className="category">Category</div>
                                <div className="title--sec">
                                    Turn leads into customers. And customers
                                    into fans.
                                </div>
                                <div className="para">
                                    Manage sales, service, and customer
                                    relationships with ease. We've redefined
                                    what a good CRM is.
                                </div>
                            </a>
                            <a href="#" className="box">
                                <img
                                    src="/wp-content/themes/voxtell-custom/img/new-pages/Nextiva-CRM.svg"
                                    alt
                                />
                                <div className="category">Category</div>
                                <div className="title--sec">
                                    Turn leads into customers. And customers
                                    into fans.
                                </div>
                                <div className="para">
                                    Manage sales, service, and customer
                                    relationships with ease. We've redefined
                                    what a good CRM is.
                                </div>
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
