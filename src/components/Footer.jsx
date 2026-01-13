import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#1a1a1a', color: '#fff', marginTop: '4rem' }}>
      {/* Main Footer */}
      <div style={{ padding: '60px 0 30px' }}>
        <div className="container">
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {/* Contact Information */}
            <div className="col-md-4" style={{ flex: '1', minWidth: '280px' }}>
              <h4 style={{ 
                color: '#fff', 
                fontSize: '1.35rem', 
                fontWeight: '600', 
                marginBottom: '1.5rem',
                borderBottom: '2px solid #d32f2f',
                paddingBottom: '0.75rem',
                display: 'inline-block'
              }}>
                Contact Us
              </h4>
              <div style={{ marginTop: '1.5rem' }}>
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  marginBottom: '1.25rem',
                  alignItems: 'flex-start'
                }}>
                  <i className="fa-solid fa-map-marker-alt" style={{ 
                    color: '#d32f2f', 
                    fontSize: '1.2rem',
                    marginTop: '0.2rem'
                  }}></i>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Address</strong>
                    <span style={{ color: '#b0b0b0', lineHeight: '1.6' }}>
                      E-310 Phase IV-A, Focal Point,<br />
                      Ludhiana, Punjab – 141010, INDIA
                    </span>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  marginBottom: '1.25rem',
                  alignItems: 'flex-start'
                }}>
                  <i className="fa-solid fa-phone" style={{ 
                    color: '#d32f2f', 
                    fontSize: '1.2rem',
                    marginTop: '0.2rem'
                  }}></i>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Phone</strong>
                    <a href="tel:+919915000549" style={{ 
                      color: '#b0b0b0', 
                      textDecoration: 'none',
                      display: 'block'
                    }}>
                      +91 99150 00549
                    </a>
                    <a href="tel:+918968095777" style={{ 
                      color: '#b0b0b0', 
                      textDecoration: 'none',
                      display: 'block'
                    }}>
                      +91 89680 95777
                    </a>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  marginBottom: '1.25rem',
                  alignItems: 'flex-start'
                }}>
                  <i className="fa-solid fa-envelope" style={{ 
                    color: '#d32f2f', 
                    fontSize: '1.2rem',
                    marginTop: '0.2rem'
                  }}></i>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Email</strong>
                    <a href="mailto:kaysoncycles@gmail.com" style={{ 
                      color: '#b0b0b0', 
                      textDecoration: 'none' 
                    }}>
                      kaysoncycles@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '1rem' }}>Follow Us</strong>
                  <a 
                    href="https://www.facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      background: '#d32f2f',
                      borderRadius: '50%',
                      color: 'white',
                      fontSize: '1.2rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#b71c1c';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#d32f2f';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-3" style={{ flex: '1', minWidth: '200px' }}>
              <h4 style={{ 
                color: '#fff', 
                fontSize: '1.35rem', 
                fontWeight: '600', 
                marginBottom: '1.5rem',
                borderBottom: '2px solid #d32f2f',
                paddingBottom: '0.75rem',
                display: 'inline-block'
              }}>
                Quick Links
              </h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: '1.5rem 0 0 0' 
              }}>
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About Us' },
                  { to: '/auto-chains', label: 'Auto Chains' },
                  { to: '/motorcycle-sprockets', label: 'Motorcycle Sprockets' },
                  { to: '/quality-policy', label: 'Quality Policy' },
                  { to: '/contact', label: 'Contact Us' },
                  { to: '/enquiry', label: 'Enquiry' }
                ].map((link, index) => (
                  <li key={index} style={{ marginBottom: '0.75rem' }}>
                    <Link 
                      to={link.to} 
                      style={{ 
                        color: '#b0b0b0',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#d32f2f';
                        e.currentTarget.style.paddingLeft = '0.5rem';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#b0b0b0';
                        e.currentTarget.style.paddingLeft = '0';
                      }}
                    >
                      <i className="fa-solid fa-angle-right" style={{ color: '#d32f2f' }}></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Map */}
            <div className="col-md-5" style={{ flex: '1', minWidth: '300px' }}>
              <h4 style={{ 
                color: '#fff', 
                fontSize: '1.35rem', 
                fontWeight: '600', 
                marginBottom: '1.5rem',
                borderBottom: '2px solid #d32f2f',
                paddingBottom: '0.75rem',
                display: 'inline-block'
              }}>
                Find Us
              </h4>
              <div style={{ marginTop: '1.5rem' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13696.796730340842!2d75.9230304!3d30.8810885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd52e850931d418bc!2sKayson%20Wheels%20India!5e0!3m2!1sen!2sin!4v1627975111618!5m2!1sen!2sin" 
                  width="100%" 
                  height="250" 
                  style={{ 
                    border: 0,
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                  }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Kayson Wheels Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{ 
        background: '#0d0d0d', 
        padding: '1.5rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ textAlign: 'center' }}>
              <p style={{ 
                margin: 0, 
                color: '#888',
                fontSize: '0.95rem'
              }}>
                <Link to="/" style={{ 
                  color: '#d32f2f', 
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Kayson Wheels
                </Link>
                {' '} © Copyright 2021-{new Date().getFullYear()}. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
