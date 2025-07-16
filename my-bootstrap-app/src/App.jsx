import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            <h1 className="sitename">Strategy</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          <a className="btn-getstarted" href="#about">
            Get Started
          </a>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 content-col" data-aos="fade-up">
                <div className="content">
                  <div className="agency-name">
                    <h5>OUR AGENCY</h5>
                  </div>
                  <div className="main-heading">
                    <h1>
                      CREATIVE <br />
                      DESIGN
                    </h1>
                  </div>
                  <div className="divider" />
                  <div className="description">
                    <p>
                      Discover innovative strategies for impactful visual
                      communication. We transform ideas into compelling
                      realities, ensuring your brand stands out in a crowded
                      marketplace. Our dedicated team leverages cutting-edge
                      techniques to deliver exceptional results that resonate
                      with your audience.
                    </p>
                  </div>
                  <div className="cta-button">
                    <a href="#services" className="btn">
                      <span>EXPLORE SERVICES</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5" data-aos="zoom-out">
                <div className="visual-content">
                  <div className="fluid-shape">
                    <img
                      src="/abstract-1.webp"
                      alt="Abstract Fluid Shape"
                      className="fluid-img"
                    />
                  </div>
                  <div className="stats-card">
                    <div className="stats-number">
                      <h2>5K</h2>
                    </div>
                    <div className="stats-label">
                      <p>Successful Campaigns</p>
                    </div>
                    <div className="stats-arrow">
                      <a href="#portfolio">
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Hero Section */}
        {/* About Section */}
        <section id="about" className="about section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <div>
              <span>Learn More</span>{" "}
              <span className="description-title">About Us</span>
            </div>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gx-5 align-items-center">
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-delay={200}
              >
                <div className="about-image position-relative">
                  <img
                    src="/about-portrait-1.webp"
                    className="img-fluid rounded-4 shadow-sm"
                    alt="About Image"
                    loading="lazy"
                  />
                  <div className="experience-badge">
                    <span className="years">20+</span>
                    <span className="text">Years of Expertise</span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 mt-4 mt-lg-0"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <div className="about-content">
                  <h2>Elevating Business Performance Through Innovation</h2>
                  <p className="lead">
                    We focus on crafting bespoke strategies that navigate
                    complexity and deliver tangible results for our clients.
                  </p>
                  <p>
                    Through a blend of sophisticated analytics and creative
                    problem-solving, we empower organizations to thrive in
                    rapidly evolving markets.
                  </p>
                  <div className="row g-4 mt-3">
                    <div
                      className="col-md-6"
                      data-aos="zoom-in"
                      data-aos-delay={400}
                    >
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill" />
                        <h5>Dedicated Team Support</h5>
                        <p>
                          Our highly skilled professionals are committed to
                          providing personalized service and impactful solutions
                          on every engagement.
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-md-6"
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    >
                      <div className="feature-item">
                        <i className="bi bi-lightbulb-fill" />
                        <h5>Forward-Thinking Approach</h5>
                        <p>
                          We embrace innovative methodologies to develop unique
                          strategies that drive lasting success.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary mt-4">
                    Explore Our Services
                  </a>
                </div>
              </div>
            </div>
            <div
              className="testimonial-section mt-5 pt-5"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="row">
                <div
                  className="col-lg-4"
                  data-aos="fade-right"
                  data-aos-delay={200}
                >
                  <div className="testimonial-intro">
                    <h3>Our Clients Speak Highly</h3>
                    <p>
                      Hear directly from those who have experienced the impact
                      of our partnership and achieved their strategic goals.
                    </p>
                    <div className="swiper-nav-buttons mt-4">
                      <button className="slider-prev">
                        <i className="bi bi-arrow-left" />
                      </button>
                      <button className="slider-next">
                        <i className="bi bi-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-8"
                  data-aos="fade-left"
                  data-aos-delay={300}
                >
                  <div className="testimonial-slider swiper init-swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="rating mb-3">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                          </div>
                          <p>
                            "Their strategic vision and unwavering commitment to
                            results provided exceptional value. Our operational
                            efficiency has signficantly improved."
                          </p>
                          <div className="client-info d-flex align-items-center mt-4">
                            <img
                              src="/person-f-1.webp"
                              className="client-img"
                              alt="Client"
                              loading="lazy"
                            />
                            <div>
                              <h6 className="mb-0">Eleanor Vance</h6>
                              <span>Operations Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="rating mb-3">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </div>
                          <p>
                            "Collaborating with their team was a revelation.
                            Their innovative strategies guided us toward
                            achieving our objectives with precision and speed."
                          </p>
                          <div className="client-info d-flex align-items-center mt-4">
                            <img
                              src="/person-m-1.webp"
                              className="client-img"
                              alt="Client"
                              loading="lazy"
                            />
                            <div>
                              <h6 className="mb-0">David Kim</h6>
                              <span>Product Lead</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="rating mb-3">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                          </div>
                          <p>
                            "The depth of knowledge and unwavering dedication
                            they bring to every project is exceptional. They've
                            become an essential ally in driving our expansion."
                          </p>
                          <div className="client-info d-flex align-items-center mt-4">
                            <img
                              src="/person-f-2.webp"
                              className="client-img"
                              alt="Client"
                              loading="lazy"
                            />
                            <div>
                              <h6 className="mb-0">Isabella Diaz</h6>
                              <span>Research Analyst</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="rating mb-3">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </div>
                          <p>
                            "Their dedication to delivering superior solutions
                            and their meticulous attention to detail have
                            profoundly impacted our corporate growth
                            trajectory."
                          </p>
                          <div className="client-info d-flex align-items-center mt-4">
                            <img
                              src="/person-f-3.webp"
                              className="client-img"
                              alt="Client"
                              loading="lazy"
                            />
                            <div>
                              <h6 className="mb-0">Olivia Chen</h6>
                              <span>Development Strategist</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /About Section */}
        {/* Services Section */}
        <section id="services" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <div>
              <span>Check Our</span>{" "}
              <span className="description-title">Services</span>
            </div>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="service-header">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12">
                  <div className="service-intro">
                    <h2 className="service-heading">
                      <div>Innovative business</div>
                      <div>
                        <span>performance solutions</span>
                      </div>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="service-summary">
                    <p>
                      We integrate forward-thinking strategies, creative
                      approaches, and state-of-the-art technologies to deliver
                      exceptional customer experiences that drive growth and
                      engage target markets.
                    </p>
                    <a href="services.html" className="service-btn">
                      View All Services
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-palette" />
                  </div>
                  <a
                    href="service-details.html"
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right" />
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Creative <span>branding</span>
                    </a>
                  </h3>
                  <p>
                    Nulla facilisi. Maecenas eget magna neque. Suspendisse
                    potenti. Curabitur eleifend nisi non magna vulputate, vel
                    condimentum libero tempus. Proin consectetur feugiat diam.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-gem" />
                  </div>
                  <a
                    href="service-details.html"
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right" />
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Design <span>systems</span>
                    </a>
                  </h3>
                  <p>
                    Praesent euismod varius tellus, vel bibendum nunc interdum
                    at. Donec vehicula diam vel metus venenatis convallis.
                    Aliquam erat volutpat. Etiam viverra magna sit amet.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-megaphone" />
                  </div>
                  <a
                    href="service-details.html"
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right" />
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Marketing <span>strategies</span>
                    </a>
                  </h3>
                  <p>
                    Vivamus tempor velit id magna dictum, sed fermentum nisi
                    faucibus. Integer nec pretium sapien. Fusce tincidunt ligula
                    et purus consequat, ac pellentesque nulla eleifend.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-code-slash" />
                  </div>
                  <a
                    href="service-details.html"
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right" />
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Digital <span>platforms</span>
                    </a>
                  </h3>
                  <p>
                    Cras fermentum odio eu feugiat malesuada. Vestibulum ante
                    ipsum primis in faucibus orci luctus et accumsan cursus.
                    Morbi placerat nulla vel nunc viverra accumsan.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-graph-up" />
                  </div>
                  <a
                    href="service-details.html"
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right" />
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Growth <span>acceleration</span>
                    </a>
                  </h3>
                  <p>
                    Aenean vel augue vel nisi bibendum posuere. Phasellus in
                    lacus quis urna sodales dignissim. Duis aliquam libero eget
                    risus facilisis. Quisque eget libero vel nisl fringilla.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-camera-video" />
                  </div>
                  <a
                    href="service-details.html"
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right" />
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Media <span>solutions</span>
                    </a>
                  </h3>
                  <p>
                    Etiam efficitur lacus in diam finibus, nec ultrices est
                    sagittis. Maecenas elementum magna sed risus faucibus, nec
                    commodo purus facilisis. Vestibulum accumsan magna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Services Section */}
        {/* Steps Section */}
        <section id="steps" className="steps section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Steps</h2>
            <div>
              <span>How we</span>{" "}
              <span className="description-title">Work</span>
            </div>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="steps-wrapper">
              <div
                className="step-item"
                data-aos="fade-right"
                data-aos-delay={200}
              >
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-lightbulb" />
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 01</span>
                    <h3>Initial Consultation</h3>
                    <p>
                      Conducting thorough discovery sessions to understand your
                      business requirements and objectives. Our expert team
                      analyzes your needs to create a customized approach.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Step Item */}
              <div
                className="step-item"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-gear" />
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 02</span>
                    <h3>Planning &amp; Strategy</h3>
                    <p>
                      Developing comprehensive strategies and detailed project
                      plans based on the initial consultation. We create
                      actionable roadmaps with clear milestones and
                      deliverables.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Step Item */}
              <div
                className="step-item"
                data-aos="fade-right"
                data-aos-delay={400}
              >
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-bar-chart" />
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 03</span>
                    <h3>Development Phase</h3>
                    <p>
                      Executing the planned strategies with precision and
                      agility. Our team implements solutions while maintaining
                      constant communication and progress updates.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Step Item */}
              <div
                className="step-item"
                data-aos="fade-left"
                data-aos-delay={500}
              >
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-check2-circle" />
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 04</span>
                    <h3>Launch &amp; Support</h3>
                    <p>
                      Ensuring smooth deployment and providing ongoing support
                      for implemented solutions. We monitor performance and make
                      necessary adjustments for optimal results.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Step Item */}
            </div>
          </div>
        </section>
        {/* /Steps Section */}
        {/* Call To Action Section */}
        <section id="call-to-action" className="call-to-action section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="advertise-1 d-flex flex-column flex-lg-row gap-4 align-items-center position-relative">
              <div
                className="content-left flex-grow-1"
                data-aos="fade-right"
                data-aos-delay={200}
              >
                <span className="badge text-uppercase mb-2">Don't Miss!</span>
                <h2>Revolutionize Your Digital Experience Today</h2>
                <p className="my-4">
                  Strategia accelerates your business growth through innovative
                  solutions and cutting-edge technology. Join thousands of
                  satisfied customers who have transformed their operations.
                </p>
                <div className="features d-flex flex-wrap gap-3 mb-4">
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill" />
                    <span>Premium Support</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill" />
                    <span>Cloud Integration</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill" />
                    <span>Real-time Analytics</span>
                  </div>
                </div>
                <div className="cta-buttons d-flex flex-wrap gap-3">
                  <a href="#" className="btn btn-primary">
                    Start Free Trial
                  </a>
                  <a href="#" className="btn btn-outline">
                    Learn More
                  </a>
                </div>
              </div>
              <div
                className="content-right position-relative"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <img
                  src="/misc-1.webp"
                  alt="Digital Platform"
                  className="img-fluid rounded-4"
                />
                <div className="floating-card">
                  <div className="card-icon">
                    <i className="bi bi-graph-up-arrow" />
                  </div>
                  <div className="card-content">
                    <span className="stats-number">245%</span>
                    <span className="stats-text">Growth Rate</span>
                  </div>
                </div>
              </div>
              <div className="decoration">
                <div className="circle-1" />
                <div className="circle-2" />
              </div>
            </div>
          </div>
        </section>
        {/* /Call To Action Section */}
        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="testimonials section light-background"
        >
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <div>
              <span>Check Our</span>{" "}
              <span className="description-title">Testimonials</span>
            </div>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="testimonials-slider swiper init-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Sed ut perspiciatis unde omnis</h2>
                        <p>
                          Proin iaculis purus consequat sem cure digni ssim
                          donec porttitora entum suscipit rhoncus. Accusantium
                          quam, ultricies eget id, aliquam eget nibh et. Maecen
                          aliquam, risus at semper.
                        </p>
                        <p>
                          Beatae magnam dolore quia ipsum. Voluptatem totam et
                          qui dolore dignissimos. Amet quia sapiente laudantium
                          nihil illo et assumenda sit cupiditate. Nam
                          perspiciatis perferendis minus consequatur. Enim ut
                          eos quo.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <img
                            src="/person-m-7.webp"
                            className="profile-img"
                            alt=""
                          />
                          <div className="profile-info">
                            <h3>Saul Goodman</h3>
                            <span>Client</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <img
                            src="/person-m-7.webp"
                            className="featured-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Nemo enim ipsam voluptatem</h2>
                        <p>
                          Export tempor illum tamen malis malis eram quae irure
                          esse labore quem cillum quid cillum eram malis quorum
                          velit fore eram velit sunt aliqua noster fugiat irure
                          amet legam anim culpa.
                        </p>
                        <p>
                          Dolorem excepturi esse qui amet maxime quibusdam aut
                          repellendus voluptatum. Corrupti enim a repellat
                          cumque est laborum fuga consequuntur. Dolorem nostrum
                          deleniti quas voluptatem iure dolorum rerum.
                          Repudiandae doloribus ut repellat harum vero aut. Modi
                          aut velit aperiam aspernatur odit ut vitae.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <img
                            src="/person-f-8.webp"
                            className="profile-img"
                            alt=""
                          />
                          <div className="profile-info">
                            <h3>Sara Wilsson</h3>
                            <span>Designer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <img
                            src="/person-f-8.webp"
                            className="featured-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Labore nostrum eos impedit</h2>
                        <p>
                          Fugiat enim eram quae cillum dolore dolor amet nulla
                          culpa multos export minim fugiat minim velit minim
                          dolor enim duis veniam ipsum anim magna sunt elit fore
                          quem dolore labore illum veniam.
                        </p>
                        <p>
                          Itaque ut explicabo vero occaecati est quam rerum sed.
                          Numquam tempora aut aut quaerat quia illum. Nobis quia
                          autem odit ipsam numquam. Doloribus sit sint corporis
                          eius totam fuga. Hic nostrum suscipit corrupti nam
                          expedita adipisci aut optio.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <img
                            src="/person-m-9.webp"
                            className="profile-img"
                            alt=""
                          />
                          <div className="profile-info">
                            <h3>Matt Brandon</h3>
                            <span>Freelancer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <img
                            src="/person-m-9.webp"
                            className="featured-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Impedit dolor facilis nulla</h2>
                        <p>
                          Enim nisi quem export duis labore cillum quae magna
                          enim sint quorum nulla quem veniam duis minim tempor
                          labore quem eram duis noster aute amet eram fore quis
                          sint minim.
                        </p>
                        <p>
                          Omnis aspernatur accusantium qui delectus praesentium
                          repellendus. Facilis sint odio aspernatur voluptas
                          commodi qui qui qui pariatur. Corrupti deleniti itaque
                          quaerat ipsum deleniti culpa tempora tempore. Et
                          consequatur exercitationem hic aspernatur nobis est
                          voluptatibus architecto laborum.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <img
                            src="/person-f-10.webp"
                            className="profile-img"
                            alt=""
                          />
                          <div className="profile-info">
                            <h3>Jena Karlis</h3>
                            <span>Store Owner</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <img
                            src="/person-f-10.webp"
                            className="featured-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
              </div>
              <div className="swiper-navigation w-100 d-flex align-items-center justify-content-center">
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
              </div>
            </div>
          </div>
        </section>
        {/* /Testimonials Section */}
        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <div>
              <span>Check Our</span>{" "}
              <span className="description-title">Portfolio</span>
            </div>
          </div>
          {/* End Section Title */}
          <div
            className="container-fluid"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <li data-filter="*" className="filter-active">
                  <i className="bi bi-grid-3x3" /> All Projects
                </li>
                <li data-filter=".filter-ui">
                  <i className="bi bi-phone" /> UI/UX
                </li>
                <li data-filter=".filter-development">
                  <i className="bi bi-code-slash" /> Development
                </li>
                <li data-filter=".filter-photography">
                  <i className="bi bi-camera" /> Photography
                </li>
                <li data-filter=".filter-marketing">
                  <i className="bi bi-graph-up" /> Marketing
                </li>
              </ul>
              <div
                className="row g-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <img
                        src="/portfolio-1.webp"
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">UI/UX Design</div>
                          <h3 className="entry-title">Mobile Banking App</h3>
                          <div className="entry-links">
                            <a
                              href="/portfolio-1.webp"
                              className="glightbox"
                              data-gallery="portfolio-gallery-ui"
                              data-glightbox="title: Mobile Banking App; description: Praesent commodo cursus magna, vel scelerisque nisl consectetur."
                            >
                              <i className="bi bi-arrows-angle-expand" />
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* End Portfolio Item */}
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-development">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <img
                        src="/portfolio-10.webp"
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">Development</div>
                          <h3 className="entry-title">E-Learning Platform</h3>
                          <div className="entry-links">
                            <a
                              href="/portfolio-10.webp"
                              className="glightbox"
                              data-gallery="portfolio-gallery-development"
                              data-glightbox="title: E-Learning Platform; description: Nulla vitae elit libero, a pharetra augue mollis interdum."
                            >
                              <i className="bi bi-arrows-angle-expand" />
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* End Portfolio Item */}
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-photography">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <img
                        src="/portfolio-7.webp"
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">Photography</div>
                          <h3 className="entry-title">Urban Architecture</h3>
                          <div className="entry-links">
                            <a
                              href="/portfolio-7.webp"
                              className="glightbox"
                              data-gallery="portfolio-gallery-photography"
                              data-glightbox="title: Urban Architecture; description: Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
                            >
                              <i className="bi bi-arrows-angle-expand" />
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* End Portfolio Item */}
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-marketing">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <img
                        src="/portfolio-4.webp"
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">Marketing</div>
                          <h3 className="entry-title">Social Media Campaign</h3>
                          <div className="entry-links">
                            <a
                              href="/portfolio-4.webp"
                              className="glightbox"
                              data-gallery="portfolio-gallery-marketing"
                              data-glightbox="title: Social Media Campaign; description: Quis autem vel eum iure reprehenderit qui in ea voluptate."
                            >
                              <i className="bi bi-arrows-angle-expand" />
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* End Portfolio Item */}
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <img
                        src="/portfolio-2.webp"
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">UI/UX Design</div>
                          <h3 className="entry-title">Smart Home Interface</h3>
                          <div className="entry-links">
                            <a
                              href="/portfolio-2.webp"
                              className="glightbox"
                              data-gallery="portfolio-gallery-ui"
                              data-glightbox="title: Smart Home Interface; description: At vero eos et accusamus et iusto odio dignissimos ducimus."
                            >
                              <i className="bi bi-arrows-angle-expand" />
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* End Portfolio Item */}
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-development">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <img
                        src="/portfolio-11.webp"
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">Development</div>
                          <h3 className="entry-title">
                            Cloud Management System
                          </h3>
                          <div className="entry-links">
                            <a
                              href="/portfolio-11.webp"
                              className="glightbox"
                              data-gallery="portfolio-gallery-development"
                              data-glightbox="title: Cloud Management System; description: Temporibus autem quibusdam et aut officiis debitis."
                            >
                              <i className="bi bi-arrows-angle-expand" />
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* End Portfolio Item */}
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-photography">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <img
                        src="/portfolio-8.webp"
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">Photography</div>
                          <h3 className="entry-title">Nature Collection</h3>
                          <div className="entry-links">
                            <a
                              href="/portfolio-8.webp"
                              className="glightbox"
                              data-gallery="portfolio-gallery-photography"
                              data-glightbox="title: Nature Collection; description: Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
                            >
                              <i className="bi bi-arrows-angle-expand" />
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* End Portfolio Item */}
                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-marketing">
                  <article className="portfolio-entry">
                    <figure className="entry-image">
                      <img
                        src="/portfolio-5.webp"
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div className="entry-overlay">
                        <div className="overlay-content">
                          <div className="entry-meta">Marketing</div>
                          <h3 className="entry-title">Brand Strategy</h3>
                          <div className="entry-links">
                            <a
                              href="/portfolio-5.webp"
                              className="glightbox"
                              data-gallery="portfolio-gallery-marketing"
                              data-glightbox="title: Brand Strategy; description: Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum."
                            >
                              <i className="bi bi-arrows-angle-expand" />
                            </a>
                            <a href="portfolio-details.html">
                              <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
                {/* End Portfolio Item */}
              </div>
              {/* End Portfolio Container */}
            </div>
          </div>
        </section>
        {/* /Portfolio Section */}
        {/* Team Section */}
        <section id="team" className="team section light-background">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
            <div>
              <span>Check Our</span>{" "}
              <span className="description-title">Team</span>
            </div>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="team-member d-flex">
                  <div className="member-img">
                    <img
                      src="/person-m-7.webp"
                      className="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <p>
                      Aliquam iure quaerat voluptatem praesentium possimus unde
                      laudantium vel dolorum distinctio dire flow
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                      <a href="">
                        <i className="bi bi-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="team-member d-flex">
                  <div className="member-img">
                    <img
                      src="/person-f-8.webp"
                      className="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <p>
                      Labore ipsam sit consequatur exercitationem rerum
                      laboriosam laudantium aut quod dolores exercitationem ut
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                      <a href="">
                        <i className="bi bi-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="team-member d-flex">
                  <div className="member-img">
                    <img
                      src="/person-m-6.webp"
                      className="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <p>
                      Illum minima ea autem doloremque ipsum quidem quas
                      aspernatur modi ut praesentium vel tque sed facilis at qui
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                      <a href="">
                        <i className="bi bi-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="team-member d-flex">
                  <div className="member-img">
                    <img
                      src="/person-f-4.webp"
                      className="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <p>
                      Magni voluptatem accusamus assumenda cum nisi aut qui
                      dolorem voluptate sed et veniam quasi quam consectetur
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                      <a href="">
                        <i className="bi bi-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
                <div className="team-member d-flex">
                  <div className="member-img">
                    <img
                      src="/person-m-12.webp"
                      className="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Brian Doe</h4>
                    <span>Marketing</span>
                    <p>
                      Qui consequuntur quos accusamus magnam quo est molestiae
                      eius laboriosam sunt doloribus quia impedit laborum velit
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                      <a href="">
                        <i className="bi bi-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={600}>
                <div className="team-member d-flex">
                  <div className="member-img">
                    <img
                      src="/person-f-9.webp"
                      className="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Josepha Palas</h4>
                    <span>Operation</span>
                    <p>
                      Sint sint eveniet explicabo amet consequatur nesciunt
                      error enim rerum earum et omnis fugit eligendi cupiditate
                      vel
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                      <a href="">
                        <i className="bi bi-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
            </div>
          </div>
        </section>
        {/* /Team Section */}
        {/* Pricing Section */}
        <section id="pricing" className="pricing section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Pricing</h2>
            <div>
              <span>Check Our</span>{" "}
              <span className="description-title">Pricing</span>
            </div>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              {/* Basic Plan */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="pricing-card">
                  <div className="plan-header">
                    <div className="plan-icon">
                      <i className="bi bi-box" />
                    </div>
                    <h3>Starter</h3>
                    <p>For individuals just getting started</p>
                  </div>
                  <div className="plan-pricing">
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">12</span>
                      <span className="period">/month</span>
                    </div>
                  </div>
                  <div className="plan-features">
                    <ul>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Nullam
                        accumsan lorem
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Vestibulum
                        auctor dapibus
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Nulla
                        consequat massa
                      </li>
                      <li className="disabled">
                        <i className="bi bi-x-circle-fill" /> In enim justo
                        rhoncus ut
                      </li>
                      <li className="disabled">
                        <i className="bi bi-x-circle-fill" /> Curabitur
                        ullamcorper ultricies
                      </li>
                    </ul>
                  </div>
                  <div className="plan-cta">
                    <a href="#" className="btn-plan">
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>
              {/* End Basic Plan */}
              {/* Professional Plan */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <div className="pricing-card popular">
                  <div className="popular-tag">Most Popular</div>
                  <div className="plan-header">
                    <div className="plan-icon">
                      <i className="bi bi-briefcase" />
                    </div>
                    <h3>Professional</h3>
                    <p>For small teams and growing businesses</p>
                  </div>
                  <div className="plan-pricing">
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">39</span>
                      <span className="period">/month</span>
                    </div>
                  </div>
                  <div className="plan-features">
                    <ul>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Donec quam
                        felis ultricies
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Nam eget dui
                        etiam rhoncus
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Maecenas
                        tempus tellus
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Donec pede
                        justo fringilla
                      </li>
                      <li className="disabled">
                        <i className="bi bi-x-circle-fill" /> Cras dapibus
                        vivamus
                      </li>
                    </ul>
                  </div>
                  <div className="plan-cta">
                    <a href="#" className="btn-plan">
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>
              {/* End Professional Plan */}
              {/* Enterprise Plan */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={400}
              >
                <div className="pricing-card">
                  <div className="plan-header">
                    <div className="plan-icon">
                      <i className="bi bi-building" />
                    </div>
                    <h3>Enterprise</h3>
                    <p>For large organizations and corporations</p>
                  </div>
                  <div className="plan-pricing">
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">79</span>
                      <span className="period">/month</span>
                    </div>
                  </div>
                  <div className="plan-features">
                    <ul>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Etiam sit amet
                        orci eget
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Pellentesque
                        posuere vulputate
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Quisque rutrum
                        aenean
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Fusce
                        vulputate eleifend
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Phasellus
                        viverra nulla
                      </li>
                    </ul>
                  </div>
                  <div className="plan-cta">
                    <a href="#" className="btn-plan">
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>
              {/* End Enterprise Plan */}
            </div>
          </div>
        </section>
        {/* /Pricing Section */}
        {/* Faq Section */}
        <section className="faq-9 faq section" id="faq">
          <div className="container">
            <div className="row">
              <div className="col-lg-5" data-aos="fade-up">
                <h2 className="faq-title">
                  Have a question? Check out the FAQ
                </h2>
                <p className="faq-description">
                  Maecenas tempus tellus eget condimentum rhoncus sem quam
                  semper libero sit amet adipiscing sem neque sed ipsum.
                </p>
                <div
                  className="faq-arrow d-none d-lg-block"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <svg
                    className="faq-arrow"
                    width={200}
                    height={211}
                    viewBox="0 0 200 211"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-lg-7" data-aos="fade-up" data-aos-delay={300}>
                <div className="faq-container">
                  <div className="faq-item faq-active">
                    <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                    <div className="faq-content">
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>
                      Feugiat scelerisque varius morbi enim nunc faucibus?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>
                      Dolor sit amet consectetur adipiscing elit pellentesque?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>
                      Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>
                      Tempus quam pellentesque nec nam aliquam sem et tortor?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Molestie a iaculis at erat pellentesque adipiscing
                        commodo. Dignissim suspendisse in est ante in. Nunc vel
                        risus commodo viverra maecenas accumsan. Sit amet nisl
                        suscipit adipiscing bibendum est. Purus gravida quis
                        blandit turpis cursus in
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>Perspiciatis quod quo quos nulla quo illum ullam?</h3>
                    <div className="faq-content">
                      <p>
                        Enim ea facilis quaerat voluptas quidem et dolorem. Quis
                        et consequatur non sed in suscipit sequi. Distinctio
                        ipsam dolore et.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Faq Section */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <div>
              <span>Let's</span>{" "}
              <span className="description-title">Connect</span>
            </div>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            {/* Contact Info Boxes */}
            <div className="row gy-4 mb-5">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-geo-alt" />
                  </div>
                  <div className="info-content">
                    <h4>Our Address</h4>
                    <p>1842 Maple Avenue, Portland, Oregon 97204</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-envelope" />
                  </div>
                  <div className="info-content">
                    <h4>Email Address</h4>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-headset" />
                  </div>
                  <div className="info-content">
                    <h4>Hours of Operation</h4>
                    <p>Sunday-Fri: 9 AM - 6 PM</p>
                    <p>Saturday: 9 AM - 4 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Google Maps (Full Width) */}
          <div className="map-section" data-aos="fade-up" data-aos-delay={200}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              width="100%"
              height={500}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* Contact Form Section (Overlapping) */}
          <div className="container form-container-overlap">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="col-lg-10">
                <div className="contact-form-wrapper">
                  <h2 className="text-center mb-4">Get in Touch</h2>
                  <form
                    action="forms/contact.php"
                    method="post"
                    className="php-email-form"
                  >
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-person" />
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="First Name"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-envelope" />
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email Address"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-text-left" />
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-chat-dots message-icon" />
                            <textarea
                              className="form-control"
                              name="message"
                              placeholder="Write Message..."
                              style={{ height: 180 }}
                              required=""
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-submit"
                        >
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </main>
    </>
  );
}

export default App;
