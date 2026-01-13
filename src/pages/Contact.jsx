import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      {/* Premium Page Header */}
      <section className="premium-page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're Here to Help and Answer Your Questions</p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="premium-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3" style={{ marginBottom: '30px' }}>
              <div className="premium-card" style={{ padding: '40px 30px', textAlign: 'center', height: '100%' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  boxShadow: 'var(--shadow-medium)'
                }}>
                  <i className="fa-solid fa-location-dot" style={{ fontSize: '2rem', color: 'white' }}></i>
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>Office Address</h4>
                <p style={{ color: 'var(--slate-light)', lineHeight: '1.8', fontSize: '1rem' }}>
                  E-310 Phase IV-A, Focal Point,<br />
                  Ludhiana, Punjab – 141010,<br />
                  INDIA
                </p>
              </div>
            </div>
            <div className="col-md-3" style={{ marginBottom: '30px' }}>
              <div className="premium-card" style={{ padding: '40px 30px', textAlign: 'center', height: '100%' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  boxShadow: 'var(--shadow-medium)'
                }}>
                  <i className="fa-solid fa-phone" style={{ fontSize: '2rem', color: 'white' }}></i>
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>Phone/Mobile</h4>
                <p style={{ color: 'var(--slate-light)', lineHeight: '1.8', fontSize: '1rem' }}>
                  <a href="tel:+919915000549" style={{ color: 'var(--primary-red)', textDecoration: 'none', fontWeight: '600', display: 'block', marginBottom: '10px' }}>
                    +91 99150 00549
                  </a>
                  <a href="tel:+918968095777" style={{ color: 'var(--primary-red)', textDecoration: 'none', fontWeight: '600', display: 'block' }}>
                    +91 89680 95777
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3" style={{ marginBottom: '30px' }}>
              <div className="premium-card" style={{ padding: '40px 30px', textAlign: 'center', height: '100%' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  boxShadow: 'var(--shadow-medium)'
                }}>
                  <i className="fa-solid fa-envelope" style={{ fontSize: '2rem', color: 'white' }}></i>
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>Email</h4>
                <p style={{ color: 'var(--slate-light)', lineHeight: '1.8', fontSize: '1rem' }}>
                  <a href="mailto:kaysoncycles@gmail.com" style={{ color: 'var(--primary-red)', textDecoration: 'none', fontWeight: '600', wordBreak: 'break-word' }}>
                    kaysoncycles@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3" style={{ marginBottom: '30px' }}>
              <div className="premium-card" style={{ padding: '40px 30px', textAlign: 'center', height: '100%' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'linear-gradient(135deg, var(--primary-red), var(--primary-red-dark))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  boxShadow: 'var(--shadow-medium)'
                }}>
                  <i className="fa-solid fa-globe" style={{ fontSize: '2rem', color: 'white' }}></i>
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>Website</h4>
                <p style={{ color: 'var(--slate-light)', lineHeight: '1.8', fontSize: '1rem' }}>
                  <a href="http://www.kaysonwheels.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-red)', textDecoration: 'none', fontWeight: '600' }}>
                    www.kaysonwheels.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ background: 'var(--off-white)', padding: '50px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div className="premium-section-label" style={{ justifyContent: 'center' }}>
              <span>LOCATION</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px' }}>
              Find Us on Map
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--slate-light)' }}>
              Visit our manufacturing facility in Ludhiana, Punjab
            </p>
          </div>

          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-strong)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13696.796730340842!2d75.9230304!3d30.8810885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd52e850931d418bc!2sKayson%20Wheels%20India!5e0!3m2!1sen!2sin!4v1627975111618!5m2!1sen!2sin" 
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Kayson Wheels Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="premium-section">
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, var(--charcoal), var(--slate-dark))',
            padding: '40px 30px',
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px', color: 'white' }}>
                Have Questions? Get in Touch!
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'rgba(255, 255, 255, 0.9)' }}>
                Our team is ready to assist you with product information and inquiries
              </p>
              <Link to="/enquiry" className="btn-gold-accent">
                <i className="fa-solid fa-paper-plane"></i> Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
