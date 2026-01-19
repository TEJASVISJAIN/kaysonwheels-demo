import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Reveal, StaggerText, CardHover, ButtonPress } from '../components/MotionWrappers';
import heroImage from '../assets/images/slides/kayson-wheel1.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Premium Hero Section with K-TECH Branding */}
      <section style={{
        position: 'relative',
        minHeight: '85vh', // Increased height for better impact
        background: 'linear-gradient(135deg, #0c4a6e 0%, #1e3a5f 50%, #2d5a7b 100%)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row" style={{ alignItems: 'center' }}>
            {/* Left Content */}
            <div className="col-md-6" style={{ color: 'white', paddingRight: '40px', marginBottom: '30px' }}>
              <Reveal delay={0.2}>
                <div style={{
                  display: 'inline-block',
                  padding: '6px 20px',
                  background: 'rgba(212, 175, 55, 0.2)',
                  border: '2px solid #D4AF37',
                  borderRadius: '50px',
                  color: '#D4AF37',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  fontSize: '0.75rem',
                  marginBottom: '20px',
                  marginTop: "10px"
                }}>
                  SINCE 1988
                </div>
              </Reveal>

              <h1 className="hero-title" style={{ overflow: 'hidden' }}>
                <StaggerText text="K-TECH Motor Cycle Chain Kit" />
              </h1>

              <Reveal delay={0.4}>
                <p className="hero-subtitle">
                  Breaking Load 2200 KGS - Premium Quality Auto Chains & Motorcycle Sprockets
                </p>
              </Reveal>

              <div className="premium-hero-buttons">
                <Reveal delay={0.6} direction="right" width="fit-content">
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <ButtonPress className="btn-premium-primary" onClick={() => { }}>
                      <Link to="/auto-chains" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <i className="fa-solid fa-box-open"></i> View Products
                      </Link>
                    </ButtonPress>
                    <ButtonPress className="btn-gold-accent" onClick={() => { }}>
                      <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <i className="fa-solid fa-paper-plane"></i> Get In Touch
                      </Link>
                    </ButtonPress>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-md-6" style={{ position: 'relative', textAlign: 'center' }}>
              <Reveal direction="left" delay={0.5}>
                <motion.img
                  src={heroImage}
                  alt="K-TECH Motor Cycle Chain Kit"
                  className="hero-image"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.4))"
                  }}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="premium-stats-section">
        <div className="container">
          <div className="row">
            {[
              { num: '38+', label: 'Years of Excellence' },
              { num: '100%', label: 'Quality Assured' },
              { num: '1000+', label: 'Happy Clients' },
              { num: 'ISO', label: 'Certified Quality' }
            ].map((stat, index) => (
              <div className="col-md-3" key={index}>
                <Reveal delay={index * 0.1} direction="up">
                  <div className="premium-stat-box">
                    <div className="premium-stat-number">{stat.num}</div>
                    <div className="premium-stat-label">{stat.label}</div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="premium-section">
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-md-6" style={{ paddingRight: '30px' }}>
              <Reveal direction="right">
                <div className="premium-section-label">ABOUT KAYSON WHEELS</div>
                <h2 style={{ fontSize: '2.75rem', fontWeight: '700', marginBottom: '30px', lineHeight: '1.2' }}>
                  <StaggerText text="Leading Manufacturer Since 1988" />
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#333', marginBottom: '25px' }}>
                  Kayson Wheels was established in 1988 as a bicycle component manufacturing company,
                  producing bicycle freewheels. Over the years, we have diversified into multi-speed
                  freewheels and subsequently bicycle chains.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#333', marginBottom: '35px' }}>
                  Our constant focus on quality has helped us develop into one of the leading manufacturers
                  of bicycle parts in India. We produce under our own brands 'KAYCEE' and 'DOLPHIN', which
                  enjoy widespread popularity in the repair and replacement market.
                </p>
                <ButtonPress className="btn-premium-primary">
                  <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </ButtonPress>
              </Reveal>
            </div>
            <div className="col-md-6">
              <div className="premium-about-features">
                {[
                  { icon: 'fa-industry', title: 'Advanced Manufacturing', desc: 'State-of-the-art facilities with modern CNC machinery and quality control systems.' },
                  { icon: 'fa-award', title: 'Quality Standards', desc: 'ISO certified processes ensuring every product meets international quality benchmarks.' },
                  { icon: 'fa-handshake', title: 'Trusted Partner', desc: 'Serving customers across India with reliable, high-performance components.' }
                ].map((feature, i) => (
                  <Reveal key={i} delay={i * 0.15} direction="left">
                    <div className="premium-about-feature-item">
                      <div className="premium-about-feature-icon">
                        <i className={`fa-solid ${feature.icon}`}></i>
                      </div>
                      <div className="premium-about-feature-content">
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ background: 'var(--off-white)', padding: '50px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <Reveal direction="down">
              <div className="premium-section-label" style={{ justifyContent: 'center' }}>OUR PRODUCTS</div>
              <h2 className="premium-section-title">Featured Products</h2>
              <p className="premium-section-subtitle">
                Precision-engineered components designed for durability and performance
              </p>
            </Reveal>
          </div>

          <div className="row">
            {featuredProducts.map((product, i) => (
              <div key={product.id} className="col-md-4" style={{ marginBottom: '40px' }}>
                <Reveal delay={i * 0.1}>
                  <CardHover>
                    <div className="product-card-premium">
                      <div className="product-card-premium-image-container">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="product-card-premium-image"
                        />
                      </div>
                      <div className="product-card-premium-body">
                        <span className="product-card-premium-category">{product.category}</span>
                        <h3 className="product-card-premium-title">{product.name}</h3>
                        <p className="product-card-premium-description">{product.description}</p>
                        <div className="product-card-premium-footer">
                          <ButtonPress className="btn-premium-primary">
                            <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                              View Details <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                          </ButtonPress>
                        </div>
                      </div>
                    </div>
                  </CardHover>
                </Reveal>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Reveal direction="up">
              <ButtonPress className="btn-premium-outline" style={{ marginRight: '15px' }}>
                <Link to="/auto-chains" style={{ color: 'inherit', textDecoration: 'none' }}>
                  View Auto Chains <i className="fa-solid fa-link"></i>
                </Link>
              </ButtonPress>
              <ButtonPress className="btn-premium-outline">
                <Link to="/motorcycle-sprockets" style={{ color: 'inherit', textDecoration: 'none' }}>
                  View Sprockets <i className="fa-solid fa-gear"></i>
                </Link>
              </ButtonPress>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="premium-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <Reveal direction="down">
              <div className="premium-section-label" style={{ justifyContent: 'center' }}>WHY CHOOSE US</div>
              <h2 className="premium-section-title">Manufacturing Excellence</h2>
              <p className="premium-section-subtitle">
                Commitment to quality, precision, and customer satisfaction
              </p>
            </Reveal>
          </div>

          <div className="row">
            {[
              { icon: 'fa-shield-halved', title: 'Superior Quality', desc: 'Premium materials and rigorous testing ensure exceptional durability and performance.' },
              { icon: 'fa-gears', title: 'Precision Engineering', desc: 'Advanced CNC machining and quality control for perfect specifications every time.' },
              { icon: 'fa-certificate', title: 'ISO Certified', desc: 'Internationally recognized quality standards and compliance in all our processes.' },
              { icon: 'fa-headset', title: 'Expert Support', desc: 'Dedicated team ready to assist with technical specifications and custom requirements.' }
            ].map((feature, i) => (
              <div className="col-md-3" key={i}>
                <Reveal delay={i * 0.1}>
                  <div className="premium-feature-box">
                    <div className="premium-feature-icon">
                      <i className={`fa-solid ${feature.icon}`}></i>
                    </div>
                    <h3 className="premium-feature-title">{feature.title}</h3>
                    <p className="premium-feature-description">
                      {feature.desc}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="premium-cta-section">
        <div className="container">
          <div className="premium-cta-content">
            <Reveal scale={0.9}>
              <h2 className="premium-cta-title">Ready to Experience Premium Quality?</h2>
              <p className="premium-cta-subtitle">
                Get in touch with our team to discuss your requirements
              </p>
              <div className="premium-cta-buttons">
                <ButtonPress className="btn-gold-accent">
                  <Link to="/enquiry" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <i className="fa-solid fa-envelope"></i> Request a Quote
                  </Link>
                </ButtonPress>
                <ButtonPress className="btn-premium-outline" style={{ borderColor: 'white', color: 'white' }}>
                  <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <i className="fa-solid fa-phone"></i> Contact Us
                  </Link>
                </ButtonPress>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
