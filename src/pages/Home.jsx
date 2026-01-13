import { Link } from 'react-router-dom';
import { products } from '../data/products';
import heroImage from '../assets/images/slides/kayson-wheel1.jpg';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Premium Hero Section with K-TECH Branding */}
      <section style={{
        position: 'relative',
        minHeight: '400px',
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
              <h1 className="hero-title">
                K-TECH Motor Cycle Chain Kit
              </h1>
              <p className="hero-subtitle">
                Breaking Load 2200 KGS - Premium Quality Auto Chains & Motorcycle Sprockets
              </p>
              <div className="premium-hero-buttons">
                <Link to="/auto-chains" className="btn-premium-primary">
                  <i className="fa-solid fa-box-open"></i> View Products
                </Link>
                <Link to="/contact" className="btn-gold-accent">
                  <i className="fa-solid fa-paper-plane"></i> Get In Touch
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="col-md-6" style={{ position: 'relative', textAlign: 'center' }}>
              <img 
                src={heroImage}
                alt="K-TECH Motor Cycle Chain Kit"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="premium-stats-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="premium-stat-box">
                <div className="premium-stat-number">38+</div>
                <div className="premium-stat-label">Years of Excellence</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="premium-stat-box">
                <div className="premium-stat-number">100%</div>
                <div className="premium-stat-label">Quality Assured</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="premium-stat-box">
                <div className="premium-stat-number">1000+</div>
                <div className="premium-stat-label">Happy Clients</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="premium-stat-box">
                <div className="premium-stat-number">ISO</div>
                <div className="premium-stat-label">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="premium-section">
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-md-6" style={{ paddingRight: '30px' }}>
              <div className="premium-section-label">ABOUT KAYSON WHEELS</div>
              <h2 style={{ fontSize: '2.75rem', fontWeight: '700', marginBottom: '30px', lineHeight: '1.2' }}>
                Leading Manufacturer Since 1988
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--slate-light)', marginBottom: '25px' }}>
                Kayson Wheels was established in 1988 as a bicycle component manufacturing company, 
                producing bicycle freewheels. Over the years, we have diversified into multi-speed 
                freewheels and subsequently bicycle chains.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--slate-light)', marginBottom: '35px' }}>
                Our constant focus on quality has helped us develop into one of the leading manufacturers 
                of bicycle parts in India. We produce under our own brands 'KAYCEE' and 'DOLPHIN', which 
                enjoy widespread popularity in the repair and replacement market.
              </p>
              <Link to="/about" className="btn-premium-primary">
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="col-md-6">
              <div className="premium-about-features">
                <div className="premium-about-feature-item">
                  <div className="premium-about-feature-icon">
                    <i className="fa-solid fa-industry"></i>
                  </div>
                  <div className="premium-about-feature-content">
                    <h4>Advanced Manufacturing</h4>
                    <p>State-of-the-art facilities with modern CNC machinery and quality control systems.</p>
                  </div>
                </div>
                <div className="premium-about-feature-item">
                  <div className="premium-about-feature-icon">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <div className="premium-about-feature-content">
                    <h4>Quality Standards</h4>
                    <p>ISO certified processes ensuring every product meets international quality benchmarks.</p>
                  </div>
                </div>
                <div className="premium-about-feature-item">
                  <div className="premium-about-feature-icon">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <div className="premium-about-feature-content">
                    <h4>Trusted Partner</h4>
                    <p>Serving customers across India with reliable, high-performance components.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ background: 'var(--off-white)', padding: '50px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <div className="premium-section-label" style={{ justifyContent: 'center' }}>OUR PRODUCTS</div>
            <h2 className="premium-section-title">Featured Products</h2>
            <p className="premium-section-subtitle">
              Precision-engineered components designed for durability and performance
            </p>
          </div>

          <div className="row">
            {featuredProducts.map((product) => (
              <div key={product.id} className="col-md-4" style={{ marginBottom: '40px' }}>
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
                      <Link to={`/product/${product.id}`} className="btn-premium-primary">
                        View Details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/auto-chains" className="btn-premium-outline" style={{ marginRight: '15px' }}>
              View Auto Chains <i className="fa-solid fa-link"></i>
            </Link>
            <Link to="/motorcycle-sprockets" className="btn-premium-outline">
              View Sprockets <i className="fa-solid fa-gear"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="premium-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <div className="premium-section-label" style={{ justifyContent: 'center' }}>WHY CHOOSE US</div>
            <h2 className="premium-section-title">Manufacturing Excellence</h2>
            <p className="premium-section-subtitle">
              Commitment to quality, precision, and customer satisfaction
            </p>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="premium-feature-box">
                <div className="premium-feature-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h3 className="premium-feature-title">Superior Quality</h3>
                <p className="premium-feature-description">
                  Premium materials and rigorous testing ensure exceptional durability and performance.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="premium-feature-box">
                <div className="premium-feature-icon">
                  <i className="fa-solid fa-gears"></i>
                </div>
                <h3 className="premium-feature-title">Precision Engineering</h3>
                <p className="premium-feature-description">
                  Advanced CNC machining and quality control for perfect specifications every time.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="premium-feature-box">
                <div className="premium-feature-icon">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <h3 className="premium-feature-title">ISO Certified</h3>
                <p className="premium-feature-description">
                  Internationally recognized quality standards and compliance in all our processes.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="premium-feature-box">
                <div className="premium-feature-icon">
                  <i className="fa-solid fa-headset"></i>
                </div>
                <h3 className="premium-feature-title">Expert Support</h3>
                <p className="premium-feature-description">
                  Dedicated team ready to assist with technical specifications and custom requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="premium-cta-section">
        <div className="container">
          <div className="premium-cta-content">
            <h2 className="premium-cta-title">Ready to Experience Premium Quality?</h2>
            <p className="premium-cta-subtitle">
              Get in touch with our team to discuss your requirements
            </p>
            <div className="premium-cta-buttons">
              <Link to="/enquiry" className="btn-gold-accent">
                <i className="fa-solid fa-envelope"></i> Request a Quote
              </Link>
              <Link to="/contact" className="btn-premium-outline" style={{ borderColor: 'white', color: 'white' }}>
                <i className="fa-solid fa-phone"></i> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
