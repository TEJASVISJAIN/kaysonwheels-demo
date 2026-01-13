import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Premium Page Header */}
      <section className="premium-page-header">
        <div className="container">
          <h1>About Kayson Wheels</h1>
          <p>Manufacturing Excellence Since 1988</p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="premium-section">
        <div className="container">
          <div className="row" style={{ alignItems: 'center', marginBottom: '40px' }}>
            <div className="col-md-7" style={{ paddingRight: '30px' }}>
              <div className="premium-section-label">OUR STORY</div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '30px', lineHeight: '1.2' }}>
                Leading Manufacturer of Motorcycle Components
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--slate-light)', marginBottom: '25px' }}>
                Kayson Wheels was established in 1988 as a bicycle component manufacturing company, 
                producing bicycle freewheels. In coming years, the company diversified into multi-speed 
                freewheels and subsequently bicycle chains.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--slate-light)', marginBottom: '25px' }}>
                Since the company's inception, its constant focus on quality has helped it develop into 
                one of the leading manufacturers of bicycle parts in India. Along with this, the company 
                also produces freewheels and chains in its own brand by the name of 'KAYCEE' and 'DOLPHIN'. 
                These brands have widespread popularity in the repair and replacement market of many states 
                in India.
              </p>
            </div>
            <div className="col-md-5">
              <div className="premium-card" style={{ padding: '40px 30px', background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))', color: 'white' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <div style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--accent-gold)', marginBottom: '10px' }}>38+</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '600', letterSpacing: '1px' }}>Years of Excellence</div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '30px' }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '20px', color: 'white' }}>Established 1988</h4>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>
                    Based in Ludhiana, Punjab, we are one of the leading suppliers of bicycle and motorcycle 
                    components in India, serving customers nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure Section */}
          <div style={{ background: 'var(--off-white)', padding: '40px 30px', borderRadius: 'var(--radius-xl)', marginTop: '40px' }}>
            <div className="row">
              <div className="col-md-12">
                <div className="premium-section-label">INFRASTRUCTURE</div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '30px' }}>
                  State-of-the-Art Manufacturing
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: 'var(--slate-light)', marginBottom: '50px', maxWidth: '900px' }}>
                  The plant is equipped with all modern machines and latest facilities to support our 
                  manufacturing line. The plant is also having all testing and inspection facilities to 
                  produce products as per National and International Standards.
                </p>

                <div className="row">
                  <div className="col-md-3">
                    <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                      <div style={{ 
                        width: '80px', 
                        height: '80px', 
                        background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        boxShadow: 'var(--shadow-medium)'
                      }}>
                        <i className="fa-solid fa-industry" style={{ fontSize: '2rem', color: 'white' }}></i>
                      </div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>Modern Equipment</h4>
                      <p style={{ color: 'var(--slate-light)', fontSize: '0.95rem' }}>Latest CNC machinery and automation</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                      <div style={{ 
                        width: '80px', 
                        height: '80px', 
                        background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        boxShadow: 'var(--shadow-medium)'
                      }}>
                        <i className="fa-solid fa-microscope" style={{ fontSize: '2rem', color: 'white' }}></i>
                      </div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>Quality Testing</h4>
                      <p style={{ color: 'var(--slate-light)', fontSize: '0.95rem' }}>Advanced inspection facilities</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                      <div style={{ 
                        width: '80px', 
                        height: '80px', 
                        background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        boxShadow: 'var(--shadow-medium)'
                      }}>
                        <i className="fa-solid fa-certificate" style={{ fontSize: '2rem', color: 'white' }}></i>
                      </div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>ISO Standards</h4>
                      <p style={{ color: 'var(--slate-light)', fontSize: '0.95rem' }}>International quality compliance</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                      <div style={{ 
                        width: '80px', 
                        height: '80px', 
                        background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        boxShadow: 'var(--shadow-medium)'
                      }}>
                        <i className="fa-solid fa-users-gear" style={{ fontSize: '2rem', color: 'white' }}></i>
                      </div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>Skilled Team</h4>
                      <p style={{ color: 'var(--slate-light)', fontSize: '0.95rem' }}>Expert workforce and engineers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section style={{ background: 'var(--charcoal)', padding: '50px 0', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div className="premium-section-label" style={{ color: 'var(--accent-gold)', justifyContent: 'center' }}>
              <span>OUR BRANDS</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px', color: 'white' }}>
              Trusted Brand Names
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', maxWidth: '700px', margin: '0 auto' }}>
              Our brands KAYCEE and DOLPHIN enjoy widespread popularity in the repair and replacement market across India
            </p>
          </div>

          <div className="row">
            <div className="col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.05)', 
                padding: '40px 30px', 
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-gold)', marginBottom: '20px' }}>KAYCEE</h3>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8' }}>
                  Premium quality bicycle and motorcycle components trusted by mechanics and riders nationwide
                </p>
              </div>
            </div>
            <div className="col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.05)', 
                padding: '40px 30px', 
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-gold)', marginBottom: '20px' }}>DOLPHIN</h3>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8' }}>
                  Reliable performance parts delivering exceptional value in the replacement market
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="premium-section">
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
            padding: '40px 30px',
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px', color: 'white' }}>
              Ready to Partner with Us?
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'rgba(255, 255, 255, 0.95)' }}>
              Contact our team to discuss your requirements and discover how we can serve you
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-gold-accent">
                <i className="fa-solid fa-phone"></i> Contact Us
              </Link>
              <Link to="/enquiry" className="btn-premium-outline" style={{ borderColor: 'white', color: 'white' }}>
                <i className="fa-solid fa-envelope"></i> Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
